import CustomHead from "./CustomHead"

const Header = () => {
    return (
        <div className="flex flex-col w-1/2 md:w-1/6 justify-center items-center self-center text-gray-300 justify-center items center mt-2 rounded-lg">
            <h1 className=" text-2xl">Gigantic Drafter</h1>
            <CustomHead title="Gigantic Drafter" description="A gigantic drafter"/>
        </div>
    )
}

export default Header
