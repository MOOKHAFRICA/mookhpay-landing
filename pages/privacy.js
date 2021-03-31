import styled from "styled-components";
import Head from "next/head";

import Header from "./../components/header";
import Footer from "./../components/footer";
import Container from "./../components/container";

import { useWindowSize } from "./../utils/hooks";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  font-family: "Open Sans", sans-serif;

  .react-tabs {
    width: 100%;
  }
  h3 {
    padding-bottom: 4px;
    color: #989c9f;
    font-size: 14px;
    font-weight: 600;
  }

  ul {
    display: flex;
    justify-content: center;
    margin-top: 28px;
    cursor: pointer;
  }
  .terms-heading {
    text-align: center;
    margin-top: 28px;
  }
  .terms-body {
  }
  hr {
    border: 0.5px solid #989c9f;
    margin: 40px 0;
  }
  .terms-body p {
    padding-bottom: 10px;
  }
`;

export default function Privacy() {
  const { width } = useWindowSize();
  return (
    <>
      <Head>
        <title>Privacy | mookh.pay</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="overflow-x-hidden">
        <main className="w-screen h-screen">
          <div className="relative bg-black  ">
            <Header />
          </div>
          <Wrapper>
            <div className="terms-heading">
              <h2 className="font-extrabold">MOOKHPAY PRIVACY POLICY</h2>
              <h5 className="font-semibold">Last Updated 22nd March 2021</h5>
            </div>
            <Container
              style={
                width <= 539 ? { padding: "0 21px" } : { padding: "0 14px" }
              }
            >
              <div className="terms-body">
                <h4 style={{ marginTop: 28 }} className="font-bold">
                  OVERVIEW
                </h4>
                <p>
                  This Privacy Policy applies to the MOOKH AFRICA owned and
                  operated website ("us", "we", or "our") www.mookhpay.com (the
                  "Site") knows that you care how information about you is used
                  and shared. This Privacy Policy explains the collection, use,
                  disclosure of Personal information and how you can control the
                  collection, correction and/or deletion of information we
                  receive from users of the site. We will not use or share your
                  information with anyone except as described in this Privacy
                  Policy.
                </p>
                <p>
                  The use of information collected through the Site shall be
                  limited to the purposes under this Privacy Policy and our
                  Terms of Service to customers.
                </p>
                <p>
                  MOOKHPAY merchants gain access to your information
                  specifically, name, email address and phone number. As
                  MOOKHPAY we do not control how these merchants use your
                  information beyond what is instructed in our terms and
                  conditions.
                </p>
                <p>
                  In our terms and conditions, merchants are not allowed to
                  redistribute your information to any third party that you did
                  not directly give your information to. We also use your
                  Personal Information for providing and improving the Site. By
                  using the Site, you agree to the collection and use of
                  information in accordance with this policy.
                </p>
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">
                  1. INFORMATION COLLECTION AND USE
                </h4>
                <p>
                  While using the Site, we may ask you to provide us with
                  certain personally identifiable information that can be used
                  to contact or identify you.
                </p>
                <p>
                  Personally identifiable information may include, but is not
                  limited to your name ("Personal Information"), phone number
                  and email address.
                </p>
                <p>
                  If you choose to purchase a product, ticket or digital content
                  from us, we or our third-party payment processors will collect
                  your payment information. When you use the Site, we may
                  receive certain information about you, we do not send any
                  promotional emails; however, we may send you service related
                  emails related to your account or purchase. If you no longer
                  wish to receive these emails, you may opt out of them.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">HOW WE USE YOUR INFORMATION.</h4>
                <p>
                  (a) We use the information that we collect to operate and
                  maintain the Site and the MOOKHPAY Service and to respond to
                  your questions and concerns
                </p>
                <p>
                  (b) We also use the information that we collect to help
                  improve the Site and service.
                </p>
                <p>
                  We may require you to provide additional information as a
                  condition of continued use of MOOKHPAY, or to assist in
                  determining whether to permit you to continue to use MOOKHPAY.
                  We, in our sole and absolute discretion, may refuse to approve
                  or may terminate existing registrations with or without cause
                  or notice, other than any notice required by any applicable
                  law, and not waived herein. By agreeing to this Terms of
                  Service for Merchants, you represent that you are: 18 years
                  old or older; and Capable of entering into a legally binding
                  agreement.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">WHEN WE SHARE INFORMATION</h4>
                <p>
                  MOOKHPAY will disclose your information where required to do
                  so by law, if subject to legal proceeding or if we reasonably
                  believe that such action is necessary to (a) comply with the
                  law and the reasonable requests of law enforcement; (b) to
                  enforce our Terms of Service or to protect the security or
                  integrity of our Service; and/or (c) to exercise or protect
                  the rights, property, or safety of MOOKHPAY, our users or
                  others.
                </p>
                <p>
                  You will be notified via email and/or a prominent notice on
                  the Site of any change in ownership or uses of your personal
                  information, as well as any choices you may have regarding
                  your personal information.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">2. LOG DATA</h4>
                <p>
                  Like many site operators, we collect information that your
                  browser sends whenever you visit our Site ("Log Data").
                </p>
                <p>
                  This Log Data may include information such as your computer's
                  Internet Protocol ("IP") address, browser type, browser
                  version, the pages of our Site that you visit, the time and
                  date of your visit, the time spent on those pages and other
                  statistics.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">3. COOKIES</h4>
                <p>
                  Cookies are files with small amount of data, which may include
                  an anonymous unique identifier.
                </p>
                <p>
                  Cookies are sent to your browser from a web site and stored on
                  your computer's hard drive. Like many sites, we use "cookies"
                  to collect information.
                </p>
                <p>
                  You can instruct your browser to refuse all cookies or to
                  indicate when a cookie is being sent. However, if you do not
                  accept cookies, you may not be able to use some portions of
                  the Site.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">4. SECURITY</h4>
                <p>
                  The security of your Personal Information is important to us
                  but remember that no method of transmission over the Internet,
                  or method of electronic storage, is 100% secure. While we
                  purpose to use various security standards and other measures
                  to protect your Personal Information, we cannot guarantee its
                  absolute security.
                </p>

                <p>
                  MOOKHPAY is concerned with protecting your privacy and data,
                  but we cannot ensure or warrant the security of any
                  information you transmit to MOOKHPAY or guarantee that your
                  information on the MOOKHPAY platform may not be accessed,
                  disclosed, altered or destroyed by breach of any of our
                  security measures. When you enter personal information on our
                  site, we encrypt that information using ciphers, Bycrypt and
                  RSA algorithm
                </p>
                <p>
                  Should personal information become compromised as a breach of
                  security, MOOKHPAY will without undue delay inform our
                  merchants and customers in line with existing national and
                  international law.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">Your Information.</h4>
                <p>
                  You have the right to request that we rectify or delete the
                  personal data or restrict the processing of your personal
                  data, if you think they are not up to date or correct.
                </p>
                <p>
                  Furthermore, you have the right to object against the
                  processing based on our legitimate interests as a legal basis.
                  We are required to assess and act on your request.
                  Additionally, you also have the right to data portability if
                  it should become relevant.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">Retention</h4>
                <p>
                  (a) If you have an account with MOOKHPAY, we will retain your
                  information for as long as your account is active or as needed
                  to provide you services. We will retain and use your
                  information as necessary to comply with our legal obligations,
                  resolve disputes and enforce our agreements.
                </p>
                <p>
                  (b) If you are a visitor to the MOOKHPAY Site we will retain
                  your information for as long as necessary but no longer than
                  one (1) year after your last visit to our Site.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">Children’s Privacy</h4>
                Protecting the privacy of young children is especially
                important. For that reason, MOOKHPAY does not knowingly collect
                or solicit personal information from anyone under the age of 13.
                Should we learn that we have collected personal information from
                a child under age 13, we will delete that information as quickly
                as possible. If you believe that we might have any information
                from or about a child under 13, please contact us at{" "}
                <a
                  style={{
                    color: "#31383e",
                    textDecoration: "underline",
                    fontWeight: "bold",
                  }}
                  href="mailto:info@mookhpay.com"
                >
                  info@mookhpay.com
                </a>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">Links to Other Web Sites.</h4>
                <p>
                  We are not responsible for the practices employed by websites
                  or services linked to or from the MOOKHPAY Service or Site,
                  including the information or content contained therein. Please
                  remember that when you use a link to go from the MOOKHPAY
                  Service or Sites to another website or service, our Privacy
                  Policy does not apply to third-party websites or services.
                  Your browsing and interaction on any third-party website or
                  service, including those that have a link or advertisement on
                  our website, are subject to that third party’s own rules and
                  policies.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">Social Media Widgets</h4>
                <p>
                  Our Site includes social media features, such as the Facebook
                  Like button and other widgets, that run on our Site. These
                  features may collect your IP address and which page you are
                  visiting on our Site and may set a cookie to enable the
                  feature to function properly. Social media features and
                  widgets are either hosted by a third party or hosted directly
                  on our Site. Your interactions with these features are
                  governed by the privacy policy of the organization providing
                  it.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">
                  5. CHANGES TO THIS PRIVACY POLICY
                </h4>
                <p>
                  MOOKHPAY may update this Privacy Policy from time to time. We
                  will notify you of any changes by posting the new Privacy
                  Policy on the Site. You are advised to review this Privacy
                  Policy periodically for any changes.
                </p>
                <p>
                  All changes to this Privacy Policy are effective when they are
                  posted on this page. When we change the policy in a material
                  manner, we will let you know via email and/or a prominent
                  notice on our Site, prior to the change becoming effective and
                  update the ‘effective date’ at the top of this page.
                </p>
                <p>
                  Contact Us If you have any questions about this Privacy
                  Policy, please contact us at{" "}
                  <a
                    style={{
                      color: "#31383e",
                      textDecoration: "underline",
                      fontWeight: "bold",
                    }}
                    href="mailto:info@mookhpay.com"
                  >
                    info@mookhpay.com
                  </a>
                </p>
                <hr
                  style={{
                    visibility: "hidden",
                    marginBottom: 20,
                    marginTop: 0,
                  }}
                />
              </div>
            </Container>
          </Wrapper>
        </main>
      </div>
      <hr />
      <footer className=" w-full  mx-auto container ">
        <Footer />
      </footer>
    </>
  );
}
