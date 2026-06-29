function ProductsCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-pink-50 to-white text-center px-6">
      <h2 className="text-4xl font-serif text-pink-600 mb-6">
        Need Help Choosing?
      </h2>

      <p className="text-gray-500 max-w-xl mx-auto mb-10">
        Contact us on WhatsApp and we'll help you find your perfect product.
      </p>

      <a
        href="https://wa.me/20xxxxxxxxxx"
        target="_blank"
        rel="noreferrer"
        className="inline-block px-8 py-4 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
      >
        Shop on WhatsApp
      </a>
    </section>
  );
}

export default ProductsCTA;