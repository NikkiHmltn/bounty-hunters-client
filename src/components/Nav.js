import {NavLink} from 'react-router-dom'

import StyledNavLink from './StyledNavlInk'

export default function Nav() {
    return(
        <div>
            <ul className='nav-list'>
                <StyledNavLink to="/" text='Home' />
                <StyledNavLink to="/new" text='Create' />
            </ul>
        </div>
    )
}