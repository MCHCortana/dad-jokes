import './style.css';

import { JokeBody } from '../JokeBody';
import { LikeButtons } from '../../components/LikeButtons';

export const Joke = () => {
  return (
    <div className="joke">
      <JokeBody />
      <LikeButtons />
    </div>
  );
};
