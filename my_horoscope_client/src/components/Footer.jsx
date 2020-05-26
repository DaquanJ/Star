import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return ( 
        <div>
            <ul>
               <Link to='/horoscope' > <li> Horoscope </li> </Link>
               <Link to='/myhoroscopes' > <li> My Horoscopes </li> </Link> 
               <Link to='/reviews' > <li> Reviews </li> </Link>
                <li> &copy; Horoscopes 2020 By Per Scholas </li>
            </ul>
        </div>
     );
}
 
export default Footer;