import useCreatePost from '../hooks/useCreatePost';
import Form from '../Form/Form';
import Uploader from '../Uploader/Uploader';

const formInputsConfig = [
  { label: 'Título', type: 'text', name: 'post_name' },
  { tag: 'select', label: 'Tipo de inmueble', type: ['Casa', 'Apartamento'], name: 'prop_type' },
  { label: 'Precio', type: 'number', name: 'price' },
  { label: 'Metros cuadrados', type: 'number', name: 'm2' },
  { label: 'Baños', type: 'number', name: 'bathrooms' },
  { label: 'Habitaciones', type: 'number', name: 'rooms' },
  { label: 'Antigüedad', type: 'number', name: 'years' },
  { tag: 'textarea', label: 'Descripción', name: 'description' },
];

const SecondStep = () => {
  const { setCurrentComponent } = useCreatePost();

  return (
    <div>
      <h1>Cuéntanos sobre tu propiedad</h1>
      <Form config={formInputsConfig}/>
      <Uploader />
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
