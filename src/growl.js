import React from 'react'

import './growl.css'
import { useEffect } from 'react'
// import { useEffect } from 'react'

export const Growl = ({ active, message, onDismissed }) => (
  <div className={`growl${active ? " active" : ""}`}>
    {message}
    <div onClick={onDismissed} className="growl-close" />
  </div>
)


export function useGrowl(time) {
    // state of the growl
    const [growlActive, setGrowlActive] = React.useState(false)

    if(time==null)time=3000;
    useEffect(()=>{
      const timer=setInterval(()=>{
        setGrowlActive(false);
      },time);
       
      return()=>{
        clearInterval(timer);
      }
    },[])

    return [
        // the first arg is the state
        growlActive, 

        // the second arg is a fn that allows you to safely set its state
        (active) => {
            setGrowlActive(active)
        },
    ]
}