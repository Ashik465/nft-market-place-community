import FirstCollum from "./FirstCollum";
import SecondColum from "./SecondColum";
import ThirdColum from "./ThirdColum";

const TopCollection = () => {
  return (
    <>
      <div className="grid grid-cols-1 p-5 xl:p-0 xl:grid-cols-3 gap-5 my-10 container mx-auto">
        <div>
          <FirstCollum></FirstCollum>
        </div>
        <div>
          <SecondColum></SecondColum>
        </div>
        <div>
          <ThirdColum></ThirdColum>
        </div>
      </div>
    </>
  );
};

export default TopCollection;
