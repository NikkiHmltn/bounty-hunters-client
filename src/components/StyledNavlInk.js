import {NavLink} from 'react-router-dom'

export default function StyledNavLink(props) {
    return(
        <li>
            <NavLink className='nav-link' to={props.to}>{props.text}</NavLink>
        </li>
    )
}