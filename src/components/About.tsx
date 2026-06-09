import profileImg from '../images/linkdin profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-28 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7">
            <h2 className="text-5xl font-semibold mb-8 section-header">About Me</h2>
            
            <div className="prose prose-invert prose-lg text-zinc-300 max-w-none">
              <p>
                Motivated and detail oriented Information Technology undergraduate pursuing a BICT (Hons) degree with specialization in Software System Technology at the University of Kelaniya. 
                Skilled in Flutter, Firebase, IoT, and real-time systems. Currently serving as President of the Information Technology Students' Association.
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-zinc-1000">
              <img 
                src={profileImg} 
                alt="K" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;