import Acronym from "./Acronym/Acronym"
import Crest from "./Crest/Crest"
import AboutUs from "./AboutUs/AboutUs"
import Contacts from "./Contacts/Contact"

export default function Hero() { 
    return (
        <div className="border-2">
            <div>
                <div className="">
                    <Acronym />
                </div>
                <div className="">
                    <Crest />
                </div>
            </div>
            <div>
                <AboutUs />
            </div>
        </div>
    )    
}