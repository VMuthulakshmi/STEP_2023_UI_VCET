import React from 'react'
import HeaderBar from '../components/HeaderBar'
import '../styles/styles.css';

const OrdersPage = () => {
    return (
        <div class="main-container order-page">
           <HeaderBar />
            <div class="order">
                <div class="items">
                    <div class="restaurant">
                        <div class="child">
                            <h1 class="title">The Biriyani Point</h1>
                            <div class="address">
                                Indian Biryanis
                            </div>
                            <div class="address">
                                Kodambakkam, Chennai
                            </div>
                        </div>
                    </div>
                    <div class="order-items">
                        <div class="child">
                            <h1 class="title">Order Now</h1>
                            <div class="item-container">
                                <h3 class="item">
                                    Chicken 65 Biryani
                                </h3>
                                <div class="description">
                                    <div class="content">
                                        Boneless Chicken 65 Pieces with Mughal Style Biryani served
                                        with Onion Raitha
                                    </div>
                                    <div class="action">
                                        <button class="add-to-cart">ADD</button>
                                    </div>
                                </div>
                                <div class="cost"><i class="fas fa-rupee-sign"></i> 145</div>
                            </div>
                            <div class="item-container">
                                <h3 class="item">
                                    Chicken 65 Biryani
                                </h3>
                                <div class="description">
                                    <div class="content">
                                        Boneless Chicken 65 Pieces with Mughal Style Biryani served
                                        with Onion Raitha
                                    </div>
                                    <div class="action">
                                        <button class="add-to-cart">ADD</button>
                                    </div>
                                </div>
                                <div class="cost"><i class="fas fa-rupee-sign"></i> 145</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-cart">
                    <form class="order-form" action="">
                        <h3 class="title">My Cart</h3>
                        <div class="item-container dim">
                            <div class="item-title">
                                Chicken 65 Biryani
                            </div>
                            <div class="item-content">
                                <div class="content-left spinner">
                                    <span>
                                        <button onclick="decrement(event,'item0')">-</button>
                                    </span>
                                    <span><input type="text" id="item0" value="1" /></span>
                                    <span>
                                        <button onclick="increment(event,'item0')">+</button>
                                    </span>
                                </div>
                                <div class="content-right cost">
                                    <i class="fas fa-rupee-sign"></i>
                                    <span id="item0Cost" data="145">145</span>
                                </div>
                            </div>
                        </div>
                        <div class="item-container dim">
                            <div class="item-title">
                                Vanilla Ice Cream
                            </div>
                            <div class="item-content">
                                <div class="content-left spinner">
                                    <span>
                                        <button onclick="decrement(event,'item1')">-</button>
                                    </span>
                                    <span><input type="text" id="item1" value="1" /></span>
                                    <span>
                                        <button onclick="increment(event,'item1')">+</button>
                                    </span>
                                </div>
                                <div class="content-right cost">
                                    <i class="fas fa-rupee-sign"></i>
                                    <span id="item1Cost" data="100">100</span>
                                </div>
                            </div>
                        </div>
                        <div class="total-container">
                            <div class="item-content">
                                <div class="content-left">Sub Total</div>
                                <div class="content-right">
                                    <i class="fas fa-rupee-sign"></i> 340
                                </div>
                            </div>
                            <div class="item-content dim">
                                <div class="content-left">Delivery Charges</div>
                                <div class="content-right">45</div>
                            </div>
                            <div class="item-content dim">
                                <div class="content-left">Coupon (SUPER)</div>
                                <div class="content-right">-90</div>
                            </div>
                            <div class="item-content">
                                <div class="content-left">Grand Total</div>
                                <div class="content-right">
                                    <i class="fas fa-rupee-sign"></i> 295
                                </div>
                            </div>
                        </div>
                        <div class="form-field">
                            <button class="app-button" type="submit">PAY NOW</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default OrdersPage