import ChampionCard from "./ChampionCard";

const ChampionSelect = ({championData}) => {
    const championList = Object.keys(championData);

    return (
        <div className="mt-3 grid xl:grid-cols-9 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 gap-2 justify-items-center">
            {championList.map(champion => {
                return <ChampionCard champion={championData[champion]} key={champion}/>
            })}
        </div>
    )
}

export default ChampionSelect
