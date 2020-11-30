import React from 'react'

import CartUi from './CartUi';
import { ProductConsumer } from './Context'
export default function Cart() {
    return (
        <React.Fragment>
            <ProductConsumer>
                {val => {
                    const { Cart } = val;

                    return Cart.map(ele => {
                        console.log(ele);
                        return <CartUi item={ele} key={ele.id} />
                    })
                }}
            </ProductConsumer>
            <button> clear items </button>
        </React.Fragment>

    )
}
