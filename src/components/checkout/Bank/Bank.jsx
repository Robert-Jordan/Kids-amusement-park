import React, {Component} from 'react'
import '../../../assets/css/reset.css'
import './Bank.scss'

class Bank extends Component {

    render(){
        return (
            <>
            <section className="bank">
            <div id="cards">
      <div id="front">
        <a target="_blank" href="#" id="bank-link"></a>
        <img src="" alt="" id="brand-logo" />
        <div id="front-fields">
          <input className="field" id="number" type="text" placeholder="0000 0000 0000 0000" />
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
{/* 
    <p id="random-wrap"><a id="random" href="#">Random card number</a></p>
    
    <pre id="instance"></pre> */}
            </section>
            </>
        )
    }
}

export default Bank;