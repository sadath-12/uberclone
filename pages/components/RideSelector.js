import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import {carList} from '../../carList'


const RideSelector = ({pickupCoordinates,dropoffCoordinates}) => {
  console.log(pickupCoordinates)

  const [rideDuration,setRideDuration]=useState(100)

  useEffect(()=>{

const rideD=fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]},${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1Ijoic3llZHNhZGF0aDE3IiwiYSI6ImNrenZhd2tlNzAxNnYydXF1aWQ5a3R4amkifQ.Zz6YDYzNbDoeDWQnDWHBoA`).
then(res=>res.json()).then(data=>{
  if (data.routes) {
    setRideDuration(data.routes[0].duration/100);  
}
})

  },[pickupCoordinates,dropoffCoordinates])

  return (
    <Wrapper>
     <Title>
         Choose a ride, or swipe up for more
     </Title>
     <CarList>
     {carList.map(m=>(

<Car>
<CarImage src={m.imgUrl} />
<CarDetails>
<Service>
{m.service}
</Service>
<Time>5 min away</Time>
</CarDetails>
<Price>${(rideDuration * m.multiplier).toFixed(2)}</Price>

</Car>
     ))}
     </CarList>
    </Wrapper>
  );
}

export default RideSelector;

const Wrapper = tw.div`
flex-1 h-screen flex flex-col
`
const CarImage=tw.img`
h-14 mr-2
`

const CarDetails=tw.div`
flex-1 
`

const Title = tw.div`
text-center text-gray-500 text-xs py-2 border-b
`

const CarList=tw.div`
overflow-y-scroll

`

const Car=tw.div`
flex p-4 items-center font-semibold overflow-y-scroll
`
const Service=tw.div`
`

const Time = tw.div`
text-xs text-blue-500
`

const Price =tw.div`
`
