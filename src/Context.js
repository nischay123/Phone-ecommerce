import React, { useContext, useState, useEffect } from 'react';
import { Data, detailProduct } from './components/data';

const ProductContext = React.createContext();

export default function ProductProvider(props) {
    const [data, setData] = useState(Data);
    const [detail, setdetail] = useState(detailProduct);
    const [cart, setCart] = useState([]);
    const [modal, setModal] = useState(false);
    const [modalDetail, setModaldetail] = useState(detailProduct);
    const [isState, setIsState] = useState(false);
    const [id, setId] = useState(null);
    
    const getProductById = (id) => {
        const product = data.find(item => item.id == id);
        return product;
    }
    const closeModal = () => {
        setModal(false);
    }

    const handleDetails = (id) => {
        const product = getProductById(id);

        return setdetail(product);
    }
    const increaseCount = (id) => {
        console.log(' increase');
        const product = getProductById(id);
        const index = cart.indexOf(product);
        const temp = [...cart];
        product.count += 1;
        product.total *= 2;
        temp[index] = product;
        setCart(temp);
    }
    const decCount = (id) => {
        const product = getProductById(id);
        const temp = [...cart];
        if (product.count === 1) {
            const index = cart.indexOf(product);
            temp.splice(index, 1);
            return setCart(temp);
        }
        const index = cart.indexOf(product);
        product.count -= 1;

        product.total /= 2;
        temp[index] = product;
        return setCart(temp);
    }
    const clrCart =()=>{
        setCart([]);
    }
    const removeItem = (id)=>{
        const product = getProductById(id);
        const index = cart.indexOf(product);
        const temp = [...cart];
        temp.splice(index, 1);
        return setCart(temp);
    } 
    useEffect(() => {
        const product = getProductById(id);

        console.log(product);
        if (product) {
            const tempcart = [...cart, product];


            const temp = [...data];
            setModal(!modal);
            setModaldetail(product);
            const index = data.indexOf(product);
            product.incart = true;
            product.total = product.price;
            product.count = 1;
            temp[index] = product;
            setCart(tempcart);
            setData(temp);
            console.log(tempcart);
        }
    }, [isState]);

    const handleCart = (id) => {
        setId(id);
        setIsState(!isState);
    }

    return (
        <ProductContext.Provider value={
            {
                Data: data,
                Details: detail,
                handleCart: handleCart,
                handleDetails: handleDetails,
                closeModal: closeModal,
                modal: modal,
                modalDetail: modalDetail,
                Cart: cart,
                increaseCount: increaseCount,
                decCount: decCount,
                removeItem :removeItem,
                clrCart:clrCart
            }
        } >
            {props.children}
        </ProductContext.Provider>
    )
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };