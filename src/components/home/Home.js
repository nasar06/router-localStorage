import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../cart/Cart';
import Player from '../player/Player';


const Home = () => {
    const players = useLoaderData();
    const [cart, setCart] = useState([]);
    const [store, setStore] = useState([]);

    useEffect( ()=>{
        const getPlayer = localStorage.getItem('player-cart');
        const pgetPlayer = JSON.parse(getPlayer);
        setStore(pgetPlayer);
    },[cart])

    const handelAddToCart =(player) =>{
        const playerInfo = cart.find(pl => pl.id === player.id);
         if(playerInfo){
            alert('ar hobe na')
         }
         else{
            const newPlayer = [...cart, player]
            localStorage.setItem('player-cart', JSON.stringify(newPlayer))
            setCart(newPlayer);
         }
    }

    const handelRemoveToCart = (player) =>{
        const restPlayer = cart.filter(pl => pl.id !== player.id);
        localStorage.setItem('player-cart', JSON.stringify(restPlayer))
        setCart(restPlayer)

    }


    return (
            <div className='md:grid md:grid-cols-5'>
            <div className='md:col-span-4 grid md:grid-cols-3 gap-5 m-5'>
                {
                    players.map(player => <Player 
                        key={player.id}
                        player={player}
                        handelAddToCart={handelAddToCart}
                    ></Player>)
                }
            </div>
            <div className='md:col-span-1 min-h-80 bg-orange-400 mt-5 rounded p-3 text-white'>
                <Cart store={store} handelRemoveToCart={handelRemoveToCart}></Cart>
            </div>
        </div>
    );
};

export default Home;