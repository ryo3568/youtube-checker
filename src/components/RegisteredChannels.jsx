
const RegisteredChannels = (props) => {
    console.log("RegisteredChannles is", props.videoData)
    return (
        <div>
            <h1>登録チャンネル</h1>
            {props.videoData.map(data => {
                console.log(data.channelId)
                return (
                    <div key={data.channelId}>
                        <p>{data.channelTitle}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default RegisteredChannels