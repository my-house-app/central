import useCreatePost from '../hooks/useCreatePost';
import Form from '../Form/Form';

const formInputsConfig = [
  { label: 'País', type: 'text', name: 'country' },
  { label: 'Departamento', type: 'text', name: 'department' },
  { label: 'Ciudad', type: 'text', name: 'city' },
  { label: 'Dirección', type: 'text', name: 'street_number' },
  { label: 'Estrato', type: 'number', name: 'stratum' },
];

const ThirdStep = () => {
  const { setCurrentComponent } = useCreatePost();

  return (
    <div>
      <h1>Ubicación del inmueble</h1>
      <Form config={formInputsConfig}/>
      <div>
       {/*  <button
          onClick={() => {
            setCurrentComponent('FourthStep');
          }}
        >
          Siguiente...
        </button>
        <button
          onClick={() => {
            setCurrentComponent('SecondStep');
          }}
        >
          Volver...
        </button> */}
      </div>
    </div>
  );
};

export default ThirdStep;
