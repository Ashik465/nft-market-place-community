import FirstCollum from "./FirstCollum";


const TopCollection = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
            <div><FirstCollum></FirstCollum></div>
            <div>2nd</div>
            <div>3rd</div>

            </div>
        </>
    );
};

export default TopCollection;