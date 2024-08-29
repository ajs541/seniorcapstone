import './App.css';
import Button from './components/Button.js';
import ComplexButton from './components/ComplexButton.js';
import GradeButton from './components/GradeButtons.js';
import LinkButton from './components/LinkButton.js';
import RealButtonTest from './components/RealButtonTest.js';
import K_2 from './K_2.js';

function App() {
  return (
    <div className="App">
      
      <RealButtonTest link = './K_2.js' />
      {/*
      <GradeButton />
      <LinkButton />
      <ComplexButton /> */}
      {/*      
      <Button example="Hello World"/>
      <p>This device is a {navigator.userAgent}</p>
       */}
    </div>
  );
}

export default App;
