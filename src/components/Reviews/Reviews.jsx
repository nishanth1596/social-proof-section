import starIcon from "../../assets/images/icon-star.svg";

const Reviews = ({ item }) => {
  return (
    <div className="card rounded-lg bg-f7f2f7 lg:flex lg:max-w-[27.81rem] lg:items-center">
      <div className="flex justify-center gap-2 px-8 py-4 lg:py-5">
        {Array.from({ length: item.stars }).map((_, index) => (
          <img key={index} src={starIcon} alt="star" />
        ))}
      </div>
      <p className="pb-4 text-17px font-bold leading-4 tracking-normal text-512051 lg:pb-0 lg:pr-12">
        {item.rated}
      </p>
    </div>
  );
};

export default Reviews;
