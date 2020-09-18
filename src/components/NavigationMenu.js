import React from 'react'
import {
    Link
}from "react-router-dom"

function  NavigationMenu(props){

    return(
        <div>
           <div className="font-bold py-3">
                AppName
                           
            </div>
            <ul>
                    <li className="bg-pink">
                        <Link to="./" 
                        className="text-blue-500 p-3 border-t border-b block"
                        
                        onClick={props.closeMenu}
                        >
                            Home</Link>
                    </li>
                    <li>
                        <Link to="./about" 
                        className="text-blue-500 p-3  border-b block"
                        onClick={props.closeMenu}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="./contacts"
                        className="text-red-500 p-3 border-b block"
                        onClick={props.closeMenu}
                        >
                            contacts
                        </Link>
                    </li>
                </ul>

        </div>
    )
}
export default NavigationMenu