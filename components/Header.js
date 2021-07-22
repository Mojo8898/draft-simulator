import CustomHead from "./CustomHead"

const Header = () => {
    return (
        <div className="flex flex-col w-1/2 md:w-1/6 justify-center items-center self-center text-gray-300 justify-center items center mt-2 rounded-lg">
            <h1 className=" text-2xl">Draft Kingdom</h1>
            <h3 className="text-md mt-3 font-light ">Pro-play simulator</h3>
            <CustomHead title="Draft Kingdom" description="A League of Legend Draft Simulator with Pro-Play order of Pick and Ban."/>
        </div>
    )
}

export default Header
