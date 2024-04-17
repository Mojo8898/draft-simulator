import ChampionCard from "./ChampionCard"


const BlueBan = ({blueBans, currentSelect}) => {
    const numberOfPicks = 1 - blueBans.length;
    const blueBanned = [...blueBans];
    const blueBansIndexes= [1];
    let id = -1;
    for (let i=0; i<numberOfPicks; i++) {
        blueBanned.push("");
    }

    return (
        <div className="flex flex-col md:flex-row">
            {blueBanned.map( ban => {
                id++;
                return (
                    <div className="p-3 rounded-xl text-gray-300" key={`blueBan${ban?.id || id}`}>
                        <ChampionCard champion={ban} downScaleMultiplier={0.6} cardId={blueBansIndexes[id]} currentSelect={currentSelect} />
                    </div>
                )
            })}
        </div>
    )
}

export default BlueBan
