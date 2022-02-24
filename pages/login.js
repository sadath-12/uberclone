import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import { useRouter } from 'next/router';
import { signInWithPopup,onAuthStateChanged } from 'firebase/auth';
import { auth,Provider } from '../firebase';


const login = () => {

const router = useRouter()

useEffect(()=>{

onAuthStateChanged(auth,user=>{
    if(user){
        router.push('/')
    }
})

},[])

  return (
    <Wrapper>
    <UberLogo src='https://i.ibb.co/n6LWQM4/Post.png' />
    <Title>LogIn to access your account</Title>
    <HeadImg src='https://i.ibb.co/CsV9RYZ/login-image.png' />
      <SignInButton onClick={()=>signInWithPopup(auth,Provider)}>
          Sign In with Google
      </SignInButton>
    </Wrapper>
  );
}

export default login;

const Wrapper=tw.div`
flex flex-col h-screen bg-gray-200 w-screen p-4
`

const SignInButton=tw.button`
bg-black text-white py-4 mt-8 w-screen 
`

const UberLogo=tw.img`
h-20 w-auto object-contain self-start
`
const Title = tw.div`
text-5xl pt-4 text-gray-500
`

const HeadImg=tw.img`
object-contain w-full
`