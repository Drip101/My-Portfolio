import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Bio from './components/Bio';
import AboutMe from './components/AboutMe';
import MyPortfolio from './components/Myportfolio';
import ContactMe from './components/ContactMe';
function App() {
  return (
    <div className="App">
      <Header/>
      <Bio/>
      <AboutMe/>
      <MyPortfolio/>
      <ContactMe/>
    </div>
  );
}

export default App;
