import React from 'react';
import { useSelector } from 'react-redux';
import useCreatePost from '../../../Pages/NewPost/hooks/useCreatePost';
import axios from 'axios';
import style from './PlansCard.module.css';

function PlansCard({ plan, price, description, numberPhotos, data, id }) {
  const { session } = useSelector((store) => store);
  const { current, setCurrent, setInfoPlan } = useCreatePost();
  const orderData = {
    quantity: 1,
    title:plan,
    unit_price: parseInt(price),
    description,
    category_id: id,
    userEmail: session.email,
    userName: session.name,
  };
//===============================================================================
  // const { REACT_APP_API_BASE_ENDPOINT } = process.env;
  // // const { session } = useSelector((store) => store);
  // function createCheckoutButton(preference) {
  // const script = document.createElement("script");
  // const attrDataPreference = document.createAttribute('data-preference-id')
  // attrDataPreference.value = preference.id
  // script.src = "https://www.mercadopago.com.co/integrations/v1/web-payment-checkout.js";
  // script.setAttributeNode(attrDataPreference)
  // document.getElementById(id).innerHTML = "";
  // document.getElementById(id).appendChild(script);
  // return () =>{
  //     document.getElementById(id).removeChild(script);
  //   }
  // };
  // const handlerClick = async () => {
  //   let orderData = {
  //     quantity: 1,
  //     title:plan,
  //     unit_price: parseInt(price),
  //     description,
  //     category_id: id,
  //     userEmail: session.email,
  //     userName: session.name,
  //   };
  //   const dataAxios = await axios.post(`${REACT_APP_API_BASE_ENDPOINT}/mercadopago`, orderData)
  //   if (document.getElementById(id).innerHTML === 'PUBLICA TU PROPIEDAD'){
  //     createCheckoutButton(dataAxios.data);
  //   }else{
  //     createCheckoutButton(dataAxios.data)();
  //     document.getElementById(id).innerHTML = 'PUBLICA TU PROPIEDAD';
  //   }
  // };
  //======================================================================================

  return (
    <div className={style.ctn} id='form1'>
      <div>
        <h1>{plan}</h1>
        <h2>{`$ ${price}`}</h2>
      </div>
      <button onClick={() => {setCurrent(current + 1); setInfoPlan(orderData)}} className={style.button} id={id}>PUBLICA TU PROPIEDAD</button>
      <div className={style.text}>
        <h4>{`${numberPhotos} fotos`}</h4>
        <label>Tomadas por ti</label>
      </div>
      <div className={style.text}>
      <h4>{description}</h4>
      </div>
    </div>
  )
}

export default PlansCard;
