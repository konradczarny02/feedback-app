import {Wrapper} from 'components/molecules/EmptyFeedback/EmptyFeedback.styles';
import icon from 'assets/images/icons/emptyIcon.png';
import AddButton from 'components/atoms/AddButton/AddButton';

const EmptyFeedback = () => {
  return (
    <Wrapper>
      <img src={icon} alt="Empty feedback" />
      <h3>There is no feedback yet.</h3>
      <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
      <AddButton />
    </Wrapper>

  )
}

export default EmptyFeedback