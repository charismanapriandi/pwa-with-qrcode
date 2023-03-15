import { useState } from "react"

export default function useWebcam() {
  const [stream, setStream] = useState<MediaStream>()

  const startStream = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true })

    setStream(stream)
  }
  
  const stopStream = () => {
    if (!stream) return 

    stream.getTracks().forEach(track => track.stop())
  }
  
  return { stopStream, startStream, stream }
}