import { StyledForm, Heading, Title, Description } from 'components/organisms/Form/Form.styles';
import AddIcon from 'components/atoms/AddIcon/AddIcon';

const Form = () => {
  return (
    <StyledForm>
      <AddIcon />
      <Title>Create New Feedback</Title>
      <Heading>Feedback Title</Heading>
      <Description>Add a short, descriptive headline</Description>
      <input type="text" />
      <Heading>Category</Heading>
      <Description>Choose a category for your feedback</Description>
      <select>
        <option value="Feature">Feature</option>
        <option value="UI">UI</option>
        <option value="UX">UX</option>
        <option value="Enhancement">Enhancement</option>
        <option value="Bug">Bug</option>
      </select>
      <Heading>Feedback Detail</Heading>
      <Description>Include any specific comments on what should be improved, added, etc.</Description>
      <textarea></textarea>
      <input type="submit" value="Add Feedback" />
      <input type="reset" value="Cancel" />
    </StyledForm>
  );
};

export default Form;
