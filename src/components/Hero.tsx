import Acronym from "./Acronym/Acronym"
import Crest from "./Crest/Crest"
import AboutUs from "./AboutUs/AboutUs"
import Contacts from "./Contacts/Contact"

export default function Hero() { 
    return (
        <div className="border-2 lg:border-red-600 h-screen justify-center">
            <div className="lg:flex lg:justify-center lg:border-2 lg:border-blue-600">
                <div className="">
                    <Acronym />
                </div>
                <div className="">
                    <Crest />
                </div>
            </div>
            <div className="space-y-6 lg:flex lg:justify-center lg:align-center lg:border-2 lg:border-green-600 ">
                <div className="flex-1">
                    <AboutUs />
                </div>
                <div className="flex-1">
                    <Contacts />
                </div>
            </div>
        </div>
    )    
}