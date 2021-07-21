import ChampionCard from "./ChampionCard"

const BlueSelect = ({blueChamp}) => {
    return (
        <div className="flex flex-col rounded-lg">
            {blueChamp.map(champion => {
                return (
                    <div className="p-3 bg-blue-900 text-gray-300">
                        <ChampionCard champion={champion} />
                    </div>
                )
            })}
        </div>
    )
}

export default BlueSelect
