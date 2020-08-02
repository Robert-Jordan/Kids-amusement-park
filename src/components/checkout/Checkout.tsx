import * as React from 'react';
// redux components 
import { useDispatch } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { useSelector } from '../types';
import * as actions from './actions';
// router
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
// types
import { Service } from '../category/types';
import { Cookery, Animator, Decorations, SetSelectedTimePayload as TimeFormat } from './types';
// reactstrap components
import { NavLink, FormGroup } from "reactstrap";
// react plugins that creates an input with a date picker
import Datetime from "react-datetime";
// moment
import moment from 'moment';
// main components
import CheckoutNavbar from '../../shared/Navbars/CheckoutNavbar';
import IndexNavbar from "../../shared/Navbars/IndexNavbar";
import DarkFooter from '../../shared/Footers/DarkFooter';
import CheckoutOrderComponent from './CheckoutOrderComponent/CheckoutOrderComponent';
// css
import '../../assets/css/reset.css';
import './Checkout.scss';
// images
import Adult from '../../assets/img/adult.svg';
import Child16 from '../../assets/img/child16.svg';
import Receipt from '../../assets/img/Receipt.png';

interface MatchParams {
    serviceId: string
}
interface CheckoutProps {
    loggedIn: boolean,
  }
type Props = RouteComponentProps<MatchParams> & CheckoutProps;

