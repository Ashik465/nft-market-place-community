import { useEffect, useState } from "react";
import filter from "../../../assets/discover-more/filter.png";
import CardNFT from "./CardNFT";
import LazyLoad from "react-lazy-load";

const DiscoverNFT = () => {
  const [nft, setNft] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  useEffect(() => {
    const getNft = async () => {
      try {
        const res = await fetch("nft.json");
        const data = await res.json();
        setNft(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching NFT data:", error);
        setLoading(false);
      }
    };

    getNft();
  }, []);

  const categories = [
    "All Categories",
    "Art",
    "Celebrities",
    "Gaming",
    "Sport",
    "Music",
    "Crypto",
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowAll(false);
  };

  const filteredNft =
    selectedCategory === "All Categories"
      ? nft
      : nft.filter(
          (item) => item.type.toLowerCase() === selectedCategory.toLowerCase()
        );

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div className="bg-[#D9E0EC21] mt-20 backdrop-blur-xl">
      <div className="container mx-auto py-20">
        <h1
          style={{ fontFamily: "Roboto, sans-serif" }}
          className="font-bold text-4xl px-5"
        >
          Discover more NFTs
        </h1>

        <div className="flex items-center justify-between flex-wrap">
          <div className="flex flex-wrap gap-3 px-5 py-10">
            {categories.map((category) => (
              <h1
                key={category}
                style={{ fontFamily: "DM Sans, sans-serif" }}
                className={`bg-[#DCDCDC33] rounded-full px-4 py-2 text-base font-medium hover:bg-[#3D00B7] hover:text-white cursor-pointer ${
                  selectedCategory === category ? " text-[#3D00B7]" : ""
                }`}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </h1>
            ))}
          </div>
          {/* filter */}
          <div className="dropdown dropdown-end pl-32 sm:pl-0">
            <div className="flex items-center gap-2 bg-[#DCDCDC33]  rounded-full px-4 py-2">
              <img src={filter} alt="" />
              <label
                tabIndex={0}
                style={{
                  fontFamily: "DM Sans, sans-serif",
                }}
                className="   text-base font-medium   text-[#371C87] cursor-pointer  m-1"
              >
                All Filters
              </label>
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a> Price</a>
              </li>
              <li>
                <a> New</a>
              </li>
            </ul>
          </div>
          {/*  */}
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-5 my-10 px-10 md:px-5">
          {filteredNft.slice(0, showAll ? undefined : 16).map((item, index) => (
            <LazyLoad key={index} once>
              <CardNFT nft={item} />
            </LazyLoad>
          ))}
        </div>

        {!showAll && (
          <div className="flex justify-center">
            <button className="btn-second-main" onClick={handleShowAll}>
              More NFTs
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscoverNFT;
