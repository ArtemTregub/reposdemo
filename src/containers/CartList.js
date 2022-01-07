import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectGoods
} from '../store/goodsSlice';

import { selectCart, minus, delet } from '../store/cartSlice';
import Cart from '../components/Cart'

function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    // reindex items
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});

    let clickHandler = (event) => {
        if (event.target.getAttribute('class') === 'minus')
            dispatch(minus(event.target.getAttribute('data-key')));

        if (event.target.getAttribute('class') === 'delete')
            dispatch(delet(event.target.getAttribute('data-key')));

    }

    return (
        <div>

            <h1>Cart</h1>
            <table className="cart-table" onClick={clickHandler}>

                <Cart elem={goodsObj} cart={cart} />

            </table>

        </div>
    );
}

export default CartList;