import ChampionCard from "./ChampionCard"


const RedBan = ({redBans}) => {
    return (
        <div className="flex flex-row">
            {redBans.map( ban => {
                return (
                    <div className="p-3">
                        <ChampionCard champion={ban}/>
                    </div>
                )
            })}
        </div>
    )
}

export default RedBan
