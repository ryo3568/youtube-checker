import { useState, useLayoutEffect, createContext } from "react"
import { useDarkMode } from "../hooks/useDarkMode"

export const AppContext = createContext()

const ContextProvider = (props) => {
    const [channelIds, setChannelIds] = useState([])
    const [videoData, setVideoData] = useState([])
    const [theme, handleThemeSwitch] = useDarkMode()

    const handleDeleteChannel = index => {
        const deletedChannelIds = [...channelIds]
        deletedChannelIds.splice(index, 1)
        setChannelIds(deletedChannelIds)
        localStorage.setItem("channels", JSON.stringify(deletedChannelIds))
    }

    useLayoutEffect(() => {
        // localStorageに保存されたChannelを取得
        const savedChannels = JSON.parse(localStorage.getItem("channels"))
        savedChannels && setChannelIds(savedChannels)
    }, [])

    useLayoutEffect(() => {
        // 登録済みChannelの動画データを取得
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
            fetch(url + queryParams)
                .then(response => response.json())
                .then(data => {
                    tmpVideoData = [...tmpVideoData, {
                        videoId: data.items[0].id.videoId,
                        channelTitle: data.items[0].snippet.channelTitle,
                        publishTime: data.items[0].snippet.publishTime }]
                    setVideoData(tmpVideoData)
                })
                .catch(err => {
                    alert("エラーが発生しました")
                    tmpVideoData =  [...tmpVideoData, {
                        videoId: channelId,
                        channelTitle: "dsldfjs;dfk",
                        publishTime: "20238423"
                    }]
                    setVideoData(tmpVideoData)
                })
        })
        setVideoData(tmpVideoData)
    }, [channelIds])

    const contextValues = {
        videoData, 
        theme: theme,
        channelIds,
        setChannelIds,
        handleThemeSwitch,
        handleDeleteChannel
    }

    return (
        <AppContext.Provider value={contextValues}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider