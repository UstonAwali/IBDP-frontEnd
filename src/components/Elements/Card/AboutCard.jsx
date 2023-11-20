import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

// eslint-disable-next-line react/prop-types
const Card = ({ image, name, position, facebookLink, instagramLink, whatsappLink }) => {
    return (
        <div className="max-w-xs overflow-hidden shadow-lg mx-auto my-4">
            <img className="object-cover" src={image} alt={name} />
            <div className="px-6 py-4 bg-gray-600 rounded-b-lg">
                <div className="text-white font-bold text-xl mb-2 text-center">{name}</div>
                <p className="text-white text-base text-center">{position}</p>
                <div className="flex justify-center space-x-4 pt-4">
                    <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
