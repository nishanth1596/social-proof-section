const Testimonials = ({ item }) => {
  return (
    <div className="bg-512051 text-white rounded-lg overflow-hidden">
      <div className="mt-10 ml-8 flex gap-6 items-center">
        <img
          src={item.img}
          alt={item.name}
          className=" rounded-full w-10 h-10"
        />

        <div className="text-left">
          <h3 className="font-bold text-17px tracking-normal leading-4">
            {item.name}
          </h3>
          <p className="font-normal text-ee69a4 text-17px tracking-normal leading-4  mt-1">
            {item.verifiedBuyer ? "Verified Buyer" : "Unverified Buyer"}
          </p>
        </div>
      </div>

      <p className="mt-6 mx-8 mb-9 font-medium text-17px leading-[1.375rem] tracking-[-0.3px] text-left">
        <span>&#8220;</span>
        {item.testimonial}
        <span>&#8221;</span>
      </p>
    </div>
  );
};

export default Testimonials;
