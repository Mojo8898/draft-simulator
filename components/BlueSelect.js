import ChampionCard from "./ChampionCard"

const BlueSelect = ({blueChamp, currentSelect}) => {
    const numberOfPicks = 5 - blueChamp.length;
    const bluePicks = [...blueChamp];
    const bluePickIndexes = [7, 10, 11, 18, 19];
    let id = -1;
    for (let i=0; i<numberOfPicks; i++) {
        bluePicks.push("");
    }
    
    return (
        <div className="flex flex-col">
            {bluePicks.map(champion => {
                id++;
                return (
                    <div className="p-1 rounded-xl text-gray-300" key={`bluePick${champion?.id || id}`}>
                        <ChampionCard champion={champion} rounded="true" downScaleMultiplier={0.8} currentSelect={currentSelect} cardId={bluePickIndexes[id]} />
                    </div>
                )
            })}
        </div>
    )
}

export default BlueSelect
