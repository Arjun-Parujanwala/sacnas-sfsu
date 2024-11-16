export default function Title() {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col justify-center w-2/3 border-2 font-helvetica mt-10">
                <p className="flex justify-content text-left float-left text-6xl border-0 pl-20 py-5">SACNAS AT</p>
                <p className="flex justify-content text-left float-left text-6xl border-0 pl-20 py-5">SAN FRANCISCO STATE</p>
            </div>
            <div className="flex flex-col static right-0 border-2 mt-10 py-5">
                <p className="font-bold">About</p>
                <p>whatever whatever whatever blah blah blah whatever whatever whatever blah blah blah whatever whatever whatever blah blah blah whatever whatever whatever blah blah blah</p>
            </div>
        </div>
    )
}

//For now, we can size the title just to look good in my own screen but we can edit later to fit other screens