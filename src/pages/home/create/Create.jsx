import ban1 from '../../../assets/create/ban1.png'
import ban2 from '../../../assets/create/ban2.png'
import ban3 from '../../../assets/create/ban3.png'
import people1 from '../../../assets/create/people1.png'
import people2 from '../../../assets/create/people2.png'


const Create = () => {
    return (
        <div className="flex flex-col lg:flex-row  items-center justify-center my-10 container mx-auto gap-28 p-10">
           <div className='grid grid-rows-3 grid-flow-col gap-20'>
            <div className='row-start-1 row-span-2 relative'>
                <img src={ban1} alt="" />
                <img className=' absolute md:bottom-4 -bottom-6 -right-6 md:-right-6' src={people1} alt="" />
            </div>
            {/* row-start-2 row-span-2 : row-start-3 row-end-4 col-span-2*/}
              <div className='row-start-3 row-span-2 ml-28 relative'>
                <img src={ban3} alt="" />
                <img className=' absolute bottom-5 -right-6 md:-bottom-9 md:-right-8' src={people2} alt="" />
              </div>
              <div className='row-start-2 row-span-2 relative'>
                <img src={ban2} alt="" />
                <img className=' absolute bottom-16 md:bottom-14 -right-10' src={people2} alt="" />
              </div>
            </div> 
            {/* second part */}
            <div>
            <h1
            style={{ fontFamily: "Roboto, sans-serif" }}
            className=" font-bold text-4xl "
          >
            Create and sell your NFTs
          </h1>

          <p className="text-[#696969] text-base my-10 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.  <br /> 
          Facilisi ac phasellus placerat a pellentesque tellus sed  <br />  egestas. Et tristique dictum sit tristique sed non. Lacinia lorem  <br /> id consectetur pretium diam ut. Pellentesque eu sit blandit  <br /> fringilla risus faucibus.
          </p>

           <button className='btn-main'>Sign Up Now</button>
            </div>
        </div>
    );
};

export default Create;