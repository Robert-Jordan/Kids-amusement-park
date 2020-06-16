import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions.js';
import '../../../assets/css/reset.css';
import './CheckoutOrderComponent.scss';

const CheckoutOrderComponent = props => {
    const dispatch = useDispatch();
    const receiptIsOpened = useSelector(state => state.checkout.receiptOpen);
    const serviceData = useSelector(state => state.checkout.serviceData);
    const selectedDate = useSelector(state => state.checkout.selectedDate);
    const selectedTime = useSelector(state => state.checkout.selectedTime);
    const adultsCount = useSelector(state => state.checkout.adultsCount);
    const childrenCount = useSelector(state => state.checkout.childrenCount);
    const total = useSelector(state => state.checkout.total);

    const increaseVisitorsCount = param => {
        dispatch(actions.increaseVisitorsCount(param));
    }
    const decreaseVisitorsCount = param => {
        dispatch(actions.decreaseVisitorsCount(param));
    }

    return (
        <>
            <button
                className={`pop-up ${receiptIsOpened}`}
                onClick={() => { dispatch(actions.toggleReceiptOpen()) }}>
                <span className="pop-up__item item1"></span>
                <span className="pop-up__item item2"></span>
            </button>
            <section className={`order ${receiptIsOpened}`}>
                <h2 className="order__title">Your order</h2>
                <div className="order-card">
                    <p className="order-card__city">
                        <p className="order-card__name">
                            {serviceData.city !== undefined && serviceData.city.name === 'Kharkiv'
                                ? 'Mall "Karavan"'
                                : 'Mall "Khreshchatyk"'}
                            <span className="order-card__date">{selectedDate !== undefined && selectedDate}</span>
                        </p>
                        {serviceData.city !== undefined && serviceData.city.name}
                        <span className="order-card__time">{selectedTime !== undefined && selectedTime.startTime}</span>
                    </p>
                </div>
                <div className="order-room">
                    <div className="order-room__name-block">
                        <p className="order-room__name">
                            {serviceData.category !== undefined && serviceData.category[0].name}
                        </p>
                        <h3 className="order-room__title">{serviceData.title}</h3>
                    </div>
                    <div>
                        <p><span className="order-room__time">Time</span></p>
                        <h3><span className="order-room__time-value">
                            {selectedTime !== undefined && selectedTime.startTime + ' - ' + selectedTime.endTime}
                        </span></h3>
                    </div>
                </div>
                <div className>
                    <h3 style={{ textAlign: "center", fontSize: 36 }}>Number of visitors</h3>
                    <div className="room-wrapper">
                        <div className="room-wrapper__titles">
                            <p>Children</p>
                            <p>Adult</p>
                        </div>
                        <div className="room-wrapper__input">
                            <div className="room-wrapper__input-inner">
                                <button onClick={() => decreaseVisitorsCount('children')}>-</button>
                                <input
                                    className="room-wrapper__inp"
                                    type="number"
                                    value={childrenCount}/>
                                <button onClick={() => increaseVisitorsCount('children')}>+</button>
                            </div>
                            <div className="room-wrapper__input-inner">
                                <button onClick={() => decreaseVisitorsCount('adult')}>-</button>
                                <input 
                                    className="room-wrapper__inp" 
                                    type="number" 
                                    value={adultsCount}/>
                                <button onClick={() => increaseVisitorsCount('adult')}>+</button>
                            </div>
                        </div>
                        {serviceData.price !== undefined &&
                            <>
                                <div>
                                    <p className="room-wrapper__price">
                                        {serviceData.price.childrenPrice}&#8372;/person
                                    </p>
                                    <p className="room-wrapper__price">
                                        {serviceData.price.adultPrice}&#8372;/person
                                    </p>
                                </div>
                                <div>
                                    <p className="room-wrapper__val">
                                        {serviceData.price.childrenPrice * childrenCount}&#8372;
                                    </p>
                                    <p className="room-wrapper__val" claassName="200">
                                        {serviceData.price.adultPrice * adultsCount}&#8372;
                                    </p>
                                </div>
                            </>
                        }
                    </div>
                </div>
                <div className="receipt-block">
                    <p className="receipt-block__text">
                        Total:
                        <span className="receipt-block__price"> 
                            {total !== undefined && total}&#8372;
                        </span>
                    </p>
                </div>
            </section>
        </>
    )
}

export default CheckoutOrderComponent;