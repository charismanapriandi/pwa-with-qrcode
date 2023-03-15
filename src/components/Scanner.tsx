import jsQR from "jsqr";
import { useRef } from "react";
import useWebcam from "../hook/useWebcam";

export default function Scanner() {
  const { stopStream, startStream } = useWebcam()
  const videoRef = useRef<HTMLVideoElement>(null)
  
  return (
    <>
      <button onClick={startStream}>start stream</button>
      <button onClick={stopStream}>stop stream</button>
      <video ref={videoRef}>
        
      </video>
    </>
  )
}