import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'
import { useEffect, useState } from "react";
import { onAuthStateChanged ,signOut} from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";

import Map from "./components/Map";
import Link from "next/link";


export default function Home() {

const [user,setUser]=useState(null)

const router = useRouter()

useEffect(()=>{
  return onAuthStateChanged(auth,user=>{
    if(user){
      setUser({
        name:user.displayName,
        photoUrl:user.photoURL
      })
    }else{
      setUser(null)
      router.push('/login')
    }
  })
})


  return (
    <Wrapper>
<Map/>
<ActionItems>
<Header>
<UberLogo src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png'/>
<Profile>
  <Name>{user && user.name}</Name>
  <UserImage src={user && user.photoURL} onClick={()=>signOut(auth)} />
</Profile>

</Header>
<ActionButtons>
<Link href='/search'>

<ActionButton>
<ActionButtonImage src='https://i.ibb.co/cyvcpfF/userx.png'  />
Ride
</ActionButton>
</Link>
<ActionButton>
<ActionButtonImage src='https://i.ibb.co/n776JLm/bike.png'  />

wheels
</ActionButton>
<ActionButton>
<ActionButtonImage src='https://i.ibb.co/5RjchBg/uberschedule.png'  />

reverse
</ActionButton>

</ActionButtons>
<InputButton>
<h1>Where to ?</h1>

</InputButton>
</ActionItems>
    </Wrapper>
  )
}


const Wrapper = tw.div`
flex flex-col  h-screen
`
 const Header = tw.div`
flex justify-between items-center
 ` 


const ActionItems=tw.div`
 flex-1 p-3
`


const UberLogo=tw.img`
h-28
`

const Profile = tw.div`
flex items-center
`

const Name = tw.div`
mr-4  w-20 text-sm
`

const UserImage=tw.img`
h-12 w-12 rounded-full border border-gray-100 p-2 cursor-pointer
`

const ActionButtons=tw.div`
flex 
`

const ActionButton=tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`

const ActionButtonImage=tw.img`
h-3/5
`


const InputButton=tw.div`
h-20 bg-gray-100 text-2xl p-4 font-semibold mt-8
`