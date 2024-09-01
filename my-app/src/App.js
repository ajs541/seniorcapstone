import './App.css';
import Button from './components/Button.js';
import ComplexButton from './components/ComplexButton.js';
import GradeButton from './components/GradeButtons.js';
import LinkButton from './components/LinkButton.js';
import RealButtonTest from './components/RealButtonTest.js';
import K_2 from './K_2.js';
import HabitatsComponent from './components/HabitatComponent.js';
import BackgroundElement from './components/Background.js';
import TitleBox from './components/Title.js';

let habitatsData;

fetch('http://127.0.0.1:5000/habitats')
  .then(response => response.json())
  .then(data => {
    habitatsData = data;
    console.log(data);
  })
  .catch(error => console.error('Error:', error));


function App() {
  return (
    <div className="App">
      <BackgroundElement 
      title="Welcome to WebSafari!"
      subtitle="What grade are you in?"
      link="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Indore_zoo_gate.jpg/1280px-Indore_zoo_gate.jpg">
        <GradeButton />
      </BackgroundElement>
      {/*
      <RealButtonTest link = './K_2.js' />
      <LinkButton />
      <HabitatsComponent />
      <ComplexButton /> 
      */}
      {/*      
      <Button example="Hello World"/>
      <p>This device is a {navigator.userAgent}</p>
       */}
    </div>
  );
}

export default App;
