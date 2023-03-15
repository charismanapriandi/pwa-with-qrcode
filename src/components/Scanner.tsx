import jsQR from "jsqr";
import { SyntheticEvent, useEffect, useRef } from "react";
import useWebcam from "../hook/useWebcam";
import './Scanner.css'

export default function Scanner() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { stopStream, startStream, stream, isCamActive } = useWebcam(videoRef)

  const handleCanPlay = (e: SyntheticEvent<HTMLVideoElement, Event>) => {
    if (!canvasRef.current || !videoRef.current) return;

    const canvas = canvasRef.current
    const video = videoRef.current
    
    video.crossOrigin = 'Anonymous'
    
    canvas.width = video.width
    canvas.height = video.height
    
    const ctx = canvas.getContext('2d')

    const { width, height } = canvas;
    
    if (!ctx) return

    const scanInterval = setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height)
  
      const imageData = ctx.getImageData(0, 0, width, height)
      
      const qrcode = jsQR(imageData.data, width, height)
      
      if (qrcode) {
        video.pause()
        clearInterval(scanInterval)
        alert(`Data: ${qrcode.data}`)
      }
    }, 100)
  }
  
  useEffect(() => {
    if (!videoRef.current) return;

    videoRef.current.srcObject = stream as any
  }, [stream, videoRef])
  
  return (
    <div className="Scanner-root">
      <div className="Scanner-frame">
        <video 
          ref={videoRef}
          className="Scanner-screen"
          muted
          playsInline
          autoPlay
          onCanPlay={handleCanPlay}
          width={300} 
          height={300}
        />
        <canvas ref={canvasRef} />
        <div className="Scanner-borders">
          <div />
          <div />
          <div />
          <div />
        </div>
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