import { createContext, useState, useCallback, useEffect } from 'react';
import { useSelector} from 'react-redux';
import { addPostService } from '../../../Services/properties.service';

export const CreatePostContext = createContext({});

const CreatePostProvider = ({ children, ...routerProps }) => {
  const { session } = useSelector((store) => store);
  const [postDetails, setPostDetails] = useState({
    premium: '',
    post_name: '',
    prop_type: ['Casa', 'Apartamento'],
    country: '',
    department: '',
    city: '',
    neighborhood: '',
    street_number: '',
    description: '',
    stratum: '',             
    price: 0,
    m2: 0,
    rooms: 0,
    bathrooms: 0,
    years: 0,
    pool: false,
    backyard: false,
    gym: false,
    bbq: false,
    parking_lot: false,
    garden: false,
    elevator: false,
    security: false,
    status: 'Available',
    images: [],
    idUser: session.id,
  });
  useEffect(() => {
    const postDetailsLocalStorage = localStorage.getItem('postDetails');
    if (!postDetailsLocalStorage) {
      return;
    }
    setPostDetails(JSON.parse(postDetailsLocalStorage));
  }, []);

  const handleOnInputsChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setPostDetails({ ...postDetails, [name]: value });
    localStorage.setItem('postDetails', JSON.stringify(postDetails));
  };

  const handleSubmit = (input) => {
    /* if (errors === '') {
      return alert('Revisar campos requeridos')
    } else { */
      const resp = window.confirm(`¿Quieres crear la publicación ${input.post_name}?`)
      if (resp) {
        addPostService(input);
        alert(`Publicación '${input.post_name}' creada correctamente `);
      }
    //}
  }

  const [currentComponent, setCurrentComponent] = useState('FirstStep');

  return (
    <CreatePostContext.Provider
      value={{
        routerProps,
        postDetails,
        currentComponent,
        setPostDetails,
        setCurrentComponent,
        handleOnInputsChange,
        handleSubmit
      }}
    >
      {children}
    </CreatePostContext.Provider>
  );
};

export default CreatePostProvider;
