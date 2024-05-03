import axios from "axios"
import { useEffect, useState } from "react"

function SeverCall(){
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            setData(res.data);
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return <>
    <h1>Server Call</h1>
    {loading && <p>Loading..................</p>}
    {
        data.map((ele)=>{
            return <div key={ele.id}>
            <h1>{ele.username}</h1>
            <p>{ele.email}</p>
            </div>
        })
    }
    </>
}
export default SeverCall