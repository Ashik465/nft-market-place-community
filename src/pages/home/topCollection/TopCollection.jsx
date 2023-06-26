import FirstCollum from "./FirstCollum";
import SecondColum from "./SecondColum";


const TopCollection = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-10">
            <div><FirstCollum></FirstCollum></div>
            <div><SecondColum></SecondColum></div>
            <div>3rd</div>

            </div>
        </>
    );
};

export default TopCollection;