import { useContext } from "react"
import { AppContext } from "../context"

const RegisteredChannels = () => {
    const contextValues = useContext(AppContext)
    return (
        <div>
            <h1>登録チャンネル</h1>
            {contextValues.videoData.map((data, index) => {
                return (
                    <div key={data.videoId}>
                        <p>{data.channelTitle}</p>
                        <button onClick={() => contextValues.handleDeleteChannel(index)}>削除</button>
                    </div>
                )
            })}
        </div>
    )
}

export default RegisteredChannels