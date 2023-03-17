import Scanner from "../components/Scanner";
import './Home.css';

export default function Home() {
  return (
    <div className="Home container">
      <div className="Home-Scanner">
        <Scanner />
      </div>
      <footer className="Home-Footer">
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
    </div>
  )
}
