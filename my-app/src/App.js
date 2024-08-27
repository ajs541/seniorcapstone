import './App.css';
import Button from './components/Button.js';
import ComplexButton from './components/ComplexButton.js';

function App() {
  return (
    <div className="App">
      <ComplexButton />
      <Button example="Hello World"/>
      <p>This device is a {navigator.userAgent}</p>
    </div>
  );
}

export default App;
