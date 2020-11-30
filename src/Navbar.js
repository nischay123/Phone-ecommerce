import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineHome  ,AiOutlineShoppingCart} from "react-icons/ai";

export default function Navbar() {
    return (
        <React.Fragment>

            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">

                <Link to='/'>
                    <button type="button" class="btn btn-primary"><h3><AiOutlineHome /> </h3></button>
                </Link>

                <button class="navbar-toggler pd-5 ml-5" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link pd-5 ml-5" href="#">product <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>

                </div>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to='/cart' class="nav-link   mr-5">
                            
                        <button type="button" class="btn btn-primary"><h3> <AiOutlineShoppingCart/></h3></button> 
                         
                        <div className='mx-2'> my cart </div>
                        </Link>
                          
                    </li>
                </ul>

            </nav>

        </React.Fragment>
    )
}
