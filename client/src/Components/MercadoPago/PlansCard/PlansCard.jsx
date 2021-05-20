import React from 'react';
import axios from 'axios';
import style from './PlansCard.module.css';

function PlansCard({ plan, price, description, numberPhotos, data }) {

  function createCheckoutButton(preference) {
  const script = document.createElement("script");
  const attrDataPreference = document.createAttribute('data-preference-id')
  attrDataPreference.value = preference.id
  script.src = "https://www.mercadopago.com.co/integrations/v1/web-payment-checkout.js";
  script.setAttributeNode(attrDataPreference)
  document.getElementById(plan).innerHTML = "";
  document.getElementById(plan).appendChild(script);
  return () =>{
      document.getElementById(plan).removeChild(script);
    }
  };
  const handlerClick = async () => {
    let orderData = {
      quantity: 1,
      title:plan,
      unit_price: parseInt(price.replace('.', '')),
    };
    const dataAxios = await axios.post("http://localhost:3001/mercadopago", orderData)
    if (document.getElementById(plan).innerHTML === 'PUBLISH YOUR PROPERTY'){
      createCheckoutButton(dataAxios.data);
    }else{
      createCheckoutButton(dataAxios.data)();
      document.getElementById(plan).innerHTML = 'PUBLISH YOUR PROPERTY';
    }
  };


  return (
    <div className={style.ctn} id='form1'>
      <div>
        <h1>{plan}</h1>
        <h2>{`$ ${price}`}</h2>
      </div>
    <button onClick={handlerClick} className={style.button} id={plan}>PUBLISH YOUR PROPERTY</button>
    <div className={style.text}>
      <h4>{`${numberPhotos} photos`}</h4>
      <label>taken by you</label>
    </div>
    <div className={style.text}>
      <h4>{description}</h4>
    </div>
    </div>
  )
}

export default PlansCard;
