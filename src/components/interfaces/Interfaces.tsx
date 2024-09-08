import { VenueCost } from "../types/Types" 

export interface Venue {
    id: String;        
    name: String;
    phoneNumber: String;
    location: String;
    cost: String;
}


export interface FilterObject{
    venueCost: VenueCost[]
}