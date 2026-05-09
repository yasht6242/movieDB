const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl bg-slate-900 p-10 shadow-xl text-white">
          <h1 className="mb-6 text-4xl font-bold text-yellow-400">Contact Us</h1>
          <p className="mb-6 text-lg leading-8 text-slate-200">
            Have questions, feedback, or suggestions about our movie reviews or trailers? The putlocker.de.com team, powered by Movies Gig, is here to help!
          </p>
          <p className="mb-6 text-lg leading-8 text-slate-200">
            Reach out to us at:
          </p>
          <p className="mb-4 text-lg leading-8 text-yellow-400 underline">
            Email: <a href="mailto:rohansingh51243@gmail.com">rohansingh51243@gmail.com</a>
          </p>
          <p className="mb-6 text-lg leading-8 text-slate-200">
            Connect with us through our social media channels or website contact form (if available). We’ll respond as soon as possible.
          </p>
          <p className="text-lg leading-8 text-slate-200">
            Thank you for joining our cinematic community!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
