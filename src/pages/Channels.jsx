import Form from "../components/Form"
import RegisteredChannels from "../components/RegisteredChannels"

const Channels = (props) => {
    return (
        <>
            <Form setChannelIds={props.setChannelIds}/>
            <RegisteredChannels videoData={props.videoData}/>
        </>
    )
}

export default Channels