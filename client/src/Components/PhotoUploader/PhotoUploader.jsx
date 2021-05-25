import React, { useEffect, useState } from 'react';
import useCreatePost from '../../Pages/NewPost/hooks/useCreatePost';
import styles from './PhotoUploader.module.css';

const Uploader = () => {
  const {
    handleOnchangeImage,
    postDetails: { images },
  } = useCreatePost();

  const [filesList, setFilesList] = useState(images);

  const handlerOnChange = async (event) => {
    const { target } = event;
    const { files } = target;
    const newFile = await Promise.all(
      [...files].map((image) => getBase64(image))
    );
    const newFilesList = [...filesList, ...newFile];
    setFilesList(newFilesList);
  };

  const onClickDelete = (url) => {
    const newFilesList = filesList.filter((image) => image !== url);
    setFilesList(newFilesList);
  };
  useEffect(() => {

    handleOnchangeImage(filesList);
  }, [filesList]);
  return (
    <div className='ctn'>
      <h1>Agrega imágenes de tu inmueble </h1>
      <div>
        <div className={styles.photo_uploader_container}>
          {filesList.map((image, key) => {
            return (
              <img
                key={key}
                onClick={() => onClickDelete(image)}
                className={styles.image}
                src={image}
              />
            );
          })}
        </div>
        <input type='file' multiple name='images' onChange={handlerOnChange} />
      </div>
    </div>
  );
};

export default Uploader;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
