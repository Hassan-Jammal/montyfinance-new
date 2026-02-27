import Navbar from '@/components/monty/Navbar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FooterSection from '@/components/monty/FooterSection';
import '../list.css';

const TermsAndConditions: React.FC = () => {
    const [contactOpen, setContactOpen] = useState(false);
    
    return (
    <div className="min-h-screen bg-white font-sans antialiased">
        <Navbar onContactClick={() => setContactOpen(true)} />
        <main>
            <div className="container bg-[#F8F6F8] p-8 md:p-12 rounded-xl flex flex-col gap-4 my-32">
                PLEASE READ THESE WEBSITE TERMS AND CONDITIONS TOGETHER WITH OUR PRIVACY POLICY AND COOKIES POLICY CAREFULLY
                BEFORE ACCESSING, USING OR OBTAINING ANY MATERIALS, INFORMATION OR SERVICES FROM OUR WEBSITE.
                <br /><br />

                WEBSITE TERMS AND CONDITIONS
                (Version 1.0 – 05 February 2024)

                <h2 className="font-lora font-bold text-2xl">1. INFORMATION ABOUT US</h2>

                This Website www.montyfinance.com (“Website”) is operated by Monty Finance SAL (“We”, “Us” or “Our”), a company
                registered in Lebanon (Beirut CR No. 73215), whose address is at Gefinor Center, Clemenceau St., Hamra, Beirut,
                Lebanon and is authorized by the Central Bank of Lebanon to operate as a financial institution and e-wallet
                service provider (List of financial institutions No. 23).
                <br /><br />

                To contact Us, in particular if You have any questions about these Website terms and conditions (“T&Cs”), please
                go to the 'Contact Us' section in this Website.

                <h2 className="font-lora font-bold text-2xl">2. SCOPE</h2>

                These T&Cs together with Our Data Protection Policy and Cookies Policy (together, “Policies”) govern the use of
                Our Website (and any section thereof) and the agreement that operates between You, the individual accessing or
                Using Our Website, or the company, or other legal entity on behalf of which such individual is accessing or
                Using Our Website, as applicable (“You” or “Your”) and Us, with respect to the access and use of Our Website.
                <br /><br />

                Any products or services mentioned on Our Website are subject to, and governed by, their own separate terms and
                conditions and contracts and Your eligibility for such products and services is subject to final determination
                and acceptance by Us. These T&Cs do not override any such products and services terms and conditions and
                contracts.
                <br /><br />

                Our website is not intended for use by any person in any country where its access, distribution or use would be
                contrary to local law or regulation. Likewise, none of the products or services referred to in Our Website are
                available to persons resident in such countries and should not be construed as an offer of products or services
                or an invitation directed to such persons or to persons in any sanctions list. It is Your responsibility to
                avail Yourself of such restrictions and comply with them.
                <br /><br />

                Our website is made available to You for Your own personal use (unless otherwise expressly indicated).

                <h2 className="font-lora font-bold text-2xl">3. AGREEMENT TO T&Cs</h2>

                By accessing and using Our Website, you agree to be bound by these T&Cs and the Policies. If You disagree, then
                You may not access or Use Our Website.
                <br /><br />

                You are also responsible for ensuring that all persons who access Our Website through Your internet connection
                are aware of these T&Cs and the Policies, and that they comply with them.
                <br /><br />

                By using this Website, you represent that You are at least the age of majority in Your country, state, or
                province of residence, or that You are the age of majority in Your country, state or province of residence and
                You have given Us Your consent to allow any of Your minor dependents to use this Website.

                <h2 className="font-lora font-bold text-2xl">4. CHANGES TO THESE T&Cs</h2>

                We reserve the right, at Our sole discretion, to modify or replace these T&Cs at any time. If a revision is
                major, we will try to give You reasonable notice prior to any new T&Cs taking effect. What constitutes a major
                change will be determined at Our sole discretion.
                <br /><br />

                By continuing to access and use Our Website after those revisions become effective, you agree to be bound by the
                revised T&Cs. If You do not agree to the new T&Cs, in whole or in part, please stop using Our Website.

                <h2 className="font-lora font-bold text-2xl">5. CHANGES TO OUR WEBSITE</h2>

                We reserve the right, at Our sole discretion, to modify, update or change the content of Our Website at any time
                to reflect changes to Our products, services, users’ needs or business priorities. We will try to give You
                reasonable notice of any major changes.
                <br /><br />

                We may also suspend, withdraw, or restrict access to all or any part of Our Website for business and operational
                reasons. We will try to give You reasonable notice of any suspension or withdrawal.

                <h2 className="font-lora font-bold text-2xl">6. COPYRIGHT</h2>

                All contents on Our Website are protected by copyright. Except as specifically permitted herein, no portion of
                the information on Our Website may be reproduced in any form, or by any means, without prior written permission
                from Us. Visitors or users are not permitted to modify, distribute, publish, transmit or create derivative works
                of any material found on Our Website for any public or commercial purposes.

                <h2 className="font-lora font-bold text-2xl">7. TRADEMARKS</h2>

                The trademarks, logos, and service marks ("Marks") displayed on Our Website are Our property or other third
                parties. You are not permitted to Use these Marks without Our prior written consent or the third party that may
                own the Marks.

                <h2 className="font-lora font-bold text-2xl">8. SUBMISSIONS</h2>

                All information and feedback submitted via this Website (other than personal information) shall be deemed and
                remain Our property, which we shall be free to use, for any purpose, any ideas, concepts, know-how or techniques
                contained in information which a visitor to this Website provides through this Website. We are not subject to
                any obligations of confidentiality regarding submitted information except as agreed by us or as otherwise
                specifically agreed or required by law.

                <h2 className="font-lora font-bold text-2xl">9. DISCLOSURE; FORWARD-LOOKING STATEMENTS</h2>

                Some of the information on Our Website may contain projections or other forward-looking statements regarding
                future events or the future financial performance of Our company. We wish to caution You that these statements
                are only predictions, and those actual events or results may differ materially.

                <h2 className="font-lora font-bold text-2xl">10. THIRD PARTY SERVICES OR PRODUCTS ON OUR WEBSITE</h2>

                Our website may contain products and services of third parties and information related thereto. We are not
                responsible for such third-party products and services and related information. The availability of such
                products and services on or through Our Website does not constitute neither an endorsement nor a recommendation.
                Information related to any such products or services on Our Website is for information purposes only and
                constitutes neither an endorsement nor a recommendation. The use or purchase of such third-party products and
                services on or through Our Website or services is at your own risk.

                <h2 className="font-lora font-bold text-2xl">11. LINKS TO THIRD PARTY SITES</h2>

                Our website may contain certain internet addresses, links and or hyperlinks to non-affiliated sites that are not
                operated or monitored by Us. They are provided solely for your convenience. In addition, sites operated by other
                parties may link to Our Website. We are not responsible for the content of any third-party sites. You should
                read the terms of use and privacy policies which are applicable to such third-party sites.
                <br /><br />

                Use of hyperlinks to or from other such internet resources is at your own risk; the content, accuracy, opinions
                expressed, and other links provided by these resources are not investigated, verified, monitored, or endorsed by
                us.

                <h2 className="font-lora font-bold text-2xl">12. NO OFFER OR ADVICE</h2>

                None of the information on Our Website is intended to be nor should it be understood as an offer to enter into a
                contractual relationship with You including but not limited to an offer to buy or sell any financial products or
                services.
                <br /><br />

                None of the information on Our Website amounts to financial advice or a personal recommendation relating to any
                financial products or services.

                <h2 className="font-lora font-bold text-2xl">13. DATA PROTECTION</h2>

                Use by Us of any personal data which You submit via Our Website is described on and subject to our Data
                Protection Policy.

                <h2 className="font-lora font-bold text-2xl">14. COOKIES</h2>

                Our Cookies Policy describes how We use cookies. When you first visit Our Website, you will be presented with a
                banner in which You can indicate Your consent or acceptance or selection of certain categories of cookies or
                continue with Our recommended cookies.

                <h2 className="font-lora font-bold text-2xl">15. DISCLAIMER AND LIMITATION OF LIABILITY</h2>

                THIS WEBSITE (INCLUDING ALL CONTENT, INFORMATION, FUNCTIONALITY, AND MATERIALS), ARE OFFERED BY US ON AN "AS
                IS," “AS AVAILABLE,” "WHERE IS," AND "WHERE AVAILABLE" BASIS. WE DO NOT WARRANT THE ACCURACY, ADEQUACY OR
                COMPLETENESS OF ANY CONTENT, INFORMATION, FUNCTIONALITY AND MATERIALS AND WE EXPRESSLY DISCLAIM LIABILITY FOR
                ERRORS OR OMISSIONS. WE DO NOT GIVE ANY WARRANTY OF ANY KIND—WHETHER EXPRESS, IMPLIED, OR STATUTORY—INCLUDING,
                BUT NOT LIMITED TO, WARRANTIES OF TITLE OR THE IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR
                PURPOSE OR NONINFRINGEMENT OR FREEDOM FROM COMPUTER VIRUS. THIS DOES NOT AFFECT THOSE WARRANTIES WHICH ARE
                INCAPABLE OF EXCLUSION, RESTRICTION, OR MODIFICATION UNDER THE LAWS APPLICABLE TO THESE T&Cs.
                YOU ACKNOWLEDGE THAT NEITHER WE, NOR ANY OF OUR EMPLOYEES, AGENTS, THIRD PARTY PROVIDERS, OR LICENSORS WARRANT
                THAT THIS WEBSITE WILL BE UNINTERRUPTED OR ERROR FREE; NOR DO WE MAKE ANY WARRANTY AS TO THE RESULTS THAT MAY BE
                OBTAINED FROM THE USE OF OUR WEBSITE, OR AS TO THE TIMELINESS, SEQUENCE, ACCURACY, RELIABILITY, COMPLETENESS, OR
                CONTENT OF ANY INFORMATION, SERVICE, OR PRODUCT PROVIDED THROUGH THE WEBSITE.
                <br /><br />

                TO THE MAXIMUM EXTENT PERMISSIBLE UNDER APPLICABLE LAW, IN NO EVENT SHALL WE BE RESPONSIBLE FOR ANY LOSS OF ANY
                KIND, INCLUDING LOSS ASSOCIATED WITH ANY COMPUTER VIRUSES WHICH MAY INFECT YOUR COMPUTER SYSTEM OR MOBILE
                DEVICE, PROPERTY DAMAGE, AND BODILY INJURY, WHETHER CAUSED BY ACCESS TO OR USE OF OUR WEBSITE. TO THE MAXIMUM
                EXTENT PERMISSIBLE UNDER APPLICABLE LAW, IN NO EVENT SHALL WE BE RESPONSIBLE TO YOU OR ANY THIRD PARTY CLAIMING
                THROUGH YOU FOR ANY DIRECT, INDIRECT, SPECIAL, CONSEQUENTIAL, INCIDENTAL, PUNITIVE, EXEMPLARY, LOST PROFITS,
                ECONOMIC, OR OTHER DAMAGES ARISING IN ANY WAY OUT OF THE ACCESS OR USE (OR INABILITY TO ACCESS OR USE) OUR
                WEBSITE, REGARDLESS OF THE FORM OF ACTION, WHETHER IN CONTRACT, WARRANTY, TORT (INCLUDING NEGLIGENCE), STRICT
                LIABILITY, OR OTHERWISE.

                <h2 className="font-lora font-bold text-2xl">16. INDEMNITY</h2>

                If You breach these T&Cs, you will be held fully responsible for any loss suffered by Us as a result of such
                breach and will be held accountable for all profits made from breaching these terms.
                <br /><br />

                You agree to indemnify Us and undertake to keep Us indemnified against any losses, damages, costs, liabilities,
                and expenses (including without limitation legal expenses and any amounts paid by Us to a third party in
                settlement of a claim or dispute on the advice of Our legal advisers) incurred or suffered by Us arising out of
                any breach by You of any provision of these T&Cs.

                <h2 className="font-lora font-bold text-2xl">17. NO WAIVER</h2>

                No failure or delay by Us to exercise any right or remedy provided in these T&Cs or by law shall constitute a
                waiver by Us of that or any other right or remedy, nor shall it prevent or restrict the further exercise by Us
                of that or any other right or remedy.

                <h2 className="font-lora font-bold text-2xl">18. SEVERANCE</h2>

                If any provision of these T&Cs shall be found by any court to be invalid or unenforceable, such invalidity or
                unenforceability shall not affect the other provisions of these T&Cs which shall remain in full force and
                effect.

                <h2 className="font-lora font-bold text-2xl">19. EXCLUSION OF THIRD-PARTY RIGHTS</h2>

                These T&Cs are for the benefit of You and Us and are not intended to benefit any third party or be enforceable
                by any third party. The exercise of Our and Your rights in relation to these T&Cs is not subject to the consent
                of any third party.

                <h2 className="font-lora font-bold text-2xl">20. ENTIRE AGREEMENT</h2>

                These T&Cs constitute the entire agreement between You and Us in relation to Your access and use of Our Website
                and supersede all previous agreements in respect of Your access and use of Our Website.

                <h2 className="font-lora font-bold text-2xl">21. GOVERNING LAW AND JURISDICTION</h2>

                Your access and use of Our Website and these T&Cs shall be governed by and construed in accordance with the laws
                of the Lebanese Republic. Any dispute, claim or matter arising out of, or relating to, your access and use of
                Our Website and these T&Cs shall be subject to the exclusive jurisdiction of the courts of Beirut, Lebanon.
            </div>
        </main>
        <FooterSection />
    </div>
    );
};

export default TermsAndConditions;
