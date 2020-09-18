import React from 'react';
import Navigation from './Navigation'

function Header(){
    return(
        <header className="border-b font-bold p-3 flex justify-between ">
            AppName
            <Navigation/>
        </header>
     
    )
}
export default Header