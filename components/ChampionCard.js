import Image from 'next/image';
const championImageURL_start = 'https://ddragon.leagueoflegends.com/cdn/'
const championImageURL_middle = '/img/champion/'
const championImageURL_end = '.png'


const ChampionCard = ({champion, rounded, downScaleMultiplier}) => {
    const imgURL = `${championImageURL_start}${champion.version}${championImageURL_middle}${champion.id}${championImageURL_end}`
    const roundStyle = rounded ? 'rounded-full' : 'rounded-md';
    return (
        <div className={`flex flex-col justify-center ${roundStyle} items-center group cursor-pointer p-3`}>
            <Image className={`group-hover:scale-105 ${roundStyle} transform transition duration-200`} src={imgURL} width={120*downScaleMultiplier} height={120*downScaleMultiplier}/>
            <h3 className="">{champion.name}</h3>
            
        </div>
    )
}

export default ChampionCard
