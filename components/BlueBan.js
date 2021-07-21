import ChampionCard from "./ChampionCard"

const BlueBan = ({blueBans}) => {
    return (
        <div className="flex flex-row">
            {blueBans.map( ban => {
                return (
                    <div className="p-3 bg-blue-900 text-gray-300">
                        <ChampionCard champion={ban}/>
                    </div>
                )
            })}
        </div>
    )
}

export default BlueBan
