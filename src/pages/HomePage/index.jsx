import './style.css';
import { useEffect, useState } from 'react';

import { Joke } from './../../components/Joke';

export const HomePage = () => {
  const [jokes, setJokes] = useState();
  useEffect(() => {
    const fetchingData = async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/Czechitas-podklady-WEB/daweb-test/deploy/jokes.json',
      );
      if (!response.ok) {
        alert('Hmmmmm něco tady nefunguje, zcheckni volání API');
        return;
      }
      const result = await response.json();
      setJokes(result);
    };
    fetchingData();
  }, []);
  console.log('jokes', jokes);
  return (
    <>
      {jokes && (
        <div className="container">
          {jokes.map((joke) => {
            return <Joke key={joke.id} joke={joke} />;
          })}
        </div>
      )}
    </>
  );
};
