import React from "react";
// redux components 
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import AuthenticatedNavbar from "components/Navbars/AuthenticatedNavbar";
import DarkFooter from "components/Footers/DarkFooter.jsx";
import CategoryHeader from 'components/Headers/CategoryHeader';
import ServicesList from './ServicesList'
import CategoriesFiltering from './CategoriesFiltering';
import * as actions from './actions';

const CategoryPage = props => {
    const services = useSelector(state => state.categories.services);
    const filteredServices = useSelector(state => state.categories.filteredServices);
    const dispatch = useDispatch();
    const [servicesList, setServicesList] = React.useState([]);

    React.useEffect(() => {
        document.body.classList.add("index-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        if (filteredServices) {
            setServicesList(filteredServices);
        } else {
            setServicesList(services);
        }

        return function cleanup() {
            document.body.classList.remove("index-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });

    return (
        <>
            {props.loggedIn
                ? <AuthenticatedNavbar loggedIn={props.loggedIn} />
                : <IndexNavbar transparent={false}/>}
            <div className="wrapper category-page">
                {/* <CategoryHeader /> */}
                <div className="main">
                    <div className="container">
                        <h1 className="h1-seo">Our services</h1>
                        <CategoriesFiltering />
                        <div className="box">
                         <ServicesList services={servicesList} loggedIn={props.loggedIn}/>
                        </div>
                    </div>
                </div>
                <DarkFooter />
            </div>
        </>
    );
}

export default withRouter(CategoryPage);