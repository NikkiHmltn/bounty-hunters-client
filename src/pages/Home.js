import React, {Component} from 'react'
import BountyLink from '../components/BountyLink'

export default class Home extends Component {
 render() {
    return(
        <div>
            <h2>Home page!</h2>
            <BountyLink name={"Yosemite Sam"} bountyId={'asjalsdk23'} />
            
        </div>
    )
    }
}