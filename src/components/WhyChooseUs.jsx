function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-pink-50 to-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-serif text-pink-600">
            Why Choose Queen Royal?
          </h2>

          <p className="text-gray-500 mt-3">
            Everything is carefully selected for every Queen.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="
              bg-white p-8 rounded-3xl
              shadow-md text-center
              hover:-translate-y-3
              hover:shadow-xl
              transition-all duration-300
            "
          >
            <h3 className="text-xl font-semibold text-pink-600 mb-4">
              Premium Quality
            </h3>

            <p className="text-gray-500 leading-7">
              Carefully selected products made to make every Queen feel special.
            </p>
          </div>

          <div
            className="
              bg-white p-8 rounded-3xl
              shadow-md text-center
              hover:-translate-y-3
              hover:shadow-xl
              transition-all duration-300
            "
          >
            <h3 className="text-xl font-semibold text-pink-600 mb-4">
              Feminine & Elegant
            </h3>

            <p className="text-gray-500 leading-7">
              Beautiful products that perfectly match your style and personality.
            </p>
          </div>

          <div
            className="
              bg-white p-8 rounded-3xl
              shadow-md text-center
              hover:-translate-y-3
              hover:shadow-xl
              transition-all duration-300
            "
          >
            <h3 className="text-xl font-semibold text-pink-600 mb-4">
              Customer Happiness
            </h3>

            <p className="text-gray-500 leading-7">
              Your satisfaction and confidence are always our top priorities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;