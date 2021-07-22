import BlueSelect from "./BlueSelect";
import ChampionCard from "./ChampionCard";
import RedSelect from "./RedSelect";
import {useState} from "react";
import BlueBan from "./BlueBan";
import RedBan from "./RedBan";
import {ReplyIcon, TrashIcon} from "@heroicons/react/outline"

const ChampionSelect = ({championData}) => {
    const championList = Object.keys(championData);
    const [pickBanIndex, setPickBanIndex] = useState(1);
    const [blueChamp, setBlueChamp] = useState([]);
    const [redChamp, setRedChamp] = useState([]);
    const [blueBans, setBlueBans] = useState([]);
    const [redBans, setRedBans] = useState([]);
    const [pickBanHistory, setPickBanHistory] = useState([]);

    const handleClick = chmp => {
        switch (pickBanIndex) {
            case 1:
            case 3:
            case 5:
            case 14:
            case 16:
                setBlueBans( prevBlueBans => {
                    const totalPickBans = [...blueChamp, ...redChamp, ...blueBans, ...redBans, ...pickBanHistory];
                    if ( !totalPickBans.includes(championData[chmp]) ) {
                        setPickBanIndex( prevIndex => prevIndex + 1);
                        setPickBanHistory(prevHistory => [...prevHistory, championData[chmp]]);
                         return (
                            [...prevBlueBans, championData[chmp]]
                        );
                    } else {
                        return [...prevBlueBans];
                    }
                })
                
                break;
            case 2:
            case 4:
            case 6:
            case 13:
            case 15:
               setRedBans( prevRedBans => {
                    const totalPickBans = [...blueChamp, ...redChamp, ...blueBans, ...redBans, ...pickBanHistory];
                    if ( !totalPickBans.includes(championData[chmp]) ) {
                        setPickBanIndex( prevIndex => prevIndex + 1);
                        setPickBanHistory(prevHistory => [...prevHistory, championData[chmp]]);
                        return (
                            [...prevRedBans, championData[chmp]]
                        );
                    } else {
                        return [...prevRedBans];
                    }
                })
                
                break;
            case 7:
            case 10:
            case 11:
            case 18:
            case 19:
                setBlueChamp( prevBlueChamp => {
                    const totalPickBans = [...blueChamp, ...redChamp, ...blueBans, ...redBans, ...pickBanHistory];
                    if ( !totalPickBans.includes(championData[chmp]) ) {
                        setPickBanIndex( prevIndex => prevIndex + 1);
                        setPickBanHistory(prevHistory => [...prevHistory, championData[chmp]]);
                        return (
                            [...prevBlueChamp, championData[chmp]]
                        );
                    } else {
                        return [...prevBlueChamp];
                    }
                })
                break;
            case 8:
            case 9:
            case 12:
            case 17:
            case 20:
                setRedChamp( prevRedChamp => {
                    const totalPickBans = [...blueChamp, ...redChamp, ...blueBans, ...redBans, ...pickBanHistory];
                    if ( !totalPickBans.includes(championData[chmp]) ) {
                        setPickBanIndex( prevIndex => prevIndex + 1);
                        setPickBanHistory(prevHistory => [...prevHistory, championData[chmp]]);
                        return (
                            [...prevRedChamp, championData[chmp]]
                        );
                        
                    } else {
                        return [...prevRedChamp];
                    }
                })
                break;
        }
    }

    const resetChampSelect = () => {
        setPickBanIndex(1);
        setBlueChamp([]);
        setRedChamp([]);
        setBlueBans([]);
        setRedBans([]);
        setPickBanHistory([]);
        console.log("pickBanIndex: ", pickBanIndex)
    }

    const goBack = () => {
        if ([7, 10, 11, 18, 19].includes(pickBanIndex -1)) setBlueChamp(prevPicks => {
            return (
                prevPicks.filter(pick => {
                    const comparisonArray = pickBanHistory.slice();
                    if (pick == comparisonArray[comparisonArray.length -1]) setPickBanHistory(prevHistory => prevHistory.filter(elem => elem !== pick));
                    return (
                        pick !== comparisonArray[comparisonArray.length -1]
                    );
                })
            );
        });
        if ([8, 9, 12, 17, 20].includes(pickBanIndex -1)) setRedChamp(prevPicks => {
            return (
                prevPicks.filter(pick => {
                    const comparisonArray = pickBanHistory.slice();
                    if (pick == comparisonArray[comparisonArray.length -1])  setPickBanHistory(prevHistory => prevHistory.filter(elem => elem !== pick));
                    return (
                        pick !== comparisonArray[comparisonArray.length -1]
                    );
                })
            );
        });
        if ([1, 3, 5, 14, 16].includes(pickBanIndex -1)) setBlueBans(prevPicks => {
            return (
                prevPicks.filter(pick => {
                    const comparisonArray = pickBanHistory.slice();
                    if (pick == comparisonArray[comparisonArray.length -1]) setPickBanHistory(prevHistory => prevHistory.filter(elem => elem !== pick));
                    return (
                        pick !== comparisonArray[comparisonArray.length -1]
                    );
                })
            );
        });
        if ([2, 4, 6, 13, 15].includes(pickBanIndex - 1)) setRedBans(prevPicks => {
            return (
                prevPicks.filter(pick => {
                    const comparisonArray = pickBanHistory.slice();
                    if (pick == comparisonArray[comparisonArray.length -1])  setPickBanHistory(prevHistory => prevHistory.filter(elem => elem !== pick));
                    return (
                        pick !== comparisonArray[comparisonArray.length -1]
                    );
                })
            );
        });
        console.log(pickBanIndex);
        console.log(pickBanHistory);
        if (pickBanIndex > 1 && pickBanIndex <= 21) setPickBanIndex(prevIndex => prevIndex - 1);
        
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-center mt-2 space-x-24">
                <BlueBan blueBans={blueBans} currentSelect={pickBanIndex}/>
                <RedBan redBans={redBans} currentSelect={pickBanIndex}/>
            </div>
            <div className="flex justify-around  align-items">
                <BlueSelect blueChamp={blueChamp} currentSelect={pickBanIndex}/>
                <div className="rounded-lg max-h-160 w-6/12 mt-10 grid xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 gap-1 justify-items-center bg-gray-800 text-gray-300 border p-2 overflow-y-scroll mx-6">
                    {championList.map(champion => {
                        return (
                            <div key={champion} onClick={() => handleClick(champion)}>
                                <ChampionCard champion={championData[champion]} downScaleMultiplier={0.5} key={`champSelect${champion?.id}`}/>
                            </div>
                        )
                    })}
                </div>
                <RedSelect redChamp={redChamp} currentSelect={pickBanIndex}/>
            </div>
            <div className="flex flex-row justify-center space-x-12">
                <div onClick={goBack} className="group flex flex-row self-center justify-center items-center rounded-lg bg-gray-300 hover:bg-yellow-400 text-gray-900 w-1/12 cursor-pointer mb-6">
                    <ReplyIcon className="w-6 h-6 "/>
                    <h3 className="p-3 group-hover:font-bold"> Go Back </h3>
                </div>
                <div onClick={resetChampSelect} className="group flex flex-row self-center justify-center items-center rounded-lg bg-gray-300 hover:bg-pink-800 text-gray-900 w-1/12 cursor-pointer mb-6">
                    <TrashIcon className="w-6 h-6"/>
                    <h3 className="p-3 group-hover:font-bold"> Reset Draft </h3>
                </div>
            </div>
        </div>
    )
}

export default ChampionSelect
