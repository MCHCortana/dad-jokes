import './style.css';
import { JokeBody } from '../JokeBody';
import { LikeButtons } from '../../components/LikeButtons';

export const Joke = ({ joke }) => {
  console.log('joke', joke);
  const { id, avatar, text, likes, dislikes } = joke;
  return (
    <div className="joke">
      <JokeBody userName={id} userAvatar={avatar} text={text} />
      <LikeButtons likes={likes} dislikes={dislikes} />
    </div>
  );
};
