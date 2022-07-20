import React from 'react'
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps";

const Map = () => {
  return (
    <div>
      <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: 16.815260, lng: 107.184206 }}
        >
      </GoogleMap>
    </div>
  );
}

export default withScriptjs(withGoogleMap(Map));

