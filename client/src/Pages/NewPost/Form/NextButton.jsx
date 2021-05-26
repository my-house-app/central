import useCreatePost from '../hooks/useCreatePost';
const NextButton = () => {
  const { current, steps } = useCreatePost();

  return current < steps.length - 1 && <button type='submit'>Siguiente</button>;
};

export default NextButton;
