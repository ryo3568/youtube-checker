import { useState} from "react"

const Form = (props) => {
    const [registerId, setRegisterId] = useState()

    const handleRegister = (e) => {
        e.preventDefault()
        props.setChannelIds(channelIds => [...channelIds, registerId])
    }
    
    return (
        <form onSubmit={handleRegister}>
            <input type="text"
                   name="mealName"
                   onChange={e => setRegisterId(e.target.value)}
                   placeholder="channelIdを入力"/>
            <button>検索</button>
        </form>
    )
}

export default Form