import React, {Component} from 'react'

export default class Show extends Component {
 render() {
     console.log(this.props)
     if (!this.props.bounty) {
         return <div>Loading...</div>
     }
    const huntersList = this.props.bounty.hunters.map((h)=> {
        return <li>Name: {h.name}</li>
    })

     console.log(this.props.bounty.hunters)
    return(
        <div>
            <h2>{this.props.bounty.name}</h2>
            <p>Wanted for: {this.props.bounty.wantedFor}</p>
            <p>Client: {this.props.bounty.client}</p>
            <p>Reward: {this.props.bounty.reward}</p>
            <p>Last Seen: {this.props.bounty.lastSeen}</p>
            <p>Hunters:</p>
            <ul>
            {huntersList}
            </ul>


            

        </div>
    )
 }
}