"use client";

const HeroSection = () => {
  return (
    <section className="w-full bg-[#F8F8F8] py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-stretch gap-10">
        <div className="flex-1 flex flex-col justify-between">
          <div className="space-y-6">
            <h1 className=" font-semibold text-4xl  ">
              Nutrition is the foundation for longer, healthier lives in dogs.
            </h1>

            <p className=" text-base font-normal text-gray-700">
              Invest in your dog's future with our scientifically formulated
              superfood-powered supplements. Give them the nutrition they
              deserve and watch them thrive with vitality, energy, and the joy
              of a longer, healthier life.
            </p>

            <div className="space-y-3">
              <h3 className="text-black font-semibold text-xl ">Key Points:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-6 border-b border-[#E3E3E8] pb-4">
                  <span className="text-[#EE6F4B] font-bold text-[33px] leading-[150%]">
                    97%
                  </span>
                  <p className="text-black font-normal text-[16px] leading-[150%] tracking-[0.5px]">
                    Dogs choose our dog food over leading brands because of its
                    real functional ingredients and delicious flavor.
                  </p>
                </div>

                {/* Row 2 */}
                <div className="flex items-start gap-6 border-b border-[#E3E3E8] pb-4">
                  <span className="text-[#EE6F4B] font-bold text-[33px] leading-[150%]">
                    84%
                  </span>
                  <p className="text-black font-normal text-[16px] leading-[150%] tracking-[0.5px]">
                    Dogs choose our dog food over leading brands because of its
                    real functional ingredients and delicious flavor.
                  </p>
                </div>

                {/* Row 3 */}
                <div className="flex items-start gap-6">
                  <span className="text-[#EE6F4B] font-bold text-[33px] leading-[150%]">
                    92%
                  </span>
                  <p className="text-black font-normal text-[16px] leading-[150%] tracking-[0.5px]">
                    Dogs choose our dog food over leading brands because of its
                    real functional ingredients and delicious flavor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-[#EE6F4B] text-white text-[16px] font-medium px-10 py-3 rounded-md w-full mt-8">
            Give your furry friend the gift of wholesome nutrition
          </button>
        </div>

        {/* Right Side (Dog Image) */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/src/assets/Rectangle 15.png"
            alt="Happy Dog"
            className="rounded-lg object-cover w-full h-full max-w-[500px] max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
