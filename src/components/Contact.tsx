const Contact = () => {
  return (
    <section id="contact" className="py-28 bg-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold mb-4">Let's Connect</h2>
          <p className="text-zinc-400 max-w-md mx-auto">
            Have a project in mind? I'm always excited to discuss new opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-zinc-800/50 p-8 rounded-3xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center text-2xl">✉️</div>
                <div>
                  <div className="text-sm text-zinc-400">Email</div>
                  <a href="mailto:kaveesha.msilva@gmail.com" className="hover:text-blue-400">kaveesha.msilva@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 p-8 rounded-3xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center text-2xl">📞</div>
                <div>
                  <div className="text-sm text-zinc-400">Phone</div>
                  <a href="tel:+94763319400" className="hover:text-blue-400">+94 76 331 9400</a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 bg-zinc-800/30 p-10 rounded-3xl">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="First name" className="bg-zinc-900 border border-zinc-700 focus:border-blue-500 rounded-2xl px-6 py-4 outline-none" />
                <input type="text" placeholder="Last name" className="bg-zinc-900 border border-zinc-700 focus:border-blue-500 rounded-2xl px-6 py-4 outline-none" />
              </div>
              <input type="email" placeholder="Email address" className="w-full bg-zinc-900 border border-zinc-700 focus:border-blue-500 rounded-2xl px-6 py-4 outline-none" />
              <textarea placeholder="Tell me about your project..." rows={6} className="w-full bg-zinc-900 border border-zinc-700 focus:border-blue-500 rounded-3xl px-6 py-4 outline-none resize-none"></textarea>
              
              <button type="submit" className="w-full py-5 bg-blue-600 hover:bg-blue-700 transition-colors rounded-3xl font-semibold text-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;