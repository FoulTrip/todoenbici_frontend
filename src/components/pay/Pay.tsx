"use client"

import React, { useEffect } from 'react'

function Pay() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.epayco.co/checkout.js'
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            const handler = (window as any).epayco.checkout.configure({
                key: ''
            })
        }
    })
  return (
    <div>Pay</div>
  )
}

export default Pay