import {useState} from 'react'
import {Route , Switch, Link} from 'react-router-dom'
import Login from './login'
// import  "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
import Contact from './contact'

 function App() {
   

  return (
    <>

    <header className="ud-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg ">
              <a className="navbar-brand" href="/">
              <p> BBWF </p>
              </a>
              <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"  aria-label="Toggle navigation">
              <span class="toggler-icon"> </span>
                <span class="toggler-icon"> </span>
                <span class="toggler-icon"> </span>
                
               
              </button>
             <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                <ul id="nav" className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#home">Home</a>
                  </li>

                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#pricing">Donation</a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="ud-menu-scroll" href="#team">Team</a>
                  </li> */}
                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#contact">Contact</a>
                  </li>
                  
                  {/* <li className="nav-item">
                <Link className="ud-menu-scroll"  to="/Dashboard"> Dashboard 
                </Link>
                </li> */}
              
 
                {/* <li className="nav-item">
                <Link className="ud-menu-scroll"  to="/login"> Login 
                </Link>
                </li> */}
                {/* <a className="ud-main-btn ud-white-btn" href="javascript:void(0)">
                  Sign Up
                </a> */}


                {/* <li className="nav-item">
                <Link className="ud-menu-scroll"  to="/signup"> Signup 
                </Link>
                </li> */}


              </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    
    <section className="ud-hero" id="home">
      <div className="container" >
        <div className="row">
          <div className="col-lg-12" >
            <div className="ud-hero-content wow fadeInUp" data-wow-delay=".2s" >
              <h1 className="ud-hero-title" >
                Bhaskar Bharti Welfare Foundation
              </h1>
             
            </div>
            <div
              className="ud-hero-brands-wrapper wow fadeInUp"
              
            >
              {/* <img src="assets/images/hero/brand.svg" alt="brand" /> */}
            </div>
            <div className="ud-hero-image wow fadeInUp" data-wow-delay=".25s">
              <img src="assets/images/logoram.png" alt="hero-image" style={{width:'290px', height:'290px'}} />
              <p className="ud-hero-desc">
              <br/>
              &#8226; सर्वशक्तिमते प्रमात्मने श्री रामायण नमः <br/>
              &#8226; श्री स्वामी सत्यानंद जी महाराज <br/>
              &#8226; राम राम कहिए-सदा सुखी रहिए<br/>
              &#8226; हे प्रभु! सभी पर अपनी कृपा दृष्टि बनाए रखना<br/>
            <span className='hindifont'> कर भला - हो भला  </span><br/>
              &#8226; हो सकता है - आप को साहयता कि जरूरत ना हो<br/>
              &#8226; पर किसी और जरूरत मंद को आपकी सहायता की जरूरत हो सकती है इसलिए आप सहायता राशि दे कर सहयोग कर सकते हैं
              
              </p>

              {/* <img
                src="assets/images/hero/dotted-shape.svg"
                alt="shape"
                className="shape shape-1"
              />
              <img
                src="assets/images/hero/dotted-shape.svg"
                alt="shape"
                className="shape shape-2"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      
    </section>
    
    
    <section id="features" className="ud-features">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-section-title">
              <span>Values</span>
              <h2>Main values of Bhaskar Bharti Welfare Foundation </h2>
             
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-sm-6">
            <div className="ud-single-feature wow fadeInUp" data-wow-delay=".1s">
              <div className="ud-feature-icon">
                <i className="lni lni-rocket"></i>
              </div>
              <div className="ud-feature-content">
                <h3 className="ud-feature-title">Vision</h3>
                <p className="ud-feature-desc">
                Bhaskar Bharti welfare foundation vision is to create a just and equitable society by transforming individuals from socially and economically excluded communities into agents of change.                </p>
               
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-sm-6">
            <div className="ud-single-feature wow fadeInUp" data-wow-delay=".15s">
              <div className="ud-feature-icon">
                <i className="lni lni-world"></i>
              </div>
              <div className="ud-feature-content">
                <h3 className="ud-feature-title">Mission</h3>
                <p className="ud-feature-desc">
                &#8226; To impart skill training to young & to assist the elderly and destitute people in the community.
                <br/>
                &#8226; To lift the people out of poverty and to form vital & healthy lives for their families now and for the future.
                <br/>
                &#8226; To fight for the development and sustainability of helpless people and safeguard their basic human rights
                <br/>
                &#8226; To create a world of tolerance, hope and social justice.
                <br/> 
             </p>    
              </div>
            </div>
          </div>
 {/*
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-feature wow fadeInUp" data-wow-delay=".2s">
              <div className="ud-feature-icon">
                <i className="lni lni-grow"></i>
              </div>
              <div className="ud-feature-content">
                <h3 className="ud-feature-title">Purpose</h3>
                <p className="ud-feature-desc">
                Bhaskar Bharti welfare foundation vision is to create a just and equitable society by transforming individuals from socially and economically excluded communities into agents of change.                </p>
               
              </div>
            </div>
          </div>


          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-feature wow fadeInUp" data-wow-delay=".25s">
              <div className="ud-feature-icon">
                <i className="lni lni-protection"></i>
              </div>
              <div className="ud-feature-content">
                <h3 className="ud-feature-title">Trust</h3>
                <p className="ud-feature-desc">
                Bhaskar Bharti welfare foundation vision is to create a just and equitable society by transforming individuals from socially and economically excluded communities into agents of change.                </p>
                
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  
    <section id="about" className="ud-about">
      <div className="container">
        <div className="ud-about-wrapper wow fadeInUp" data-wow-delay=".2s">
          <div className="ud-about-content-wrapper">
            <div className="ud-about-content">
              <span className="hello">About Us</span>
              <h2>Bhaskar Bharti welfare foundation</h2>
              <p>
              Bhaskar Bharti welfare foundation is unique because there is huge respect for Diversity. You are not judged because of your gender, caste, religion, sexuality, your physical appearance, marital status etc. 
              You can BE WHO YOU ARE at BBWF. Most people or organisations just talk about diversity and inclusion, it is actually lived at BBWF. It is the BBWF way. BBWF also believes in the potential of people. We bring change in the lives of people and the BBWF staff is its greatest strength!”
              </p>

              <p>
              Education empowers an individual to earn their livelihood and also increases one's awareness on a range of issues.
               From healthcare, to appropriate social behavior, to understanding one's rights – Bhaskar Bharti welfare foundation seeks to educate, empower and cultivate better citizens.
              </p>
              {/* <a href="javascript:void(0)" className="ud-main-btn">Learn More</a> */}
            </div>
          </div>
          {/* <div className="ud-about-image">
            <img src="assets/images/about/about-image.svg" alt="about-image" />
          </div> */}
        </div>
      </div>
    </section>
            <br/>
            <br/>
            
    {/* pdf slider */}
    <div className="ud-section-title mx-auto text-center">
    <h2>Important Documents</h2>
     </div>         
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">

  <div class="carousel-inner">
    <div class="carousel-item active">
      <a href="assets/pdf/pan1.pdf">
      <img src="assets/images/pan.png" class="d-block w-100" alt="..."/></a>
    </div>

    <div class="carousel-item">
    <a href="assets/pdf/aodi.pdf">
      <img src="assets/images/aodi.png" class="d-block w-100" alt="..."/></a>
    </div>
    
    <div class="carousel-item">
    <a href="assets/pdf/coi.pdf ">
      <img src="assets/images/coi.png" class="d-block w-100" alt="..."/></a>
    </div>

    <div class="carousel-item">
    <a href=" assets/pdf/tanletter.pdf">
      <img src="assets/images/tanletter.png" class="d-block w-100" alt="..."/></a>
    </div>

    <div class="carousel-item">
    <a href="assets/pdf/approveletter.pdf ">
      <img src="assets/images/approveletter.png" class="d-block w-100" alt="..."/></a>
    </div>
    
    <div class="carousel-item">
    <a href=" assets/pdf/240008.pdf">
      <img src="assets/images/24000.png" class="d-block w-100" alt="..."/></a>
    </div>

    <div class="carousel-item">
    <a href=" assets/pdf/aoa.pdf">
      <img src="assets/images/aoa.png" class="d-block w-100" alt="..."/></a>
    </div>

    <div class="carousel-item">
    <a href="assets/pdf/moa.pdf ">
      <img src="assets/images/moa.png" class="d-block w-100" alt="..."/></a>
    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    {/* pdf slider */} 
    <section id="pricing" className="ud-pricing">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-section-title mx-auto text-center">
              <div className="donation">Donation</div>
            </div>
          </div>
        </div>

        <center>
          <img className='support-child' src='assets/images/supportachild.png' alt='support a child'/>
          <img src='assets/images/arrowgif1.gif' style={{width:'75px', height:'40px'}}/>
          <button type="submit" className="ud-main-btn">
           DONATE NOW
          </button> 
        </center>
        {/* <div className="row g-0 align-items-center justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="ud-single-pricing first.png-item wow fadeInUp"
              data-wow-delay=".15s"
            >
              <div className="ud-pricing-header">
                <h3>YOU DONATE</h3>
                <h4>&#8377; 321 </h4>
                <ul> 
                <li>MINIMUM DONATION</li><br/>
                  <li> TO JOIN OUR ORGANISATION</li>
                  
                 </ul>
              </div>
              <div className="ud-pricing-body">
                <ul>
                 
                 
                </ul>
              </div>
              <div className="ud-pricing-footer">
                <a href=" " className="ud-main-btn ud-border-btn">
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="ud-single-pricing active wow fadeInUp"
              data-wow-delay=".1s"s
            >
              <span className="ud-popular-tag">WHAT WE HELP</span>
              <div className="ud-pricing-header">
                <h3></h3> 
                <br></br>
              </div>
              <div className="ud-pricing-body">
                <ul> 
                  <li>&#8377; 100 Level 1</li>
                  <li>&#8377; 200 Level 2</li>
                  <li>&#8377; 300 Level 3</li>
                  <li>&#8377; 400 Level 4</li>
                  <li> upto Level 12</li>
                </ul>
              </div>
              <div className="ud-pricing-footer">
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="ud-single-pricing last-item wow fadeInUp"
              data-wow-delay=".15s"
            >
              <div className="ud-pricing-header">
                <h3>AFTER 1 YEAR</h3>
               <br></br>
              </div>
              <div className="ud-pricing-body">
                <ul>
                  <li>2 YEAR - &#8377; 2000</li>
                  <li>3 YEAR - &#8377; 3000</li>
                  <li>4 YEAR - &#8377; 4000</li>
                  <li>5 YEAR - &#8377; 5000</li>
                  <li> Upto 10 YEARs </li>
                  
                </ul>
              </div>
              <div className="ud-pricing-footer">
                
              </div>
            </div>
          </div>
        </div> */}
        
      </div>
    </section>
   

    {/* <section id="faq" className="ud-faq">
      <div className="shape">
        <img src="assets/images/faq/shape.svg" alt="shape" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-section-title text-center mx-auto">
              <span>FAQ</span>
              <h2>Any Questions? Answered</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
              <div className="accordion">
                <button
                  className="ud-faq-btn collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                  <span className="icon flex-shrink-0">
                    <i className="lni lni-chevron-down"></i>
                  </span>
                  <span>How to use UIdeck?</span>
                </button>
                <div id="collapseOne" className="accordion-collapse collapse">
                  <div className="ud-faq-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                </div>
              </div>
            </div>
            <div className="ud-single-faq wow fadeInUp" data-wow-delay=".15s">
              <div className="accordion">
                <button
                  className="ud-faq-btn collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                >
                  <span className="icon flex-shrink-0">
                    <i className="lni lni-chevron-down"></i>
                  </span>
                  <span>How to download icons from Lineicons?</span>
                </button>
                <div id="collapseTwo" className="accordion-collapse collapse">
                  <div className="ud-faq-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                </div>
              </div>
            </div>
            <div className="ud-single-faq wow fadeInUp" data-wow-delay=".2s">
              <div className="accordion">
                <button
                  className="ud-faq-btn collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                >
                  <span className="icon flex-shrink-0">
                    <i className="lni lni-chevron-down"></i>
                  </span>
                  <span>Is GrayGrids part of UIdeck?</span>
                </button>
                <div id="collapseThree" className="accordion-collapse collapse">
                  <div className="ud-faq-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
              <div className="accordion">
                <button
                  className="ud-faq-btn collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                >
                  <span className="icon flex-shrink-0">
                    <i className="lni lni-chevron-down"></i>
                  </span>
                  <span>Can I use this template for commercial project?</span>
                </button>
                <div id="collapseFour" className="accordion-collapse collapse">
                  <div className="ud-faq-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                </div>
              </div>
            </div>
            <div className="ud-single-faq wow fadeInUp" data-wow-delay=".15s">
              <div className="accordion">
                <button
                  className="ud-faq-btn collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                >
                  <span className="icon flex-shrink-0">
                    <i className="lni lni-chevron-down"></i>
                  </span>
                  <span>Do you have plan releasing Play Pro?</span>
                </button>
                <div id="collapseFive" className="accordion-collapse collapse">
                  <div className="ud-faq-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                </div>
              </div>
            </div>
            <div className="ud-single-faq wow fadeInUp" data-wow-delay=".2s">
              <div className="accordion">
                <button
                  className="ud-faq-btn collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                >
                  <span className="icon flex-shrink-0">
                    <i className="lni lni-chevron-down"></i>
                  </span>
                  <span>Where and how to host this template?</span>
                </button>
                <div id="collapseSix" className="accordion-collapse collapse">
                  <div className="ud-faq-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
  
      

    <Contact/>


  
    <footer className="ud-footer wow fadeInUp" data-wow-delay=".15s">
      <div className="shape shape-1">
        <img src="assets/images/footer/shape-1.svg" alt="shape" />
      </div>
      <div className="shape shape-2">
        <img src="assets/images/footer/shape-2.svg" alt="shape" />
      </div>
      <div className="shape shape-3">
        <img src="assets/images/footer/shape-3.svg" alt="shape" />
      </div>
      <div className="ud-footer-widgets">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-4 col-md-6">
              <div className="ud-widget">
                <a href="/" className="navbar-brand">
                <p>BBWF</p>
                </a>
                <p className="ud-widget-desc">
                Bhaskar Bharti welfare foundation vision is to create a just and equitable society by transforming individuals from socially and economically excluded communities into agents of change. 
                </p>
                <ul className="ud-widget-socials">
                  <li>
                    <a href="https://www.facebook.com/Bhaskar-Bharti-Welfare-Foundation-102625178956392">
                    <i class="lni lni-facebook-original"></i>
                    </a>
                  </li>
                 
                
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-2 col-md-6 col-sm-6">
              <div className="ud-widget">
                <h5 className="ud-widget-title">Quick links</h5>
                <ul className="ud-widget-links">
                  <li>
                    <a href="#home">&#8226;  Home</a>
                  </li>
                  <li>
                    <a href="#about">&#8226;  About</a>
                  </li>
                  <li>
                    <a href="#pricing">&#8226;  Pricing</a>
                  </li>
                  <li>
                    <a href="#contact">&#8226;  Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="ud-widget">
                <h5 className="ud-widget-title">Features</h5>
                <ul className="ud-widget-links">
                  <li>
                    <a href="javascript:void(0)">&#8226; How it works</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">&#8226; Privacy policy</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">&#8226; Terms of service</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">&#8226; Refund policy</a>
                  </li>
                </ul>
              </div>
            </div> */}

          
          </div>
        </div>
      </div>
      <div className="ud-footer-bottom">
        <div className="container">
          <div className="row">
            
            <div className="col-md-4-lg-0 ">
              <p className="ud-footer-bottom-right" >
                <center>Designed and Developed by &nbsp; 
                <a href="https://www.appformers.com" rel="nofollow">Appformers </a>
              </center>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <a href="#home" class="back-to-top">
      <i class="lni lni-chevron-up"> </i>
    </a>

    </>
  );
}

export default App;
