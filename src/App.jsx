import Intro from './Intro.jsx';
import StatesOfMatter from './Statesofmatter';
import Properties from './Properties.jsx';
import RealVsIdeal from './RealVsideal';
import Quiz from './Quiz.jsx';

import './App.css';

function App() {
  return (
    <div className="fluids-module-container">
      <h1>The Fluids Module</h1>
      <Intro />
      <StatesOfMatter />
      <Properties />
      <RealVsIdeal />
      <Quiz />
    </div>
  );
}

export default App;