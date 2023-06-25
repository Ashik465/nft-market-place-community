import CountNumber from "./CountNumber";


const Banner = () => {
    return (
        <>
           <div className=" flex  mt-6 ">

            <div className=" space-y-6">
                  <h1
                   style={{ fontFamily: "Roboto, sans-serif" }} 
                   className="tracking-wide text-5xl text-black font-bold ">Discover, and collect Digital Art  NFTs </h1>  
                  <p style={{
              fontFamily: "DM Sans, sans-serif",
            }} className=" text-[#565656] text-xl">Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
       <div className="py-5">
        <a  style={{
              fontFamily: "DM Sans, sans-serif",
              transition: "transform 0.2s ease-in-out",
            }} className="btn-main ">Explore Now</a>
       </div>
            
            <CountNumber></CountNumber>
            </div>
         
            
            </div> 
        </>
    );
};

export default Banner;