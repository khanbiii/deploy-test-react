import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const getDatas = async () => {
      const response = await fetch("https://port-0-deploy-test-back-lzxw8im2984f145b.sel4.cloudtype.app/test",{
        method : "POST"
      })
      const datas = response.json();
      return datas;
    }
    
    getDatas().then(console.log).catch(console.error);
    
  },[])  
  
  
  
  
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
      </header>
    </div>
  );
}

export default App;
