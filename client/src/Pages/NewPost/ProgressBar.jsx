import React, { useState } from 'react';
import { connect } from 'react-redux';
import useCreatePost from './hooks/useCreatePost';
import { Steps, Button, message } from 'antd';
import FirstStep from './FirstStep/FirstStep';
import SecondStep from './SecondStep/SecondStep';
import ThirdStep from './ThirdStep/ThirdStep';
import FourthStep from './FourthStep/FourthStep';
import FifthStep from './FifthStep/FifthStep';
import { addPostService, sendPaymentEmail } from '../../Services/properties.service';
import 'antd/dist/antd.css';

const { Step } = Steps;

const steps = [
  {
    title: 'Elige tu plan',
    content: <FirstStep />,
  },
  {
    title: 'Ubicación',
    content: <SecondStep />,
  },
  {
    title: 'Características',
    content: <ThirdStep />,
  },
  {
    title: 'Agrega tus imágenes',
    content: <FourthStep />,
  },
  {
    title: 'Checkout',
    content: <FifthStep />,
  },
];

const ProgressBar = ({userInfo}) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const { postDetails } = useCreatePost();
  return (
    <>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Siguiente
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() =>{
            const resp = window.confirm(`¿Quieres crear la publicación ${postDetails.post_name}?`)
            if (resp) {
              addPostService(postDetails);
              message.success(
                `Tu publicación '${postDetails.post_name}' creada correctamente `
              );
              const post = {
                name: userInfo.name,
                email: userInfo.email,
                title: postDetails.post_name,
                image: postDetails.images[0] || "No image available",
                price: postDetails.price,
                plan: postDetails.premium ? "Premium" : "Basic",
                date: "",
              };
              console.log("POST", post)
              sendPaymentEmail(post);
            }
          }}>
            Listo
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Volver
          </Button>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.session,
});

export default connect(mapStateToProps, null)(ProgressBar);