const DisclaimerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl bg-slate-900 p-10 shadow-xl text-white">
          <h1 className="mb-6 text-4xl font-bold text-yellow-400">Disclaimer</h1>
          <p className="mb-6 text-lg leading-8 text-slate-200">
            The content on putlocker.de.com, including movie reviews and trailers, is provided by Movies Gig for informational and entertainment purposes only. All reviews reflect the subjective opinions of our writers and researchers and may not align with all viewers or filmmakers.
          </p>
          <p className="mb-6 text-lg leading-8 text-slate-200">
            We strive to ensure the accuracy and timeliness of our content but cannot guarantee its completeness. Trailers and promotional materials are sourced from third parties, and we are not responsible for their accuracy or availability. Users are encouraged to watch films and form their own opinions.
          </p>
          <p className="mb-6 text-lg leading-8 text-slate-200">
            putlocker.de.com is not affiliated with film studios, production companies, or distributors unless explicitly stated. We are not liable for decisions made based on our content.
          </p>
          <p className="text-lg leading-8 text-slate-200">
            For concerns or feedback, contact us at <a href="mailto:rohansingh51243@gmail.com" className="text-yellow-400 underline">rohansingh51243@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage;
