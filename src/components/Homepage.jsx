import { ShieldCheck } from "lucide-react";
import HeroSection from "./HeroSection";
import InfoSections from "./InfoSections";

const Homepage = () => {
  return (
    <div className="w-full py-12 flex flex-col items-center gap-10 bg-white">
      <h1 className="text-[40px] font-semibold text-center text-[#161723] leading-tight">
        What makes us different <br /> makes them stronger
      </h1>

      <div className="flex items-center justify-center gap-12">
        <div className="flex flex-col gap-10 w-[370px]">
          <div className="flex items-start gap-4">
            <img src="/assets/food 1.png" alt="Food" />
            <div>
              <h3 className="font-semibold text-[19px] leading-[150%] text-[#161723]">
                Real Food
              </h3>
              <p className="w-[286px] text-[16px] leading-[150%] text-[#161723]">
                Wholesome recipes for dogs with real meat and veggies.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src="/assets/pet-bowl 1.png" alt="Food Bowl" />
            <div>
              <h3 className="font-semibold text-[19px] leading-[150%] text-[#161723]">
                Premium Ingredient
              </h3>
              <p className="w-[286px] text-[16px] leading-[150%] text-[#161723]">
                Elevating pet care with unmatched safety and quality.
              </p>
            </div>
          </div>
        </div>

        {/*  circle image */}
        <div className="w-[300px] h-[300px] rounded-full overflow-hidden flex items-center justify-center">
          <img
            src="/assets/Frame 1171276495.png"
            alt="Healthy Dog"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-10 w-[370px]">
          <div className="flex items-start gap-4">
            <img src="/assets/pet-food 1.png" alt="Pet Food" />
            <div>
              <h3 className="font-semibold text-[19px] leading-[150%] text-[#161723]">
                Made Fresh
              </h3>
              <p className="w-[286px] text-[16px] leading-[150%] text-[#161723]">
                We prioritize maintaining the integrity of whole foods and
                nutrition.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src="/assets/vet 1.png" alt="Vet" />
            <div>
              <h3 className="font-semibold text-[19px] leading-[150%] text-[#161723]">
                Vet Developed
              </h3>
              <p className="w-[286px] text-[16px] leading-[150%] text-[#161723]">
                We raise the bar for dog nutrition, surpassing industry
                expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 mt-8">
        <button className="bg-[#EE6F4B] text-white text-[16px] font-semibold px-10 py-3 rounded-md w-[462px] h-[48px] shadow-md hover:bg-[#e35f3a] transition">
          Get your dog's healthy meal today!
        </button>

        <div className="flex items-center justify-between border border-gray-300 bg-white/60 text-[#161723] text-[14px] px-4 rounded-md w-[462px] h-[48px] shadow-sm">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <ShieldCheck size={18} className="text-green-600 flex-shrink-0" />
            <span className="font-medium">30-day money back guarantee</span>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/assets/image 25.png"
              alt="PayPal"
              className="h-5 object-contain"
            />
            <img
              src="/assets/image 26.png"
              alt="Visa"
              className="h-5 object-contain"
            />
            <img
              src="/assets/image 27.png"
              alt="Mastercard"
              className="h-5 object-contain"
            />
            <img
              src="/assets/image 28.png"
              alt="Apple Pay"
              className="h-5 object-contain"
            />
            <img
              src="/assets/image 29.png"
              alt="Google Pay"
              className="h-5 object-contain"
            />
          </div>
        </div>
      </div>

      <HeroSection />
      <InfoSections />
    </div>
  );
};

export default Homepage;
