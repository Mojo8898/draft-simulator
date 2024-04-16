import ChampionSelect from "../components/ChampionSelect";
import Footer from "../components/Footer";
import Header from "../components/Header";
import championData from '../public/champions.json';


function Home(props) {
  return (
    <div className="flex flex-col bg-gradient-to-br from-blue-900 via-gray-900 to-red-900">
      <Header />
      <ChampionSelect championData={props.championData} />
      <Footer />
    </div>
  )
}

export default Home


export async function getStaticProps(context) {
  return {
    props: {
      championData,
    }, // will be passed to the page component as props
  }
}
