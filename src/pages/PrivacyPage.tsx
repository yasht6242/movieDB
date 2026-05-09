import React from "react";

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl bg-slate-900 p-10 shadow-xl text-white">
          <h1 className="mb-6 text-4xl font-bold text-yellow-400">Privacy Policy</h1>
          <p className="mb-6 text-lg leading-8 text-slate-200">
            At putlocker.de.com, operated by Movies Gig, we prioritize your privacy. This Privacy Policy explains how we collect, use, and protect your data when you use our website.
          </p>

          <div className="space-y-6 text-slate-200">
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-white">Information We Collect</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email, or other details you provide when contacting us (e.g., via rohansingh51243@gmail.com).
                </li>
                <li>
                  <strong>Non-Personal Information:</strong> Browser type, IP address, or usage data collected via cookies or analytics.
                </li>
                <li>
                  <strong>User-Submitted Content:</strong> Feedback or messages you share with us.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold text-white">How We Use Your Information</h2>
              <p className="mb-3">
                We use your data to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Respond to inquiries or feedback.</li>
                <li>Enhance our reviews and trailers.</li>
                <li>Analyze site usage for better user experience.</li>
                <li>Send updates (with consent).</li>
              </ul>
              <p className="mt-3">
                We do not sell or share your personal information, except as required by law.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold text-white">Cookies and Tracking</h2>
              <p>
                We use cookies to improve functionality. You can manage cookies via browser settings, but this may impact your experience.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold text-white">Data Security</h2>
              <p>
                We take reasonable steps to protect your data but cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold text-white">Third-Party Links</h2>
              <p>
                Our site may link to external platforms (e.g., trailers). We are not responsible for their privacy practices.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold text-white">Your Rights</h2>
              <p>
                You may request access, correction, or deletion of your data or opt out of communications. Contact us at <a href="mailto:rohansingh51243@gmail.com" className="text-yellow-400 underline">rohansingh51243@gmail.com</a>.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold text-white">Changes to This Policy</h2>
              <p>
                Updates will be posted here with a new effective date.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold text-white">Contact Us</h2>
              <p>
                Email: <a href="mailto:rohansingh51243@gmail.com" className="text-yellow-400 underline">rohansingh51243@gmail.com</a>
              </p>
              <p className="mt-2">Effective Date: August 17, 2025</p>
            </div>

            <p className="text-slate-400">
              Thank you for trusting putlocker.de.com with your information!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
