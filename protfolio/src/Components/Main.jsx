function Main() {
  return (
    <main className="container mx-auto px-6">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center pt-24 md:pt-0"
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
          <div className="md:w-3/5 text-center md:text-left">
            <p className="text-lg accent-color mb-2">Namaste, main hoon</p>
            <h1 className="text-5xl md:text-7xl font-bold dark:text-white leading-tight mb-4">
              [Aapka Naam]
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-600 dark:text-gray-400 mb-8">
              Main Web aur AI ke liye cheezein banata hoon.
            </h2>
            <p className="max-w-xl text-gray-500 dark:text-gray-400 mb-10">
              Main ek skilled MERN stack developer hoon jo interactive aur
              intelligent web applications banane mein mahir hai.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#projects"
                className="btn-primary font-bold py-3 px-6 rounded-lg"
              >
                Mere Projects Dekhein
              </a>
              <a
                href="mailto:aapkaemail@example.com"
                className="btn-secondary font-bold py-3 px-6 rounded-lg"
              >
                Mujhse Sampark Karein
              </a>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center items-center">
            <div className="profile-image-container">
              <img
                src="https://placehold.co/300x300/FFFFFF/0D1117?text=Aapki+Photo"
                alt="[Aapka Naam] ki profile photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
