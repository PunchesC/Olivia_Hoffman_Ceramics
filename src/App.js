import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import Footer from './components/Footer'
import Main from './components/Main'
import ImageGrid from './components/ImageGrid';




function App() {
  return (
    <div className="App">
      <Title />
      <Main />
      <ImageGrid />
      
      <Footer />
     
    </div>
  );
}

export default App;
