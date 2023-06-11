import { Component } from "react";
import './header.css'

const ul = [
  {id: 1, li: 'Features'},
  {id: 2, li: 'Enterprise'},
  {id: 3, li: 'Support'},
  {id: 4, li: 'Pricing'},
];

class Header extends Component {
    render() {
        return <header className="p-3 px-4 shadow-sm justify-content-between d-flex align-items-center">
        <p className='fs-4'>Company name</p>
        <ul className="menu d-flex align-items-center m-0">
          {
            ul.map((v) => <li key={v.id}><a href="">{v.li}</a></li>)
          }
          
          <li><a className='btn btn-outline-primary ms-2' href="">Sign up</a></li>
        </ul>
      </header>
    }
}

export default Header