const Checkout: React.FunctionComponent<Props> = (props) => {
    React.useEffect(() => {
        if (props.match.params) {
            dispatch(actions.getServiceData({ serviceId: props.match.params.serviceId }));
            if(service !== undefined) {
                setServiceData(service);
            }
        }
    });
    const service = useSelector(state => state.checkout.serviceData);
    const receiptIsOpened = useSelector(state => state.checkout.receiptOpen);
    const adultsCount = useSelector(state => state.checkout.adultsCount);
    const childrenCount = useSelector(state => state.checkout.childrenCount);
    const total = useSelector(state => state.checkout.total);
    const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();
    const [serviceData, setServiceData] = React.useState<Service>();
    const [date, setDate] = React.useState<string>('');
    const [time, setTime] = React.useState<TimeFormat>();
    const [selectedAnimator, setSelectedAnimator] = React.useState<Animator>({ name: '', price: 0 });
    const [cookeryCount, setCookeryCount] = React.useState<Cookery>(
        [{
            name: 'Cake',
            count: 0
        },
        {
            name: 'Pizza',
            count: 0
        },
        {
            name: 'Burger',
            count: 0
        },
        {
            name: 'Ice-cream',
            count: 0
        },
        {
            name: 'Fruit salad',
            count: 0
        },
        {
            name: 'Cola',
            count: 0
        },
        {
            name: 'Fanta',
            count: 0
        },
        {
            name: 'Sprite',
            count: 0
        },
        ]
    );
    const [chosenDecor, setChosenDecor] = React.useState<Decorations>(
        [{
            name: 'Pinata',
            count: 0
        },
        {
            name: 'Baloon',
            count: 0
        },
        {
            name: 'Fortune wheel',
            count: 0
        }]
    );

    const setServiceDate = (e: string) => {
        setDate(moment(e).format('MM/DD/YYYY'));
        dispatch(actions.setSelectedDate({selectedDate: moment(e).format('MM/DD/YYYY')}));
    }
    const setServiceTime = (startTime: string, endTime: string) => {
        setTime({ startTime, endTime });
        dispatch(actions.setSelectedTime({ startTime, endTime }));
    }
    const setServiceDateAndTime = (e: string) => {
        setDate(moment(e).format('MM/DD/YYYY'));
        let startTime = moment(e).utc().format('HH:MM');
        let endTime = moment(e).add(1, 'hours').utc().format('HH:MM');
        setTime({ startTime, endTime });
        dispatch(actions.setSelectedDate({selectedDate: moment(e).format('MM/DD/YYYY')}));
        dispatch(actions.setSelectedTime({ startTime, endTime }));
    }

    const increaseVisitorsCount = (visitorType: string) => {
        dispatch(actions.increaseVisitorsCount({visitorType}));
    }
    const decreaseVisitorsCount = (visitorType: string) => {
        dispatch(actions.decreaseVisitorsCount({visitorType}));
    }

    const increaseCookery = (dishName: string) => {
        let newCookery = cookeryCount.map(el => {
            let currEl = { ...el };
            if (currEl.name === dishName) {
                currEl.count += 1;
            }
            return currEl;
        });
        setCookeryCount(newCookery);
        dispatch(actions.updateCookery({cookery: newCookery}));
    }
    const decreaseCookery = (dishName: string) => {
        let newCookery = cookeryCount.map(el => {
            let currEl = { ...el };
            if (currEl.name === dishName) {
                if (currEl.count !== 0) {
                    currEl.count -= 1;
                }
            }
            return currEl;
        });
        setCookeryCount(newCookery);
        dispatch(actions.updateCookery({cookery: newCookery}));
    }

    const increaseDecoration = (decorationName: string) => {
        let newDecorations = chosenDecor.map(el => {
            let currEl = { ...el };
            if (currEl.name === decorationName) {
                currEl.count += 1;
            }
            return currEl;
        });
        setChosenDecor(newDecorations);
        dispatch(actions.updateDecorations({decorations: newDecorations}));
    }
    const decreaseDecoration = (decorationName: string) => {
        let newDecorations = chosenDecor.map(el => {
            let currEl = { ...el };
            if (currEl.name === decorationName) {
                if (currEl.count !== 0) {
                    currEl.count -= 1;
                }
            }
            return currEl;
        });
        setChosenDecor(newDecorations);
        dispatch(actions.updateDecorations({decorations: newDecorations}));
    }

    const setAnimator = (name: string, price: number) => {
        setSelectedAnimator({ name: name, price: price })
        dispatch(actions.setAnimator({ animator: { name: name, price: price }}));
    }

    return (
        <>
            <CheckoutNavbar />
            <main className="main">
                <section className="section section-checkout">
                    <div className="checkout-block">
                        <div className="checkout-block-text">
                            <p className="checkout-block-text__title">
                                {serviceData !== undefined && serviceData.title}
                            </p>
                            {serviceData !== undefined && serviceData.price !== undefined 
                            && <p className="checkout-block-text__value">{serviceData.price.minimalPrice}&#8372;</p>}
                        </div>
                        <div className="checkout-block__img">
                            {serviceData !== undefined &&
                            <img
                                src={serviceData.img}
                                alt={serviceData.title}
                            />
                            }
                        </div>
                        {/* <p className="checkout-block-text__title2">
                            {serviceData.desc}
                        </p> */}
                    </div>
                    {serviceData !== undefined && serviceData.time
                        ? <>
                            <div className="celebrity-block">
                                <h2 className="celebrity-block__title">Please select a holiday date</h2>
                                <FormGroup className="celebrity-block__btn">
                                    <Datetime
                                        timeFormat={false}
                                        inputProps={{ placeholder: "Choose date" }}
                                        onChange={(e) => setServiceDate(e as string)}// TODO check
                                    />
                                </FormGroup>
                            </div>
                            <div className="date-button-block">
                                {serviceData.time.map((time) => {
                                    return (
                                        <button
                                            type="button"
                                            className="celebrity-block__btn btn"
                                            onClick={(e) => setServiceTime(time.startTime, time.endTime)}>
                                            <p className="btn__text">{time.startTime}-{time.endTime}</p>
                                        </button>
                                    )
                                }
                                )}
                            </div>
                        </>
                        : <div className="celebrity-block">
                            <h2 className="celebrity-block__title">Please choose date and time</h2>
                            <p>Please note that room can only be booked for <b>1 hour</b></p>
                            <FormGroup className="celebrity-block__btn">
                                <Datetime
                                    timeFormat={true}
                                    inputProps={{ placeholder: "Choose date and time" }}
                                    onChange={(e) => setServiceDateAndTime(e as string)}
                                />
                            </FormGroup>
                        </div>
                    }
                </section>

                <section className="section guests">
                    <h2 className="guests__title">Select the number of visitors</h2>
                    <div className="guests-block">
                        <img src={Child16} alt="" className="guests-block__img" />
                        <p className="guests-block__text">Children</p>
                        <p className="guests-block__text">{serviceData !== undefined && 
                            serviceData.price !== undefined && serviceData.price.childrenPrice}&#8372;</p>
                        <div className="guests-block-counter">
                            <button
                                className="guests-block-counter__btn"
                                onClick={() => decreaseVisitorsCount('children')}
                            >-</button>
                            <p className="guests-block-counter__value">{childrenCount}</p>
                            <button
                                className="guests-block-counter__btn"
                                onClick={() => increaseVisitorsCount('children')}>+</button>
                        </div>
                    </div>
                    <div className="guests-block">
                        <img src={Adult} alt="" className="guests-block__img" />
                        <p className="guests-block__text">Adults</p>
                        <p className="guests-block__price">{ serviceData !== undefined &&
                        serviceData.price !== undefined && serviceData.price.adultPrice}&#8372;</p>
                        <div className="guests-block-counter">
                            <button
                                className="guests-block-counter__btn"
                                onClick={() => decreaseVisitorsCount('adult')}>-</button>
                            <p className="guests-block-counter__value">{adultsCount}</p>
                            <button
                                className="guests-block-counter__btn"
                                onClick={() => increaseVisitorsCount('adult')}>+</button>
                        </div>
                    </div>

                    <div className="menu-container">
                        { serviceData !== undefined &&
                        serviceData.cookery && <div className="menu">
                            <h3 className="menu__title">Cookery</h3>
                            {serviceData.cookery.map((dish) => {
                                let ind = cookeryCount.findIndex(cookery => cookery.name === dish.name);
                                return <div className="optional">
                                    <h3 className="optional__text">{dish.name}</h3>
                                    <button
                                        className="guests-block-counter__btn button"
                                        onClick={() => decreaseCookery(dish.name)}>-</button>
                                    <p className="guests-block-counter__value">
                                        {cookeryCount[ind].count}
                                    </p>
                                    <button
                                        className="guests-block-counter__btn button"
                                        onClick={() => increaseCookery(dish.name)}>+</button>
                                    <p className="optional__text">{dish.portion}/{dish.price}&#8372;</p>
                                </div>
                            })}
                        </div>
                        }
                        {serviceData !== undefined && 
                        serviceData.animators && <div className="menu animators-menu">
                            <h3 className="menu__title">Animators</h3>
                            {serviceData.animators.map((animator) => {
                                return <div className="animator-block">
                                    <label className="animator__text" htmlFor={animator.name}>
                                        {animator.name}
                                    </label>
                                    <input
                                        type="radio"
                                        id={animator.name}
                                        name="animator"
                                        className="rb animator"
                                        onChange={() => setAnimator(animator.name, animator.price)} />
                                    <p className="optional__text">{animator.price}&#8372;</p>
                                </div>
                            })}
                        </div>
                        }
                        { serviceData !== undefined &&
                        serviceData.additionalServices && <div className="menu">
                            <h3 className="menu__title">Decor</h3>
                            {serviceData.additionalServices.map(decor => {
                                let ind = chosenDecor.findIndex(dec => dec.name === decor.name);
                                return <div className="optional">
                                    <h3 className="optional__text">{decor.name}</h3>
                                    <button
                                        className="guests-block-counter__btn button b"
                                        onClick={() => decreaseDecoration(decor.name)}>-</button>
                                    <p className="guests-block-counter__value">{chosenDecor[ind].count}</p>
                                    <button
                                        className="guests-block-counter__btn button"
                                        onClick={() => increaseDecoration(decor.name)}>+</button>
                                    <p className="optional__text">{decor.price}&#8372;</p>
                                </div>
                            })}
                        </div>
                        }
                    </div>

                    <div className="payment-block">
                        <h2 className="payment-block__title">Payment Method</h2>
                        <div className="input-block">
                            <div>
                                <label htmlFor="bk">Visa/Mastercard</label>
                                <input type="radio" id="bk" name="payment" className="bk" value="payment" checked={true} />
                            </div>
                            <div>
                                <label htmlFor="cash">Cash</label>
                                <input type="radio" id="cash" name="payment" className="cash" value="payment" disabled={true} />
                            </div>
                        </div>
                    </div>
                    <div className="section section-checkout">
                        { serviceData !== undefined &&
                        serviceData.price !== undefined && (total >= serviceData.price.minimalPrice)
                            && childrenCount > 0
                            ? <button className="guests__btn">
                                <NavLink to='/card-payment' tag={Link}>
                                    Next
                                </NavLink>
                            </button>
                            :
                            <> {childrenCount <= 0 &&
                                <p className="guests-block__text"
                                    style={{ textAlign: "center", fontSize: 36, color: 'red' }}>
                                    You must select at least 1 visitor child
                                </p>}
                                { serviceData !== undefined &&
                                serviceData.price !== undefined && total <= serviceData.price.minimalPrice &&
                                    <p className="guests-block__text"
                                        style={{ textAlign: "center", fontSize: 36, color: 'red' }}>
                                        The amount of your purchase is below the minimum allowable amount, which is
                                <b> {serviceData.price !== undefined && serviceData.price.minimalPrice}&#8372;</b>
                                    </p>
                                }
                                {(date === '' || (time !== undefined && time.startTime === '') || (time !== undefined && time.endTime === '')) &&
                                    <>
                                        <p className="guests-block__text"
                                            style={{ textAlign: "center", fontSize: 36, color: 'red' }}>
                                            You must choose date and time
                                        </p>
                                    </>}
                            </>
                        }
                    </div>
                </section>
                <CheckoutOrderComponent/>
                <button
                    className={`expand-receipt 
                    ${receiptIsOpened === 'order-none'
                            ? ''
                            : 'order-none'}`}
                    onClick={() => { dispatch(actions.toggleReceiptOpen()) }}>
                    <p>Receipt</p>
                </button>
            </main>
            <DarkFooter />
        </>
    )
}

export default withRouter(Checkout);