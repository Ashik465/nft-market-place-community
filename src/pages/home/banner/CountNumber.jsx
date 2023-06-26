import NumberCounter from "./NumberCounter";

const CountNumber = () => {
  return (
    <div className="flex gap-5 ">
      <div>
        <h1
          style={{ fontFamily: "Roboto, sans-serif" }}
          className=" text-black text-4xl font-bold tracking-wide"
        >
          <NumberCounter start={0} end={98} />
          K+
        </h1>
        <p
          style={{
            fontFamily: "DM Sans, sans-serif",
          }}
          className="text-[#565656] text-xl"
        >
          Artwork
        </p>
      </div>
      <div>
        <h1
          style={{ fontFamily: "Roboto, sans-serif" }}
          className=" text-black text-4xl font-bold tracking-wide"
        >
          <NumberCounter start={0} end={12} />
          K+
        </h1>
        <p
          style={{
            fontFamily: "DM Sans, sans-serif",
          }}
          className="text-[#565656] text-xl"
        >
          {" "}
          Audition
        </p>
      </div>
      <div>
        <h1
          style={{ fontFamily: "Roboto, sans-serif" }}
          className=" text-black text-4xl font-bold tracking-wide"
        >
          <NumberCounter start={0} end={15} />
          K+
        </h1>
        <p
          style={{
            fontFamily: "DM Sans, sans-serif",
          }}
          className="text-[#565656] text-xl"
        >
          Artist World
        </p>
      </div>
    </div>
  );
};

export default CountNumber;
