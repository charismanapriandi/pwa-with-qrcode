import { useEffect, useState } from "react"

export default function useOfflineIndicator() {
  const [isOffline, setIsOffline] = useState<boolean>(false)
  
  useEffect(() => {
    window.navigator.onLine ? setIsOffline(false) : setIsOffline(true)
    
    window.addEventListener('offline', () => setIsOffline(true))
    window.addEventListener('online', () => setIsOffline(false))
  }, [])

  return isOffline;
}