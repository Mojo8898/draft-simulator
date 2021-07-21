import axios from "axios";


const championImageURL_start = 'https://ddragon.leagueoflegends.com/cdn/'
const championImageURL_middle = '/img/champion/'
const championImageURL_end = '.png'
const leagueVersion = process.env.LEAGUE_VERSION



function Home(props) {
  return (
    <div>
      <h1> hi </h1>
    </div>
  )
}

export default Home


export async function getStaticProps(context) {

  const LOL_DATA = await axios.get(`${championImageURL_start}${leagueVersion}/data/en_US/champion.json`);
  const {data} = LOL_DATA;

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  }
}