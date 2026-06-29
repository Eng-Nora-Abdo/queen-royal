function ProductCategories() {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-12">
      <button className="px-6 py-3 rounded-full bg-pink-500 text-white">
        All
      </button>

      <button className="px-6 py-3 rounded-full bg-white border border-pink-200">
        Body Splash
      </button>

      <button className="px-6 py-3 rounded-full bg-white border border-pink-200">
        Perfumes
      </button>

      <button className="px-6 py-3 rounded-full bg-white border border-pink-200">
        Accessories
      </button>
    </div>
  );
}

export default ProductCategories;