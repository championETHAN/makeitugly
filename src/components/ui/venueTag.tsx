import { Button } from "./button"
import "./venueTag.css"
type VenueTagProps ={
    venuePurpose: string

}
export function VenueTag({venuePurpose}: VenueTagProps){
    return (
        <div className="VenueTagContainer">
            <a href="/venues"className="Unset">{venuePurpose}</a>
        </div>
    )
}

