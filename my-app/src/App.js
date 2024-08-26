import './App.css';
import Button from './Button.js';
import ComplexButton from './ComplexButton.js';

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
