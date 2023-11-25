import './style.css';

export const JokeBody = ({ userName, userAvatar, text }) => {
  return (
    <div className="joke__body">
      <div className="joke__user">
        <img className="user-avatar" src={userAvatar} />
        <p className="user-name">{userName}</p>
      </div>

      <p className="joke__text">{text}</p>
    </div>
  );
};
