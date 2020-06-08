import React from "react";
// redux components 
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
import { withRouter } from 'react-router-dom';
// core components 
import serviceCategories from './servicesCategories';

const CategoriesFiltering = props => {
    const sortByPrice = e => {
        let value = e.target.value;
        let direction = value.endsWith('asc') ? "asc" : "desc";

        dispatch(actions.sortByPrice({direction}))
    }
    const dispatch = useDispatch();
    
    return (
        <div className="field is-grouped" style={{ alignItems: "center" }}>
            <div className="control">
                <div className="select">
                    <select onChange={e => {
                        this.sortByInput(e)
                    }}>
                        <option value="" disabled selected>Filter by city</option>
                        <option value='city_Kh'>Kharkiv</option>
                        <option value='city_Ky'>Kyiv</option>
                    </select>
                </div>
            </div>
            <div className="control">
                <div className="select">
                    <select onChange={e => {
                        this.sortByInput(e)
                    }}>
                        <option value="" disabled selected>Filter by Category</option>
                        {serviceCategories.map(category => {
                            return (
                                <option value={'category' + category.name}>
                                    {category.name}
                                </option>
                            )
                        })}

                    </select>
                </div>
            </div>
            <div className="control">
                <div className="select">
                    <select onChange={e => {
                        sortByPrice(e)
                    }}>
                        <option value="" disabled selected>Sort by price</option>
                        <option value='price_asc'>Price - Lowest to Highest</option>
                        <option value='price_desc'>Price - Highest to Lowest</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default withRouter(CategoriesFiltering);