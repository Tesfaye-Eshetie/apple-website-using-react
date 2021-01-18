import React from 'react'
import Flag from '../images/icons/Flag.png';
import { Link } from "react-router-dom";
import './Toggler.js';


export default function Footer() {
    return (
        <footer className="footer-wrapper">
            <div className="container"> 
                <div className="upper-text-container">
                    <p>1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X in good condition. iPhone SE promotional pricing is after trade-in of iPhone 8 in good condition. Additional trade‑in values require purchase of a new iPhone, subject to availability and limits. Must be at least 18. Apple or its trade-in partners reserve the right to refuse or limit any Trade In transaction for any reason. In‑store trade‑in requires presentation of a valid, government-issued photo ID (local law may require saving this information). Sales tax may be assessed on full value of new iPhone. Additional terms from Apple or Apple’s trade-in partners may apply. Monthly pricing: Available to qualified customers and requires 0% APR, 24-month installment loan with Citizens One or Apple Card Monthly Installments and iPhone activation with AT&T, Sprint, T-Mobile, or Verizon. Taxes and shipping not included. Additional Apple Card Monthly Installments terms are in the <Link to="/"> Customer Agreement</Link >. Additional iPhone Payments terms are <Link to="/"> here</Link >.</p>
                    <p>2. Apple Card Monthly Installments is available for certain Apple products and is subject to credit approval and credit limit. See <Link to="/"> https://support.apple.com/kb/HT211204</Link >for more information about eligible products. iPhone activation required on iPhone purchases made at an Apple Store with one of these national carriers: AT&T, Sprint, Verizon, or T-Mobile. Variable APRs for Apple Card other than Apple Card Monthly Installments range from 10.99% to 21.99% based on creditworthiness. Rates as of April 1, 2020. Taxes and shipping are not included in Apple Card Monthly Installments and are subject to your standard purchase APR. See the Apple Card customer agreement for more information.</p>
                    <p>3. Limited to the first 100,000 transactions. Subject to $10 minimum purchase.</p>
                    <p>Magic Keyboard sold separately.</p>
                    <p>Apple TV+ is $4.99/month after free trial. One subscription per Family Sharing group. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other <Link to="/"> terms</Link >apply.</p>
                </div>
                <div className="footer-links-wrapper row"> 
                    <div className="links-wrapper-1 col-sm-12 col-md">
                        <h3>Shop and Learn</h3>
                        <ul>
                            <li><Link to="/">Mac</Link></li>
                            <li><Link to ="/">iPad</Link></li>
                            <li><Link to="/">iPhone</Link></li>
                            <li><Link tof="/">Watch</Link></li>
                            <li><Link to="/">TV</Link></li>
                            <li><Link to="/">Music</Link></li>
                            <li><Link to="/">AirPods</Link></li>
                            <li><Link to="/">HomePod</Link></li>
                            <li><Link to="/">iPod touch</Link></li>
                            <li><Link to="/">Accessories</Link></li>
                            <li><Link to="/">Gift Cards</Link></li>
                        </ul>
                    </div> 
                    <div className="links-wrapper-2 col-sm-12 col-md">
                        <h3>Services</h3>
                        <ul>
                            <li><Link to="/">Apple Music</Link ></li>
                            <li><Link to="/">Apple News+</Link ></li>
                            <li><Link to="/">Apple TV+</Link ></li>
                            <li><Link to="/">Apple Arcade</Link ></li>
                            <li><Link to="/">Apple Card</Link ></li>
                            <li><Link to="/">iCloud</Link ></li>
                        </ul>
                        <h3>Account</h3>
                        <ul>
                            <li><Link to="/">Manage Your Apple ID</Link ></li>
                            <li><Link to="/">Apple Store Account</Link ></li>
                            <li><Link to="/">iCloud.com</Link ></li>
                        </ul>					
                    </div> 
                    <div className="links-wrapper-3 col-sm-12 col-md">
                        <h3>Apple Store</h3>
                        <ul>
                            <li><Link to="/">Find a Store</Link ></li>
                            <li><Link to="/">Genius Bar</Link ></li>
                            <li><Link to="/">Today at Apple</Link ></li>
                            <li><Link to="/">Apple Camp</Link ></li>
                            <li><Link to="/">Field Trip</Link ></li>
                            <li><Link to="/">Apple Store App</Link ></li>
                            <li><Link to="/">Refurbished and Clearance</Link ></li>
                            <li><Link to="/">Financing</Link ></li>
                            <li><Link to="/">Apple Trade In</Link ></li>
                            <li><Link to="/">Order Status</Link ></li>
                            <li><Link to="/">Shopping Help</Link ></li>
                        </ul>
                    </div>  
                    <div className="links-wrapper-4 col-sm-12 col-md">
                        <h3>For Business</h3>
                        <ul>
                            <li><Link to="/">Apple and Business</Link ></li>
                            <li><Link to="/">Shop for Business</Link ></li>
                        </ul>		
                        <h3>For Education</h3>
                        <ul>
                            <li><Link to="/">Apple and Education</Link ></li>
                            <li><Link to="/">Shop for College</Link ></li>
                        </ul>
                        <h3>For Healthcare</h3>
                        <ul>
                            <li><Link to="/">Manage Your Apple ID</Link ></li>
                            <li><Link to="/">Apple Store Account</Link ></li>
                            <li><Link to="/">iCloud.com</Link ></li>
                        </ul>	
                        <h3>For Government</h3>
                        <ul>
                            <li><Link to="/">Apple and Education</Link ></li>
                            <li><Link to="/">Shop for College</Link ></li>
                        </ul>
                    </div> 
                    <div className="links-wrapper-5 col-sm-12 col-md">
                        <h3>Apple Values</h3>
                        <ul>
                            <li><Link to="/">Find a Store</Link ></li>
                            <li><Link to="/">Genius Bar</Link ></li>
                            <li><Link to="/">Today at Apple</Link ></li>
                            <li><Link to="/">Apple Camp</Link ></li>
                            <li><Link to="/">Field Trip</Link ></li>
                            <li><Link to="/">Apple Store App</Link ></li>
                        </ul>
                        <h3>About Apple</h3>
                        <ul>
                            <li><Link to="/">Find a Store</Link ></li>
                            <li><Link to="/">Genius Bar</Link ></li>
                            <li><Link to="/">Today at Apple</Link ></li>
                            <li><Link to="/">Apple Camp</Link ></li>
                            <li><Link to="/">Field Trip</Link ></li>
                            <li><Link to="/">Apple Store App</Link ></li>
                        </ul>						
                    </div> 
                </div>
                <div className="my-apple-wrapper"> 
                    More ways to shop: <Link to="/">Find an Apple Store</Link >or <Link to="/">other retailer</Link >near you. Or call 1-800-MY-APPLE.
                </div>
                <div className="copyright-wrapper row">
                    <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
                        Copyright &copy; 2020 Apple Inc. All rights reserved.
                    </div>
                    <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
                        <ul>
                            <li><Link to="/">Privacy Policy</Link ></li>
                            <li><Link to="/">Terms of Use</Link ></li>
                            <li><Link to="/">Sales and Refunds</Link ></li>
                            <li><Link to="/">Legal</Link ></li>
                            <li><Link to="/">Site Map</Link ></li>
                        </ul>
                    </div>
                    <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
                        <div className="flag-wrapper"><img src={Flag} alt="flag"/></div> 
                        <div className="footer-country-name">United States</div> 
                    </div>
                </div>
            </div>
        </footer>  
        )
}
