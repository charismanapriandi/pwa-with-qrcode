import { RefObject, useState } from "react"

export default function useWebcam(videoRef: RefObject<HTMLVideoElement>) {
  const [stream, setStream] = useState<MediaStream>()
  const [isCamActive, setIsCamActive] = useState<boolean>(false)

  const startStream = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true })
    
    setIsCamActive(true)
    setStream(stream)

    if (!videoRef.current) return
    videoRef.current.srcObject = stream
    videoRef.current.play()
  }
  
  const stopStream = () => {
    if (!stream) return 
    
    setIsCamActive(false)
    stream.getTracks().forEach(track => track.stop())
  }
  
  return { stopStream, startStream, stream, isCamActive }
}