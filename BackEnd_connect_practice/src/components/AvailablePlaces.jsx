import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import {sortPlacesByDistance} from '../loc.js'

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false)
  const [availableplaces, setAvailableplaces] = useState([]);
  const [Xerror, setError] = useState(null);


  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true)


      try {
        const response = await fetch('http://localhost:3000/places')
        const resData = await response.json();      

        if(!response.ok){
          throw new Error('Failed to fetch places.');}


        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(resData.places,position.coords.latitude,position.coords.longitude)
          setAvailableplaces(sortedPlaces);
          setIsFetching(false)

        })

 
      } catch (error) {
        setError({message: error.message || 'An error occurred!'});
        setIsFetching(false)

      }
      
      if (Xerror){
        return <Error message={Xerror.message} />
      }

      

      }
      fetchPlaces()
    },[])
    

    
  

  

  return (
    <Places
      title="Available Places"
      places={availableplaces}
      isloading={isFetching}
      loadingText="Loading..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
