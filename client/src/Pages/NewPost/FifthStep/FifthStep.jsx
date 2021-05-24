import useCreatePost from '../hooks/useCreatePost';
import Form from '../Form/Form';
import '../step.css';

const formInputsConfig = [
  { label: 'Piscina', type: 'checkbox', name: 'pool' },
  { label: 'Patio', type: 'checkbox', name: 'backyard' },
  { label: 'Gimnasio', type: 'checkbox', name: 'gym' },
  { label: 'Barbecue', type: 'checkbox', name: 'bbq' },
  { label: 'Cochera', type: 'checkbox', name: 'parking_lot' },
  { label: 'Jardín', type: 'checkbox', name: 'garden' },
  { label: 'Ascensor', type: 'checkbox', name: 'elevator' },
  { label: 'Seguridad', type: 'checkbox', name: 'security' },
];

const FourthStep = () => {
  const { setCurrentComponent } = useCreatePost();

  return (
    <div className='ctn'>
      <h1>Marca las facilidades que disponga tu inmueble </h1>
      <Form config={formInputsConfig}/>
      <div>
        {/* <button
          onClick={() => {
            setCurrentComponent('FifthStep');
          }}
        >
          Siguiente...
        </button>
        <button
          onClick={() => {
            setCurrentComponent('ThirdSept');
          }}
        >
          Volver...
        </button> */}
      </div>
    </div>
  );
};

export default FourthStep;
