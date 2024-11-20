import facebookLogo from '/public/assets/facebook.png';
import instagramLogo from '/public/assets/instagram.png';
import xLogo from '/public/assets/x.png';
import discordLogo from '/public/assets/discord.png';
import Image from 'next/image';

export default function Contacts() {
    return (
        <div>
            <div>
                <Image src={facebookLogo} alt="Facebook" width={24} height={24} />
            </div>
            <div>
                <Image src={instagramLogo} alt="Instagram" width={24} height={24} />
            </div>
            <div>
                <Image src={xLogo} alt="Twitter" width={24} height={24} />
            </div>
            <div>
                <Image src={discordLogo} alt="Discord" width={24} height={24} />
            </div>
        </div>
    )
}