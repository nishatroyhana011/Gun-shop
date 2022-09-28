import { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../fakeDb/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';

function Alldata(props) {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
            .then(res => res.json())
            .then(da => setData(da))
    }, [])

    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = []
        for(const id in storedCart){
            const addedProduct = data.find(product=> product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [data])

    function buy(product) {
        //console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='grid grid-cols-4'>
            <div className='col-span-3 shop'>
                <h2 className='font-semibold text-red-600 text-xl my-8'>Products</h2>
                <div className='grid grid-cols-3 bg-slate-200 gap-2 p-10'>
                    {
                        data.map(product => <Product gun={product} butonClicked={buy}></Product>)
                    }
                </div>
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>

    )
}

export default Alldata;  