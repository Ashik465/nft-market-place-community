import facebook from '../../../assets/footer/facebook.png'
import linkedin from '../../../assets/footer/linkedin.png'
import twitter from '../../../assets/footer/twitter.png'

const Footer = () => {
    return (
        <div className="bg-[#FFF]">

           <footer className="  container mx-auto footer p-10 text-base-content">
  <div>
    <h1 className=" font-extrabold text-3xl">NFTERS</h1>
    <p className="text-[#565656] text-base my-4">The world’s first and largest digital marketplace for <br /> crypto collectibles and non-fungible tokens (NFTs). <br /> Buy, sell, and discover exclusive digital items.</p>
    <div className="grid grid-flow-col gap-4">
      <a><img src={facebook} alt="" /></a> 
      <a><img src={linkedin} alt="" /></a> 
      <a><img src={twitter} alt="" /></a>
    </div>
  </div> 
  <div  style={{ fontFamily: "DM Sans, sans-serif" }}>
    <span   className="font-bold mb-2 text-xl text-black">Market Place</span> 
    <a className="link link-hover">All NFTs</a> 
    <a className="link link-hover">New</a> 
    <a className="link link-hover">Art</a> 
    <a className="link link-hover">Sports</a> 
    <a className="link link-hover">Utility</a>
    <a className="link link-hover">Music</a>
    <a className="link link-hover">Domain Name</a>
  </div> 
  <div  style={{ fontFamily: "DM Sans, sans-serif" }}>
    <span className="font-bold mb-2 text-xl text-black">My Account</span> 
    <a className="link link-hover">Profile</a> 
    <a className="link link-hover">Favorite</a> 
    <a className="link link-hover">My Collections</a> 
    <a className="link link-hover">Settings</a>
  </div> 
  <div  style={{ fontFamily: "DM Sans, sans-serif" }}>
    <span className="font-bold mb-2 text-xl text-black">Stay in the loop</span> 
    <p className="text-[#565656] text-base my-4">Join our mailing list to stay in the loop with our newest <br /> feature releases, NFT drops, and tips and tricks for <br /> navigating NFTs.</p>
    <div className="flex items-center rounded-full border-2 border-[#EFEFEF]  ">
      <input
        type="text"
        placeholder="Enter your email address.."
        className="rounded-full py-2 px-6 xl:w-64 w-full focus:outline-none  "
      />
      <button style={{
              fontFamily: "DM Sans, sans-serif",
              transition: "transform 0.2s ease-in-out",
            }} className=" text-base text-white rounded-full  py-3  m-1  px-8  bg-[#2639ED]  hover:bg-emerald-600 active:scale-95 hover:scale-105 cursor-pointer">
       subscribe
      </button>
    </div>


  </div>
</footer>
<footer className="footer footer-center p-4 border-[1px] border-t-[#F4F4F4] bg-[#FFF] text-[#A4A4A4]">
  <div>
    <p>Copyright © 2022 Avi Yansah</p>
  </div>
</footer>
        </div>
    );
};

export default Footer;