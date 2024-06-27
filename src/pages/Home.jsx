import { useContext } from "react"
import Results from "../components/Results"
import { AppContext } from "../context"

const Home = () => {
    const contextValues = useContext(AppContext)
    return (
        <Results videoData={contextValues.videoData}/>
    )
}

export default Home