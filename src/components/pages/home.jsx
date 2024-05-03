import { Link } from "react-router-dom"

function Home(){
    return <>
    <h1>Welcome to home</h1>
    <Link to='/contact'><button>Go to contact</button></Link>
    </>
}
export default Home