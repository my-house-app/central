import React from 'react';
import useCreatePost from '../hooks/useCreatePost';

const FirstStep = () => {
  const { setCurrentComponent, postDetails } = useCreatePost();

  return (
    <div>
      <h3>Tu pago se ha realizado correctamente</h3>
      <h3>{`Continúa los siguientes pasos para crear tu publicación con el plan ${postDetails.premium ? 'Premium' : 'Classic'}`}</h3>
      <div>
       {/*  <button
          onClick={() => {
            setCurrentComponent('SecondStep');
          }}
        >
          Siguiente...
        </button> */}
      </div>
    </div>
  );
};

export default FirstStep;
