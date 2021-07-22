import ChampionCard from "./ChampionCard"

const RedSelect = ({redChamp, currentSelect}) => {

    const numberOfPicks = 5 - redChamp.length;
    const redPicks = [...redChamp];
    const redPickIndexes = [8, 9, 12, 17, 20];
    let id = -1;
    for (let i=0; i<numberOfPicks; i++) {
        redPicks.push("");
    }
    
    return (
        <div className="flex flex-col ">
            {redPicks.map(champion => {
                id++;
                return (
                    <div className="p-1 rounded-xl text-gray-300" key={`redPick${champion?.id || id}`}>
                        <ChampionCard champion={champion} rounded={true} downScaleMultiplier={0.8} currentSelect={currentSelect} cardId={redPickIndexes[id]} />
                    </div>
                )
            })}
        </div>
    )
}

export default RedSelect
