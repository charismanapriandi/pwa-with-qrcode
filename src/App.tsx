import Snackbar from './components/Snackbar';
import Scanner from './components/Scanner';

function App() {
  
  return (
    <div className="App">
      <Scanner />
      <Snackbar show={true} message="connection lost" />
    </div>
  );
}

export default App;
