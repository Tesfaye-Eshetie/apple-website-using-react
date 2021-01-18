import React from 'react'
import AppleTvLogo from '../images/icons/apple-tv-logo-sm-2xpng.png';
import LittleLogo from '../images/icons/little-logo_md.png';
import WatchLogo from '../images/icons/watch-series5-logo.png';
import Body from './Body';
import YoutubeVideos from './YoutubeVideos/YoutubeVideos'
import { Link } from "react-router-dom";

function Main() {
    return (
        <div>
            <Body section="first-section-wrapper"
               title="iPhone SE" description="Lots to love. Less to spend." br
               price="$9.54/mo. or $229 with trade‑in"/>
    
            <Body section="second-section-wrapper"    
                title="iPhone 11"description="Just the right amount of everything."
                price="From $19.95/mo. or $479 with trade‑in."/>
            <section className="third-section-wrapper">
            <div className="container">
                <div className="title-wrapper">iPad Pro</div>
                <div className="description-wrapper">Your next computer is not a computer.</div>
                <div className="links-wrapper">
                    <ul>
                        <li><Link to="/">Learn more</Link></li>
                        <li><Link to ="/">Buy</Link></li>
                    </ul>
                </div>
            </div>
        </section>
            <section className="fourth-section-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="left-side-wrapper col-sm-12 col-md-6">
                        <div className="title">Buy a Mac or iPad for college. Get AirPods.</div>
                        <div className="links-wrapper">
                            <ul>
                                <li><Link to="/">Shop</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-side-wrapper col-sm-12 col-md-6">
                        <div className="title">Make them yours.</div>
                        <div className="description">Personalize your AirPods with free engraving. Only at Apple.</div>
                        <div className="links-wrapper">
                            <ul>
                                <li><Link to="/">Learn more</Link></li>
                                <li><Link to ="/">Buy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <section className="fifth-section-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="left-side-wrapper col-sm-12 col-md-6 ">
                        <div className="title">Apple Card Monthly Installments</div>
                        <div className="description">Pay for your new Apple products over time, interest-free with Apple Card.<sup><Link to = "/footnote-1" className="footnote">2</Link></sup></div>
                        <div className="links-wrapper">
                            <ul>
                                <li><Link to="/">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-side-wrapper col-sm-12 col-md-6">
                        <div className="logo-wrapper"><img src={AppleTvLogo} alt="/"/></div>
                        <div className="show-title-logo"><img src={LittleLogo} alt="show title"/></div>
                        <div className="show-info">From<br/><span>Sara Bareilles <span className="bullet-delimiters">●</span> J.J. Abrams <span className="bullet-delimiters">●</span> Jessie Nelson</span></div>
                        <div className="links-wrapper">
                            <ul>
                                <li><Link to= "/">Watch the complete season</Link></li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <section className="sixth-section-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="left-side-wrapper col-sm-12 col-md-6">
                        <div className="logo-wrapper title">
                            <img src={WatchLogo} alt="/"/>
                        </div>
                        <div className="description">With the Always-On Retina display. You’ve never seen a watch like this.
                        </div>
                        <div className="links-wrapper">
                            <ul>
                                <li><Link to="/">Learn more</Link></li>
                                <li><Link to ="/">Buy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-side-wrapper col-sm-12 col-md-6 ">
                        <div className="title">Apple's approach to reopening our stores</div>
                        <div className="links-wrapper">
                            <ul>
                                <li><Link to ="/">Read the letter</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        <YoutubeVideos />
        </div>
    )
}

export default Main


