import React from 'react';
import useCreatePost from '../hooks/useCreatePost';
import '../step.css';

const FirstStep = () => {
  const { setCurrentComponent, postDetails } = useCreatePost();

  return (
    <div className="ctn">
      <h3>Tu pago se ha realizado correctamente</h3>
      <h3>{`Continúa los siguientes pasos para crear tu publicación con el Plan ${postDetails.premium ? 'Premium' : 'Basic'}`}</h3>
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
