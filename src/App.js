import logo from './logo.svg';
import Button from 'react-bootstrap/Button';  
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        # to check the bootstrap and tailwind work or not
        <div className="bs-container mx-auto">
         <Button variant="primary">bootstrap button</Button>
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">tailwind class</button>
        </div>
        <br/>
        <div class="bg-red-500 text-white p-4">
            This is a Tailwind CSS element.
        </div>

      </header>
    </div>
  );
}

export default App;
