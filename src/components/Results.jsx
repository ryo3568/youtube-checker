
const Results = ( props ) => {
    return (
        <div>
            {props.videoData.map(data => {
                return (<div key={data.channelId}>
                    <p>チャンネル名:{data.channelTitle} 更新日時:{data.publishTime}</p>
                    <iframe 
                        width="640"
                        height="360"
                        src={"https://www.youtube.com/embed/" + data.id}
                        allowFullScreen
                    />
                </div>)
            })}
        </div>
    )
}

export default Results