import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { ProductConsumer } from './Context';
export default function detail() {
    return (
        <div className="container ">

            <ProductConsumer>

                {(val) => {
                    const { id, title, img, price, company, info, inCart } = val.Details;
                    return (
                        <div className="container mt-5">
                            <div className='row'>
                                <div class="col-md-4 px-0">
                                    <img src={img} class="img-fluid " alt="Responsive image"></img>
                                </div>
                                <div class="col-md-8 pl-4">
                                    <h3 className='text-align-center'>{title}</h3>
                                    <p> company :{company}</p>
                                    <p>
                                        {info}
                                    </p>
                                    <p class="text-muted">
                                        Price : ${price}
                                    </p>
                                    <button className="btn btn-outline-primary mx-auto" > {!inCart ? <AiOutlineShoppingCart /> : "Added to cart"}</button>
                                    <Link to='/'>
                                    <button className="btn btn-primary mx-auto" > HOME </button>
                                    </Link>
                                </div>


                            </div>
                        </div>


                    )
                }}
            </ProductConsumer>



        </div>
    )
}
