import React from 'react';
import { Link } from 'react-router-dom'


const Nav   = () => {
    return ( <nav>
        <h3>
            Logo
        </h3>
        <ul className="navmenu">

        <Link to='/MovieList'><li>Movie Lists</li></Link>

        <Link to='/Filter'><li>Search bar</li></Link>

        <Link to='/Add'><li>Add New Films</li></Link>

            
            
        </ul>
    </nav> );
}
 
export default Nav ;