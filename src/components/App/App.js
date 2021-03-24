import './App.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Game from '../Game/Game'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
