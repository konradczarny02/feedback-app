import { StyledUpvotes } from 'components/atoms/Upvotes/Upvotes.styles';
import { ReactComponent as UpvoteIcon } from 'assets/images/icons/upvoteIcon.svg';

type UpvotesProps = {
  upvotesNumber: number;
};

const Upvotes = ({ upvotesNumber }: UpvotesProps) => {
  return (
    <StyledUpvotes>
      <UpvoteIcon />
      <p>{upvotesNumber}</p>
    </StyledUpvotes>
  );
};

export default Upvotes;
