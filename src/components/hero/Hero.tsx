import heroImage from "../../assets/images/hero.jpg";

export const Hero = () => {
  return (
    <div
      className="flex flex-col h-lvh justify-center items-center mx-auto rounded-lg"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div>
        <p className="text-center text-white font-bold text-4xl my-auto p-3">
          Lectus amet nibh integer neque vel interdum dapibus hac vestibulum.
        </p>
        <p className="text-center text-white font-medium text-lg my-auto p-5">
          Nostra, proin molestie penatibus congue morbi sem bibendum natoque
          consequat sociosqu natoque posuere. Egestas nullam nec consequat
          penatibus lorem; imperdiet faucibus nisl integer vivamus.
        </p>
      </div>

      {/* <button className="p-5 border-4 text-white border-blue-200 mt-10">
        Get started
      </button> */}
    </div>
  );
};
