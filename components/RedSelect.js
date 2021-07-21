import ChampionCard from "./ChampionCard"

const RedSelect = ({redChamp}) => {
    return (
        <div className="flex flex-col ">
            {redChamp.map(champion => {
                return (
                    <div className="p-3 rounded-xl text-gray-300">
                        <ChampionCard champion={champion} rounded={true} downScaleMultiplier={0.8}/>
                    </div>
                )
            })}
        </div>
    )
}

export default RedSelect
