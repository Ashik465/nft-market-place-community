
import filter from '../../../assets/discover-more/filter.png'
const DiscoverNFT = () => {
    const categories = [ 
        'All Categories',
        'Art',
        'Celebrities',
        'Gaming',
        'Sport',
        'Music',
        'Crypto',
    ];
    return (
        <>
            <div className="bg-[#D9E0EC21] mt-20  backdrop-blur-xl ">
           <div className="container mx-auto py-20">

                <h1   style={{ fontFamily: "Roboto, sans-serif" }}
            className=" font-bold text-4xl px-5">
                Discover more NFTs
                </h1>
            {/* category section */}
              <div className="flex items-center justify-between flex-wrap">
                <div className="flex flex-wrap gap-3 px-5 py-10">
                {categories.map((category, index) => (
            <h1  style={{
                fontFamily: "DM Sans, sans-serif",
              }} className=" bg-[#DCDCDC33]  rounded-full px-4 py-2 text-base font-medium hover:bg-[#3D00B7] hover:text-white cursor-pointer" key={index} >
              {category}
            </h1>
          ))}
                </div>
                {/*filter  */}
                <div className="dropdown dropdown-end pl-32 sm:pl-0">
                    <div className='flex items-center gap-2 bg-[#DCDCDC33]  rounded-full px-4 py-2'>
                        <img src={filter} alt="" />
                       <label tabIndex={0} style={{
                fontFamily: "DM Sans, sans-serif",
              }}  className="   text-base font-medium   text-[#371C87] cursor-pointer  m-1">All Filters</label>  
                    </div>
                    
 
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a> Price</a></li>
    <li><a> New</a></li>
  </ul>
</div>
                
              </div>


           </div>
        </div>
        </>
    );
};

export default DiscoverNFT;