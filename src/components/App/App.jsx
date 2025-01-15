import { testimonialData } from "../../reviewsData";
import ProductInfo from "../ProductInfo/ProductInfo";
import Testimonials from "../Testimonials/Testimonials";

const App = () => {
  return (
    <>
      <header>
        <h1 className="hidden">Social proof section</h1>
      </header>
      <main>
        <section className="mt-[5.13rem] max-w-[20.4rem] text-center lg:mt-[7.4rem] lg:max-w-[70rem] lg:text-left">
          <ProductInfo />
          <div className="mb-24 mt-12 grid grid-cols-1 gap-4 lg:mt-16 lg:grid-cols-3 lg:items-start lg:gap-[1.875rem]">
            {testimonialData.map((item) => (
              <Testimonials item={item} key={item.name} />
            ))}
          </div>
        </section>
      </main>{" "}
    </>
  );
};

export default App;
