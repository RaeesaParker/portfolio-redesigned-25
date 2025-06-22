import { Hero } from './pages/homepage/components/hero';

import './App.css';
import { ColourSwitcher } from './common/colourSwitcher';

function App() {
  // 242424 black colour
  return (
    <>
      <div className="flex flex-col">
        <ColourSwitcher />
        <Hero />
      </div>
    </>
  );
}

export default App;
