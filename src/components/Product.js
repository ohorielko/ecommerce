import React, { useState } from 'react'
import { products } from '../data/Data'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/CartSlice';

export default function Product() {
    const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  const increaseQty = () => {
    setQty((preQty) => {
      let newQty = preQty + 1;
      return newQty;
    });
  };

  const decreaseQty = () => {
    setQty((preQty) => {
      let newQty = preQty - 1;
      if (newQty < 1) {
        newQty = 1;
      }
      return newQty;
    });
  };

  const handleAddToCart = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      qunatity: qty,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
    navigate("/cart");
  };

  const [menuItems, setMenuItem] = useState(products);

  const filterItems = (category) => {
    const newItems = products.filter((item) => item.category === category);
    setMenuItem(newItems);

    // for all data show
    if (category === "all") {
      setMenuItem(products);
      return;
    }
  };
  return (
    <>
    <div className='container-fluid fruite py-5'>
        <div className='container py-5'>
            <div className='text-center'>
                <div className='row g-4'>
                    <div className='col-lg-4 text-start'>
                        <h1>Our Organic Product</h1>
                    </div>
                    <div className='col-lg-8 text-end'>
                        <ul className='nav nav-pills d-inline-flex text-center mb-5'>
                            <li className='nav-item'>
                                <a href="" className='d-flex m-2 py-2 bg-light rounded-pill' onClick={() => filterItems("all")}><span className='text-dark' style={{width: "130px"}}>All Products</span></a>
                            </li>
                            <li className='nav-item'>
                                <a onClick={() => filterItems("Fruits")} className='d-flex m-2 py-2 bg-light rounded-pill'><span className='text-dark' style={{width: "130px"}}>Fruits</span></a>
                            </li>
                            <li className='nav-item'>
                                <a onClick={() => filterItems("Seafood")} className='d-flex m-2 py-2 bg-light rounded-pill'><span className='text-dark' style={{width: "130px"}}>Seafood</span></a>
                            </li>
                            <li className='nav-item'>
                                <a onClick={() => filterItems("Diary")} className='d-flex m-2 py-2 bg-light rounded-pill'><span className='text-dark' style={{width: "130px"}}>Diary</span></a>
                            </li>
                            <li className='nav-item'>
                                <a onClick={() => filterItems("Bakery")} className='d-flex m-2 py-2 bg-light rounded-pill'><span className='text-dark' style={{width: "130px"}}>Bakery</span></a>
                            </li>
                            <li className='nav-item'>
                                <a onClick={() => filterItems("Ukrainian")} className='d-flex m-2 py-2 bg-light rounded-pill'><span className='text-dark' style={{width: "130px"}}>Ukrainian</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='tab-pane fade show p-0 active'>
                <div className='row g-4'>
                    <div className='col-lg-12'>
                        <div className='row g-4 '>
                            { menuItems.map((val, index) => (
                                    <div style={{height: "auto"}} className='col-md-6 col-lg-4 col-xl-3' key={index}>
                                        <div className='rounded position-relative fruite-item'>
                                        <div className='fruite-img'>
                                            <img src={val.product_img} alt="img" className='img-fluid w-100 rounded-top' style={{height: "240px"}}/>
                                        </div>
                                        <div 
                                            className='text-white bg-secondary px-3 py-1 rounded position-absolute' 
                                            style={{top: "10px", left: "10px"}}
                                        >
                                            {val.category}
                                        </div>

                                        <div className='p-4 border border-secondary border-top-0 rounded-bottom'>
                                            <h4>{val.product_name}</h4>
                                            <p>{val.description}</p>
                                            <div className='d-flex justify-content-between flex-lg-wrap'>
                                                <p className='text-dark fs-5 fw-bold mb-0'>$ {val.price}</p>
                                                <button onClick={() => handleAddToCart(val)}
                                                    type='btn'
                                                    className='btn border border-secondary rounded-pill px-3 text-primary'
                                                >
                                                    <i className='fa fa-shopping-bag me-2 text-primary'></i> Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}