import Image from 'next/image';
const championImageURL_start = 'https://ddragon.leagueoflegends.com/cdn/'
const championImageURL_middle = '/img/champion/'
const championImageURL_end = '.png'


const ChampionCard = ({champion}) => {
    const imgURL = `${championImageURL_start}${champion.version}${championImageURL_middle}${champion.id}${championImageURL_end}`
    return (
        <div className="flex flex-col justify-center items-center group cursor-pointer ">
            <Image className="group-hover:scale-105 rounded-md transform transition duration-200" src={imgURL} width={90} height={90}/>
            <h3 className="">{champion.name}</h3>
            
        </div>
    )
}

export default ChampionCard
