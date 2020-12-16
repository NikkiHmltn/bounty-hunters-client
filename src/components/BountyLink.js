import {Link} from 'react-router-dom'

export default function BountyLink(props) {
    const linkTo = `/show/${props.bountyId}`

    return(
        <div>
            <Link to={linkTo}>
           {props.name}
            </Link>
        </div>
       
    )
}