import myimage from '../images/linkdin profile.png';

const Home = () => {
  return (
    <section id="home" className="hero-bg min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-3xl text-sm">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            Available for opportunities
          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight">Hi, I'm </h1>
          <span className="text-6xl md:text-7xl font-bold leading-tight text-blue-600">Kaveesha De Silva</span>
          

          <p className="text-2xl text-zinc-400">
            Aspiring Software Engineer
          </p>

          <p className="text-zinc-400 max-w-md text-lg">
            Information Technology undergraduate pursuing BICT (Hons) with specialization in Software System Technology at University of Kelaniya.
          </p>

          <div className="flex items-center gap-4">
            <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 transition-all rounded-3xl font-semibold text-lg flex items-center gap-3">
              View Projects
              <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#contact" className="px-8 py-4 border border-zinc-400 hover:border-white transition-all rounded-3xl font-semibold text-lg">
              Get In Touch
            </a>
          </div>

          <div className="flex items-center gap-8 pt-8">
            <a href="https://github.com" target="_blank" className="text-3xl hover:text-blue-500 transition-colors" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com" target="_blank" className="text-3xl hover:text-blue-500 transition-colors" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square max-w-md mx-auto">
            <div className="w-full h-full rounded-[4rem] overflow-hidden border-8 border-zinc-800 shadow-2xl">
              <img src={myimage} 
                   alt="Kaveesha De Silva" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;