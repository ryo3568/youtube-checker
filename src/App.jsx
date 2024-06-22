import { useEffect, useState } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import Results from "./components/Results"
import "./styles/App.css"

const App = () => {
  const [channelIds, setChannelIds] = useState([])
  const [videoData, setVideoData] = useState({
    id: "",
    channelTitle: "",
    publishTime: ""
  })

  useEffect(() => {
    const url = "https://www.googleapis.com/youtube/v3/search?"
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
        console.log(data)
        setVideoData({
          id: data.items[0].id.videoId,
          channelTitle: data.items[0].snippet.channelTitle,
          publishTime: data.items[0].snippet.publishTime,
        })
      }
      getVideoData()
    })
  }, [channelIds])

  console.log("channelIds is ", channelIds)

  return (
    <div>
      <Header/>
      <Form setChannelIds={setChannelIds}/>
      <Results videoData={videoData}/>
    </div>
  )
}

export default App