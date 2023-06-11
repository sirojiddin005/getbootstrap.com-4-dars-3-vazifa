import { Component } from "react";
import './main.css';
import Cards from "./Cards";

const CardsData = [
  {
    id: 1,
    title: 'Free',
    sum: '$0 / mo',
    exposition1: '10 users included',
    exposition2: '2 GB of storage',
    exposition3: 'email support',
    exposition4: 'Help center access',
    sign: 'Sign up for free'
  },
  {
    id: 2,
    title: 'Pro',
    sum: '$15 / mo',
    exposition1: '20 users included',
    exposition2: '10 GB of storage',
    exposition3: 'Priority email support',
    exposition4: 'Help center access',
    sign: 'Sign up for free',
  },
  {
    id: 3,
    title: 'Enterprise',
    sum: '$29 / mo',
    exposition1: '30 users included',
    exposition2: '15 GB of storage',
    exposition3: 'Priority email support',
    exposition4: 'Help center access',   
    sign: 'Sign up for free'
  },
]

class Main extends Component {
  
    render() {   
        return <div className="container-fluid text-center p-5">
        <p className='textt'>Pricing</p>
        <p className='text'>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
        
        <div className="row justify-content-center">
          {
            CardsData.map((v) => <div key={v.id} className="col-md-6 col-sm-8 col-lg-3 border p-0 pb-4 m-3 shadow-sm">            <Cards data={v}/></div>)
         }

       <hr className='m-5' />
     </div>
    </div>
  }
}

export default Main