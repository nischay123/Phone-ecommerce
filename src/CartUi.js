import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { ProductConsumer } from './Context'
export default function CartUi(props) {
    

    return (
        <div class="row">
            <div class="col-1">
                <img class="card-img-top" src={props.item.img} alt="Card image cap" />
            </div>
            <div class="col-2">
                {props.item.title}
            </div>
            <div class="col-2">
                {props.item.price}
            </div>
            <ProductConsumer>
                {value => {
                    return (
                        <>
                            <div class="col-2">
                                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                    <div class="btn-group mr-2" role="group" aria-label="Second group">
                                        <button type="button" class="btn btn-secondary" onClick={()=> value.decCount(props.item.id)}>-</button>
                                        <span type="button" class="btn btn-secondary">{props.item.count}</span>
                                        <button type="button" class="btn btn-secondary" onClick={()=>value.increaseCount(props.item.id)}>+</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-2">
                                <button type="button" class="btn btn-outline-danger" 
                                onClick={()=>value.removeItem(props.item.id)}>
                                    <AiOutlineDelete /></button>

                            </div>
                        </>
                    )
                }}
            </ProductConsumer>

            <div class="col-2">
                {props.item.total}
            </div>

        </div>
    )
}
