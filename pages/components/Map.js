import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'
import MapboxGl from 'mapbox-gl/dist/mapbox-gl';
import { useEffect } from "react";



mapboxgl.accessToken = 'pk.eyJ1Ijoic3llZHNhZGF0aDE3IiwiYSI6ImNrenZhd2tlNzAxNnYydXF1aWQ5a3R4amkifQ.Zz6YDYzNbDoeDWQnDWHBoA';


const Map = ({pickupCoordinates,dropoffCoordinates}) => {


    useEffect(() => {
        const map = new mapboxgl.Map({
        container:'map',
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [-99.29011, 39.39172],
        zoom: 3
        });

     
       

        if(pickupCoordinates){
          addToMap(map,pickupCoordinates)
        }

        if(dropoffCoordinates){

          addToMap(map,dropoffCoordinates)

        }

        if(pickupCoordinates && dropoffCoordinates){
//auto zoom
          map.fitBounds([
dropoffCoordinates,
pickupCoordinates
          ],{
            padding: 60
          })
        }
       
        },[pickupCoordinates,dropoffCoordinates]);

        //to create marker
        const addToMap=(map,cordinates)=>{
          const marker1 = new mapboxgl.Marker().setLngLat(cordinates)
          .addTo(map);
        }

      

     

  return (
    <Wrapper id='map'>
      
    </Wrapper>
  );
}

const Wrapper =tw.div`
flex flex-1 h-1/2
`

export default Map;
