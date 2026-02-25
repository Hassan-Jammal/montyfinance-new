import React, { useState } from 'react';

const PHONE_IMG = 'https://d64gsuwffb70l.cloudfront.net/699d93bd375483c7d17166c9_1771934809002_fb76dc16.jpg';
const BUSINESS_IMG = 'https://d64gsuwffb70l.cloudfront.net/699d93bd375483c7d17166c9_1771934823981_d3f55aea.jpg';
const POS_IMG = 'https://d64gsuwffb70l.cloudfront.net/699d93bd375483c7d17166c9_1771934841221_6d4cf8b2.jpg';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#2d4a9e] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const montyPayServices = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    title: 'Omnichannel Payments',
    description: 'Accept payments online, in-store, or on the go. Process credit cards, digital wallets, and QR payments through one unified platform.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Smart POS Terminals',
    description: 'Advanced point-of-sale solutions for fast, flexible in-store checkout. Support for cards, wallets, and contactless payments.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Online Payment Gateway',
    description: 'Secure e-commerce gateway with multi-currency support, pay-by-link checkouts, recurring billing, and invoicing tools.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Value-Added Services',
    description: 'Loyalty programs, advanced analytics, business insights, and e-commerce services including Shopify integration.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'Unified Merchant Dashboard',
    description: 'Manage transactions, monitor performance in real time, and make smarter, data-driven decisions through one platform.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Digital Growth Support',
    description: 'Complete e-commerce services to help businesses scale online with confidence and reach more customers.',
  },
];

