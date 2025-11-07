import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // Simulate submission success for now
    setStatus('Thanks! Your message has been queued.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-black text-white py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold">Contact</h2>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-3 text-white/80">
              <div className="p-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
                <Mail className="w-5 h-5" />
              </div>
              <p>Have an opportunity or want to collaborate? Send a quick message.</p>
            </div>
            <p className="mt-4 text-white/70 text-sm">
              This form is wired for local demonstration. Hook it up to your preferred email service or backend later.
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-white/80">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-white/80">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-white/80">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={5}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                placeholder="Tell me a bit about your project or question..."
              />
            </div>
            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-400/90 hover:bg-cyan-300 text-black font-medium px-5 py-2.5 transition"
              >
                <Send className="w-4 h-4" /> Send
              </button>
              {status && <span className="text-sm text-white/70">{status}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
