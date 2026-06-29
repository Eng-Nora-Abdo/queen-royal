const reviews = [
  {
    id: 1,
    text: "Absolutely love the scent and the packaging. Will definitely order again.",
    name: "Sarah"
  },
  {
    id: 2,
    text: "The body splash lasts for hours and smells amazing.",
    name: "Mariam"
  },
  {
    id: 3,
    text: "The products feel luxurious and beautifully designed.",
    name: "Lina"
  },
  {
    id: 4,
    text: "Perfect gift for every girl. I'm obsessed!",
    name: "Nour"
  }
];

function Testimonials() {
  return (
    <section className="py-24 bg-[#f6f5fa] overflow-hidden">
      <h2 className="text-4xl font-serif text-center mb-16">
        Stories of Lasting Beauty
      </h2>

      <div className="flex animate-marquee gap-6 w-max">
        {[...reviews, ...reviews].map((review, index) => (
          <div
            key={index}
            className="w-[350px] bg-white rounded-3xl p-8 shadow-sm flex-shrink-0"
          >
            <p className="text-gray-600 leading-7">
              "{review.text}"
            </p>

            <h3 className="mt-6 font-medium">
              {review.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;