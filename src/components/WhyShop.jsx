function WhyShop() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        <div className="bg-pink-50 p-8 rounded-3xl text-center">
          <h3 className="text-xl font-semibold text-pink-600 mb-4">
            Fast Delivery
          </h3>

          <p className="text-gray-500">
            We deliver your favorite products quickly and safely.
          </p>
        </div>

        <div className="bg-pink-50 p-8 rounded-3xl text-center">
          <h3 className="text-xl font-semibold text-pink-600 mb-4">
            Premium Quality
          </h3>

          <p className="text-gray-500">
            Carefully selected products made for every Queen.
          </p>
        </div>

        <div className="bg-pink-50 p-8 rounded-3xl text-center">
          <h3 className="text-xl font-semibold text-pink-600 mb-4">
            Elegant Packaging
          </h3>

          <p className="text-gray-500">
            Beautiful packaging that makes every order special.
          </p>
        </div>

      </div>
    </section>
  );
}

export default WhyShop;