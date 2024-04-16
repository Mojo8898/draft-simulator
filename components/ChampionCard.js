import Image from 'next/image';

const ChampionCard = ({champion, rounded, downScaleMultiplier, cardId, currentSelect}) => {
    const imgURL = `/images/champions/${champion.id}.png`;
    const roundStyle = rounded ? 'rounded-full' : 'rounded-md';
    const roundHeightWidth = rounded ? 'w-24 h-28' : 'w-20 h-24';
    const selectedStyle = cardId == currentSelect ? "border-2 border-yellow-600 animate-pulse" : ""

    if (champion) {
        return (
            <div className={`flex flex-col justify-center ${roundStyle} items-center group cursor-pointer p-3`}>
                <Image className={`group-hover:scale-105 ${roundStyle} transform transition duration-200`}
                    src={imgURL}
                    width={120 * downScaleMultiplier}
                    height={120 * downScaleMultiplier}
                    alt={champion.name}  // Good practice to include an alt tag for accessibility
                />
                <h3>{champion.name}</h3>
            </div>
        ); 
    }

    // Fallback or placeholder if no champion data
    return (
        <div className={`flex flex-col justify-center items-center ${roundHeightWidth}  m-3`}>
            <div className={`bg-gray-900 ${roundStyle} ${selectedStyle} h-full w-full`}>
            </div>
            <h3>{"..."}</h3>
        </div>
    );
}

export default ChampionCard;
