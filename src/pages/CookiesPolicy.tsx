import Navbar from '@/components/monty/Navbar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FooterSection from '@/components/monty/FooterSection';
import '../list.css';

const CookiesPolicy: React.FC = () => {
    const [contactOpen, setContactOpen] = useState(false);
    
    return (
    <div className="min-h-screen bg-white font-sans antialiased">
        <Navbar onContactClick={() => setContactOpen(true)} />
        <main>
            <div className="container bg-[#F8F6F8] p-8 md:p-12 rounded-xl flex flex-col gap-4 my-32">
                <h2 className="font-lora font-bold text-2xl">TRODUCTION</h2>
                COOKIES POLICY
                (V. 1.0 – 05 February 2024)

                <h2 className="font-lora font-bold text-2xl">1. INTRODUCTION</h2>

                We, Monty Finance SAL, may use small text files known as Cookies that are sent from our website
                www.montyfinance.com and placed on your device (computer, tablet, mobile device…) to make our website work
                properly and save information about your visits. Cookies are designed to give you a better browsing experience,
                make it easier for you to log in, and show us where you might need help with our products and services.
                <br /><br />

                There are several types of cookies depending on their lifespan and on their origin:
                <br /><br />

                Session or persistent cookies: All cookies are either session cookies or persistent cookies:
                <ul>
                    <li>Session cookies are temporary and will disappear when the session is closed. They allow our website to
                    link
                    your actions only during a session.</li>
                    <li>Persistent cookies remain on your device and are activated every time you visit the website until you
                    erase
                    them, or your session does. They can provide websites with user preferences, settings, and login information
                    for
                    future visits.</li>
                </ul>

                    First and third-party cookies: Whether a cookie is first or third-party depends on where it comes from:
                <ul>
                    <li>First-party cookies are put on your device directly by our website.</li>
                    <li>Third-party cookies or tracking cookies are created by “parties” other than our website, like a provider
                    of
                    advertising, retargeting, or analytics system (e.g. Google Analytics, StatCounter, or ShareThis).</li>
                </ul>
                <h2 className="font-lora font-bold text-2xl">2. THE REASONS WHY WE MAY USE COOKIES</h2>

                We may use cookies to recognize your browser or device, learn more about your interests, and provide you with
                essential features and services. By using cookies and other similar technologies, we:
                <ul>
                    <li>Improve global navigation for our users.</li>
                    <li>Ensure the proper functioning of our website.</li>
                    <li>Track visitors and visits.</li>
                    <li>Remember users and collect information about the visitor and the device.</li>
                </ul>
                We may use the information we obtain from your use of our cookies for the following purposes:
                <ul>
                    <li>To recognize your computer when you visit the website and protect you from fraud and keep improving
                    security.</li>
                    <li>To remember your preferences and choices and establish anonymized statistics about the browsing experience
                    on
                    our website.</li>
                    <li>To store your custom settings and decide which of our products, services and offers may be relevant for
                    you.</li>
                    <li>To customize your browsing experience and to deliver targeted ads.</li>
                    <li>To study how you use our website and our other services, so we can improve them.</li>
                </ul>
                <h2 className="font-lora font-bold text-2xl">3. TYPES OF COOKIES WE MAY USE</h2>

                We may place certain cookies on our website; others may be placed by third parties.
                <br /><br />

                If you give us your consent by accepting all cookies used on our website when they are placed, we may allow
                third parties to collect data by setting their own cookies on your device. Third party cookies are also likely
                to collect data outside our website.
                <br /><br />

                The cookies that may be used on our website include those which are strictly necessary cookies for access and
                navigation, cookies that track usage, remember your choices and cookies that provide you with targeted content
                or advertising.
                <br /><br />

                We may use three main types of cookies:
                <br /><br />

                Functional Cookies
                <ul>
                    <li>These cookies are necessary for you to browse the website and use the services and main features. For
                    example,
                    a cookie that remembers the country or language you have selected. They are essential for our website to
                    function technically and cannot be switched off in our systems.</li>
                    <li>They do not store any personally identifiable information and the information collected is not used for
                    marketing purposes.</li>
                    <li>Their installation does not require the user’s permission or consent.</li>
                </ul>
                Performance/Analytical cookies
                <ul>
                    <li>These cookies allow us to count visits and traffic sources.</li>
                    <li>They help us know how you use the website, notably time spent on each page and the number of visits per
                    page,
                    error messages shown and clicks in certain areas of the website so we can measure and improve the
                    performance of
                    the website.</li>
                    <li>If you do not allow these cookies, we will be less able to optimize our website performance.</li>
                    <li>All information these cookies collect is aggregated, anonymous and cannot be used for marketing purposes.</li>
                </ul>
                Marketing cookies
                <ul>
                    <li>Measurement Cookies:</li>
                    <ul>
                        <li>These cookies are used for limited website statistics and audience measurement. They enable us to
                        track the
                        effectiveness of our marketing campaigns.</li>
                        <li>With these cookies we count and analyze the number of leads and clicks associated with our marketing
                        investments.</li>
                    </ul>

                    <li>Targeting Cookies:</li>
                    <ul>
                        <li>These cookies are set through our website by us or by third parties to build a profile of your
                        interests. They
                        help us show you relevant content or adverts on our website that consider your preferences.</li>
                        <li>If the device is shared by several people, the person receiving the emails or viewing the
                        promotional content
                        may not be the person who conducted the search. They do not store directly personal information but
                        are based on
                        uniquely identifying your browser and internet device.</li>
                        <li>If you do not allow these cookies, you may experience less personalized content and/or
                        advertising.</li>
                    </ul>
                </ul>

                <h2 className="font-lora font-bold text-2xl">4. WHAT COOKIES ARE USED ON OUR WEBSITE</h2>

                Currently, no cookies are placed on our website, neither by us nor by third parties.

                <h2 className="font-lora font-bold text-2xl">5. COOKIES MANAGEMENT AND OPTING OUT</h2>

                When you visit our website, and once we have placed cookies on it, you will be invited to accept,
                reject, or
                customize the use of cookies.
                <br /><br />

                By clicking “Reject All”, you will be disabling the use of analytical and marketing cookies.
                <br /><br />

                Functional cookies cannot be disabled.
                <br /><br />

                If you disable analytical and marketing cookies, you will still be able to visit and navigate our
                website but
                some of the functions may not work correctly and we cannot save your settings.
                <br /><br />

                By clicking on the “Accept All” button in the cookie banner, you will be consenting to the placing of
                cookies on
                your device.
                <br /><br />

                You will be able to revoke your consent and delete installed cookies at any time. To do so, you may
                either turn
                off cookies in your browser's ‘Internet options’ which allows you to refuse the setting of cookies,
                block new
                cookies or receive notification of new cookies. To assist you in this process, we have provided links to
                the
                “Help” section of some of the most popular web browsers:
                <ul>
                    <li>Internet Explorer: http://windows.microsoft.com/fr-FR/windows-vista/Block-or-allow-cookies.</li>
                    <li>Safari: http://support.apple.com/kb/PH5042.</li>
                    <li>Chrome: http://support.google.com/chrome/bin/answer.py?hl=fr&hlrm=en&answer=95647.</li>
                    <li>Firefox: http://support.mozilla.org/fr/kb/Activer%20et%20d%C3%A9sactiver%20les%20cookie.</li>
                    <li>Opera: http://help.opera.com/Windows/10.20/fr/cookies.html.</li>
                </ul>
                You may also visit www.allaboutcookies.org and www.youronlinechoices.eu for details on how you can set
                your
                cookie preferences and how cookies or target marketing work.
                <br /><br />

                To opt out of being tracked by Google Analytics across all websites visit
                http://tools.google.com/dlpage/gaoptout.

                <h2 className="font-lora font-bold text-2xl">6. YOUR PERSONAL DATA PROTECTION</h2>

                We apply a high level of personal data protection and process it in accordance with the applicable law
                and our
                Data Protection Policy.
                <br /><br />

                We therefore never attach any information to your cookies that can be used to identify you personally.
                Cookies
                can never be used to retrieve your address, date of birth, phone number or any other information that
                may be
                used to identify you. You and your IP address are anonymized for us, and we can never link the data
                collected to
                you.
                <br /><br />

                We do not provide any personal information to third parties that display our advertisements tailored to
                your
                interests. Only anonymized data is collected and transmitted; thus, third parties cannot identify you
                personally.
                <br /><br />

                To find out more, please visit our Data Protection Policy.

                <h2 className="font-lora font-bold text-2xl">7. UPDATE TO THIS POLICY AND CONTACT DETAILS</h2>

                This Policy may change from time to time. If cookies are placed of new types of cookies are included
                which use
                requires informed consent, we will inform you and record your due consent.
                <br /><br />

                Without prejudice to the above, we recommend that you check this Policy each time you access our
                website, so
                that you are properly informed about how and why we use cookies and are aware of any changes in the type
                of data
                collected.
                <br /><br />

                If you have any queries concerning your personal data protection rights and our Cookies Policy, you can
                contact
                our Data Protection Officer (DPO) at dpo@montyfinance.com.
            </div>
        </main>
        <FooterSection />
    </div>
    );
};
export default CookiesPolicy;
