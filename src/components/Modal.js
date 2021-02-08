import React from 'react'
import styled from 'styled-components';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom'
export default function Modal() {
    return (
        <ProductConsumer>
            {val => {
                const { modal, modalDetail } = val;
                
                if (!modal) {
                    return null;
                } else {
                    return (
                        <ModalWrapper>
                            <div className="container">
                                <div className='row'>
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center pb-5">
                    <h5>{modalDetail.title}</h5>
                                        <h6>price :${modalDetail.price}</h6>
                                        <img className='col-10' src={modalDetail.img}></img>
                                        <Link to='/'>
                                            <button className="btn btn-primary" 
                                            onClick={()=>val.closeModal()}>
                                               continue shopping
                                            </button>
                                        </Link>
                                        <Link to='/cart'>
                                            <button className="ml-1 btn btn-primary"
                                            onClick={()=>val.closeModal()}>
                                              go to cart
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalWrapper>
                    )
                }
            }}


        </ProductConsumer>


    )
}

const ModalWrapper = styled.div`
     top:0;
     bottom :0;
     left: 0;
     right :0;
    position : fixed;
    background :rgba(0,0,0,0.3);
    bottom;
    display: flex;
    align-items: center ;
    justify-content : center;

    #modal{
         background : white;
    }
    h6 , h5 {
        margin : 10px;
    }
    img{
        margin-bottom : 10px;
    }
`