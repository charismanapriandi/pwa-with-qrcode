import { NavLink, Outlet } from "react-router-dom";
import './Layout.css'
import useOfflineIndicator from "../hook/useOfflineIndicator";

const menu = [
  {
    href: '/',
    label: 'Qrcode'
  },
  {
    href: '/todo',
    label: 'Todo'
  }
]

export default function Layout() {
  const isOffline = useOfflineIndicator()
  
  return (
    <div className="Layout">
      <nav className="Layout-Nav">
        <div className="container Layout-container">
          <ul className="Layout-NavMenu">
            {menu.map(i => {
              return (
                <li key={i.href}>
                  <NavLink to={i.href}>{i.label}</NavLink>
                </li>
              )
            })}
          </ul>
          <span 
            className={`Layout-OfflineIndicator ${
              isOffline 
                ? 'Layout-OfflineIndicator-offline'
                : 'Layout-OfflineIndicator-online'
              }`
            }
          >
            {isOffline ? 'Offline' : 'Online'}
          </span>
        </div>
      </nav>
      <header className="Layout-Header-root">
        <h1 className="Layout-Header-title">QrCode - Progressive Web App - Offline Mode</h1>
        <p>QR Code Scanner as a Progressive Web App with Offline detection</p>
        <p>Turn off your internet connection and see what happens.</p>
      </header>
      <Outlet />
    </div>
  )
}