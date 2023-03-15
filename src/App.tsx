import Scanner from './components/Scanner';
import OfflineSnackbarHandler from './components/OfflineSnackbar';
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-Header-root">
        <h1 className="App-Header-title">QrCode - Progressive Web App - Offline Mode</h1>
        <p>QR Code Scanner as a Progressive Web App with Offline detection</p>
        <p>Turn off your internet connection and see what happens.</p>
      </header>
      <div className="App-Scanner">
        <Scanner />
      </div>
      <footer className="App-Footer">
        <p>
          Source code is available on
          <a 
            target="_blank" 
            rel="noreferrer" 
            href="https://github.com/charismanapriandi/pwa-with-qrcode"
          >
            GitHub
          </a>
        </p>
      </footer>
      <OfflineSnackbarHandler />
    </div>
  );
}

export default App;
