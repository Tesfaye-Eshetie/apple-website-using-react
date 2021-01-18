import React from 'react'
import { Link } from "react-router-dom";

function TopSection({topWrapper, internalWrapper, content, addtionalContent}) {
    return (
        <div className={topWrapper}>
            <div className="container">
                <div className={internalWrapper}>
                    <Link to="/">{content}</Link>{addtionalContent && " and get free, no-contact delivery, Specialist help, and more."}
                </div>
            </div>
        </div>
    )
}

export default TopSection;
