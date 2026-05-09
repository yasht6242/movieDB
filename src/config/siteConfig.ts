export type PageSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export type PageContent = {
  title: string;
  sections: PageSection[];
};

export type SiteConfig = {
  hostnames: string[];
  siteLabel: string;
  siteUrl: string;
  pageTitleSuffix: string;
  metaDescription: string;
  footerDescription: string;
  email: string;
  pages: {
    about: PageContent;
    disclaimer: PageContent;
    contact: PageContent;
    privacy: PageContent;
  };
};

const siteConfigs: SiteConfig[] = [
  {
    hostnames: ["putlocker.de.com", "www.putlocker.de.com"],
    siteLabel: "putlocker.de.com",
    siteUrl: "putlocker.de.com",
    pageTitleSuffix: "Movies and Series Online",
    metaDescription:
      "Discover trending movies, TV shows, and web series on putlocker.de.com. Search, save favorites, and explore detailed information about your favorite content.",
    footerDescription:
      "putlocker.de.com is powered by Movies Gig. Explore films, trailers, and reviews with a focus on story, craftsmanship, and cinematic discovery.",
    email: "rohansingh51243@gmail.com",
    pages: {
      about: {
        title: "About Us",
        sections: [
          {
            paragraphs: [
              "Welcome to putlocker.de.com, proudly powered by Movies Gig! We are a vibrant community of film enthusiasts, critics, and storytellers united by our passion for cinema. Our dedicated team of researchers, writers, and editors works tirelessly to deliver insightful, well-crafted movie reviews that go beyond the surface, exploring the heart of each film—its narrative, characters, cinematography, cultural context, and emotional impact.",
            ],
          },
          {
            paragraphs: [
              "From blockbuster epics to indie treasures and international masterpieces, we cover a diverse range of films to cater to every moviegoer’s taste.",
            ],
          },
          {
            paragraphs: [
              "At putlocker.de.com, our process is rooted in curiosity and rigor. Our team dives deep into each film, analyzing its themes, dissecting its storytelling techniques, and celebrating its artistry. We aim to provide reviews that not only inform but also spark meaningful conversations about the films you love or are curious about.",
            ],
          },
          {
            paragraphs: [
              "Beyond reviews, we curate the latest movie trailers to give you a front-row seat to upcoming releases, building anticipation for your next cinematic adventure.",
            ],
          },
          {
            paragraphs: [
              "Movies Gig was founded with a vision to create a space where film lovers can connect, share, and discover. We’re more than just a review site—we’re a community that celebrates the power of storytelling through film. Whether you’re a casual viewer seeking recommendations or a cinephile eager for in-depth analysis, putlocker.de.com is your go-to destination.",
            ],
          },
          {
            paragraphs: [
              "Join us as we explore the magic of cinema, one review, trailer, and conversation at a time!",
            ],
          },
        ],
      },
      disclaimer: {
        title: "Disclaimer",
        sections: [
          {
            paragraphs: [
              "The content on putlocker.de.com, including movie reviews and trailers, is provided by Movies Gig for informational and entertainment purposes only. All reviews reflect the subjective opinions of our writers and researchers and may not align with all viewers or filmmakers.",
            ],
          },
          {
            paragraphs: [
              "We strive to ensure the accuracy and timeliness of our content but cannot guarantee its completeness. Trailers and promotional materials are sourced from third parties, and we are not responsible for their accuracy or availability. Users are encouraged to watch films and form their own opinions.",
            ],
          },
          {
            paragraphs: [
              "putlocker.de.com is not affiliated with film studios, production companies, or distributors unless explicitly stated. We are not liable for decisions made based on our content.",
            ],
          },
          {
            paragraphs: [
              "For concerns or feedback, contact us at " + "rohansingh51243@gmail.com" + ".",
            ],
          },
        ],
      },
      contact: {
        title: "Contact Us",
        sections: [
          {
            paragraphs: [
              "Have questions, feedback, or suggestions about our movie reviews or trailers? The putlocker.de.com team, powered by Movies Gig, is here to help!",
            ],
          },
          {
            paragraphs: [
              "Reach out to us at:",
              "Email: " + "rohansingh51243@gmail.com",
            ],
          },
          {
            paragraphs: [
              "Connect with us through our social media channels or website contact form (if available). We’ll respond as soon as possible.",
            ],
          },
          {
            paragraphs: [
              "Thank you for joining our cinematic community!",
            ],
          },
        ],
      },
      privacy: {
        title: "Privacy Policy",
        sections: [
          {
            paragraphs: [
              "At putlocker.de.com, operated by Movies Gig, we prioritize your privacy. This Privacy Policy explains how we collect, use, and protect your data when you use our website.",
            ],
          },
          {
            heading: "Information We Collect",
            list: [
              "Personal Information: Name, email, or other details you provide when contacting us (e.g., via rohansingh51243@gmail.com).",
              "Non-Personal Information: Browser type, IP address, or usage data collected via cookies or analytics.",
              "User-Submitted Content: Feedback or messages you share with us.",
            ],
          },
          {
            heading: "How We Use Your Information",
            paragraphs: ["We use your data to:"],
            list: [
              "Respond to inquiries or feedback.",
              "Enhance our reviews and trailers.",
              "Analyze site usage for better user experience.",
              "Send updates (with consent).",
            ],
          },
          {
            paragraphs: [
              "We do not sell or share your personal information, except as required by law.",
            ],
          },
          {
            heading: "Cookies and Tracking",
            paragraphs: [
              "We use cookies to improve functionality. You can manage cookies via browser settings, but this may impact your experience.",
            ],
          },
          {
            heading: "Data Security",
            paragraphs: [
              "We take reasonable steps to protect your data but cannot guarantee absolute security.",
            ],
          },
          {
            heading: "Third-Party Links",
            paragraphs: [
              "Our site may link to external platforms (e.g., trailers). We are not responsible for their privacy practices.",
            ],
          },
          {
            heading: "Your Rights",
            paragraphs: [
              "You may request access, correction, or deletion of your data or opt out of communications. Contact us at rohansingh51243@gmail.com.",
            ],
          },
          {
            heading: "Changes to This Policy",
            paragraphs: [
              "Updates will be posted here with a new effective date.",
            ],
          },
          {
            heading: "Contact Us",
            paragraphs: [
              "Email: rohansingh51243@gmail.com",
              "Effective Date: August 17, 2025",
              "Thank you for trusting putlocker.de.com with your information!",
            ],
          },
        ],
      },
    },
  },
  {
    hostnames: ["putlocker.uk.com", "www.putlocker.uk.com"],
    siteLabel: "putlocker.uk.com",
    siteUrl: "putlocker.uk.com",
    pageTitleSuffix: "Movies and Series Online",
    metaDescription:
      "Welcome to putlocker.uk.com, powered by Movies Gig. Find thoughtful movie reviews and trailers for films from Hollywood, international cinema, and indie releases.",
    footerDescription:
      "putlocker.uk.com is powered by Movies Gig. Explore movies, trailers, and reviews with insight and passion.",
    email: "rohansingh51243@gmail.com",
    pages: {
      about: {
        title: "About Us",
        sections: [
          {
            paragraphs: [
              "Welcome to putlocker.uk.com, brought to you by the passionate team at Movies Gig! We are a collective of film lovers, researchers, and writers dedicated to bringing you thoughtful movie reviews and exciting trailers. Our mission is to guide you through the vast world of cinema, from Hollywood blockbusters to hidden indie gems and global films, with reviews that delve into the storytelling, performances, visuals, and cultural significance of each movie.",
            ],
          },
          {
            paragraphs: [
              "Our team at Movies Gig approaches every film with a blend of enthusiasm and critical insight. We research the context, analyze the craft, and share our perspectives to help you make informed viewing choices or deepen your appreciation for the films you love. In addition to our in-depth reviews, we feature the latest trailers to ignite your excitement for upcoming releases, ensuring you’re always in the know about what’s hitting the screens.",
            ],
          },
          {
            paragraphs: [
              "Founded on a shared love for the art of filmmaking, putlocker.uk.com is more than a review platform—it’s a community hub for movie enthusiasts. We strive to foster connection and dialogue, inviting you to share your thoughts and join us in celebrating the stories that move us. Whether you’re looking for your next watch or craving a deeper dive into cinema, putlocker.uk.com is here to inspire and inform. Let’s embark on this cinematic journey together!",
            ],
          },
        ],
      },
      disclaimer: {
        title: "Disclaimer",
        sections: [
          {
            paragraphs: [
              "The content on putlocker.uk.com, including movie reviews and trailers, is provided by Movies Gig for informational and entertainment purposes. Reviews reflect the subjective opinions of our team and may not represent all perspectives.",
            ],
          },
          {
            paragraphs: [
              "While we aim for accuracy, we cannot guarantee the completeness or timeliness of our content. Trailers are sourced from third parties, and we are not responsible for their content or availability. Users are encouraged to watch films and form their own views.",
            ],
          },
          {
            paragraphs: [
              "putlocker.uk.com is not affiliated with film studios or distributors unless stated. We are not liable for decisions based on our content. Contact us at rohansingh51243@gmail.com with any concerns.",
            ],
          },
        ],
      },
      contact: {
        title: "Contact Us",
        sections: [
          {
            paragraphs: [
              "Got feedback, questions, or ideas about our movie reviews or trailers? The putlocker.uk.com team, powered by Movies Gig, is eager to hear from you! Reach out at:",
              "Email: rohansingh51243@gmail.com",
            ],
          },
          {
            paragraphs: [
              "You can also find us on social media or use our website’s contact form (if available). We’ll get back to you promptly. Thanks for being part of our movie-loving community!",
            ],
          },
        ],
      },
      privacy: {
        title: "Privacy Policy",
        sections: [
          {
            paragraphs: [
              "At putlocker.uk.com, operated by Movies Gig, your privacy is our priority. This Privacy Policy outlines how we handle your data when you use our website.",
            ],
          },
          {
            heading: "Information We Collect",
            list: [
              "Personal Information: Details like name or email provided when contacting us (e.g., rohansingh51243@gmail.com).",
              "Non-Personal Information: Usage data, browser type, or IP address collected via cookies or analytics.",
              "User-Submitted Content: Feedback or messages you share.",
            ],
          },
          {
            heading: "How We Use Your Information",
            paragraphs: ["We use data to:"],
            list: [
              "Respond to your inquiries.",
              "Improve our reviews and trailers.",
              "Analyze site usage.",
              "Send updates (with consent).",
            ],
          },
          {
            paragraphs: [
              "We do not share your personal information, except as required by law.",
            ],
          },
          {
            heading: "Cookies and Tracking",
            paragraphs: [
              "Cookies help us enhance your experience. Manage them via browser settings, noting that disabling them may affect functionality.",
            ],
          },
          {
            heading: "Data Security",
            paragraphs: [
              "We take steps to protect your data but cannot ensure complete security.",
            ],
          },
          {
            heading: "Third-Party Links",
            paragraphs: [
              "Links to external sites (e.g., trailers) are not under our control.",
            ],
          },
          {
            heading: "Your Rights",
            paragraphs: [
              "You can request access, correction, or deletion of your data or opt out of communications. Email us at rohansingh51243@gmail.com.",
            ],
          },
          {
            paragraphs: [
              "Updates will be posted here with a new effective date.",
              "Email: rohansingh51243@gmail.com",
              "Effective Date: August 17, 2025",
              "Thank you for choosing putlocker.uk.com!",
            ],
          },
        ],
      },
    },
  },
  {
    hostnames: ["yesmovies.jp.net", "www.yesmovies.jp.net"],
    siteLabel: "yesmovies.jp.net",
    siteUrl: "yesmovies.jp.net",
    pageTitleSuffix: "Movies and Series Online",
    metaDescription:
      "yesmovies.jp.net is a Movies Gig initiative for film lovers worldwide. Read reviews, browse trailers, and discover movies across genres.",
    footerDescription:
      "yesmovies.jp.net is powered by Movies Gig. Explore movie reviews, trailers, and curated film insights.",
    email: "rohansingh51243@gmail.com",
    pages: {
      about: {
        title: "About Us",
        sections: [
          {
            paragraphs: [
              "Welcome to yesmovies.jp.net, a Movies Gig initiative created for film lovers everywhere! We are a dynamic team of cinephiles, researchers, and writers united by our passion for the silver screen. Our goal is to deliver comprehensive movie reviews that explore the heart of each film—its story, characters, cinematography, and cultural resonance. Whether it’s a global blockbuster, an indie darling, or a thought-provoking international film, we provide insights to guide your viewing experience.",
            ],
          },
          {
            paragraphs: [
              "At yesmovies.jp.net, our team takes a meticulous approach, researching the context and craftsmanship behind every movie to offer reviews that are both informative and engaging. We aim to spark curiosity and conversation, helping you discover films that resonate with you. Alongside our reviews, we curate the latest movie trailers to give you a glimpse of the excitement awaiting in theaters or on streaming platforms.",
            ],
          },
          {
            paragraphs: [
              "Movies Gig was built on the belief that films are more than entertainment—they’re a universal language that connects us. yesmovies.jp.net is a space where fans can come together to explore, discuss, and celebrate cinema. Whether you’re a casual viewer or a dedicated film buff, we invite you to join our community and dive into the world of movies with us, one review and trailer at a time!",
            ],
          },
        ],
      },
      disclaimer: {
        title: "Disclaimer",
        sections: [
          {
            paragraphs: [
              "The content on yesmovies.jp.net, provided by Movies Gig, is for informational and entertainment purposes only. Our movie reviews reflect the subjective opinions of our team and may not align with all viewers or filmmakers.",
            ],
          },
          {
            paragraphs: [
              "We aim for accurate and timely content but cannot guarantee its completeness. Trailers are sourced from third parties, and we are not responsible for their accuracy or availability. We encourage forming your own opinions by watching the films.",
            ],
          },
          {
            paragraphs: [
              "yesmovies.jp.net is not affiliated with film studios unless stated. We are not liable for decisions based on our content. Contact us at rohansingh51243@gmail.com with concerns.",
            ],
          },
        ],
      },
      contact: {
        title: "Contact Us",
        sections: [
          {
            paragraphs: [
              "Have thoughts or questions about our movie reviews or trailers? The yesmovies.jp.net team, powered by Movies Gig, is here for you! Contact us at:",
              "Email: rohansingh51243@gmail.com",
            ],
          },
          {
            paragraphs: [
              "Reach out via social media or our website’s contact form (if available). We’ll respond promptly. Thank you for being part of our film community!",
            ],
          },
        ],
      },
      privacy: {
        title: "Privacy Policy",
        sections: [
          {
            paragraphs: [
              "At yesmovies.jp.net, operated by Movies Gig, we are committed to protecting your privacy. This Privacy Policy details how we manage your data.",
            ],
          },
          {
            heading: "Information We Collect",
            list: [
              "Personal Information: Name, email, or other details you provide (e.g., via rohansingh51243@gmail.com).",
              "Non-Personal Information: Browser, IP address, or usage data via cookies or analytics.",
              "User-Submitted Content: Feedback or messages.",
            ],
          },
          {
            heading: "How We Use Your Information",
            paragraphs: ["We use data to:"],
            list: [
              "Address your inquiries.",
              "Enhance our reviews and trailers.",
              "Improve user experience via analytics.",
              "Send updates (with consent).",
            ],
          },
          {
            paragraphs: [
              "We do not share personal information, except as legally required.",
            ],
          },
          {
            heading: "Cookies and Tracking",
            paragraphs: [
              "Cookies improve functionality. Manage them in your browser, noting potential impacts on site use.",
            ],
          },
          {
            heading: "Data Security",
            paragraphs: [
              "We protect your data but cannot guarantee absolute security.",
            ],
          },
          {
            heading: "Third-Party Links",
            paragraphs: [
              "External links (e.g., trailers) are not under our control.",
            ],
          },
          {
            heading: "Your Rights",
            paragraphs: [
              "Request access, correction, or deletion of your data, or opt out of communications at rohansingh51243@gmail.com.",
            ],
          },
          {
            paragraphs: [
              "Updates will be posted with a new effective date.",
              "Email: rohansingh51243@gmail.com",
              "Effective Date: August 17, 2025",
              "Thank you for trusting yesmovies.jp.net!",
            ],
          },
        ],
      },
    },
  },
  {
    hostnames: ["hindilinks4u.it.com", "www.hindilinks4u.it.com"],
    siteLabel: "hindilinks4u.it.com",
    siteUrl: "hindilinks4u.it.com",
    pageTitleSuffix: "Movies and TV Shows Online",
    metaDescription:
      "hindilinks4u.it.com is a Movies Gig platform celebrating Hindi films and cinema from around the world. Read reviews, watch trailers, and discover your next movie.",
    footerDescription:
      "hindilinks4u.it.com is powered by Movies Gig. Explore Hindi films, global cinema, trailers, and reviews with a passionate team.",
    email: "rohansingh51243@gmail.com",
    pages: {
      about: {
        title: "About Us",
        sections: [
          {
            paragraphs: [
              "Welcome to hindilinks4u.it.com, a Movies Gig platform celebrating the vibrant world of cinema, with a special focus on Hindi films and beyond! We are a passionate team of film enthusiasts, researchers, and writers dedicated to crafting detailed, thoughtful reviews that explore the storytelling, performances, visuals, and cultural impact of movies. From Bollywood’s dazzling blockbusters to global cinema and indie treasures, we cover a wide spectrum to cater to every film lover’s taste.",
            ],
          },
          {
            paragraphs: [
              "Our team at Movies Gig dives deep into each film, researching its context, analyzing its artistry, and sharing insights that help you choose your next watch or deepen your appreciation for cinema. In addition to our reviews, we feature the latest movie trailers to spark excitement for upcoming releases, ensuring you’re always ready for your next cinematic adventure.",
            ],
          },
          {
            paragraphs: [
              "Founded with a love for storytelling, hindilinks4u.it.com is more than a review site—it’s a community for moviegoers to connect, share, and celebrate the magic of films. Whether you’re a Bollywood devotee or a fan of diverse global cinema, we’re here to inspire and inform. Join us as we explore the power of movies, one review, trailer, and conversation at a time!",
            ],
          },
        ],
      },
      disclaimer: {
        title: "Disclaimer",
        sections: [
          {
            paragraphs: [
              "The content on hindilinks4u.it.com, provided by Movies Gig, is intended for informational and entertainment purposes only. Our movie reviews reflect the subjective opinions of our team of writers and researchers, shaped by their analysis of each film’s narrative, themes, and artistry. These opinions may not align with those of all viewers or filmmakers.",
            ],
          },
          {
            paragraphs: [
              "We strive to provide accurate and timely content but cannot guarantee its completeness or availability. Trailers and promotional materials are sourced from third parties, and hindilinks4u.it.com is not responsible for their accuracy, content, or accessibility. We encourage users to watch films and form their own perspectives.",
            ],
          },
          {
            paragraphs: [
              "hindilinks4u.it.com is not affiliated with film studios, production companies, or distributors unless explicitly stated. We are not liable for any decisions made based on the information provided on our site. For questions or concerns, please contact us at rohansingh51243@gmail.com.",
            ],
          },
        ],
      },
      contact: {
        title: "Contact Us",
        sections: [
          {
            paragraphs: [
              "Have questions, feedback, or suggestions about our movie reviews or trailers? The hindilinks4u.it.com team, powered by Movies Gig, is eager to hear from you! Reach out to us at:",
              "Email: rohansingh51243@gmail.com",
            ],
          },
          {
            paragraphs: [
              "You can also connect with us through our social media channels or website contact form (if available). We strive to respond promptly to all inquiries. Thank you for being part of our vibrant film-loving community!",
            ],
          },
        ],
      },
      privacy: {
        title: "Privacy Policy",
        sections: [
          {
            paragraphs: [
              "At hindilinks4u.it.com, operated by Movies Gig, we are committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, store, and protect your data when you interact with our website.",
            ],
          },
          {
            heading: "Information We Collect",
            list: [
              "Personal Information: Details such as your name or email address provided when you contact us (e.g., via rohansingh51243@gmail.com).",
              "Non-Personal Information: Data like browser type, IP address, or site usage patterns collected through cookies or analytics tools.",
              "User-Submitted Content: Feedback, comments, or messages you share with us.",
            ],
          },
          {
            heading: "How We Use Your Information",
            paragraphs: ["We use your data to:"],
            list: [
              "Respond to your inquiries or feedback.",
              "Improve our movie reviews and trailer offerings.",
              "Analyze website usage to enhance user experience.",
              "Send promotional updates or newsletters (only with your explicit consent).",
            ],
          },
          {
            paragraphs: [
              "We do not sell, trade, or share your personal information with third parties, except as required by law or to protect our rights.",
            ],
          },
          {
            heading: "Cookies and Tracking",
            paragraphs: [
              "We may use cookies to optimize site functionality and user experience. You can manage cookie preferences through your browser settings, though disabling cookies may affect site performance.",
            ],
          },
          {
            heading: "Data Security",
            paragraphs: [
              "We implement reasonable measures to secure your data, but no online platform can guarantee absolute security. We encourage caution when sharing personal information.",
            ],
          },
          {
            heading: "Third-Party Links",
            paragraphs: [
              "Our website may include links to third-party content, such as movie trailers. hindilinks4u.it.com is not responsible for the privacy practices or content of these external sites.",
            ],
          },
          {
            heading: "Your Rights",
            paragraphs: [
              "You have the right to request access to or correction of your personal data, request deletion of your data, or opt out of promotional communications. To exercise these rights, contact us at rohansingh51243@gmail.com.",
            ],
          },
          {
            paragraphs: [
              "We may update this Privacy Policy periodically, with changes posted here and marked with a new effective date.",
              "Email: rohansingh51243@gmail.com",
              "Effective Date: August 27, 2025",
              "Thank you for trusting hindilinks4u.it.com with your information!",
            ],
          },
        ],
      },
    },
  },
  {
    hostnames: ["123movies.jp.net", "www.123movies.jp.net"],
    siteLabel: "123movies.jp.net",
    siteUrl: "123movies.jp.net",
    pageTitleSuffix: "Movies And WebSeries Online",
    metaDescription:
      "123movies.jp.net is a Movies Gig website offering movie reviews and trailers for films from blockbusters to indie and international cinema.",
    footerDescription:
      "123movies.jp.net is powered by Movies Gig. Discover thoughtful movie reviews and the latest trailers.",
    email: "rohansingh51243@gmail.com",
    pages: {
      about: {
        title: "About Us",
        sections: [
          {
            paragraphs: [
              "Welcome to 123movies.jp.net, powered by Movies Gig! We are a passionate team of film lovers, researchers, and writers committed to bringing you insightful movie reviews and the latest trailers. Our reviews dive deep into the essence of each film—its narrative, characters, cinematography, and cultural significance—covering everything from blockbuster hits to indie gems and international cinema.",
            ],
          },
          {
            paragraphs: [
              "At 123movies.jp.net, our team combines rigorous research with a love for storytelling to create reviews that inform, inspire, and spark conversation. We analyze every film with care, offering insights to help you choose your next watch or deepen your appreciation for the art of cinema. We also curate exciting trailers to keep you in the loop about upcoming releases.",
            ],
          },
          {
            paragraphs: [
              "Movies Gig was founded to create a community where film fans can connect and celebrate the art of storytelling. 123movies.jp.net is your hub for thoughtful analysis, engaging discussions, and a shared love for movies. Join us as we explore the world of cinema, one review, trailer, and story at a time!",
            ],
          },
        ],
      },
      disclaimer: {
        title: "Disclaimer",
        sections: [
          {
            paragraphs: [
              "The content on 123movies.jp.net, provided by Movies Gig, is intended for informational and entertainment purposes only. Our movie reviews reflect the subjective opinions of our team of writers and researchers, based on their analysis of each film’s narrative, themes, and artistry. These opinions may not align with those of all viewers or filmmakers.",
            ],
          },
          {
            paragraphs: [
              "We strive to provide accurate and timely content but cannot guarantee its completeness or availability. Trailers and promotional materials are sourced from third parties, and 123movies.jp.net is not responsible for their accuracy, content, or accessibility. We encourage users to watch films and form their own perspectives.",
            ],
          },
          {
            paragraphs: [
              "123movies.jp.net is not affiliated with film studios, production companies, or distributors unless explicitly stated. We are not liable for any decisions made based on the information provided on our site. For questions or concerns, please contact us at rohansingh51243@gmail.com.",
            ],
          },
        ],
      },
      contact: {
        title: "Contact Us",
        sections: [
          {
            paragraphs: [
              "Have questions, feedback, or suggestions about our movie reviews or trailers? The 123movies.jp.net team, powered by Movies Gig, is eager to hear from you! Reach out to us at:",
              "Email: rohansingh51243@gmail.com",
            ],
          },
          {
            paragraphs: [
              "You can also connect with us through our social media channels or website contact form (if available). We strive to respond promptly to all inquiries. Thank you for being part of our vibrant film-loving community!",
            ],
          },
        ],
      },
      privacy: {
        title: "Privacy Policy",
        sections: [
          {
            paragraphs: [
              "At 123movies.jp.net, operated by Movies Gig, we are committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, store, and protect your data when you interact with our website.",
            ],
          },
          {
            heading: "Information We Collect",
            list: [
              "Personal Information: Details such as your name or email address provided when you contact us (e.g., via rohansingh51243@gmail.com).",
              "Non-Personal Information: Data like browser type, IP address, or site usage patterns collected through cookies or analytics tools.",
              "User-Submitted Content: Feedback, comments, or messages you share with us.",
            ],
          },
          {
            heading: "How We Use Your Information",
            paragraphs: ["We use your data to:"],
            list: [
              "Respond to your inquiries or feedback.",
              "Improve our movie reviews and trailer offerings.",
              "Analyze website usage to enhance user experience.",
              "Send promotional updates or newsletters (only with your explicit consent).",
            ],
          },
          {
            paragraphs: [
              "We do not sell, trade, or share your personal information with third parties, except as required by law or to protect our rights.",
            ],
          },
          {
            heading: "Cookies and Tracking",
            paragraphs: [
              "We may use cookies to optimize site functionality and user experience. You can manage cookie preferences through your browser settings, though disabling cookies may affect site performance.",
            ],
          },
          {
            heading: "Data Security",
            paragraphs: [
              "We implement reasonable measures to secure your data, but no online platform can guarantee absolute security. We encourage caution when sharing personal information.",
            ],
          },
          {
            heading: "Third-Party Links",
            paragraphs: [
              "Our website may include links to third-party content, such as movie trailers. 123movies.jp.net is not responsible for the privacy practices or content of these external sites.",
            ],
          },
          {
            heading: "Your Rights",
            paragraphs: [
              "You have the right to request access to or correction of your personal data, request deletion of your data, or opt out of promotional communications. To exercise these rights, contact us at rohansingh51243@gmail.com.",
            ],
          },
          {
            paragraphs: [
              "We may update this Privacy Policy periodically, with changes posted here and marked with a new effective date.",
              "Email: rohansingh51243@gmail.com",
              "Effective Date: August 27, 2025",
              "Thank you for trusting 123movies.jp.net with your information!",
            ],
          },
        ],
      },
    },
  },
  {
    hostnames: ["123movies.hu.net", "www.123movies.hu.net"],
    siteLabel: "123movies.hu.net",
    siteUrl: "123movies.hu.net",
    pageTitleSuffix: "Movies And WebSeries Online",
    metaDescription:
      "123movies.hu.net is a Movies Gig site for movie lovers. Read reviews, discover trailers, and enjoy curated film content across genres.",
    footerDescription:
      "123movies.hu.net is powered by Movies Gig. Discover movie reviews, trailers, and cinematic insights.",
    email: "rohansingh51243@gmail.com",
    pages: {
      about: {
        title: "About Us",
        sections: [
          {
            paragraphs: [
              "Welcome to 123movies.hu.net, powered by Movies Gig! We are a passionate team of film lovers, researchers, and writers committed to bringing you insightful movie reviews and the latest trailers. Our reviews dive deep into the essence of each film—its narrative, characters, cinematography, and cultural significance—covering everything from blockbuster hits to indie gems and international cinema.",
            ],
          },
          {
            paragraphs: [
              "At 123movies.hu.net, our team combines rigorous research with a love for storytelling to create reviews that inform, inspire, and spark conversation. We analyze every film with care, offering insights to help you choose your next watch or deepen your appreciation for the art of cinema. We also curate exciting trailers to keep you in the loop about upcoming releases.",
            ],
          },
          {
            paragraphs: [
              "Movies Gig was founded to create a community where film fans can connect and celebrate the art of storytelling. 123movies.hu.net is your hub for thoughtful analysis, engaging discussions, and a shared love for movies. Join us as we explore the world of cinema, one review, trailer, and story at a time!",
            ],
          },
        ],
      },
      disclaimer: {
        title: "Disclaimer",
        sections: [
          {
            paragraphs: [
              "The content on 123movies.hu.net, provided by Movies Gig, is intended for informational and entertainment purposes only. Our movie reviews reflect the subjective opinions of our team of writers and researchers, based on their analysis of each film’s narrative, themes, and artistry. These opinions may not align with those of all viewers or filmmakers.",
            ],
          },
          {
            paragraphs: [
              "We strive to provide accurate and timely content but cannot guarantee its completeness or availability. Trailers and promotional materials are sourced from third parties, and 123movies.hu.net is not responsible for their accuracy, content, or accessibility. We encourage users to watch films and form their own perspectives.",
            ],
          },
          {
            paragraphs: [
              "123movies.hu.net is not affiliated with film studios, production companies, or distributors unless explicitly stated. We are not liable for any decisions made based on the information provided on our site. For questions or concerns, please contact us at rohansingh51243@gmail.com.",
            ],
          },
        ],
      },
      contact: {
        title: "Contact Us",
        sections: [
          {
            paragraphs: [
              "Have questions, feedback, or suggestions about our movie reviews or trailers? The 123movies.hu.net team, powered by Movies Gig, is eager to hear from you! Reach out to us at:",
              "Email: rohansingh51243@gmail.com",
            ],
          },
          {
            paragraphs: [
              "You can also connect with us through our social media channels or website contact form (if available). We strive to respond promptly to all inquiries. Thank you for being part of our vibrant film-loving community!",
            ],
          },
        ],
      },
      privacy: {
        title: "Privacy Policy",
        sections: [
          {
            paragraphs: [
              "At 123movies.hu.net, operated by Movies Gig, we are committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, store, and protect your data when you interact with our website.",
            ],
          },
          {
            heading: "Information We Collect",
            list: [
              "Personal Information: Details such as your name or email address provided when you contact us (e.g., via rohansingh51243@gmail.com).",
              "Non-Personal Information: Data like browser type, IP address, or site usage patterns collected through cookies or analytics tools.",
              "User-Submitted Content: Feedback, comments, or messages you share with us.",
            ],
          },
          {
            heading: "How We Use Your Information",
            paragraphs: ["We use your data to:"],
            list: [
              "Respond to your inquiries or feedback.",
              "Improve our movie reviews and trailer offerings.",
              "Analyze website usage to enhance user experience.",
              "Send promotional updates or newsletters (only with your explicit consent).",
            ],
          },
          {
            paragraphs: [
              "We do not sell, trade, or share your personal information with third parties, except as required by law or to protect our rights.",
            ],
          },
          {
            heading: "Cookies and Tracking",
            paragraphs: [
              "We may use cookies to optimize site functionality and user experience. You can manage cookie preferences through your browser settings, though disabling cookies may affect site performance.",
            ],
          },
          {
            heading: "Data Security",
            paragraphs: [
              "We implement reasonable measures to secure your data, but no online platform can guarantee absolute security. We encourage caution when sharing personal information.",
            ],
          },
          {
            heading: "Third-Party Links",
            paragraphs: [
              "Our website may include links to third-party content, such as movie trailers. 123movies.hu.net is not responsible for the privacy practices or content of these external sites.",
            ],
          },
          {
            heading: "Your Rights",
            paragraphs: [
              "You have the right to request access to or correction of your personal data, request deletion of your data, or opt out of promotional communications. To exercise these rights, contact us at rohansingh51243@gmail.com.",
            ],
          },
          {
            paragraphs: [
              "We may update this Privacy Policy periodically, with changes posted here and marked with a new effective date.",
              "Email: rohansingh51243@gmail.com",
              "Effective Date: August 27, 2025",
              "Thank you for trusting 123movies.hu.net with your information!",
            ],
          },
        ],
      },
    },
  },
  {
    hostnames: ["123movie.uk.com", "www.123movie.uk.com"],
    siteLabel: "123movie.uk.com",
    siteUrl: "123movie.uk.com",
    pageTitleSuffix: "Movies And Series Online",
    metaDescription:
      "123movie.uk.com is a Movies Gig destination for movie lovers. Read reviews, watch trailers, and explore cinema from around the world.",
    footerDescription:
      "123movie.uk.com is powered by Movies Gig. Discover movie reviews, trailers, and cinematic stories.",
    email: "rohansingh51243@gmail.com",
    pages: {
      about: {
        title: "About Us",
        sections: [
          {
            paragraphs: [
              "Welcome to 123movie.uk.com, brought to you by Movies Gig! We are a passionate collective of film enthusiasts, researchers, and writers dedicated to delivering thoughtful movie reviews and exciting trailers. Our reviews dive into the heart of each film—its story, characters, cinematography, and cultural impact—covering a diverse range from mainstream blockbusters to indie films and international cinema.",
            ],
          },
          {
            paragraphs: [
              "At 123movie.uk.com, our team combines rigorous research with a love for storytelling to create reviews that inform, inspire, and spark conversation. We analyze every film with care, offering insights to help you choose your next watch or deepen your appreciation for the art of cinema. We also curate the latest trailers to keep you excited about upcoming releases.",
            ],
          },
          {
            paragraphs: [
              "Founded on a shared passion for movies, Movies Gig aims to build a community where film fans can connect and celebrate the power of storytelling. 123movie.uk.com is your destination for discovering new films and engaging with the cinematic world. Join us on this journey, one review, trailer, and story at a time!",
            ],
          },
        ],
      },
      disclaimer: {
        title: "Disclaimer",
        sections: [
          {
            paragraphs: [
              "The content on 123movie.uk.com, provided by Movies Gig, is intended for informational and entertainment purposes only. Our movie reviews reflect the subjective opinions of our team of writers and researchers, based on their analysis of each film’s narrative, themes, and artistry. These opinions may not align with those of all viewers or filmmakers.",
            ],
          },
          {
            paragraphs: [
              "We strive to provide accurate and timely content but cannot guarantee its completeness or availability. Trailers and promotional materials are sourced from third parties, and 123movie.uk.com is not responsible for their accuracy, content, or accessibility. We encourage users to watch films and form their own perspectives.",
            ],
          },
          {
            paragraphs: [
              "123movie.uk.com is not affiliated with film studios, production companies, or distributors unless explicitly stated. We are not liable for any decisions made based on the information provided on our site. For questions or concerns, please contact us at rohansingh51243@gmail.com.",
            ],
          },
        ],
      },
      contact: {
        title: "Contact Us",
        sections: [
          {
            paragraphs: [
              "Have questions, feedback, or suggestions about our movie reviews or trailers? The 123movie.uk.com team, powered by Movies Gig, is eager to hear from you! Reach out to us at:",
              "Email: rohansingh51243@gmail.com",
            ],
          },
          {
            paragraphs: [
              "You can also connect with us through our social media channels or website contact form (if available). We strive to respond promptly to all inquiries. Thank you for being part of our vibrant film-loving community!",
            ],
          },
        ],
      },
      privacy: {
        title: "Privacy Policy",
        sections: [
          {
            paragraphs: [
              "At 123movie.uk.com, operated by Movies Gig, we are committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, store, and protect your data when you interact with our website.",
            ],
          },
          {
            heading: "Information We Collect",
            list: [
              "Personal Information: Details such as your name or email address provided when you contact us (e.g., via rohansingh51243@gmail.com).",
              "Non-Personal Information: Data like browser type, IP address, or site usage patterns collected through cookies or analytics tools.",
              "User-Submitted Content: Feedback, comments, or messages you share with us.",
            ],
          },
          {
            heading: "How We Use Your Information",
            paragraphs: ["We use your data to:"],
            list: [
              "Respond to your inquiries or feedback.",
              "Improve our movie reviews and trailer offerings.",
              "Analyze website usage to enhance user experience.",
              "Send promotional updates or newsletters (only with your explicit consent).",
            ],
          },
          {
            paragraphs: [
              "We do not sell, trade, or share your personal information with third parties, except as required by law or to protect our rights.",
            ],
          },
          {
            heading: "Cookies and Tracking",
            paragraphs: [
              "We may use cookies to optimize site functionality and user experience. You can manage cookie preferences through your browser settings, though disabling cookies may affect site performance.",
            ],
          },
          {
            heading: "Data Security",
            paragraphs: [
              "We implement reasonable measures to secure your data, but no online platform can guarantee absolute security. We encourage caution when sharing personal information.",
            ],
          },
          {
            heading: "Third-Party Links",
            paragraphs: [
              "Our website may include links to third-party content, such as movie trailers. 123movie.uk.com is not responsible for the privacy practices or content of these external sites.",
            ],
          },
          {
            heading: "Your Rights",
            paragraphs: [
              "You have the right to request access to or correction of your personal data, request deletion of your data, or opt out of promotional communications. To exercise these rights, contact us at rohansingh51243@gmail.com.",
            ],
          },
          {
            paragraphs: [
              "We may update this Privacy Policy periodically, with changes posted here and marked with a new effective date.",
              "Email: rohansingh51243@gmail.com",
              "Effective Date: August 27, 2025",
              "Thank you for trusting 123movie.uk.com with your information!",
            ],
          },
        ],
      },
    },
  },
];

export const defaultSiteConfig = siteConfigs[0];

export const getSiteConfig = (): SiteConfig => {
  if (typeof window === "undefined") {
    return defaultSiteConfig;
  }

  const hostname = window.location.hostname.toLowerCase();
  return (
    siteConfigs.find((config) => config.hostnames.includes(hostname)) ||
    defaultSiteConfig
  );
};
