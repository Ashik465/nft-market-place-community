import SearchInput from "./SearchInput";

const Navbar = () => {
  const menu = (
    <>
      <li>
        <a
          style={{ fontFamily: "DM Sans, sans-serif" }}
          className="text-black text-base font-medium tracking-wide"
        >
          Marketplace
        </a>
      </li>

      <li>
        <a
          style={{ fontFamily: "DM Sans, sans-serif" }}
          className="text-black text-base font-medium tracking-wide"
        >
          Resources
        </a>
      </li>
      <li>
        <a
          style={{ fontFamily: "DM Sans, sans-serif" }}
          className="text-black text-base font-medium tracking-wide"
        >
          About
        </a>
      </li>
    </>
  );
  
  return (
    <div className="bg-base-100 border-b-[1px] border-[#EFEFEF] py-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menu}
              </ul>
            </div>
            <a
              style={{ fontFamily: "Roboto, sans-serif" }}
              className="btn btn-ghost normal-case font-extrabold tracking-tight text-xl md:text-4xl text-[#3D00B7]"
            >
              NFTERS
            </a>
            <div className="ml-20 hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{menu}</ul>
            </div>
          </div>
  
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="hidden md:flex">
              <SearchInput />
            </div>
  
            <button
              style={{
                fontFamily: "DM Sans, sans-serif",
                transition: "transform 0.2s ease-in-out",
              }}
              className="btn-main"
            >
              Upload
            </button>
            <button
              style={{
                fontFamily: "DM Sans, sans-serif",
                transition: "transform 0.2s ease-in-out",
                whiteSpace: "nowrap",
              }}
              className="btn-second-main"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
