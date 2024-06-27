
const RegisteredChannels = (props) => {
    return (
        <div>
            <h1>登録チャンネル</h1>
            {props.videoData.map(data => {
                return (
                    <div key={data.videoId}>
                        <p>{data.channelTitle}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default RegisteredChannels