import React from "react";
// redux components 
import { useDispatch } from 'react-redux';
import * as actions from './actions';
import { withRouter } from 'react-router-dom';
// reactstrap
import { Button } from "reactstrap";
// core components 
import { serviceCategories, serviceCities } from '../../services/data/data';

const CategoriesFiltering = () => {
    const sortByPrice = (e: string) => {
        let value = e;
        if (value !== undefined && value !== '') {
            let direction = value.endsWith('asc') ? "asc" : "desc";
            dispatch(actions.sortByPrice({ direction }))
        }
    }
    const filterByCity = (e: string) => {
        let value = e.substring(5);
        dispatch(actions.filterByCity({ value }))
    }
    const filterByCategory = (e: string) => {
        let value = e.substring(8);
        dispatch(actions.filterByCategory({ value }))
    }
    const clearFilters = () => {
        dispatch(actions.clearFilters())
    }
    const dispatch = useDispatch();

    return (
        <div className="field is-grouped" style={{ alignItems: "center" }}>
            <div className="control">
                <div className="select">
                    <select onChange={e => {
                        filterByCity(e.target.value)
                    }}>
                        <option value="" disabled selected>Filter by city</option>
                        {serviceCities.map(city => {
                            let value = 'city_' + city.name;
                            return (
                                <option value={value}>{city.name}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <div className="control">
                <div className="select">
                    <select onChange={e => {
                        filterByCategory(e.target.value)
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
                        sortByPrice(e.target.value)
                    }}>
                        <option value="" disabled selected>Sort by price</option>
                        <option value='price_asc'>Price - Lowest to Highest</option>
                        <option value='price_desc'>Price - Highest to Lowest</option>
                    </select>
                </div>
            </div>
            <div className="control">
                <div className="select">
                    <Button color="danger" onClick={clearFilters}>Clear filters</Button>
                </div>
            </div>
        </div>
    );
}

export default withRouter(CategoriesFiltering);