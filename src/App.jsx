import { Routes, Route } from "react-router-dom"
import ContextProvider from "./context"
import Layout from "./layout"
import Home from "./pages/Home"
import Channels from "./pages/Channels"
import "./styles/App.css"

// channelId
// Anya Melfissa   
// UC727SQYUvx5pDDGQpTICNWg
// Ninomae Ina'nis
// UCMwGHR0BTZuLsmjY_NT5Pwg


const App = () => {

  return (
    <ContextProvider>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="channels" element={<Channels/>}/>
        </Route>
      </Routes>
    </ContextProvider>
  )
}

export default App