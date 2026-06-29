import bodySplash from "../assets/featured/body-splash.jpg";
import perfume from "../assets/featured/perfume.jpg";
import skincare from "../assets/featured/skincare.jpg";

function FeaturedSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-pink-50 to-white">

      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-serif text-pink-600">
          Featured Collection
        </h2>
        <p className="text-gray-500 mt-3">
          Discover your Queen beauty world
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">

        {/* Body Splash */}
        <div className="md:col-span-2 relative group overflow-hidden rounded-3xl shadow-lg">

          <img
            src={bodySplash}
            className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
          />

          {/* simple dark hover only */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300 flex items-end p-6">

            <div className="opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-white text-2xl font-semibold">
                Body Splash Collection
              </h3>
              <p className="text-white/80 text-sm mt-1">
                Fresh • Feminine • Long lasting scent
              </p>
            </div>

          </div>
        </div>

        {/* Side Cards */}
        <div className="flex flex-col gap-6">

          {/* Perfume */}
          <div className="relative group overflow-hidden rounded-3xl shadow-md">

            <img
              src={perfume}
              className="h-[198px] w-full object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300 flex items-end p-4">

              <div className="opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-white font-medium">
                  Signature Perfume 
                </h3>
                <p className="text-white/80 text-xs">
                  Luxury scent collection
                </p>
              </div>

            </div>
          </div>

          {/* Skincare */}
 {/* Skincare */}
<div className="relative overflow-hidden rounded-3xl shadow-md group">

  <img
    src={skincare}
    className="h-[198px] w-full object-cover"
  />

  {/* overlay بسيط جدًا من غير ما يغير لون الصورة */}
  <div className="absolute inset-0 flex items-center justify-center bg-black/20">

    <div className="text-center text-white">
      <h3 className="text-lg font-semibold">
        Skincare
      </h3>

      <p className="text-sm mt-1 opacity-90">
        Coming Soon
      </p>
    </div>

  </div>

</div>

        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;