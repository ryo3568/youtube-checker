import { useState, useEffect, createContext } from "react"

export const AppContext = createContext()

const ContextProvider = (props) => {
    const [loading, setLoading] = useState(false)
    const [channelIds, setChannelIds] = useState([])
    const [videoData, setVideoData] = useState([])

    useEffect(() => {
        const url = "https://www.googleapis.com/youtube/v3/search?"
        setLoading(true)
        console.log("set: ", loading)
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
        setLoading(false)
    }, [channelIds])


    const contextValues = {
        videoData, 
        setChannelIds,
    }

    return (
        <AppContext.Provider value={contextValues}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider