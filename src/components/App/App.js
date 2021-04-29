import './App.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Game from '../Game/Game'
import "bootstrap/dist/css/bootstrap.min.css"

function App(props) {
  return (
    <div className="App">
      <Header />
      <Game keycloak={props.keycloak} />
      <Footer />
    </div>
  );
}

export default App;
