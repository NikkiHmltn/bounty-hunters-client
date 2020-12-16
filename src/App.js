import React, {Component} from 'react'
import {Route, Link, Switch} from 'react-router-dom'

import Nav from './components/Nav'
import Home from './pages/Home'
import Show from './pages/Show'
import New from './pages/New'
import Edit from './pages/Edit'

import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      bounties: [],
      finishedLoading: false
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:3001/bounties')
    const json = await response.json()
    this.setState({bounties: json.bounties, finishedLoading: true})
  }

  render() {
    if(!this.state.finishedLoading) {
      return(
        <div className="app">
          <h1>Loading...</h1>
        </div>
      )
    }

    if(this.state.bounties.length === 0) {
      return (
        <div className="app">
          <h1>No bounties to display!</h1>
        </div>
      )
    }
    return (
    <div className="App">
      <Nav />
      <h1>App!</h1>
      <Route exact path="/"><Home bounties={this.state.bounties}/></Route>
        {/* todo: use slugified name instead */}

      <Route 
        path="/show/:id"
        render={(routeProps)=> {
          const bounty = this.state.bounties.find((b)=> {
            return b._id === routeProps.match.params.id
          })
          return <Show bounty={bounty}/>
        }}
      />
    
      <Route path="/new">
        <New />
      </Route>

      <Route path="/edit/:id">
        <Edit />
      </Route>

    </div>
    );
  }
}

export default App;
