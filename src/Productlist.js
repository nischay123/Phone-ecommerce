
import React, { useState } from 'react'
import Product from './Product'
import { ProductConsumer } from './Context'


export default function Productlist() {



    return (
        <div className='container'>
            <div class="row">
                <ProductConsumer >
                    {(val) => {
                        return val.Data.map(ele => {
                            return <Product key={ele.id} item={ele} />
                        })
                    }

                    }


                </ProductConsumer>

            </div>
        </div>
    )
}
