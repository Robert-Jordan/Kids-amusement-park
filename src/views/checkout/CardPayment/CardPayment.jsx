import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { NavLink } from "reactstrap";
// redux
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions';
import CheckoutNavbar from '../../../components/Navbars/CheckoutNavbar.jsx'
import IndexNavbar from "../../../components/Navbars/IndexNavbar.jsx";
import DarkFooter from '../../../components/Footers/DarkFooter.jsx'
import '../../../assets/css/reset.css'
import './CardPayment.scss'

const CardPayment = props => {
  const dispatch = useDispatch();

  return (
    <>
      <CheckoutNavbar/>
      <section className="section section-cardPayment">
        <h2 class="payment-block__title">Visa/Mastercard payment</h2>
        <p className="checkout-block-text__title2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste id sapiente vitae consequatur quisquam, aut culpa officia deserunt aliquam, voluptas libero, quam ipsa accusamus laborum quae quia dicta similique repudiandae sint magni consequuntur aspernatur unde suscipit? Numquam qui voluptas necessitatibus ea, sint, velit ad tempore earum aliquid, voluptatum explicabo impedit? Odit explicabo inventore assumenda laudantium odio ea adipisci, officiis libero, vero voluptatibus deserunt nihil commodi aut neque eius amet quis possimus eos reiciendis veniam, sint voluptates aliquid eligendi. Facilis quaerat iste, a nihil tenetur fugit earum cumque at minus ex, omnis sapiente animi excepturi repellat optio voluptate unde suscipit veritatis doloremque, sequi nam! Eius, nam quis accusantium ipsam ratione corporis, eum voluptatem ullam tempore itaque odio porro veritatis possimus dignissimos dicta facere temporibus id dolorem enim quidem dolores ea ut? Sint, iusto magnam ea alias aut quis sed, recusandae minus iure sit error voluptas non doloremque assumenda vitae quod dolores.
          </p>
        <div className="bank">
          <div id="cards">
            <div id="front">
              <a target="_blank" href="#" id="bank-link"></a>
              <img src="" alt="" id="brand-logo" />
              <div id="front-fields">
                <input className="field" id="number" type="number"
                  name="quantity" min="1" max="5"
                  placeholder="0000 0000 0000 0000" />
                <label className="label">Valid thru</label>
                <input className="field expired" id="mm" type="text" placeholder="MM" />
                <input className="field expired" id="yy" type="text" placeholder="YY" />
              </div>
            </div>
            <div id="back">
              <input className="field" id="code" type="password" placeholder="" />
              <label id="code-label" class="label">Safety code</label>
            </div>
          </div>
        </div>
        <button className="guests__btn">
          <NavLink 
            onClick={()=>{dispatch(actions.setSuccessfulCheckout())}} 
            to='/index' tag={Link}>
            Complete checkout
          </NavLink>
        </button>
      </section>
      <DarkFooter />
    </>
  )
}

export default withRouter(CardPayment);