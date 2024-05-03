import { useState } from "react"

function StateExample() {
    const [count,setCount] =  useState(100);
    const [show,setShow] = useState(false);
    function change(){
        setCount(count + 1);
        secondFunction();
    }
    function secondFunction(){
        console.log('from second function')
    }
    return <><p>{count}</p>
        <button onClick={change}>Change</button>
       {show && <div className="container">Welcome</div>}
        <button onClick={()=>setShow(true)}>open</button>
        <button onClick={()=>setShow(false)}>close</button>
    </>
}
export default StateExample