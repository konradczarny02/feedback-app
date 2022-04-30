import { StyledCommentCount } from 'components/atoms/CommentsCount/CommentsCount.styles';
import { ReactComponent as CommentsIcon } from 'assets/images/icons/commentIcon.svg';

type CommentsProps = {
  commentsNumber: number;
  id: string;
};

const CommentsCount = ({ commentsNumber, id }: CommentsProps) => {
  return (
    <StyledCommentCount to={`details/${id}`}>
      <CommentsIcon />
      <p>{commentsNumber}</p>
    </StyledCommentCount>
  );
};

export default CommentsCount;
