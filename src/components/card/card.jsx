import quote from '../../assets/quote.png'
import './card.css'
function Card(props){
    return <div className={`card ${props.active && 'active'}`}>
        <img src={props.profile}/>
        <h1>{props.title}</h1>
        <p>{props.shortNote}</p>
        <img src={quote}/>
        <p>Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
    </div>
}
export default Card