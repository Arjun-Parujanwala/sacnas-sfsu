import Crest from "./Crest/Crest"
import Acronym from "./Acronym/Acronym"

export default function AcronymCrest() {
    return (
        <div className="flex flex-col-2 items-center bg-white p-6 rounded-lg shadow-lg space-x-10">
            <Acronym />
            <Crest />
        </div>
    )
}