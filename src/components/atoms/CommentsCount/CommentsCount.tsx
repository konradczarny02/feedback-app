import { StyledCommentCount } from 'components/atoms/CommentsCount/CommentsCount.styles';
import { ReactComponent as CommentsIcon } from 'assets/images/icons/commentIcon.svg';

type CommentsProps = {
  commentsNumber: number;
};

const CommentsCount = ({ commentsNumber }: CommentsProps) => {
  return (
    <StyledCommentCount>
      <CommentsIcon />
      <p>{commentsNumber}</p>
    </StyledCommentCount>
  );
};

export default CommentsCount;
