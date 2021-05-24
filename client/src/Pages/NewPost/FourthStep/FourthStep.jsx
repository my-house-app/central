import React, { useState } from 'react';
import style from '../Form/Form.module.css';
import '../step.css';

const Uploader = () => {
  const [filesList, setFilesList] = useState([]);

  const handlerOnChange = (event) => {
    const { target } = event;
    const { files } = target;
    const newFilesList = [...filesList, ...files];
    setFilesList(newFilesList);
  };

  return (
    <div className='ctn'>
      <h1>Agrega imágenes de tu inmueble </h1>
      <div className={style.images}>
        <input type='file' className={style.images} onChange={handlerOnChange} />
      </div>
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

export default Uploader;
