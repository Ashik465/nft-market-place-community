import DiscoverNFT from "../DiscoverNFT/DiscoverNFT";
import AmazingNFT from "../amazingNFT/AmazingNFT";
import Banner from "../banner/Banner";
import CollectionFeatured from "../collectionFeatured/CollectionFeatured";
import TopCollection from "../topCollection/TopCollection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AmazingNFT></AmazingNFT>
            <TopCollection></TopCollection>
            <CollectionFeatured></CollectionFeatured>
            <DiscoverNFT></DiscoverNFT>
        </div>
    );
};

export default Home;
