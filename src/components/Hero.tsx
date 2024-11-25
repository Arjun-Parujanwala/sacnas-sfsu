import Acronym from "./Acronym/Acronym"
import Crest from "./Crest/Crest"
import AboutUs from "./AboutUs/AboutUs"
import Contacts from "./Contacts/Contact"

export default function Hero() { 
    return (
        <div className="">
            <div>
                <div className="">
                    <Acronym />
                </div>
                <div className="">
                    <Crest />
                </div>
            </div>
            <div className="space-y-6">
                <div>
                    <AboutUs />
                </div>
                <div>
                    <Contacts />
                </div>
            </div>
        </div>
    )    
}