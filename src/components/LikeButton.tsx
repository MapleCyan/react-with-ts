import React, { useEffect, useState, useRef, useContext } from 'react';
import { ThemeContext } from '../App';

const LikeButton: React.FC = () => {
  const [likes, setLikes] = useState(0);
  const likesRef = useRef(0);
  const [on, setOn] = useState(true);
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    console.log('document title effect is running');
    document.title = `你点击了${likes}次`;
  }, [likes]);

  function handleAlertClick() {
    setTimeout(() => {
      alert(`you clicked on ${likesRef.current} times.`);
    }, 3000);
  }

  return (
    <>
      <button
        onClick={() => {
          on && setLikes(likes + 1);
          likesRef.current++;
        }}
        style={themeContext}>
        {likes}👍
      </button>
      <button style={themeContext} onClick={handleAlertClick}>
        Alert
      </button>
      <button style={themeContext} onClick={() => setOn(!on)}>
        {on ? 'ON' : 'OFF'}
      </button>
    </>
  );
};

export default LikeButton;
