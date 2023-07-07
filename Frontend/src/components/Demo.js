import React, { useState, useRef} from 'react';
import { Autocomplete, useLoadScript } from '@react-google-maps/api';

const placesLibrary = ['places']


function Demo() {
  const [searchResult, setSearchResult] = useState('')

  const autocompleteRef = useRef();

  const { isLoaded } =  useLoadScript({
    googleMapsApiKey: 'AIzaSyA7Hw39HgaONM4NMAO2Xb4umo4gpiv_U5g',
    libraries: placesLibrary
});

  const onLoad = () => {
     const autocomplete = autocompleteRef.current
  }

  const onPlaceChanged = (place) => {
    setSearchResult(place)
    console.log(searchResult)
  }

  if(!isLoaded) {
    return <div>Loading...</div>
    };


  return (
    <div className="App">
    
    
        <div id="searchColumn">
            <h2>Tide Forecast Options</h2>
            <Autocomplete
            onPlaceChanged={(place) => onPlaceChanged(place)}
            onLoad = {onLoad}>

                <input
                type="text"
                placeholder="Search for Tide Information"
                style={{
                    boxSizing: `border-box`,
                    border: `1px solid transparent`,
                    width: `240px`,
                    height: `32px`,
                    padding: `0 12px`,
                    borderRadius: `3px`,
                    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                    fontSize: `14px`,
                    outline: `none`,
                    textOverflow: `ellipses`,
                }}
                />
            </Autocomplete>
        </div>
    </div>    
  )}

export default Demo;