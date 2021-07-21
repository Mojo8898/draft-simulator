import ChampionCard from "./ChampionCard"


const RedBan = ({redBans}) => {
    return (
        <div className="flex flex-row">
            {redBans.map( ban => {
                return (
                    <div className="p-3 rounded-xl text-gray-300">
                        <ChampionCard champion={ban} downScaleMultiplier={0.6}/>
                    </div>
                )
            })}
        </div>
    )
}

export default RedBan
