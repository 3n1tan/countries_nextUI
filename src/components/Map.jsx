import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPs_API_KEY,
      });
      const center = useMemo(()=>({lat: 18.52043, lng: 73.856743}), [])
    
  return (
    <div>
              <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        />
      )}
    </div>
    </div>
  )
}

export default Map