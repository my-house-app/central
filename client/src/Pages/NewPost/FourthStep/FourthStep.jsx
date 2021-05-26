import PhotoUploader from '../../../Components/PhotoUploader/PhotoUploader';
import '../step.css';
import useCreatePost from '../hooks/useCreatePost';

const FourthStep = () => {
  const { current, steps, setCurrent } = useCreatePost();
  return (
    <div className='ctn'>
      <PhotoUploader />
      {current < steps.length - 1 && (
        <button onClick={() => setCurrent(current + 1)}>Siguiente</button>
      )}
    </div>
  );
};

export default FourthStep;
