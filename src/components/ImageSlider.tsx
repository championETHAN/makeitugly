'use client'

import React from 'react'
import './imageslider.css';
import { useState } from 'react';
import { ArrowBigRight, ArrowBigLeft, CircleDot, Circle } from "lucide-react"
 
type ImageSliderProps = {
    images: {
        url: string
        alt: string
    }[]
}

export function ImageSlider({ images }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage(){
        setImageIndex(index =>{
            if(index === images.length - 1 ) return 0
            return index + 1 
        })
    }
    function showPrevImage(){
        setImageIndex(index =>{
            if(index === 0 ) return images.length - 1
            return index - 1 
        })
    }

  return( 
    <section aria-label="Image Slider"
     style={{width: "100%", height:"100%", position:"relative"}}>

        <div 
            style={{
                width:"100%",
                height:"100%",
                display:"flex",
                borderRadius: "5px",
                overflow:"hidden",   
                }}
        >
            {images.map(({url, alt}, index) => (
                <img 
                key={url}
                src={url}
                alt={alt}
                aria-hidden={imageIndex !== index}
                className="ImageSliderImages"
                style={{ translate: `${-100 * imageIndex}%` }}
                />
            ))}
        </div>

        
        <button 
            onClick={showPrevImage}
            className="ImageSliderButton"
            style={{ left: 0 }}
            aria-label='View Previous Image'
        >
            <ArrowBigLeft aria-hidden/>
        </button>

        <button 
            onClick={showNextImage}
            className="ImageSliderButton"
            style={{ right: 0 }}
            aria-label='View Next Image'
        >
            <ArrowBigRight aria-hidden/>
        </button> 
        <div 
            style={{
                position:"absolute",
                bottom: "0.5rem",
                left: "50%",
                translate: "-50%",
                display: "flex",
                gap: "2rem",
            }}
        >
            {images.map((_,index) =>(
                <button
                    key={index}
                    className="ImageSliderDotButtons"
                    aria-label={`View Image ${index + 1}`}
                    onClick={() => setImageIndex(index)}
                >
                    {index === imageIndex ? <CircleDot  aria-hidden/> : 
                                            <Circle aria-hidden/> }
                </button>
            ))}
        </div>
    </section>
  )
}