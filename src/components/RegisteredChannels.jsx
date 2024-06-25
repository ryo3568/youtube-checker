
const RegisteredChannels = (props) => {
    return (
        <div>
            <h1>登録チャンネル</h1>
            {props.videoData.map(data => (
                <div key={data.channelId}>
                    <p>{data.channelTitle}</p>
                </div>
            ))}
        </div>
    )
}

export default RegisteredChannels