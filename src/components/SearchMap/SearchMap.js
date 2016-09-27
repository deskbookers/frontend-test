import React from 'react';
import cx from 'classnames';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
import ScriptjsLoader from "react-google-maps/lib/async/ScriptjsLoader";

//
const apiKey = 'AIzaSyAD9bxr4ypKFiPADolzLM_mCSiDvtAYVDc';
// const scriptSrc = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
// // const location = { lat: 55.75282, lng: 37.652948 };
// const center = { lat: 55.7524636, lng: 37.6466883 };

const SearchMap = (props) => {

    const { bounds, rows } = props.places;

    return <div className='search-map'>

        <ScriptjsLoader
            {...props}
            hostname='maps.googleapis.com'
            pathname='/maps/api/js'
            query={{ key: apiKey, libraries: 'geometry,drawing,places' }}
        >
            <GoogleMapLoader
                containerElement={
                    <div
                        {...props.containerElementProps}
                        style={{
                            height: "100%",
                        }}
                    />
                }
                googleMapElement={
                    <GoogleMap
                        ref={(map) => console.log(map)}
                        defaultZoom={3}
                        defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
                        onClick={props.onMapClick}
                    >
                        {false && props.markers.map((marker, index) =>
                            <Marker
                                {...marker}
                                onRightclick={() => props.onMarkerRightclick(index)} />
                        )}
                    </GoogleMap>
                }
            />

        </ScriptjsLoader>
    </div>;
};


export default SearchMap;
