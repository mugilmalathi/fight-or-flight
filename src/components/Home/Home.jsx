import axios from "axios";
import { useEffect, useState } from "react"
import "./Home.css"

export const Home = ()=>{

    const [list, setList] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/flight")
        .then((res)=>{
            setList(res.data);
        })
    }, [])

    return (
        <div id="home">
           <table>
               <thead>
                   <tr>
                       <td>Id</td>
                       <td>Airport Name</td>
                       <td>company Name</td>
                       <td>Start Airport Name</td>
                       <td>Start Airport Id</td>
                       <td>End Airport Name</td>
                       <td>End Airport Id</td>
                       <td>Cost</td>
                       <td>Start Time</td>
                       <td>End Time</td>
                       <td>PNR</td>
                       <td>Capacity</td>
                   </tr>
               </thead>
              {
                  list.map(e=>
                    <thead>
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.airportname}</td>
                        <td>{e.companyname}</td>
                        <td>{e.startairportname}</td>
                        <td>{e.startairportid}</td>
                        <td>{e.endairportname}</td>
                        <td>{e.endairportid}</td>
                        <td>{e.cost}</td>
                        <td>{e.starttime}</td>
                        <td>{e.endtime}</td>
                        <td>{e.pnr}</td>
                        <td>{e.capacity}</td> 
                    </tr>
                </thead>
                  )
              }
           </table>
        </div>
    )
}
