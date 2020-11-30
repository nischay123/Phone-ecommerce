
import React, { useState } from 'react'
import Product from './Product'
import { ProductConsumer } from './Context'


export default function Productlist() {



    return (
        <ProductConsumer >
            { (val) => {
                return val.Data.map(ele =>{
                
                return <Product key={ele.id} item={ele}/>
                   
                })

            }

            }


        </ProductConsumer>
    )
}
