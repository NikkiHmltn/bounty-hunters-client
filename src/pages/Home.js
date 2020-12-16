import React, {Component} from 'react'
import BountyLink from '../components/BountyLink'

export default class Home extends Component {

 render() {
    const bountyLinks = this.props.bounties.map((b)=> {
        return <div><BountyLink name={b.name} bountyId={b._id} key={b._id}/> </div>
    })
    return(
        <div>
            <h2>Home page!</h2>
            {bountyLinks}
        </div>
    )
    }
}