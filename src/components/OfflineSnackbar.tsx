import { useEffect, useState } from "react";
import Snackbar from "./Snackbar";

export default function OfflineSnackbarHandler() {
  const [isOffline, setIsOffline] = useState<boolean>(false)
  
  useEffect(() => {
    window.navigator.onLine ? setIsOffline(false) : setIsOffline(true)
    
    window.addEventListener('offline', () => setIsOffline(true))
    window.addEventListener('online', () => setIsOffline(false))
  }, [])
  
  return (
    <Snackbar
      show={isOffline}
      message="Connection Lost"
    />
  )
}