import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import Map from '../pages/components/Map'
import { useRouter } from 'next/router';
import RideSelector from './components/RideSelector';
import Link from 'next/link';

const Confirm = () => {
  const router = useRouter()
  const {pickup,dropoff}=router.query
  

  const [pickupCoordinates,setPickupCoordinates]=useState([0,0])
  const [dropoffCoordinates,setDropoffCoordinates]=useState([0,0])

const getPickUpCoordinates=(pick)=>{
    
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pick}.json?` + 
    new URLSearchParams({
        access_token:"pk.eyJ1Ijoic3llZHNhZGF0aDE3IiwiYSI6ImNrenZhd2tlNzAxNnYydXF1aWQ5a3R4amkifQ.Zz6YDYzNbDoeDWQnDWHBoA",
        limit:1
    })
    ).then(response =>response.json()).then(
        data=>{
         
            setPickupCoordinates(data.features[0].center)
        }
    )
    
}

const getDropoffCordinates=(dropoff)=>{
  
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
  new URLSearchParams({
      access_token:"pk.eyJ1Ijoic3llZHNhZGF0aDE3IiwiYSI6ImNrenZhd2tlNzAxNnYydXF1aWQ5a3R4amkifQ.Zz6YDYzNbDoeDWQnDWHBoA",
      limit:1
  })
  ).then(response =>response.json()).then(
      data=>{
        
          setDropoffCoordinates(data.features[0].center)
      }
  )
}

useEffect(()=>{

  getPickUpCoordinates(pickup)
  
  getDropoffCordinates(dropoff)
 

},[pickup,dropoff])

  return (
    <Wrapper>
   <ButtonContainer>
     <Link href='/search'>
       <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png'/>
         
     </Link>
   </ButtonContainer>


      <Map pickupCoordinates={pickupCoordinates}
       dropoffCoordinates={dropoffCoordinates} />

   
      <RideContainer>

<RideSelector pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />

<ConfirmButtonContainer>
<ConfirmButton>

Confirm UberX
</ConfirmButton>
</ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
}

export default Confirm;

const Wrapper= tw.div`
h-screen flex flex-col overflow-hidden
`


const RideContainer=tw.div`
flex-1 flex flex-col
`


const ConfirmButtonContainer=tw.div`
flex-0.4 border-t-2
`

const ConfirmButton=tw.button`
bg-black  text-white w-screen p-3 font-bold m-3
`

const BackButton=tw.img`
h-full object-contain
`

const ButtonContainer=tw.div`
rounded-full  absolute top-4 left-4 bg-white z-10 cursor-pointer
`
