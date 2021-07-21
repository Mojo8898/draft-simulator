import axios from "axios";
import ChampionSelect from "../components/ChampionSelect";


const championImageURL_start = 'https://ddragon.leagueoflegends.com/cdn/'
const leagueVersion = process.env.LEAGUE_VERSION



function Home(props) {
  return (
    <div>
      <ChampionSelect championData={props.championData} />
    </div>
  )
}

export default Home


export async function getStaticProps(context) {

  const LOL_DATA = await axios.get(`${championImageURL_start}${leagueVersion}/data/en_US/champion.json`);
  const {data} = LOL_DATA;
  const championData = data.data;
  const {version} = data;
  
  return {
    props: {
      championData,
      version,
    }, // will be passed to the page component as props
  }
}