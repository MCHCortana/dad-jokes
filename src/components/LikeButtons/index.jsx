import { useState } from 'react';
import './style.css';
export const LikeButtons = () => {
  const [liked, setLiked] = useState(0);
  const [disliked, setDisliked] = useState(0);
  return (
    <div className="joke__likes">
      {' '}
      <button
        onClick={() => setLiked(liked + 1)}
        id="btn-up"
        className="btn-like btn-like--up"
      ></button>{' '}
      <span id="likes-up" className="likes-count likes-count--up">
        {' '}
        {liked}{' '}
      </span>{' '}
      <button
        onClick={() => setDisliked(disliked + 1)}
        id="btn-down"
        className="btn-like btn-like--down"
      ></button>{' '}
      <span id="likes-down" className="likes-count likes-count--down">
        {' '}
        {disliked}{' '}
      </span>{' '}
    </div>
  );
};
