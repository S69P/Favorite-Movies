import React, { Component } from 'react'
import ListItem from './ListItem'


export default class List extends Component {
  const {profiles, users, movies} = this.props
  render() {
    return (
      <ol>
       {console.log(profiles, users, movies)}
      </ol>
    )
  }
}