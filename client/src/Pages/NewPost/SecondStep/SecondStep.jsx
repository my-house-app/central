// import useCreatePost from '../hooks/useCreatePost';
import Form from '../Form/Form';
import '../step.css'

const formInputsConfig = [
  { tag: 'textarea', label: 'Título', name: 'post_name' },
  { tag: 'select', label: 'Tipo de inmueble', type: ['Casa', 'Apartamento'], name: 'prop_type' },
  { label: 'Precio', type: 'number', min: 0, name: 'price' },
  { label: 'Metros cuadrados', type: 'number', min: 0, name: 'm2' },
  { label: 'Baños', type: 'number', min: 0, name: 'bathrooms' },
  { label: 'Habitaciones', type: 'number', min: 0, name: 'rooms' },
  { label: 'Antigüedad', type: 'number', min: 0, name: 'years' },
  { tag: 'textarea', label: 'Descripción', name: 'description' },
];

const SecondStep = () => {
  // const { setCurrentComponent } = useCreatePost();

  return (
    <div className="ctn">
      <h1>Cuéntanos sobre tu propiedad</h1>
      <Form config={formInputsConfig}/>
      <div>
       {/*  <button
          onClick={() => {
            setCurrentComponent('ThirdStep');
          }}
        >
          Siguiente...
        </button>
        <button
          onClick={() => {
            setCurrentComponent('FirstStep');
          }}
        >
          Volver...
        </button> */}
      </div>
    </div>
  );
};

export default SecondStep;
