import { useContext } from "react"
import { AppContext } from "../context"

const Results = ( ) => {
    const contextValues = useContext(AppContext)
    return (
        <div>
            {contextValues.videoData.map(data => {
                return (<div key={data.videoId}>
                    <p>チャンネル名:{data.channelTitle} 更新日時:{data.publishTime}</p>
                    <iframe 
                        width="640"
                        height="360"
                        src={"https://www.youtube.com/embed/" + data.videoId}
                        allowFullScreen
                    />
                </div>)
            })}
        </div>
    )
}

export default Results