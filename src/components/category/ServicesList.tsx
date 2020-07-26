import React from "react";
import { NavLink } from "reactstrap";
import { withRouter, Link } from 'react-router-dom';

const ServicesList = (props) => {
    return props.services.map(item => {
        return (
            <div className="category-card" key={item.id}>
                <div className="card-image">
                    <img
                        src={item.img}
                        alt={item.title}
                    />
                    <span className="card-title">{item.title}</span>
                </div>

                <div className="card-content">
                    <p>{item.desc}</p>
                    <p className="card-content-bottom">
                        <b className="price">Price: {item.price.minimalPrice}&#8372;</b>
                        <b>
                            <NavLink
                            disabled={!props.loggedIn}
                            to={`/checkout/${item.title}/${item.id}`}tag={Link}>
                                <i className="now-ui-icons shopping_cart-simple"></i>
                            </NavLink>
                        </b>
                    </p>
                </div>
            </div>

        )
    })
}

export default withRouter(ServicesList);