import Scanner from './components/Scanner';
import OfflineSnackbarHandler from './components/OfflineSnackbar';
import './App.css'

function App() {
  return (
    <div className="App">
      <Scanner />
      <OfflineSnackbarHandler />
    </div>
  );
}

export default App;
