import ChampionCard from "./ChampionCard"

const RedSelect = ({redChamp}) => {
    return (
        <div className="flex flex-col">
            {redChamp.map(champion => {
                return (
                    <div className="bg-red-900 p-3 text-gray-300">
                        <ChampionCard champion={champion} />
                    </div>
                )
            })}
        </div>
    )
}

export default RedSelect
