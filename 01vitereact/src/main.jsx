import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react';

function MyApp(){
    return(
        <div>My Buddy !!!</div>
    )
}

const MyElement = (
    <>
    <a target='_blank' href='https://google.com'>Go to google</a>
    <a target='_blank' href='https://google.com'>Go to google</a>
    </>
);

const anotherUser = "chai aur code"
const MYReactElement = React.createElement(
    "p",
    { target:'_blank', href:'https://google.com' },
    "Baba Black sheep",
    anotherUser
    
)


createRoot(document.getElementById('root')).render(
  
   MYReactElement
  
)
