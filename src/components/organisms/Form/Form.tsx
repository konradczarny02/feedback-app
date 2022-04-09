import { StyledForm, Heading, Title, Description, StyledError } from 'components/organisms/Form/Form.styles';
import AddIcon from 'components/atoms/AddIcon/AddIcon';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from 'store/hooks';
import { add } from 'store/suggestionSlice';
import { SortType } from 'store/suggestionSlice';

interface FormInterface {
  title: string;
  type: SortType;
  description: string;
}

const Form = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInterface>();
  const onSubmit: SubmitHandler<FormInterface> = ({ title, description, type }) => {
    console.log(title, description, type);
    dispatch(add({ title, type, description }));
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} errors={errors}>
      <AddIcon />
      <Title>Create New Feedback</Title>
      <Heading>Feedback Title</Heading>
      <Description>Add a short, descriptive headline</Description>
      <input type="text" {...register('title', { required: true })} />
      {errors.title && <StyledError margin={-22}>Can't be empty</StyledError>}
      <Heading>Category</Heading>
      <Description>Choose a category for your feedback</Description>
      <select {...register('type')}>
        <option value="Feature">Feature</option>
        <option value="UI">UI</option>
        <option value="UX">UX</option>
        <option value="Enhancement">Enhancement</option>
        <option value="Bug">Bug</option>
      </select>
      <Heading>Feedback Detail</Heading>
      <Description>Include any specific comments on what should be improved, added, etc.</Description>
      <textarea {...register('description', { required: true })}></textarea>
      {errors.description && <StyledError margin={-38}>Can't be empty</StyledError>}
      <input type="submit" value="Add Feedback" />
      <input type="reset" value="Cancel" />
    </StyledForm>
  );
};

export default Form;
