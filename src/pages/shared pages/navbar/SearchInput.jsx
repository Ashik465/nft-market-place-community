import { CgSearch } from 'react-icons/cg';

const SearchInput = () => {
    return (
        <div className="flex items-center rounded-full border-2 border-[#EFEFEF]  ">
      <input
        type="text"
        placeholder="Search"
        className="rounded-l-full py-2 px-4 w-full focus:outline-none"
      />
      <button className=" text-2xl text-[#757575] rounded-r-full p-4">
        <CgSearch />
      </button>
    </div>
    );
};

export default SearchInput;