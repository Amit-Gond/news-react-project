import React, { Component } from 'react'
import Loading from './Spinner@1x-1.0s-73px-73px.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center '>
        <img src={Loading} alt="Spinner" className='w-2' />
      </div>
    )
  }
}
