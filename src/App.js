import './App.css';

function App() {
  return (
    <div>
      <header className="p-3 px-4 shadow-sm justify-content-between d-flex align-items-center">
        <p className='fs-4'>Company name</p>
        <ul className="menu d-flex align-items-center m-0">
          <li><a href="">Features</a></li>
          <li><a href="">Enterprise</a></li>
          <li><a href="">Support</a></li>
          <li><a href="">Pricing</a></li>
          <li><a className='btn btn-outline-primary ms-2' href="">Sign up</a></li>
        </ul>
      </header>

      <div className="container-fluid text-center p-5">
        <p className='textt'>Pricing</p>
        <p className='text'>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
        
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-8 col-lg-3 border p-0 pb-4 m-3 shadow-sm">
            <h4 className='bg-body-tertiary mb-5 py-3 border-bottom'>Free</h4>
            <h1>$0 <span className='text-secondary fs-2'>/ mo</span></h1>
            <p className='m-auto mt-4 mb-4'>10 users included <br />
               2 GB of storage <br />
               Email support <br />
               Help center access</p>
               <div className='px-3'>
               <div className="btn btn-outline-primary w-100 py-2 fs-5">Sign up for free</div>
            </div>
          </div>

          <div className="col-md-6 col-sm-8 col-lg-3 border p-0 pb-4 m-3 shadow-sm">
            <h4 className='bg-body-tertiary mb-5 py-3 border-bottom'>Pro</h4>
            <h1>$15 <span className='text-secondary fs-2'>/ mo</span></h1>
            <p className='m-auto mt-4 mb-4'>20 users included <br />
               10 GB of storage <br />
               Priority email support <br />
               Help center access</p>
               <div className='px-3'>
               <div className="btn btn-primary w-100 py-2 fs-5">Get started</div>
            </div>
          </div>

          <div className="col-md-6 col-sm-8 col-lg-3 border p-0 pb-4 m-3 shadow-sm">
            <h4 className='bg-body-tertiary mb-5 py-3 border-bottom'>Enterprise</h4>
            <h1>$29 <span className='text-secondary fs-2'>/ mo</span></h1>
            <p className='m-auto mt-4 mb-4'>30 users included <br />
               15 GB of storage <br />
               Phone and email support <br />
               Help center access</p>
               <div className='px-3'>
               <div className="btn btn-primary w-100 py-2 fs-5">Get started</div>
            </div>
          </div>
          <hr className='m-5' />
        </div>

      <footer>
          <div className='row text-start'>
          <div className="col-5 col-sm-3 col-lg-2 p-0 pb-3 m-4">
            <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" />
            <p>© 2017-2018</p>
          </div>

          <div className="col-5 col-sm-3 col-lg-2 p-0 pb-3 m-4">
            <h5>Features</h5>
            <ul>
              <li><a href="">Cool stuff</a></li>
              <li><a href="">Random feature</a></li>
              <li><a href="">Team feature</a></li>
              <li><a href="">Stuff for developers</a></li>
              <li><a href="">Another one</a></li>
              <li><a href="">Last time</a></li>
            </ul>
          </div>

          <div className="col-5 col-sm-3 col-lg-2 p-0 pb-3 m-4">
            <h5>Resources</h5>
            <ul>
              <li><a href="">Resource</a></li>
              <li><a href="">Resource name</a></li>
              <li><a href="">Another resource</a></li>
              <li><a href="">Final resource</a></li>
            </ul>
          </div>

          <div className="col-5 col-sm-3 col-lg-2 p-0 pb-3 m-4">
            <h5>About</h5>
            <ul>
              <li><a href="">Resource</a></li>
              <li><a href="">Resource name</a></li>
              <li><a href="">Another resource</a></li>
              <li><a href="">Final resource</a></li>
            </ul>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;
