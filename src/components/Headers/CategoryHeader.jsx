import React from "react";
// reactstrap components
import { Container } from "reactstrap";

const CategoryHeader = () => {

    return (
        <>
            <div className='page-header clear-filter' filter-color='blue'>
                <div
                    className='page-header-image'
                    style={{
                        backgroundImage: "url(" + require("assets/img/blurred-image-1.jpg") + ")"
                    }}
                //   ref={pageHeader}
                ></div>
                <Container>
                    <div className='content-center brand'>
                        <h1 className='h1-seo'>entertainment for everyone</h1>
                        <br/>
                        <h2>
                            Our services <br/>
                            <small>
                                At this page you can select services which are available in your city.<br/>
                                And book the ones you like.
                            </small>
                        </h2>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default CategoryHeader;