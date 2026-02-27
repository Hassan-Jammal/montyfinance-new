import Navbar from '@/components/monty/Navbar';
import React, { useMemo, useState } from 'react';
import FooterSection from '@/components/monty/FooterSection';

const CodeOfConduct: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);

  const sections = useMemo(
    () => [
      {
        title: 'Professionalism',
        points: [
          'Our employees are expected to work responsibly, actively, pragmatically, and devotedly, and to contribute to ensure world-class service in the new era.',
          'They shall fulfill their duties legally, diligently, ethically, honestly and within the scope of authority granted to them. No activities beyond authority are allowed.',
        ],
        image: 'professionalism',
      },
      {
        title: 'Integrity',
        points: [
          'It is forbidden for our employees to claim or accept cash, marketable securities, gifts, special services, privileges and other property or non-property rights or benefits from customers, suppliers, competitors, subordinating institutions, and other business-related parties under any name and in any form.',
          'They are prohibited from seeking any improper benefits in their official capacity for themselves, relatives, friends, or other individuals.',
        ],
        image: 'integrity',
      },
      {
        title: 'Conflict of interest',
        points: [
          'As professionals, our employees make business decisions every day. In making such decisions, they become responsible for remaining free from influence, or the appearance of influence.',
          'They shall avoid any situation where their private or personal interests may conflict or appear to conflict with their duties to the company.',
        ],
        image: 'conflict-of-interest',
      },
      {
        title: 'Honesty and Harmony',
        points: [
          'Our employees shall ensure the authenticity, accuracy, completeness, and timeliness of working records.',
          'They should respect each other and be empathic towards each other.',
        ],
        image: 'honesty-and-harmony',
      },
      {
        title: 'Treating customers fairly',
        points: [
          'Our employees shall not show indifference, arrogance, rudeness, or discrimination against customers based on factors such as nationality, ethnicity, religion, age, gender, color, disability, or amount of business.',
          'Our employees shall deal with customers fairly and transparently, taking the time to explain the risks and benefits, and informing them of any changes in these conditions. Employees will also respond with high professionalism, accuracy, and speed to any inquiries a customer makes.',
        ],
        image: 'treating-customers-fairly',
      },
      {
        title: 'Confidentiality and data protection',
        points: [
          'Our employees are bound by the provisions of the Lebanese Law of 3 September 1956 on Banking Secrecy in the interest of its customers.',
          'Furthermore, Personal data held by or on behalf of us must be used in compliance with data protection laws.',
        ],
        image: 'confidentiality-and-data-protection',
      },
    ],
    []
  );

  // SEO (React Router): you can use react-helmet-async if you want.
  // Example:
  // <Helmet>
  //   <title>Code of Conduct</title>
  //   <meta name="description" content="" />
  //   <meta property="og:title" content="Code of Conduct" />
  //   <meta property="og:description" content="" />
  //   <meta property="og:image" content="/assets/images/share-image-team.webp" />
  //   <meta name="twitter:card" content="summary_large_image" />
  // </Helmet>

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar onContactClick={() => setContactOpen(true)} />

      <main>
        {/* HERO */}
        <section className="bg-gray-100 py-32">
          <div className="container">
            <div className="grid items-center gap-4 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
              <div className="flex flex-col justify-center">
                <div className="flex gap-1 font-libre text-sm font-bold uppercase text-[#D4A23C]">
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M12 0.5H4.89919H0V5.41129V12.5" fill="#D4A23C" />
                  </svg>
                  <h2>Code of Conduct</h2>
                </div>

                <h3 className="mt-6 font-lora text-2xl font-bold lg:text-5xl">
                  COMPLIANCE WITH CONDUCT RULES
                </h3>
              </div>

              <div className="max-lg:hidden" />

              <div>
                <p className="mt-2 text-base text-[#73788B]">
                  We&apos;re committed to revolutionizing the global approach to money – to
                  simplify, enhance, and enrich the experience for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTIONS */}
        <section className="mx-auto py-16 md:py-16">
          <div className="container">
            <div className="mt-24">
              {sections.map((section, index) => {
                const isOdd = index % 2 !== 0;

                return (
                  <div
                    key={section.title}
                    className="mt-24 flex gap-12 max-lg:flex-col lg:gap-24 xl:gap-48"
                  >
                    <div
                      className={[
                        'flex flex-1 flex-col justify-center',
                        isOdd ? 'lg:order-1' : '',
                      ].join(' ')}
                    >
                      <p className="font-lora text-xl font-bold text-[#09052B]">
                        {section.title}
                      </p>

                      <ol className="mt-6 list-decimal px-4 text-base text-[#73788B]">
                        {section.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ol>
                    </div>

                    <div
                      className={['flex-1', isOdd ? 'lg:order-0' : ''].join(' ')}
                    >
                      <img
                        src={`/images/${section.image}.webp`}
                        alt={section.title}
                        width={992}
                        height={788}
                        loading="lazy"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default CodeOfConduct;