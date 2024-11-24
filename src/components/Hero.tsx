import AcronymCrest from "./AcronymCrest/AcronymCrest"
import AboutUs from "./AboutUs/AboutUs"
import Contacts from "./Contacts/Contact"

export default function Hero() { 
    return (
        <div className="grid grid-cols-1 items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 m-4 border-2 space-x-4">
                <div className="mb-8">
                    <AcronymCrest />
                </div>
                <div className="mb-8 h-full">
                    <AboutUs />
                </div>
            </div>
            <div className="mb-8">
                <Contacts />
            </div>
        </div>
    )
}