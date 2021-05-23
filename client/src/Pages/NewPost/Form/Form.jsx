import useCreatePost from '../hooks/useCreatePost';
import FormItem from './FormItem';

const Form = ({ config }) => {
  const { postDetails, handleOnInputsChange } = useCreatePost();
  return (
    <form>
      {config.map((inputConfig, key) => (
        <FormItem
          key={key}
          {...inputConfig}
          onChange={handleOnInputsChange}
          
          stateProperty={postDetails}
        />
      ))}
    </form>
  );
};

export default Form;
