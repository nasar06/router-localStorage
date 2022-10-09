import React from 'react';

const Cart = ({store, handelRemoveToCart}) => {

    return (
        <div>
            <h2 className='text-3xl'>This is cart</h2>
            { <h4>Quantity {store?.length}</h4> }
            { 
                store?.map(player => <h4>{player.name} <button onClick={()=> handelRemoveToCart(player)} className='bg-red-700 text-white px-1 rounded mt-3'>X</button></h4>)
             }
        </div>
    );
};

export default Cart;

// / 