import React, {Component} from 'react'
import CheckoutNavbar from '../../components/Navbars/CheckoutNavbar.jsx'
import DarkFooter from '../../components/Footers/DarkFooter.jsx'
import '../../assets/css/reset.css'
import './Checkout.scss'
import CheckoutOrderComponent from './CheckoutOrderComponent/CheckoutOrderComponent.jsx'
import Bank from './Bank/Bank'
import Adult from 'assets/img/adult.svg'
import Child16 from 'assets/img/child16.svg'
import Switch from "react-bootstrap-switch"

class Checkout extends Component {

    render(){
        return (
            <>
                <CheckoutNavbar/>
                <main className="main">
                <section className="section section-checkout">
                <div className="checkout-block">
                    <div className="checkout-block-text">
                        <p className="checkout-block-text__title">Бэйблейд</p>
                        <p className="checkout-block-text__value">від 3500 грн.</p>
                    </div>
                    <div className="">
                        <div className="checkout-block__img"></div>
                        <p className="checkout-block-text__title2">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste id sapiente vitae consequatur quisquam, aut culpa officia deserunt aliquam, voluptas libero, quam ipsa accusamus laborum quae quia dicta similique repudiandae sint magni consequuntur aspernatur unde suscipit? Numquam qui voluptas necessitatibus ea, sint, velit ad tempore earum aliquid, voluptatum explicabo impedit? Odit explicabo inventore assumenda laudantium odio ea adipisci, officiis libero, vero voluptatibus deserunt nihil commodi aut neque eius amet quis possimus eos reiciendis veniam, sint voluptates aliquid eligendi. Facilis quaerat iste, a nihil tenetur fugit earum cumque at minus ex, omnis sapiente animi excepturi repellat optio voluptate unde suscipit veritatis doloremque, sequi nam! Eius, nam quis accusantium ipsam ratione corporis, eum voluptatem ullam tempore itaque odio porro veritatis possimus dignissimos dicta facere temporibus id dolorem enim quidem dolores ea ut? Sint, iusto magnam ea alias aut quis sed, recusandae minus iure sit error voluptas non doloremque assumenda vitae quod dolores.
                        </p>
                    </div>
                </div>
                <div className="celebrity-block">
                    <h2 className="celebrity-block__title">Дата Свята</h2>
                        <button type="button" className="celebrity-block__btn btn">
                        <p className="btn__text">10.06.2020</p>
                        </button>
                    </div>
                <div className="date-button-block">
                    <button type="button" className="celebrity-block__btn btn">
                        <p className="btn__text">16:00</p>
                    </button>
                    <button type="button" className="celebrity-block__btn btn">
                        <p className="btn__text">16:00 - 00:00</p>
                    </button>
                    <button type="button" className="celebrity-block__btn btn">
                        <p className="btn__text">16:00 - 00:00</p>
                    </button>
                </div>
                </section>

                <section className="section guests">
                <h2 className="guests__title">Кількість гостей</h2>
                <div className="guests-block">
                    <img src={Child16} alt="" className="guests-block__img" />
                    <p className="guests-block__text">Дитячий</p>
                    <p className="guests-block__text">200грн.</p>
                <div className="guests-block-counter">
                    <button className="guests-block-counter__btn">+</button>
                    <p className="guests-block-counter__value">0</p>
                    <button className="guests-block-counter__btn">-</button>
                </div>
                </div>
                <div className="guests-block">
                    <img src={Adult} alt="" className="guests-block__img" />
                    <p className="guests-block__text">Дорослий</p>
                    <p className="guests-block__price">200грн.</p>
                <div className="guests-block-counter">
                    <button className="guests-block-counter__btn">+</button>
                    <p className="guests-block-counter__value">0</p>
                    <button className="guests-block-counter__btn">-</button>
                </div>
                </div>
                    <div className="menu-container">
                        <div className="menu">
                            <h3 className="menu__title">Кухня</h3>
                            <button  className="menu__btn">+</button>
                            <div className="optional">
                                <h3 className="optional__text">Піца</h3>
                                <button className="guests-block-counter__btn button b">+</button>
                                <p className="guests-block-counter__value">0</p>
                                <button className="guests-block-counter__btn button">-</button>
                            </div>
                            <div className="optional">
                                <h3 className="optional__text ">Бургер</h3>
                                <button className="guests-block-counter__btn button">+</button>
                                <p className="guests-block-counter__value">0</p>
                                <button className="guests-block-counter__btn button">-</button>
                            </div>
                            <div className="optional">
                                <h3 className="optional__text">Пиво</h3>
                                <button className="guests-block-counter__btn button">+</button>
                                <p className="guests-block-counter__value">0</p>
                                <button className="guests-block-counter__btn button">-</button>
                            </div>
                            
                        </div>
                        <div className="menu">
                            <h3 className="menu__title">Аніматори</h3>
                            <button  className="menu__btn">+</button>

                    <div className="animator-block">
                        <label className=" animator__text" htmlFor="bk">Аніматор 1</label>
                        <input type="radio" id="bk" name="payment" className="bk animator" value="payment"/>
                    </div>
                    <div  className="animator-block">
                        <label  className=" animator__text" htmlFor="cash">Аніматор 2</label>
                        <input type="radio" id="cash"  name="payment"  className="cash animator" value="payment" />
                    </div>


                        </div>
                        <div className="menu">
                            <h3 className="menu__title">Декор</h3>
                            <button  className="menu__btn">+</button>

                            <div className="optional">
                                <h3 className="optional__text">Піньята</h3>
                                <button className="guests-block-counter__btn button b">+</button>
                                <p className="guests-block-counter__value">0</p>
                                <button className="guests-block-counter__btn button">-</button>
                            </div>

                            <div className="optional">
                                <h3 className="optional__text">Кульки</h3>
                                <button className="guests-block-counter__btn button b">+</button>
                                <p className="guests-block-counter__value">0</p>
                                <button className="guests-block-counter__btn button">-</button>
                            </div>
                        </div>
                </div>

                <div className="payment-block">
                    <h2 className="payment-block__title">Спосіб оплати</h2>
                    <div className="input-block">
                    <div>
                    <label htmlFor="bk">Банківська карта</label>
                    <input type="radio" id="bk" name="payment" className="bk" value="payment"/>
                    </div>
                    <div>
                    <label htmlFor="cash">Готівкою</label>
                    <input type="radio" id="cash"  name="payment"  className="cash" value="payment" />
                    </div>
                    </div> 
                </div>

                <button className="guests__btn">Далі</button>
                </section>
                <CheckoutOrderComponent />
                <Bank />
                </main>
                <DarkFooter/>
            </>
        )
    }
}

export default Checkout;