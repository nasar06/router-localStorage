import React from 'react';

const Player = ({player, handelAddToCart}) => {
    const {img, name, description, age, time} = player
    return (
        <div className='border'>
            <img className='w-full h-56 mx-auto' src={img}></img>
            <div className='p-3'>
                <h2>{name}</h2>
                <p>Age: {age}</p>
                <p>Time {time}</p>
                <p><small>{description}</small></p>
                <button onClick={()=> handelAddToCart(player)} className='py-2 px-3 bg-orange-400 rounded my-4 bold text-white'>Add Player</button>
            </div>
        </div>
    );
};

export default Player;