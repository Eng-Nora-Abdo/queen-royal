function Newsletter() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-pink-50 to-white">
      
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-serif text-pink-600 mb-4">
          Join the Royal Circle 
        </h2>

        <p className="text-gray-500 mb-10">
          Get exclusive beauty updates & offers directly on WhatsApp 
        </p>

   
        <a
          href="https://wa.me/201022603220?text=Hello%20Queen%20I%20want%20to%20join%20the%20Royal%20Circle"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full transition duration-300 shadow-lg"
        >
          Join on WhatsApp 
        </a>

      </div>
    </section>
  );
}

export default Newsletter;