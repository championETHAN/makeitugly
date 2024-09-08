'use client'
import { ReactNode } from "react";


type SOCIALLINKSPROPS = {
    facebookLink: ReactNode,
    instagramLink: ReactNode,
    websiteLink: ReactNode,

}
export default function SocialLinks({facebookLink, instagramLink,websiteLink }: SOCIALLINKSPROPS){
    let faceLink = facebookLink?.toString();
    let instaLink = instagramLink?.toString();
    let webLink= websiteLink?.toString();
    return(
        <div className="flex flex-row mt-2 justify-evenly">
            
            <button className="mb-2">
                <a href={instaLink} target="_blank" rel="noopener noreferrer">
                    <img className="h-12" src="\assets\instagram-svgrepo-com.svg" alt="instagram Link"></img>
                </a>
            </button>
            <button className="mb-2">
                <a href={faceLink} target="_blank" rel="noopener noreferrer">
                    <img className="h-12" src="\assets\facebook-svgrepo-com.svg" alt="facebook Link"></img>
                </a>
            </button>
            <button className="mb-2">
                <a href={webLink} target="_blank" rel="noopener noreferrer">
                    <img className="h-12" src="\assets\copy-svgrepo-com.svg" alt="website Link"></img>
                </a>
            </button>
        </div>
    )
}