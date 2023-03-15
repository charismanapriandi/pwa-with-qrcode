import jsQR from "jsqr";
import { useEffect, useRef } from "react";
import useWebcam from "../hook/useWebcam";
import './Scanner.css'

export default function Scanner() {
  const { stopStream, startStream, stream, isCamActive } = useWebcam()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!videoRef.current) return;

    videoRef.current.srcObject = stream as any
  }, [stream, videoRef])
  
  return (
    <div className="Scanner-root">
      <div className="Scanner-frame">
        <video ref={videoRef} className="Scanner-screen"></video>
      </div>
      <div className="Scanner-actions">
        <button 
          className={`Scanner-button ${
            isCamActive
              ? 'Scanner-buttonActive' 
              : ''
            }`}
          onClick={startStream}
        >
          Start
        </button>
        <button 
          className="Scanner-button" 
          onClick={stopStream}
        >
          Stop
        </button>
      </div>
    </div>
  )
}