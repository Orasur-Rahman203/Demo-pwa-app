import logo from './logo.svg';
import './App.css';
import HeroSection from './Component/HeroSection';

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
      <HeroSection></HeroSection>
    </div>
  );
}

export default App;
