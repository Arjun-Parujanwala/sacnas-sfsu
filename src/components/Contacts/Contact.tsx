import facebookLogo from '/public/assets/facebook.png';
import instagramLogo from '/public/assets/instagram.png';
import xLogo from '/public/assets/x.png';
import discordLogo from '/public/assets/discord.png';
import Image from 'next/image';

export default function Contacts() {
    return (
        <div className="flex justify-between items-center border-2 border-purple-800 bg-yellow-400 mx-5 rounded-xl text-white p-4">
            <div className="flex items-center space-x-2">
                <Image src={facebookLogo} alt="Facebook" width={24} height={24} />
            </div>
            <div className="flex items-center space-x-2">
                <Image src={instagramLogo} alt="Instagram" width={24} height={24} />
            </div>
            <div className="flex items-center space-x-2">
                <Image src={xLogo} alt="Twitter" width={24} height={24} />
            </div>
            <div className="flex items-center space-x-2">
                <Image src={discordLogo} alt="Discord" width={24} height={24} />
            </div>
        </div>
    )
}