// import useCreatePost from '../hooks/useCreatePost';
import Form from '../Form/Form';
import '../step.css';

const formInputsConfig = [
  // { tag: 'select', label: 'País', type: ['Colombia'], name: 'country' },
  { tag: 'text', label: 'Departamento', type: 'text', name: 'department' },
  { tag: 'text', label: 'Ciudad', type: 'text', name: 'city' },
  { tag: 'text', label: 'Barrio', type: 'text', name: 'neighborhood' },
  { tag: 'text', label: 'Dirección', type: 'text', name: 'street_number' },
  { tag: 'text', label: 'Estrato', type: 'number', name: 'stratum' },
];

const ThirdStep = () => {
  // const { setCurrentComponent } = useCreatePost();

  return (
    <div className='ctn'>
      <h1>Ubicación del inmueble</h1>
      <Form config={formInputsConfig} />
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
