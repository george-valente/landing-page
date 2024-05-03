import { Menu, X } from "lucide-react";
import { useState } from "react";


export function Navbar(){
    const [nav, setNav] = useState(false); 

    const handleNav = () => {
        setNav(!nav); 
    }
    
    return(
        <div className = " flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className = "w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
            <ul className = "hidden md:flex ">
                <li className = "p-4">Home</li>
                <li className = "p-4">Company</li>
                <li className = "p-4">Resources</li>
                <li className = "p-4">About</li>
                <li className = "p-4">Contact</li>
            </ul>
            <div onClick= {handleNav} className = "block md:hidden">
                {/* o contrário do que a nav é atualmente, fica alternando entre um e outro, se for um muda para o outro. */}
                {!nav ? <Menu/> : <X/>}
            </div>
            
                <ul className = {nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                    <h1 className = "w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
                        <li className = "p-4 border-b border-gray-600">Home</li>
                        <li className = "p-4 border-b border-gray-600">Company</li>
                        <li className = "p-4 border-b border-gray-600">Resources</li>
                        <li className = "p-4 border-b border-gray-600">About</li>
                        <li className = "p-4 ">Contact</li>
                </ul>
            {/* </div> */}
        </div>
    )
}