const EcosystemSection: React.FC = () => {
  const [activePayTag, setActivePayTag] = useState('Smart POS');

  return (
    <section id="ecosystem" className="pb-20 lg:pb-28 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#0f1c2e] font-semibold text-sm tracking-widest uppercase mb-4">
            OUR ECOSYSTEM
          </p>
          <h2 className="font-serif font-bold text-[#0f1c2e] text-3xl sm:text-4xl lg:text-5xl mb-6">
            The Monty Finance Ecosystem
          </h2>
          <p className="text-[#5a6a7e] text-lg leading-relaxed max-w-3xl mx-auto">
            Under Monty Finance SAL, our platforms are built with one shared purpose: to make finance simpler, more accessible, and more powerful for everyone. Each brand serves a distinct audience, together forming a complete financial ecosystem that connects people and businesses.
          </p>
        </div>

        {/* MyMonty Section */}
        <div className="border rounded-3xl p-8 lg:p-14 mb-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              {/* Logo */}
              <div className="flex items-start gap-3 mb-12">
                <svg width="50" height="50" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="512" height="512" rx="97" fill="black"/>
                  <path d="M158.381 145H97.5508V358.891H158.381V145Z" fill="white"/>
                  <path d="M344.552 145C324.531 145 294.335 149.486 278.416 180.12C267.803 158.895 246.141 145 214.303 145C200.026 145 188.866 149.376 178.637 156.542V198.172C181.81 196.64 186.623 195.218 193.078 195.218C220.047 195.218 228.198 217.646 228.198 246.256V358.945H288.591V246.694C288.591 218.521 296.742 195.272 323.273 195.272C349.804 195.272 358.392 217.701 358.392 246.311V359H419.223V245.107C419.223 192.045 403.304 145.109 344.498 145.109L344.552 145Z" fill="white"/>
                </svg>

                <div>
                  <svg width="182" height="36" viewBox="0 0 182 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M106.215 4.80225C112.575 4.80225 118.175 9.31344 118.175 15.9515C118.175 22.5896 112.575 27.1455 106.215 27.1455C99.8536 27.1455 94.2544 22.6791 94.2544 15.9515C94.2544 9.22389 99.8934 4.80225 106.215 4.80225ZM106.215 21.8004C109.352 21.8004 112.024 19.2929 112.024 15.9515C112.024 12.6101 109.352 10.1474 106.215 10.1474C103.077 10.1474 100.405 12.6101 100.405 15.9515C100.405 19.2929 103.122 21.8004 106.215 21.8004Z" fill="#0E1414"/>
                    <path d="M119.835 4.80225H126.156V8.18284C127.98 5.67538 130.271 4.80225 132.903 4.80225C139.014 4.80225 140.668 9.60449 140.668 15.0336V26.6866H134.347V15.1567C134.347 12.1903 133.244 9.93471 130.317 9.93471C127.389 9.93471 126.161 12.2295 126.161 15.1959V26.681H119.84V4.80225H119.835Z" fill="#0E1414"/>
                    <path d="M149.849 4.8526H155.874V9.73879H149.849V20.1772C149.849 21.0951 150.229 22.0578 151.463 22.0578C152.697 22.0578 153.117 21.056 153.117 20.0541C153.117 19.4272 152.947 18.5485 152.822 18.2183H157.83C158.21 19.013 158.341 20.0149 158.341 20.7649C158.341 23.9384 156.221 27.1567 151.088 27.1567C147.268 27.1567 143.539 25.819 143.539 19.5951L143.499 0.00558472H149.86V4.8582L149.849 4.8526Z" fill="#0E1414"/>
                    <path d="M6.32114 4.80225H0V26.6866H6.32114V4.80225Z" fill="#0E1414"/>
                    <path d="M25.6654 4.80225C23.5849 4.80225 20.4471 5.2612 18.7929 8.39553C17.6901 6.22389 15.439 4.80225 12.1307 4.80225C10.647 4.80225 9.48739 5.25001 8.42439 5.98322V10.2425C8.75409 10.0858 9.25433 9.94031 9.9251 9.94031C12.7275 9.94031 13.5745 12.2351 13.5745 15.1623V26.6922H19.8502V15.2071C19.8502 12.3246 20.6972 9.9459 23.4542 9.9459C26.2111 9.9459 27.1036 12.2407 27.1036 15.1679V26.6978H33.4247V15.0448C33.4247 9.61568 31.7706 4.81344 25.6597 4.81344L25.6654 4.80225Z" fill="#0E1414"/>
                    <path d="M65.957 4.80225H59.6359V26.6866H65.957V4.80225Z" fill="#0E1414"/>
                    <path d="M85.2956 4.80225C83.2151 4.80225 80.0773 5.2612 78.4231 8.39553C77.3203 6.22389 75.0692 4.80225 71.7609 4.80225C70.2772 4.80225 69.1176 5.25001 68.0546 5.98322V10.2425C68.3843 10.0858 68.8845 9.94031 69.5553 9.94031C72.3577 9.94031 73.2047 12.2351 73.2047 15.1623V26.6922H79.4804V15.2071C79.4804 12.3246 80.3274 9.9459 83.0844 9.9459C85.8413 9.9459 86.7338 12.2407 86.7338 15.1679V26.6978H93.0549V15.0448C93.0549 9.61568 91.4008 4.81344 85.2899 4.81344L85.2956 4.80225Z" fill="#0E1414"/>
                    <path d="M43.3953 14.7649L38.9842 4.80225H32.663L40.1665 21.9179L43.3953 14.7649Z" fill="#0E1414"/>
                    <path d="M50.9841 4.80225L36.898 36H43.2362L57.3223 4.80225H50.9841Z" fill="#0E1414"/>
                    <path d="M168.073 14.7649L163.662 4.80225H157.341L164.85 21.9179L168.073 14.7649Z" fill="#0E1414"/>
                    <path d="M175.662 4.80225L161.581 36H167.92L182 4.80225H175.662Z" fill="#0E1414"/>
                  </svg>
                  <p className="text-[#5a6a7e] text-base">Your Super Digital Wallet</p>
                </div>
              </div>

              <p className="text-[#5a6a7e] text-base leading-relaxed mb-6">
                MyMonty is an all-in-one digital wallet designed for everyday life. It gives individuals smart control over their money through a simple, intuitive mobile app.
              </p>

              <div className="space-y-4 mb-12">
                {[
                  'Send and receive money instantly with peer-to-peer transfers',
                  'Manage their finances in one secure place',
                  'Access virtual and physical payment cards and credit solutions',
                  'Pay, track, and move money with ease',
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-[#5a6a7e] text-sm">{feature}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#5a6a7e] text-base leading-relaxed italic">
                Built for modern lifestyles, MyMonty transforms how people interact with their finances. It replaces complexity with clarity and friction with freedom, putting powerful financial tools directly in the hands of users.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative w-3/4 ml-auto">
                <img
                  src='images/mobile-app.png'
                  alt="MyMonty digital wallet app"
                  className="w-full rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* MyMonty Business Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {/* Left - Dark Card */}
          <div className="bg-[#0f1c2e] rounded-3xl p-8 lg:p-10 flex flex-col justify-between min-h-[650px]">
            <div>
              <div className="flex items-center gap-2 mb-2 mt-8">
                <svg width="315" height="36" viewBox="0 0 315 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M182.361 0.21167H192.327C196.827 0.21167 199.87 2.82652 199.87 6.75167V6.786C199.87 9.4924 197.832 12.1244 195.117 12.5078V12.5822C198.906 13.017 201.202 15.5632 201.202 19.0306V19.0649C201.202 23.6767 197.884 26.4174 192.292 26.4174H182.361V0.21167ZM185.644 3.09545V11.5065H190.564C194.445 11.5065 196.558 9.96159 196.558 7.12931V7.09498C196.558 4.51445 194.755 3.10117 191.58 3.10117H185.639L185.644 3.09545ZM185.644 14.3216V23.5279H191.804C195.742 23.5279 197.832 21.9487 197.832 18.9334V18.899C197.832 15.8665 195.685 14.3216 191.494 14.3216H185.644Z" fill="#BCC2C9"/>
                  <path d="M203.877 19.786V7.52991H207.046V19.2252C207.046 22.2921 208.487 23.9858 211.397 23.9858C214.308 23.9858 216.334 21.863 216.334 18.6473V7.53563H219.503V26.4232H216.334V23.734H216.26C215.238 25.4963 213.309 26.7837 210.427 26.7837C206.271 26.7837 203.865 24.0945 203.865 19.7917L203.877 19.786Z" fill="#BCC2C9"/>
                  <path d="M222.029 21.1306L222.012 20.9646H225.181L225.215 21.1477C225.6 23.0359 227.001 24.146 229.59 24.146C232.179 24.146 233.689 23.076 233.689 21.3652V21.348C233.689 19.9862 232.977 19.2252 230.83 18.6988L227.822 17.9722C224.251 17.1196 222.517 15.466 222.517 12.7424V12.7253C222.517 9.47531 225.376 7.16943 229.475 7.16943C233.574 7.16943 236.272 9.58402 236.507 12.7424L236.525 12.977H233.499L233.482 12.8512C233.224 11.0145 231.823 9.80145 229.475 9.80145C227.127 9.80145 225.761 10.9115 225.761 12.5822V12.5994C225.761 13.8868 226.616 14.7794 228.711 15.2886L231.72 16.0153C235.549 16.9422 236.932 18.4471 236.932 21.1363V21.1535C236.932 24.4607 233.798 26.7837 229.573 26.7837C225.106 26.7837 222.414 24.5122 222.029 21.1363V21.1306Z" fill="#BCC2C9"/>
                  <path d="M239.206 2.35169C239.206 1.24166 240.101 0.371948 241.192 0.371948C242.283 0.371948 243.178 1.24166 243.178 2.35169C243.178 3.46171 242.306 4.33142 241.192 4.33142C240.078 4.33142 239.206 3.44455 239.206 2.35169ZM239.607 7.5299H242.776V26.4175H239.607V7.5299Z" fill="#BCC2C9"/>
                  <path d="M246.359 7.5299H249.527V10.2191H249.602C250.624 8.45683 252.553 7.16943 255.435 7.16943C259.591 7.16943 261.996 9.85866 261.996 14.1614V26.4175H258.827V14.7222C258.827 11.6553 257.387 9.96166 254.47 9.96166C251.554 9.96166 249.533 12.0844 249.533 15.3001V26.4118H246.364V7.52418L246.359 7.5299Z" fill="#BCC2C9"/>
                  <path d="M264.476 17.0452V17.0281C264.476 11.1804 267.829 7.16943 273.001 7.16943C278.174 7.16943 281.325 11.003 281.325 16.6676V17.8291H267.68C267.754 21.7142 269.901 23.9858 273.271 23.9858C275.677 23.9858 277.37 22.7899 277.915 21.1706L277.967 21.0047H281.084L281.05 21.1878C280.43 24.3119 277.336 26.7837 273.196 26.7837C267.749 26.7837 264.471 22.9902 264.471 17.051L264.476 17.0452ZM267.737 15.3573H278.105C277.795 11.6896 275.757 9.96166 272.984 9.96166C270.211 9.96166 268.081 11.8327 267.737 15.3573Z" fill="#BCC2C9"/>
                  <path d="M282.99 21.1306L282.973 20.9646H286.142L286.176 21.1477C286.561 23.0359 287.962 24.146 290.551 24.146C293.14 24.146 294.65 23.076 294.65 21.3652V21.348C294.65 19.9862 293.938 19.2252 291.791 18.6988L288.783 17.9722C285.212 17.1196 283.478 15.466 283.478 12.7424V12.7253C283.478 9.47531 286.337 7.16943 290.436 7.16943C294.535 7.16943 297.233 9.58402 297.468 12.7424L297.486 12.977H294.46L294.443 12.8512C294.185 11.0145 292.784 9.80145 290.436 9.80145C288.088 9.80145 286.722 10.9115 286.722 12.5822V12.5994C286.722 13.8868 287.577 14.7794 289.673 15.2886L292.681 16.0153C296.51 16.9422 297.893 18.4471 297.893 21.1363V21.1535C297.893 24.4607 294.759 26.7837 290.534 26.7837C286.067 26.7837 283.375 24.5122 282.99 21.1363V21.1306Z" fill="#BCC2C9"/>
                  <path d="M299.725 21.1306L299.707 20.9646H302.876L302.911 21.1477C303.295 23.0359 304.696 24.146 307.285 24.146C309.874 24.146 311.384 23.076 311.384 21.3652V21.348C311.384 19.9862 310.672 19.2252 308.525 18.6988L305.517 17.9722C301.946 17.1196 300.213 15.466 300.213 12.7424V12.7253C300.213 9.47531 303.071 7.16943 307.17 7.16943C311.269 7.16943 313.967 9.58402 314.203 12.7424L314.22 12.977H311.195L311.177 12.8512C310.919 11.0145 309.518 9.80145 307.17 9.80145C304.822 9.80145 303.456 10.9115 303.456 12.5822V12.5994C303.456 13.8868 304.311 14.7794 306.407 15.2886L309.415 16.0153C313.244 16.9422 314.628 18.4471 314.628 21.1363V21.1535C314.628 24.4607 311.493 26.7837 307.268 26.7837C302.802 26.7837 300.109 24.5122 299.725 21.1363V21.1306Z" fill="#BCC2C9"/>
                  <path d="M103.006 4.72046C109.178 4.72046 114.608 9.14912 114.608 15.6662C114.608 22.1833 109.178 26.6521 103.006 26.6521C96.835 26.6521 91.4042 22.2634 91.4042 15.6662C91.4042 9.06901 96.8752 4.72046 103.006 4.72046ZM103.006 21.4109C106.049 21.4109 108.644 18.9505 108.644 15.6719C108.644 12.3934 106.055 9.97306 103.006 9.97306C99.958 9.97306 97.3689 12.3934 97.3689 15.6719C97.3689 18.9505 100.004 21.4109 103.006 21.4109Z" fill="white"/>
                  <path d="M116.21 4.72046H122.341V8.03909C124.109 5.57872 126.331 4.72046 128.88 4.72046C134.804 4.72046 136.406 9.43521 136.406 14.7679V26.2058H130.275V14.8881C130.275 11.9757 129.207 9.76135 126.365 9.76135C123.524 9.76135 122.335 12.0157 122.335 14.9281V26.2058H116.204V4.72046H116.21Z" fill="white"/>
                  <path d="M145.321 4.76625H151.165V9.5611H145.321V19.8088C145.321 20.7129 145.689 21.6512 146.883 21.6512C148.077 21.6512 148.485 20.6671 148.485 19.6829C148.485 19.0707 148.318 18.2067 148.198 17.8806H153.054C153.422 18.6587 153.548 19.6429 153.548 20.381C153.548 23.4994 151.493 26.6521 146.515 26.6521C142.813 26.6521 139.19 25.3418 139.19 19.2309L139.156 0H145.321V4.76052V4.76625Z" fill="white"/>
                  <path d="M6.13112 4.72046H0V26.2058H6.13112V4.72046Z" fill="white"/>
                  <path d="M24.8861 4.72046C22.8711 4.72046 19.8285 5.17248 18.2211 8.24508C17.1533 6.11085 14.9719 4.72046 11.7628 4.72046C10.3219 4.72046 9.2024 5.16103 8.16907 5.87626V10.0589C8.49055 9.91011 8.97277 9.76707 9.62148 9.76707C12.3369 9.76707 13.1578 12.0215 13.1578 14.8938V26.2115H19.2487V14.9338C19.2487 12.1073 20.0696 9.76707 22.7448 9.76707C25.42 9.76707 26.2811 12.0215 26.2811 14.8938V26.2115H32.4123V14.7736C32.4123 9.44093 30.8048 4.72618 24.8861 4.72618V4.72046Z" fill="white"/>
                  <path d="M63.9635 4.72046H57.8323V26.2058H63.9635V4.72046Z" fill="white"/>
                  <path d="M82.7185 4.72046C80.7035 4.72046 77.6609 5.17248 76.0535 8.24508C74.9857 6.11085 72.8042 4.72046 69.5951 4.72046C68.1542 4.72046 67.0347 5.16103 66.0014 5.87626V10.0589C66.3229 9.91011 66.8051 9.76707 67.4538 9.76707C70.1692 9.76707 70.9901 12.0215 70.9901 14.8938V26.2115H77.081V14.9338C77.081 12.1073 77.902 9.76707 80.5772 9.76707C83.2524 9.76707 84.1135 12.0215 84.1135 14.8938V26.2115H90.2446V14.7736C90.2446 9.44093 88.6372 4.72618 82.7185 4.72618V4.72046Z" fill="white"/>
                  <path d="M42.0854 14.5047L37.8028 4.72046H31.6717L38.9567 21.5253L42.0854 14.5047Z" fill="white"/>
                  <path d="M49.4393 4.72046L35.7821 35.3492H41.9304L55.5877 4.72046H49.4393Z" fill="white"/>
                  <path d="M162.997 14.5047L158.714 4.72046H152.589L159.868 21.5253L162.997 14.5047Z" fill="white"/>
                  <path d="M170.357 4.72046L156.7 35.3492H162.842L176.499 4.72046H170.357Z" fill="white"/>
                </svg>
              </div>

              <p className="text-gray-400 text-base leading-relaxed mt-6">
                MyMonty Business is a digital financial account designed to help companies manage their money efficiently through a secure web and mobile platform. It enables businesses to handle daily operations, control cash flow, and simplify financial transactions in one centralized wallet.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-white font-bold text-2xl">2+</p>
                <p className="text-gray-400 text-sm">Currencies</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-white font-bold text-2xl">24/7</p>
                <p className="text-gray-400 text-sm">Access</p>
              </div>
            </div>
          </div>

          {/* Right - Image + Features */}
          <div className="col-span-2 space-y-6">
            <div className="relative rounded-3xl overflow-hidden h-72">
              <img
                src='images/person-3.png'
                alt="Business professional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs mb-2">
                  Real-time Management
                </span>
                <p className="text-white font-semibold text-lg">Digital Wallet for Modern Businesses</p>
              </div>
            </div>

            <div className="bg-[#f8f9fb] rounded-3xl p-6 lg:p-8">
              <h3 className="font-serif font-bold text-[#0f1c2e] text-xl mb-5">Key Features</h3>
              <div className="space-y-4">
                {[
                  'Manage USD and LBP wallets with transaction tracking',
                  'Request, schedule, and collect QR code payments',
                  'Pay suppliers and teams via transfers and bulk payments',
                  'Deposit and withdraw through agents and ATMs',
                  'Access business prepaid and credit cards',
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-[#5a6a7e] text-sm">{feature}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#5a6a7e] text-sm leading-relaxed italic mt-6">
                Built for SMEs, startups, and growing enterprises — MyMonty Business combines flexibility, security, and compliance to support smarter financial management and sustainable growth.
              </p>
            </div>
          </div>
        </div>

        {/* MontyPay Section */}
        <div className="bg-[#f0f3f8] rounded-3xl p-8 lg:p-24 mb-12">
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-start gap-3 mb-12">  
                <img
                  src='images/mp.png'
                  alt="MontyPay"
                  className="w-[50px] h-full object-cover"
                />

                <div>
                  <svg width="182" viewBox="0 0 250 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_3066_8220)">
                      <path d="M215.955 37.1336H206.654V7.33813H215.955V37.1336Z" fill="#8B9092"/>
                      <path d="M204.367 7.58894C206.151 8.06408 207.955 8.98797 209.772 10.3606C211.596 11.7332 212.977 13.4688 213.93 15.5674C214.882 17.6659 215.351 19.7975 215.351 21.9752C215.351 24.1529 214.936 26.1789 214.104 28.0663C213.273 29.9537 212.106 31.5771 210.617 32.9299C209.128 34.2827 207.411 35.3254 205.473 36.0447C203.535 36.7706 201.503 37.1336 199.371 37.1336C197.782 37.1336 196.085 36.896 194.288 36.4209C192.484 35.9457 190.667 35.0218 188.822 33.6492C186.985 32.2766 185.583 30.5344 184.638 28.416C183.686 26.2977 183.216 24.1529 183.216 21.9818C183.216 19.8107 183.632 17.7847 184.464 15.9171C185.295 14.0496 186.462 12.4394 187.951 11.0799C189.439 9.72708 191.176 8.6844 193.154 7.96509C195.133 7.23918 197.205 6.87622 199.371 6.87622C200.92 6.87622 202.59 7.11379 204.367 7.58894ZM202.275 28.7262C203.361 28.2709 204.32 27.4328 205.152 26.2119C205.983 24.991 206.399 23.5788 206.399 21.9818C206.399 19.8437 205.695 18.0751 204.28 16.6628C202.865 15.2506 201.229 14.5445 199.371 14.5445C198.211 14.5445 197.044 14.8481 195.884 15.4618C194.724 16.0689 193.812 16.9796 193.154 18.1807C192.497 19.3817 192.169 20.6488 192.169 21.9818C192.169 23.5854 192.584 24.9976 193.416 26.2119C194.248 27.4328 195.227 28.2709 196.353 28.7262C197.48 29.1815 198.486 29.4125 199.378 29.4125C200.27 29.4125 201.202 29.1815 202.281 28.7262H202.275Z" fill="#8B9092"/>
                      <path d="M233.551 44.9206H223.733L228.327 34.4807L216.524 7.34473H226.282L233.035 23.7042L240.243 7.34473H250.001L233.544 44.9206H233.551Z" fill="#8B9092"/>
                      <path d="M182.853 8.46005C182.169 6.78385 181.184 5.33863 179.883 4.11777C178.582 2.89692 177.013 1.95983 175.168 1.31311C173.324 0.659787 171.306 0.336426 169.099 0.336426H161.253L150.081 25.8226V45.0065H159.993V27.8221H168.677C173.284 27.8221 176.966 26.5617 179.728 24.0408C182.491 21.5199 183.873 18.1675 183.873 13.9902C183.873 11.9774 183.531 10.1362 182.853 8.46005ZM172.459 18.1213C171.339 19.1442 169.837 19.6589 167.953 19.6589H159.986V8.66463H167.953C169.837 8.66463 171.339 9.17936 172.459 10.2022C173.579 11.2251 174.142 12.5252 174.142 14.1024C174.142 15.7588 173.579 17.0984 172.459 18.1213Z" fill="#8B9092"/>
                      <path d="M68.5421 9.57543C66.8053 8.2094 65.0885 7.28551 63.3919 6.81696C61.6953 6.34182 60.106 6.10425 58.6306 6.10425C56.5652 6.10425 54.5869 6.4672 52.7092 7.18652C50.8248 7.90583 49.1752 8.94191 47.7535 10.2881C46.3318 11.6344 45.2253 13.238 44.434 15.099C43.6427 16.9599 43.247 18.9727 43.247 21.1372C43.247 23.3018 43.6964 25.4333 44.6017 27.5451C45.507 29.6502 46.8348 31.3858 48.585 32.7584C50.3353 34.1245 52.0722 35.0484 53.7889 35.5169C55.5056 35.9921 57.1218 36.2296 58.6306 36.2296C60.6626 36.2296 62.6006 35.8667 64.4447 35.1474C66.2889 34.428 67.9252 33.392 69.3468 32.0457C70.7685 30.6995 71.875 29.0827 72.6663 27.2085C73.4576 25.3277 73.8533 23.3084 73.8533 21.1438C73.8533 18.9793 73.404 16.8544 72.4987 14.769C71.5933 12.6837 70.2723 10.9547 68.5421 9.58863V9.57543ZM64.143 24.9318C63.3517 26.0273 62.4329 26.7796 61.4002 27.1887C60.3675 27.5979 59.4421 27.8024 58.6306 27.8024C57.8192 27.8024 56.82 27.5979 55.7538 27.1887C54.6808 26.7796 53.7487 26.0273 52.9574 24.9318C52.166 23.8363 51.7704 22.5693 51.7704 21.1306C51.7704 19.9362 52.0856 18.7945 52.7092 17.7189C53.3396 16.6432 54.2047 15.8315 55.3112 15.2837C56.4177 14.736 57.5241 14.4654 58.6306 14.4654C60.401 14.4654 61.9635 15.099 63.3047 16.366C64.6526 17.6331 65.3232 19.2235 65.3232 21.1372C65.3232 22.5759 64.9276 23.8429 64.1363 24.9384L64.143 24.9318Z" fill="url(#paint0_linear_3066_8220)"/>
                      <path d="M100.315 11.1922C99.3562 10.1958 98.2095 9.42365 96.8817 8.87592C95.5539 8.32818 94.0987 8.05762 92.5094 8.05762C90.8128 8.05762 89.2234 8.35458 87.7481 8.95511C86.2728 9.55564 85.0188 10.4003 83.986 11.4892V8.87592H75.1274V36.223H83.986V23.5328C83.986 20.9921 84.4957 19.0849 85.5083 17.8112C86.5209 16.5376 87.9359 15.9041 89.7398 15.9041C90.7725 15.9041 91.6778 16.1944 92.449 16.7752C93.2269 17.3559 93.7567 18.062 94.0518 18.9001C94.3468 19.7382 94.4944 20.5367 94.4944 21.2956V36.223H103.293V19.4478C103.293 17.7782 103.031 16.234 102.515 14.8152C101.998 13.3964 101.261 12.1887 100.302 11.1922H100.315Z" fill="url(#paint1_linear_3066_8220)"/>
                      <path d="M146.278 0.329834L135.723 24.2982L129.131 8.33467H119.615L131.129 34.8107L126.643 44.9999H136.219L155.8 0.329834H146.278Z" fill="url(#paint2_linear_3066_8220)"/>
                      <path d="M116.813 24.4567V15.3762H122.687L119.649 8.3414H116.806V0H107.947V8.3414H102.911V15.3762H107.947V25.3278C107.947 28.8517 108.913 31.5442 110.851 33.4184C112.789 35.286 115.512 36.223 119.019 36.223C120.622 36.223 126.094 35.9459 127.703 35.4048L124.94 28.6736C124.551 28.8319 116.806 30.5807 116.806 24.4633L116.813 24.4567Z" fill="url(#paint3_linear_3066_8220)"/>
                      <path d="M41.7114 36.2297H33.0807V17.2701L22.9345 36.2297H18.8305L8.63063 17.1645V36.2297H0V0.65332H8.74463L20.8825 23.2226L33.0271 0.65332H41.7114V36.2297Z" fill="url(#paint4_linear_3066_8220)"/>
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_3066_8220" x1="43.247" y1="21.1636" x2="73.86" y2="21.1636" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#003383"/>
                        <stop offset="1" stopColor="#003399"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_3066_8220" x1="75.1341" y1="22.1403" x2="103.306" y2="22.1403" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#003383"/>
                        <stop offset="1" stopColor="#003399"/>
                      </linearGradient>
                      <linearGradient id="paint2_linear_3066_8220" x1="119.615" y1="22.6682" x2="155.8" y2="22.6682" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#003383"/>
                        <stop offset="1" stopColor="#003399"/>
                      </linearGradient>
                      <linearGradient id="paint3_linear_3066_8220" x1="102.918" y1="18.1148" x2="127.716" y2="18.1148" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#003383"/>
                        <stop offset="1" stopColor="#003399"/>
                      </linearGradient>
                      <linearGradient id="paint4_linear_3066_8220" x1="0" y1="18.4448" x2="41.7114" y2="18.4448" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#003383"/>
                        <stop offset="1" stopColor="#003399"/>
                      </linearGradient>
                      <clipPath id="clip0_3066_8220">
                        <rect width="250" height="45" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-[#5a6a7e] text-base">Beyond Payments.</p>
                </div>
              </div>

              <p className="text-[#5a6a7e] text-base leading-relaxed mb-8">
                A full-spectrum commerce and payment solutions platform designed to help businesses accept, manage, and grow their payments with confidence across Lebanon.
              </p>

              <div className="flex flex-wrap gap-3">
                {['Smart POS', 'Online Gateway', 'QR Payments'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActivePayTag(tag)}
                    className={`px-6 py-3 rounded-full text-sm font-medium border-2 transition-all duration-200 border-[#5a6a7e]/20 bg-transparent !text-[#5a6a7e] ${
                      activePayTag === tag
                        ? 'bg-[#0f1c2e] text-white border-[#0f1c2e]'
                        : 'bg-transparent text-[#0f1c2e] border-[#0f1c2e] hover:bg-[#0f1c2e]hover:text-white'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:absolute -top-36 right-0 flex justify-center">
              <div className="relative w-64 lg:w-80">
                <img
                  src='images/pos.png'
                  alt="MontyPay POS terminal"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* MontyPay Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 lg:mb-28">
          {montyPayServices.map((service, index) => (
            <div
              key={index}
              className="bg-[#f8f9fb] rounded-2xl p-6 hover:shadow-lg hover:bg-white transition-all duration-300 border border-transparent hover:border-gray-100 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2d4a9e] flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-serif font-bold text-[#0f1c2e] text-lg mb-3">{service.title}</h3>
              <p className="text-[#5a6a7e] text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Complete Ecosystem Banner */}
        <div className="bg-gradient-to-r from-[#0f1c2e] to-[#1a2d45] rounded-3xl p-8 lg:p-12 text-center">
          <h2 className="font-serif font-bold text-white text-2xl sm:text-3xl lg:text-4xl mb-4">
            A Complete Financial Ecosystem
          </h2>
          <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
            Together, MyMonty, MyMonty Business, and MontyPay form a powerful fintech ecosystem that connects people and businesses, shaping a smarter and more inclusive financial future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
