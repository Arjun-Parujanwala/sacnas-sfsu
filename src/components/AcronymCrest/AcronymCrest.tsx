import Acronym from './Acronym/Acronym';
import Crest from './Crest/Crest';
export default function AcronymCrest() {
    return (
        <div className="flex flex-col md:flex-row w-full ">
            <Acronym />
            <Crest />
        </div>
    )
}