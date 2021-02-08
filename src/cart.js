import React from 'react'
import CartUi from './CartUi';
import { ProductConsumer } from './Context'
export default function Cart() {
    return (
        <React.Fragment>
            <div className="row text-light bg-secondary mx-auto py-3 ">
                <div className="col-2">  Phones  </div>
                <div className="col-2"> Name </div>
                <div className="col-2">  Price </div>
                <div className="col-2"> Quantity </div>
                <div className="col-2"> Remove item </div>
                <div className="col-2"> Total Price </div>
            </div>
            <ProductConsumer>
                {val => {
                    const { Cart } = val;
                    return Cart.map(ele => {
                        console.log(ele);
                        return <CartUi item={ele} key={ele.id} />
                    })
                }}
            </ProductConsumer>
            <ProductConsumer>
                {val => {
                    return <button className='btn btn-primary ml-5 my-5' onClick={val.clrCart}> Clear items </button>
                }}

            </ProductConsumer>

        </React.Fragment>

    )
}
