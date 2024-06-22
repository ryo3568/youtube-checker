
const Results = (props) => {
    const { id, channelTitle, publishTime } = props.videoData
    return (
        <div>
            <p>チャンネル名:{channelTitle} 更新日時:{publishTime}</p>
            <iframe 
                width="640"
                height="360"
                src={"https://www.youtube.com/embed/" + id}
                allowFullScreen
            />
        </div>
    )
}

export default Results