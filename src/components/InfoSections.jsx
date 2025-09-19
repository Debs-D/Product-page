const InfoSections = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <img src="/assets/Rectangle 8.png" alt="Dog health" />
          </div>
          <div className="flex-1 text-black">
            <h2 className=" font-semibold text-4xl  mb-4">
              Improve overall gastrointestinal health for better nutrient
              absorption
            </h2>
            <p className=" font-normal text-base ">
              Through rigorous scientific studies and consultations with
              veterinarians, we have created a breakthrough formula exclusively
              tailored to combat the health challenges prevalent in dogs. A
              staggering 91% of our customers have reported significant
              improvements in their dogs' health after incorporating our product
              into their diet.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="flex-1">
            <img src="/assets/Rectangle 7.png" alt="Dog health" />
          </div>
          <div className="flex-1 text-black">
            <h2 className=" font-semibold text-4xl  mb-4">
              Improve overall gastrointestinal health for better nutrient
              absorption
            </h2>
            <p className="font-normal text-base ">
              Through rigorous scientific studies and consultations with
              veterinarians, we have created a breakthrough formula exclusively
              tailored to combat the health challenges prevalent in dogs. A
              staggering 91% of our customers have reported significant
              improvements in their dogs' health after incorporating our product
              into their diet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSections;
