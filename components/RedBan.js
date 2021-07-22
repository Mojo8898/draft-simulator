import ChampionCard from "./ChampionCard"


const RedBan = ({redBans, currentSelect}) => {
    const numberOfPicks = 5 - redBans.length;
    const redBanned = [...redBans];
    const redBanIndexes = [2, 4, 6, 13, 15];
    let id=-1;
    for (let i=0; i<numberOfPicks; i++) {
        redBanned.push("");
    }
    
    return (
        <div className="flex flex-col md:flex-row">
            {redBanned.map( ban => {
                id++;
                return (
                    <div className="p-3 rounded-xl text-gray-300" key={`redBan${ban?.id || id}`}>
                        <ChampionCard champion={ban} downScaleMultiplier={0.6} currentSelect={currentSelect} cardId={redBanIndexes[id]}/>
                    </div>
                )
            })}
        </div>
    )
}

export default RedBan
