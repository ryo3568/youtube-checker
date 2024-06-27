import { useLayoutEffect, useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Layout from "./layout"
import Home from "./pages/Home"
import Channels from "./pages/Channels"
import "./styles/App.css"

// channelId
// Anya Melfissa   
// UC727SQYUvx5pDDGQpTICNWg
// Ninomae Ina'nis
// UCMwGHR0BTZuLsmjY_NT5Pwg


const App = () => {
  const [channelIds, setChannelIds] = useState([])
  const [videoData, setVideoData] = useState([])

  const navigate = useNavigate()

  useLayoutEffect(() => {
    const url = "https://www.googleapis.com/youtube/v3/search?"
    let tmpVideoData = []
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
        tmpVideoData = [...tmpVideoData, {
          videoId: data.items[0].id.videoId,
          channelTitle: data.items[0].snippet.channelTitle,
          publishTime: data.items[0].snippet.publishTime,
        }]
        setVideoData(tmpVideoData)
      }
      getVideoData()
    })
  }, [channelIds])

  return (
    <div>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home videoData={videoData}/>}/>
          <Route path="channels" element={<Channels setChannelIds={setChannelIds}
                                                    videoData={videoData}/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App