import './App.css';
import Button from './Button.js';

function App() {
  return (
    <div className="App">
      <Button example="Hello World"/>
      <p>This device is a {navigator.userAgent}</p>
    </div>
  );
}

export default App;
