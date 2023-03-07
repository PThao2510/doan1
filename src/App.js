import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Routersconfig from './config/Routersconfig';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routersconfig />
      <Footer />
    </div>
  );
}

export default App;
