const Testimonials = ({ item }) => {
  return (
    <div className="cardTestimonial overflow-hidden rounded-lg bg-512051 text-white">
      <div className="ml-8 mt-10 flex items-center gap-6">
        <img
          src={item.img}
          alt={item.name}
          className="h-10 w-10 rounded-full"
        />

        <div className="text-left">
          <h3 className="text-17px font-bold leading-4 tracking-normal">
            {item.name}
          </h3>
          <p className="mt-1 text-17px font-normal leading-4 tracking-normal text-ee69a4">
            {item.verifiedBuyer ? "Verified Buyer" : "Unverified Buyer"}
          </p>
        </div>
      </div>

      <p className="mx-8 mb-9 mt-6 text-left text-17px font-medium leading-[1.375rem] tracking-[-0.3px]">
        <span>&#8220;</span>
        {item.testimonial}
        <span>&#8221;</span>
      </p>
    </div>
  );
};

export default Testimonials;
