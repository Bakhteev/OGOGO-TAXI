import React from 'react'
import { Link } from 'react-router-dom'

const HeaderItem = (props) => {
    return (
        <li className="header__item">
            <Link to={props.link} className="header__link">{props.text}</Link>
        </li>
    )
}

export default HeaderItem
