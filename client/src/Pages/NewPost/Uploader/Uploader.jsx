import React, { useState } from 'react';
const Uploader = () => {
  const [filesList, setFilesList] = useState([]);

  const handlerOnChange = (event) => {
    const { target } = event;
    const { files } = target;
    const newFilesList = [...filesList, ...files];
    setFilesList(newFilesList);
  };

  return (
    <React.Fragment>
      <input type='file' onChange={handlerOnChange} />
    </React.Fragment>
  );
};

export default Uploader;
