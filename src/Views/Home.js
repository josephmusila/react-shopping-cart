import React from 'react'
//import HelloWorld from '../components/HelloWorld'
/* import logo512 from './public/logo512.png'
console.log(logo512); */
function Home(){
    return(
        <div>
            {/* <h1 className="font-bold text-2xl mb-4">homepage</h1> 
            <p className="p-4 text-2xl">
                Welcome to my App
                
            </p> */}
            <label>
                Name:
                <input type="text" />
            </label><br/>
            <input type="submit" value="submit"/>
           
        </div>
    )
}
export default Home