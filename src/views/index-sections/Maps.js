import React from "react";
// react components used to create a google map
import {
  Container} from "reactstrap";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const CustomMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 50.00578072, lng: 36.23469114 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true
      }}
    >
      <Marker position={{ lat: 50.00578072, lng: 36.23469114 }} />
    </GoogleMap>
  ))
);

function Maps() {
  return (
    <>
        <Container>
          <div className='content-center brand'>
            <h1 className='h1-seo'>Our parks</h1>
          </div>
          <CustomMap
            googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyAVH245J4gEX_9xfwxq-BqTxKGN-B8dX2w'
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </Container>
    </>
  );
}

export default Maps;
