import { useEffect, useState } from 'react'
import bg from '../../assets/c-1.png'
function Cart(){
    const [data,setData] = useState([
        {
            id:1,
            pName:'Oppo',
            actualPrice:1000,
            quantity:1
        },
        {
            id:2,
            pName:'Redmi',
            actualPrice:2000,
            quantity:1
        }
    ]);
    const [total,setTotal] = useState(data.reduce((acc,cur)=>acc.actualPrice + cur.actualPrice));
    const add = (id) =>{
        let index = data.findIndex((ele)=>ele.id == id);
        let copy = [...data];
        copy[index].quantity += 1;
        setData(copy);
    }
    const minus = (id) =>{
        let index = data.findIndex((ele)=>ele.id == id);
        let copy = [...data];
        copy[index].quantity -= 1;
        setData(copy);
    }
    useEffect(function (){
        console.log('From use effect');
        setTotal(data.reduce((acc,cur)=>acc.actualPrice*acc.quantity + cur.actualPrice*cur.quantity))
    },[data])
    return <>
    {
        data.map((ele,ind)=>{
            return <div key={ele.id}>
                <img src={bg}/>
                <h1>{ele.pName}</h1>
                <button onClick={()=>add(ele.id)}>+</button>
                <p>{ele.quantity}</p>
                <button onClick={()=>minus(ele.id)}>-</button>
                <h2>{ele.actualPrice * ele.quantity}</h2>
            </div>
        })
    }
    <h1>Total : {total}</h1>
    </>
}
export default Cart