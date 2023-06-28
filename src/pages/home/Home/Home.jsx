import DiscoverNFT from "../DiscoverNFT/DiscoverNFT";
import AmazingNFT from "../amazingNFT/AmazingNFT";
import Banner from "../banner/Banner";
import CollectionFeatured from "../collectionFeatured/CollectionFeatured";
import Create from "../create/Create";
import TopCollection from "../topCollection/TopCollection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AmazingNFT></AmazingNFT>
            <TopCollection></TopCollection>
            <CollectionFeatured></CollectionFeatured>
            <Create></Create>
            <DiscoverNFT></DiscoverNFT>
        </div>
    );
};

export default Home;
