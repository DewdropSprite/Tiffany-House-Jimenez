import { useState } from 'react';



function Header() {
    const[name, setName] = useState('Tiffany')
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count +1)
    }
    
    return (
    <div id="header">
         <p>Hello! My name is {name}. I am in the Header
         </p>

    </div>
    )
}

export default Header;