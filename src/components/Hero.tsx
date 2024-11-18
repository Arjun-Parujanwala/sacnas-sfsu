import Acronym from "./Acronym/Acronym"
import Crest from "./Crest/Crest"
import AboutUs from "./AboutUs/AboutUs"
import Contacts from "./Contacts/Contact"

export default function Hero() { 
    return (
        <div>
            <Acronym />
            <Crest />
            <AboutUs />
            <Contacts />
        </div>
    )
}