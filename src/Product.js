import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ProductConsumer } from './Context';
export default function Product(props) {
    return (
        <div class="col-xs-12 col-sm-6 col-lg-3">
            <div class="card mt-3">
                <ProductConsumer>
                    {val => {
                        return (
                            <React.Fragment>
                                <Link to='detail' onClick={() => val.handleDetails(props.item.id)}>
                                    <img class="card-img-top" src={props.item.img} alt="Card image cap" />
                                </Link>
                                <div class="card-body">
                                    <button className="btn btn-primary" disabled={!props.item.incart ? false : true}
                                        onClick={() => { val.handleCart(props.item.id) }}>
                                        {!props.item.incart ? <AiOutlineShoppingCart /> : "Add cart"}
                                    </button>
                                    <div className="card-footer d-flex justify-content-between">
                                        <p> {props.item.title}</p>
                                        <div>
                                            ${props.item.price}
                                        </div>
                                    </div>
                                </div>


                            </React.Fragment>

                        )
                    }}

                </ProductConsumer>
            </div>
        </div>
    )
}

