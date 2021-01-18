import React from 'react'
import Logo from '../images/icons/logo.png';
import SearchLogo from '../images/icons/search-icon.png';
import Cart from '../images/icons/cart.png';
import TopSection from '../Nav/TopSection';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <div className="nav-wrapper fixed-top">
                <div className="container">
                    <nav className="navbar navbar-toggleable-sm navbar-expand-md">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                            ☰
                        </button>
                        <Link to ="/" className="navbar-brand mx-auto"><img src={Logo} alt="main logo"/></Link>
        
                        <div className="navbar-collapse collapse">
                            <ul className="navbar-nav nav-justified w-100 nav-fill">
                                <li className="nav-item"> <Link to = "/mac" className="nav-link js-scroll-trigger">Mac</Link></li>
                                <li className="nav-item"><Link to ="/iphone" className="nav-link js-scroll-trigger">iphone</Link></li>
                                <li className="nav-item"><Link to ="/ipad" className="nav-link js-scroll-trigger" >ipad</Link></li>
                                <li className="nav-item"><Link to = "/watch"className="nav-link js-scroll-trigger" >watch</Link></li>
                                <li className="nav-item"><Link to ="/tv" className="nav-link js-scroll-trigger" >tv</Link></li>
                                <li className="nav-item"><Link to ="/music" className="nav-link js-scroll-trigger" >Music</Link></li>
                                <li className="nav-item"><Link to = "/support" className="nav-link js-scroll-trigger" >Support</Link></li>
                                <li className="nav-item" ><Link to = "/search" className="nav-link js-scroll-trigger"><img src={SearchLogo} alt="search log"/></Link></li>
                            </ul>
                        </div>
                        <Link to = "/cart" className="nav-link js-scroll-trigger" ><img src={Cart} alt="cart logo"/></Link>
                    </nav>
                </div>
            </div>
            <section className="top-section-wrapper">
                <TopSection topWrapper="covid-19-case-wrapper"
                internalWrapper="internal-covid-19-case-wrapper"
                content="Evaluate COVID-19 symptoms and understand next steps"/>
                <TopSection topWrapper="shopping-info-wrapper"
                internalWrapper="internal-info-wrapper"
                content ="Shop online" addtionalContent/>
            </section> 
            
        </div>
    )
}

export default Nav
