import React, { Component } from 'react'

class Cards extends Component {
    constructor() {
        super();
      }
  render() {
    const {title, sum, exposition1, exposition2, exposition3, exposition4, sign} = this.props.data
    const a = 
    console.log();
    return <div><h4 className='bg-body-tertiary mb-5 py-3 border-bottom'>{title}</h4>
      <h1>{sum}</h1>
      <p className='m-auto mt-4 mb-4'>{exposition1 }<br/>{exposition2}<br/>{exposition3}<br/>{exposition4}</p>
       <div className='px-3'>
       <div className="btn btn-primary w-100 py-2 fs-5">{sign}</div>
    </div>
    </div>    
  }
}

export default Cards