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
        </div>
    );
};

export default Home;
