import React from 'react';

const Product = (props) => {
    //console.log(props.gun)
    const  buy  = props.butonClicked;
    const { name, img, price } = props.gun;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p>
                <div className="card-actions justify-between">
                    <button className="btn btn-primary" onClick={()=>buy(props.gun)}>Buy Now</button>
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Product;