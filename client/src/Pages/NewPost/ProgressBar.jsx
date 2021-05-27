import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import useCreatePost from './hooks/useCreatePost';
import { Steps, Button, message } from 'antd';
import axios from 'axios';

import {
  addPostService,
  sendPaymentEmail,
} from '../../Services/properties.service';

import 'antd/dist/antd.css';
import './step.css';

const { Step } = Steps;

const ProgressBar = () => {
  const { postDetails, current, setCurrent, steps, infoPlan } = useCreatePost();
  const { user } = useAuth0();


  const prev = () => {
    setCurrent(current - 1);
  };
  const dateObj = new Date();
  postDetails.premium
    ? dateObj.setDate(dateObj.getDate() + 90)
    : dateObj.setDate(dateObj.getDate() + 30);
  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const expirationDate = day + '/' + month + '/' + year;
  const post = {
    name: user.name,
    email: user.email,
    title: postDetails.post_name,
    image: postDetails.images ? postDetails.images[0] : null,
    price: postDetails.price,
    plan: postDetails.premium ? 'Premium' : 'Basic',
    date: expirationDate,
  };
  //====================Mercadopago=======================================================
    const { REACT_APP_API_BASE_ENDPOINT } = process.env;
    function createCheckoutButton(preference) {
    const script = document.createElement("script");
    const attrDataPreference = document.createAttribute('data-preference-id')
    attrDataPreference.value = preference.id
    script.src = "https://www.mercadopago.com.co/integrations/v1/web-payment-checkout.js";
    script.setAttributeNode(attrDataPreference)
    document.getElementById('buttonId').innerHTML = "";
    document.getElementById('buttonId').appendChild(script);
    return () =>{
        document.getElementById('buttonId').removeChild(script);
      }
    };
    const handlerClick = async () => {
      const dataAxios = await axios.post(`${REACT_APP_API_BASE_ENDPOINT}/mercadopago`, infoPlan)
      if (document.getElementById('buttonId').innerHTML === 'Publicar'){
        document.getElementById('buttonId').style.width = '80%';
        createCheckoutButton(dataAxios.data);

      }else{
        createCheckoutButton(dataAxios.data)();
        document.getElementById('buttonId').style.width = '8em';
        document.getElementById('buttonId').innerHTML = 'Publicar';
      }
    };
    //====================Mercadopago=======================================================

  return (
    <div className='ctn'>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className='steps-content'>{steps[current].content}</div>
      <div className='steps-action'>
        {current === steps.length - 1 && (
          <Button
            type='primary'
            id='buttonId'
            onClick={handlerClick}
            /*onClick={() => {
              const resp = window.confirm(
                `¿Quieres crear la publicación ${postDetails.post_name}?`
              );
              if (resp) {
                addPostService(postDetails);
                message.success(
                  `Tu publicación '${postDetails.post_name}' creada correctamente `
                );
                sendPaymentEmail(post);
              }
            }}*/
          >
            Publicar
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Volver
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
