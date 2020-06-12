import React, {Component} from 'react'
import '../../../assets/css/reset.css'
import './CheckoutOrderComponent.scss'

class CheckoutOrderComponent extends Component {




    render(){
        return (
            <>
            <button className="pop-up "> 
                <span className="pop-up__item item1"></span>
                <span className="pop-up__item item2"></span>
            </button>



                        {/* order-none onClick.....*/}
            <section className="order order-none">


                <h2 className="order__title">Ваше замовлення</h2>

            <div className="order-card">
                <p className="order-card__name">ТРЦ "Караван OUTLET" <span  className="order-card__date">10.06.2020</span></p>
                <p className="order-card__city">Київ <span  className="order-card__time">10:00</span></p>
            </div>
            <div className="order-room">
                <p className="order-room__name">Тематична кімната <span  className="order-room__time">Час</span></p>
                <h3  className="order-room__title">Бейблейд <span className="order-room__time-value">10:00-15:00</span></h3>
            </div>
            <div className>
                <h3 style={{textAlign: "center", fontSize: 36}}>Кількість гостей</h3>
                <div className="room-wrapper">
                    <p>Дитячий</p>
                    <input  className="room-wrapper__inp" type="number" min="0" max="100" placeholder="0"/>
                    <p className="room-wrapper__price" >50грн/люд.</p>
                    <p className="room-wrapper__val">50 &#8372;</p>

                </div>
                <div className="room-wrapper">
                    <p>Дорослий</p>
                    <input className="room-wrapper__inp" type="number" min="0" max="100" placeholder="0"/>
                    <p className="room-wrapper__price">200грн/люд.</p>
                    <p className="room-wrapper__val"claassName="200" >200 &#8372;</p>
                </div>
            </div>
            <div className="receipt-block">
                <p className="receipt-block__text">Сума до сплати <span className="receipt-block__price">4205  &#8372;</span></p>
            </div>
            </section>
            </>
        )
    }
}

export default CheckoutOrderComponent;