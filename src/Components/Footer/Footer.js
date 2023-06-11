import { Component } from "react";
import './footer.css'

const menu =[
  {
    id: 1,
    head: 'Features', 
    li1: 'Cool stuff', 
    li2: 'Random feature', 
    li3: 'Team feature', 
    li4: 'Stuff for developers', 
    li5: 'Another one', 
    li6: 'Last time'
  },
  {
    id: 2,
    head: 'Resources',
    li1: 'Resource', 
    li2: 'Resource name', 
    li3: 'Another resource', 
    li4: 'Final resource'
  },
  {
    id: 3,
    head: 'About',
    li1: 'Team', 
    li2: 'Locations', 
    li3: 'Privacy', 
    li4: 'Terms'
  },
]

class Footer extends Component {
    render() {
        return <footer>
        <div className='row text-start'>
        <div className="col-5 col-sm-3 col-lg-2 p-0 pb-3 m-4 mt-0">
          <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" />
          <p>© 2017-2018</p>
        </div>
        
          {
            menu.map((v) => {
              return <div key={v.id} className="col-5 col-sm-3 col-lg-2 p-0 pb-3 m-4 mt-0">
                <h5>{v.head}</h5> 
                <ul>
                <li><a href="">{v.li1}</a></li>
                <li><a href="">{v.li2}</a></li>
                <li><a href="">{v.li3}</a></li>
                <li><a href="">{v.li4}</a></li>
                <li><a href="">{v.li5}</a></li>
                <li><a href="">{v.li6}</a></li>
                 </ul>
               </div>
            })
          }          
     </div>
  </footer>
  }
}

export default Footer