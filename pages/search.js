import Link from 'next/link';
import {useRouter} from 'next/router'
import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import mapboxgl from 'mapbox-gl';


const search = () => {


const [pickup,setPickup]=useState("")
const [dropoff,setDropoff]=useState("")
const [res,setRes]=useState([])
const [set,unset]=useState(true)



useEffect(()=>{


  const results=async()=>{

    
    const result=await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?access_token=pk.eyJ1Ijoic3llZHNhZGF0aDE3IiwiYSI6ImNrenZhd2tlNzAxNnYydXF1aWQ5a3R4amkifQ.Zz6YDYzNbDoeDWQnDWHBoA`).then(res=>res.json()).
    then(data=>{
     console.log(data.features)
     setRes(data.features)
    })
    

  }

  results()
  
},[pickup])

console.log(res)




  return (
    <Wrapper>
      <ButtonContainer>
      <Link href='/'>
          <BackButton src='https://img.icons8.com/ios-filled/344/left.png'/>

      </Link>
      </ButtonContainer>
      <InputContainer>
<FromToIcons>
<Circle src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png' />
<Line src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png' />
<Sqaure src='https://img.icons8.com/windows/50/000000/square-full.png'/>
</FromToIcons>
<InputBoxes>
    <Input placeholder="Enter your pickup Location"  value={pickup} onChange={(e)=>setPickup(e.target.value)} />
   
    <Input placeholder="Where to ?"  value={dropoff} onChange={(e)=>setDropoff(e.target.value)}/>
</InputBoxes>
<PlusIcon  src='https://img.icons8.com/ios/50/000000/plus-math.png' />
      </InputContainer>
      <SavedPlaces>
      <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
      Saved places
      </SavedPlaces>
     
<Link href={{pathname:'/Confirm',query:{
  pickup:pickup,
  dropoff:dropoff
}}}>

      <ConfirmButton>
          Confirm Location
      </ConfirmButton>
</Link>
    
     
    </Wrapper>
  );
}

export default search;

const Wrapper=tw.div`
bg-gray-200 h-screen

`

const ButtonContainer=tw.div`
bg-white px-4 h-10
`

const BackButton=tw.img`
h-12 cursor-pointer
`

const InputContainer=tw.div`
bg-white flex px-10 items-center
`
const FromToIcons=tw.div`
w-10 flex flex-col my-3 items-center
`

const Circle = tw.img`
h-2.5
`

const Line = tw.img`
h-10
`

const Sqaure=tw.img`
h-3
`

const InputBoxes=tw.div`
flex flex-col flex-1
`

const Input =tw.input`
h-10 bg-gray-200 my-3 rounded-2 p-2 outline-none border-none
`

const PlusIcon =tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
`

const StarIcon=tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full
`
const SavedPlaces=tw.div`
flex items-center bg-white px-4 py-2  font-bold mt-2
`


const ConfirmButton=tw.button`
bg-black text-white w-screen mt-2 mx-5 px-10 py-3  text-base cursor-pointer
`
