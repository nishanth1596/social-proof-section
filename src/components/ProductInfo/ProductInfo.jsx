import { starReviews } from "../../reviewsData";
import Reviews from "../Reviews/Reviews";

const ProductInfo = () => {
  return (
    <article className="lg:flex lg:gap-[7.81rem]">
      <div className="lg:max-w-md">
        <h2 className="lg:text-56px text-40px font-bold leading-8 tracking-[-1.43px] text-512051 lg:leading-[3rem] lg:tracking-[-2px]">
          10,000+ of our users love our products.
        </h2>
        <p className="mt-17px text-19px font-medium leading-[1.56rem] tracking-[-0.63px] text-927b91 lg:mt-4">
          We only provide great products combined with excellent customer
          service.See what our satisfied customers are saying about our
          services.
        </p>
      </div>
      <div className="mt-[2.44rem] flex flex-col gap-4 lg:max-w-[33.75rem]">
        {starReviews.map((item) => (
          <Reviews key={item.id} item={item} />
        ))}
      </div>
    </article>
  );
};

export default ProductInfo;
