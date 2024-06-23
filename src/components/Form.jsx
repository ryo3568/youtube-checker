import { useState} from "react"

const Form = (props) => {
    const [registerChannel, setRegisterChannle] = useState("")

    const handleRegister = (e) => {
        e.preventDefault()
        props.setChannelIds(channleIds => [...channleIds, registerChannel])
    }
    return (
        <form onSubmit={handleRegister}>
            <input type="text"
                   name="mealName"
                   onChange={e => setRegisterChannle(e.target.value)}
                   placeholder="channel名を入力"/>
            <button>検索</button>
        </form>
    )
}

export default Form