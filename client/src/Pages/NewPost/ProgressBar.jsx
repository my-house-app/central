// import React, { useState } from 'react';
// import { Steps, Button, message } from 'antd';
// import About from '../About/About';
// import './step.css';

// const { Step } = Steps;

// const steps = [
//   {
//     title: 'Ubicación',
//     content: 'First-content',
//   },
//   {
//     title: 'Características',
//     content: <About />,
//   },
//   {
//     title: 'Agrega tus imágenes',
//     content: 'Last-content',
//   },
//   {
//     title: 'Elige tu plan',
//     content: 'Last-content',
//   },
//   {
//     title: 'Checkout',
//     content: 'Last-content',
//   },
// ];

// const ProgressBar = () => {
//   const [current, setCurrent] = useState(0);

//   const next = () => {
//     setCurrent(current + 1);
//   };

//   const prev = () => {
//     setCurrent(current - 1);
//   };

//   return (
//     <>
//       <Steps current={current}>
//         {steps.map(item => (
//           <Step key={item.title} title={item.title} />
//         ))}
//       </Steps>
//       <div className="steps-content">{steps[current].content}</div>
//       <div className="steps-action">
//         {current < steps.length - 1 && (
//           <Button type="primary" onClick={() => next()}>
//             Siguiente
//           </Button>
//         )}
//         {current === steps.length - 1 && (
//           <Button type="primary" onClick={() => message.success('Tu publicación ha sido creada con éxito')}>
//             Listo
//           </Button>
//         )}
//         {current > 0 && (
//           <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
//             Volver
//           </Button>
//         )}
//       </div>
//     </>
//   );
// };

// export default ProgressBar;