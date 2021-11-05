import { createContext, useState } from 'react';
import './App.css';

import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import useMousePosition from './hooks/useMousePositions';
import useUrlLoader from './hooks/useUrlLoader';

interface ShowReqResult {
  message: string;
  status: string;
}
interface ThemeProps {
  [key: string]: { color: string; background: string };
}
const themes: ThemeProps = {
  light: {
    color: '#000',
    background: '#eee'
  },
  dark: {
    color: '#fff',
    background: '#222'
  }
};
export const ThemeContext = createContext(themes.light);

const App: React.FC = () => {
  const [show, setShow] = useState(true);
  const positions = useMousePosition();
  const [data, loading] = useUrlLoader('https://dog.ceo/api/breeds/image/random');
  const dogResult = data as ShowReqResult;
  const [theme, setTheme] = useState('dark');

  return (
    <div className='App'>
      <ThemeContext.Provider value={themes[theme]}>
        <header className='App-header' style={themes[theme]}>
          <>
            <h2>{loading ? '🐶 loading...' : ''}</h2>
            <img src={dogResult && dogResult.message} alt='dog' />
          </>
          <p>
            <button onClick={() => setTheme('dark')} style={themes.dark}>
              dark🌙
            </button>
            <button onClick={() => setTheme('light')} style={themes.light}>
              light🌞
            </button>
          </p>
          <p>
            <button onClick={() => setShow(!show)}>{show ? 'SHOW' : 'HIDE'}</button>
            {show && <MouseTracker />}
            <LikeButton />
          </p>
          <h2>
            X: {positions.x}, Y: {positions.y}
          </h2>
        </header>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
