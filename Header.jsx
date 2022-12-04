import React from 'react';
import './Header1.css';
import as from './as.png';
import per from './per.jpg';
import per1 from './per1.jpg';
import per2 from './per2.jpg';

function Header(){
    return(
    <header>
        <nav className='navbar navbar-expand-xl navbar-dark bg-dark sticky-top'>
          <div className='container'>
            <a className='navbar-brand' href='#' >
                <img src={as} width='30px' height='30px'loading='lazy' className='d-inline-block align-top' />
                ASWIN</a>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target="#myNav"
            aria-controls='myNavBar' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id="myNav">
                <ul className='navbar-nav ms-auto' >
                    <li className='nav-item'>
                    <a href='#' className='nav-link'>Home</a>
                    </li>
                    <li className='nav-item'>
                    <a href='#' className='nav-link'>Pricing</a>
                    </li>
                    <li className='nav-item'>
                    <a href='#' className='nav-link'>About Us</a>
                    </li>
                    <li className='nav-item'>
                    <a href='#' className='nav-link'>Contact</a>
                    </li>                    
                    <li className='nav-item'>
                    <a href='#' className='nav-link btn btn-primary'>Sign in</a>
                    </li>
                </ul>
            </div>           
          </div>         
        </nav>
        <div  className='bg-image'>
            <p className=' h1 '>
           I am a <span> Developer</span>
            </p>
        </div>  
         { /*....Pricing....*/}
           <section id='pricing'>
            <div className='container text-center'>
                <h2 className='display-3 text-dark'>Pricing</h2>
                <div className='row row-cols-1 row-cols-md-3'>
                    <div className='col'>
                        <div className='card'>
                        <div className='card-header'>
                            <h5 className='text-warning'>GOLD</h5>
                        </div>
                        <div className='card-body'>
                            <h2>$159/<span className='text-muted'>mon</span></h2> 
                            <ul className='list-unstyled'>
                                <li>Web Designing</li>
                                <li>Extra Projects</li>
                                <li>Junior Frontend Developing</li>
                                <li>Junior Backend Developing</li>
                                <li>Online course videos</li>
                            </ul>    
                            <button className='btn btn-dark px-4'>Buy Now</button>                        
                        </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='card'>
                        <div className='card-header'>
                            <h5 className='text-success'>PLATINUM</h5>
                        </div>
                        <div className='card-body'>
                            <h2>$179/<span className='text-muted'>mon</span></h2> 
                            <ul className='list-unstyled'>
                                <li>Web Designing</li>
                                <li>Extra Projects</li>
                                <li>Senior Frontend Developing</li>
                                <li>Senior Backend Developing</li>
                                <li>Online course videos</li>
                            </ul>    
                            <button className='btn btn-dark px-4'>Buy Now</button>                        
                        </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='card'>
                        <div className='card-header'>
                            <h5 className='text-info'>DIAMOND</h5>
                        </div>
                        <div className='card-body'>
                            <h2>$259/<span className='text-muted'>mon</span></h2> 
                            <ul className='list-unstyled'>
                                <li>Web Designing</li>
                                <li>Extra Projects</li>
                                <li>Master Frontend Developing</li>
                                <li>Master Backend Developing</li>
                                <li>Online course videos</li>
                            </ul>    
                            <button className='btn btn-dark px-4'>Buy Now</button>                        
                        </div>
                        </div>
                    </div>
                </div>
            </div>
           </section> 

           {/* ...About... */}
           <section id='Aboutus'>
            <div className='about container-fluid bg-dark'>
            <div className='text-white text-center'>
                <h1>About Us</h1>
                <p className='fw-normal'>Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. 
                    So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails.</p>
            </div>
            </div>
            <div className='container text-center'>
                <h2>Our Team</h2>
                <div className='row row-cols-md-3 row-cols-1'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-header'>
                                <img src={per} className='img-fluid'/>
                            </div>
                            <div className='card-body'>
                                <h2>John Peter</h2>
                                <ul className='list-unstyled'>
                                    <li className='text-muted'>Art Director</li><br/>
                                    <li>To live a creative life, we must lose our fear of being wrong.</li>
                                    <li>johnpeter@gmail.com</li>
                                </ul>
                                <button className='btn btn-dark px-5'>Contact</button>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='card'>
                            <div className='card-header'>
                                <img src={per1} className='img-fluid'/>
                            </div>
                            <div className='card-body'>
                                <h2>Jane Doe</h2>
                                <ul className='list-unstyled'>
                                    <li className='text-muted'>CEO & Founder</li><br/>
                                    <li>To live a creative life, we must lose our fear of being wrong.</li>
                                    <li>janedoe@gmail.com</li>
                                </ul>
                                <button className='btn btn-dark px-5'>Contact</button>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='card'>
                            <div className='card-header'>
                                <img src={per2} className='img-fluid'/>
                            </div>
                            <div className='card-body'>
                                <h2>John Doe</h2>
                                <ul className='list-unstyled'>
                                    <li className='text-muted'>Designer</li><br/>
                                    <li>To live a creative life, we must lose our fear of being wrong.</li>
                                    <li>johndoe@gmail.com</li>
                                </ul>
                                <button className='btn btn-dark px-5'>Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </section>

              {/*....contact.... */}

            <section id='contact'>
              <div className='container mb-5'>
                <h1 className='text-center text-white bg-dark'>Contact</h1>
                <div className='row'>
                    <div className='col col-lg-5 col-12 bg-dark rounded'>
                        <h2 className='text-white front'>FRONTEND DEVELOPER</h2>       
                    </div>
                    <div className='col col-lg-7 col-12 mt-5'>
                        <form>
                            <div className='mb-3'>
                                <label className='form-label'>Username</label>
                                <input type="text" className='form-control'/>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Email Address</label>
                                <input type="email" className='form-control'/>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Enter your message</label>
                                <textarea className='form-control' rows='8'></textarea>
                            </div>
                            <button className='btn btn-dark px-5'>Send</button>
                        </form>
                       
                    </div>
                </div>
              </div>
            </section>  

           { /*....footer....*/}

    <footer id='footer'>
        <div className='container-fluid bg-dark text-center text-white'>
            <h2>ASWIN</h2>            
            <p>© Copyright 2022</p>
            <div>
                        <a href="#"><i className="fa-brands fa-facebook p-2"></i></a>
                        <a href="#"><i className="fa-brands fa-google-plus-g p-2"></i></a>
                        <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
                    </div>      
            <p>Made with ❤ by <a href="">ASWIN</a></p>
        </div>
    </footer>   
    </header>      
    )
}
export default Header;
