
const RegisteredChannels = (props) => {
    return (
        <div>
            <h1>登録チャンネル</h1>
            {props.videoData.map(data => (
                <p>{data.channelTitle}</p>
            ))}
        </div>
    )
}

export default RegisteredChannels