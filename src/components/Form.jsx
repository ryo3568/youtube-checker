import { useContext, useState } from "react"
import { AppContext } from "../context"

const Form = () => {
    const [registerChannel, setRegisterChannle] = useState("")
    const contextValues = useContext(AppContext)

    const handleRegister = (e) => {
        e.preventDefault()
        contextValues.setChannelIds(channleIds => [...channleIds, registerChannel])
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