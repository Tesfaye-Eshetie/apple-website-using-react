import React from 'react'
import { Link } from "react-router-dom";

function Body({section, title, description, price, br}) {
    return (
        <section className={section}>
                <div className="container">
                    <div className="title-wrapper">{title}</div>
                    <div className="description-wrapper">{description} <br/>{br && "Starting at $399."} </div>
                    <div className="price-wrapper"><span>{price}</span> <sup><Link to= "/footnote" className="footnote">1</Link></sup></div>
                    <div className="links-wrapper">
                        <ul>
                            <li><Link to="/">Learn more</Link></li>
                            <li><Link to="/">Buy</Link></li>
                        </ul>
                    </div>
                </div>
            </section>
    )
}

export default Body;
