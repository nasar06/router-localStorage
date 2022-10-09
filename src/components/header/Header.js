import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-orange-400 p-2 text-center text-white text-bold pt-5 border-b'>
            <Link className='p-2 mr-3 rounded' to='/home'>Home</Link>
            <Link className='p-2 mr-3 rounded' to='addedPlayer'>added player</Link>
            <Link className='p-2 mr-3 rounded' to='about'>About</Link>
        </div>
    );
};

export default Header;