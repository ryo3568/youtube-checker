import { useEffect, useState } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import RegisteredChannels from "./components/RegisteredChannels"
import Results from "./components/Results"
import "./styles/App.css"

const App = () => {
  const [channelIds, setChannelIds] = useState([])
  const [videoData, setVideoData] = useState([])

  useEffect(() => {
    const url = "https://www.googleapis.com/youtube/v3/search?"
    const tmpVideoData = []
    channelIds.map(channelId => {
      const params = {
          key: import.meta.env.VITE_YOUTUBE_API_KEY,
          part: 'snippet',
          channelId: channelId,
          order: 'date',
          type: 'video',
          maxResults: 1,
      }
      const queryParams = new URLSearchParams(params)
      const getVideoData = async() => {
        const response = await fetch(url + queryParams)
        const data = await response.json();
        tmpVideoData.push({
          id: data.items[0].id.videoId,
          channelTitle: data.items[0].snippet.channelTitle,
          publishTime: data.items[0].snippet.publishTime,
        })
        setVideoData(tmpVideoData)
      }
      getVideoData()
    })
  }, [channelIds])


  return (
    <div>
      <Header/>
      <Form setChannelIds={setChannelIds}/>
      <RegisteredChannels videoData={videoData}/>
      <Results videoData={videoData}/>
    </div>
  )
}

export default App