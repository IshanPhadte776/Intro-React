import { Children } from 'react'
import './Card.css'

function Card(props) {
    //children is a pro

    const classes = 'card' + props.className;

    return <div className= {classes}>{props.children} </div>
}

export default Card