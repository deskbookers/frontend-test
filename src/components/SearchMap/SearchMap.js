import React from 'react';
import cx from 'classnames';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

const SearchMap = (props) => {

    const { bounds, rows } = props.places;
    let zoom = 20;

    const fitBounds = map => {
        if (!bounds) { return; }

        const area = new google.maps.LatLngBounds(
            new google.maps.LatLng(bounds.s, bounds.w),
            new google.maps.LatLng(bounds.n, bounds.e)
        );

        map.fitBounds(area);
    };

    return <div className={cx({
        'search-map': true,
        _visible: rows && rows.length,
    })}>
        <GoogleMapLoader
            containerElement={
                <div {...props.containerElementProps} style={{ height: '100%' }} />
            }
            googleMapElement={
                <GoogleMap
                    ref={map => { map && fitBounds(map) }}
                    zoom={zoom}
                    defaultOptions={{ scrollwheel: false }}
                >
                {rows && rows.map((row, index) => {
                    return (
                        <Marker
                            key={index}
                            position={{ lat: row.coordinate[0], lng: row.coordinate[1] }}
                        />
                    );
                })}
                </GoogleMap>
            }
        />

    </div>;
};


export default SearchMap;
