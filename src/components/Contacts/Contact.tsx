import facebookLogo from '/public/assets/facebook.png';
import instagramLogo from '/public/assets/instagram.png';
import xLogo from '/public/assets/x.png';
import discordLogo from '/public/assets/discord.png';
import Image from 'next/image';

/*export default function Contacts() {
    return (
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-4">Contacts</h1>
            <div className="grid grid-cols-4 items-center w-full">
                <div className="flex items-center space-x-2">
                    <Image src={facebookLogo} alt="Facebook" width={24} height={24} />
                    <p>Facebook</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Image src={instagramLogo} alt="Instagram" width={24} height={24} />
                    <p>Instagram</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Image src={xLogo} alt="Twitter" width={24} height={24} />
                    <p>Twitter</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Image src={discordLogo} alt="Discord" width={24} height={24} />
                    <p>Discord</p>
                </div>
            </div>
        </div>
    )
}
*/

export default function Contacts() {
    const contacts = [
        {
            src: facebookLogo,
            alt: 'Facebook',
            text: 'Connect with us'
        },
        {
            src: instagramLogo,
            alt: 'Instagram',
            text: 'Follow us'
        },
        {
            src: xLogo,
            alt: 'Twitter',
            text: 'Tweet us'
        },
        {
            src: discordLogo,
            alt: 'Discord',
            text: 'Join us'
        }
    ]
    return (
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-4">Contacts</h1>
            <div className="grid grid-cols-4 items-center w-full">
                {contacts.map(contact => (
                    <div key={contact.alt} className="flex items-center space-x-2">
                        <Image src={contact.src} alt={contact.alt} width={24} height={24} />
                        <p>{contact.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}