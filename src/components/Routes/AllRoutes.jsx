import { Route, Routes } from "react-router"
import { Flight } from "../Flight/Flight"
import { Home } from "../Home/Home"
import { Navbar } from "../Navbar/Navbar"

export const AllRoutes = ()=>{

    return(
        <div id="allroute">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/flight" element={<Flight />} />
            </Routes>
        </div>
    )
}