import { useState } from "react"

const Form = (props) => {
    const [registerChannel, setRegisterChannle] = useState("")

    const handleRegister = (e) => {
        e.preventDefault()
        props.setChannelIds(channleIds => [...channleIds, registerChannel])
        setRegisterChannle("")
    }
    return (
        <form onSubmit={handleRegister}>
            <input type="text"
                   value={registerChannel}
                   onChange={e => setRegisterChannle(e.target.value)}
                   placeholder="channel名を入力"/>
            <button>登録</button>
        </form>
    )
}

export default Form