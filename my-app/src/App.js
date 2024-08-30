import './App.css';
import Button from './components/Button.js';
import ComplexButton from './components/ComplexButton.js';
import GradeButton from './components/GradeButtons.js';
import LinkButton from './components/LinkButton.js';
import RealButtonTest from './components/RealButtonTest.js';
import K_2 from './K_2.js';

fetch('http://127.0.0.1:5000/habitats')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


function App() {
  return (
    <div className="App">
      
      <p>test page 101</p>
      {/*
      <RealButtonTest link = './K_2.js' />
      <LinkButton />
      <GradeButton />
      <ComplexButton /> */}
      {/*      
      <Button example="Hello World"/>
      <p>This device is a {navigator.userAgent}</p>
       */}
    </div>
  );
}

export default App;
