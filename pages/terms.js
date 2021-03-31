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
  color: #31383e;
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
export default function Terms() {
  const { width } = useWindowSize();
  return (
    <>
      <Head>
        <title>Terms | mookh.pay</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="overflow-x-hidden">
        <main className="w-screen">
          <div className="relative bg-black  ">
            <Header />
          </div>
          <Wrapper>
            <div className="terms-heading">
              <h2 className="font-extrabold">TERMS OF SERVICE</h2>
              <h5 className="font-semibold">Last updated: 22nd March 2021</h5>
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
                  This website is operated by MOOKH AFRICA LTD. Throughout the
                  site, the terms “we”, “us” and “our” refer to MOOKHPAY.
                </p>
                <p>
                  MOOKHPAY offers this website, including all information, tools
                  and services available from this site to you, the user,
                  conditioned upon your acceptance of all terms, conditions,
                  policies and notices stated here.
                </p>
                <p>
                  By visiting our site and/ or purchasing something from us, you
                  engage in our “Service” and agree to be bound by the following
                  terms and conditions (“Terms of Service”, “Terms”), including
                  those additional terms and conditions and policies referenced
                  herein and/or available by hyperlink. These Terms of Service
                  apply to all users of the site, including without limitation
                  users who are browsers, vendors, customers, merchants, and/ or
                  contributors of content.
                </p>
                <p>
                  Please read these Terms of Service carefully before accessing
                  or using our website. By accessing or using any part of the
                  site, you agree to be bound by these Terms of Service. If you
                  do not agree to all the terms and conditions of this
                  agreement, then you may not access the website or use any
                  services. If these Terms of Service are considered an offer,
                  acceptance is expressly limited to these Terms of Service.
                </p>
                <p>
                  Any new features or tools which are added to the current store
                  shall also be subject to the Terms of Service. You can review
                  the most current version of the Terms of Service at any time
                  on this page. We reserve the right to update, change or
                  replace any part of these Terms of Service by posting updates
                  and/or changes to our website. You are advised to check the
                  Terms of Service from time to time for any updates or changes
                  that may impact you.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-bold">1. DEFINTION OF TERMS</h4>
                <p>
                  The following defined terms appear in this Terms of Service:
                </p>
                <h5 className="font-semibold">a). “You” or Merchant</h5>
                <p>
                  An individual, organization or company that applies to, or
                  registers to use, or uses the MOOKHPAY platform to sell and
                  have payments processed by MOOKHPAY for their customers.
                </p>
                <h5 className="font-semibold">b). Customer or Buyer</h5>
                <p>A person that makes purchases using MOOKHPAY.</p>
                <h5 className="font-semibold">c). MOOKHPAY</h5>
                <p>
                  The payment platform that allows merchants to collect payments
                  from their customers using the available payment options.
                </p>
                <h5 className="font-semibold">d). Payment Transaction</h5>
                <p>
                  The processing of a payment through MOOKHPAY that results in
                  the debiting or charging of the Purchase Amount to a customer
                  and the subsequent crediting of funds to a merchant less the
                  transaction fees.
                </p>
                <h5 className="font-semibold">e). Transaction Fees</h5>
                <p>
                  The levy charged to the merchant for any payment run through
                  the MOOKHPAY platform.
                </p>
                <h5 className="font-semibold">f). Product</h5>
                <p>
                  Any merchandise, good or service that is listed for sale by a
                  merchant that a customer may pay for using MOOKHPAY.
                </p>
                <h5 className="font-semibold">g). Purchase Amount</h5>
                <p>
                  The amount of a Payment Transaction to pay for a Product, and
                  any related fees, taxes or shipping charges, as applicable.
                </p>
                <h5 className="font-semibold">h). “We” or "Us"</h5>
                <p>Relates to MOOKHPAY.</p>
                <h5 className="font-semibold">i). MOOKHPAY Page</h5>
                <p>
                  Merchant website with installed MOOKHPAY payment processing.
                </p>
                <h5 className="font-semibold">j). MOOKHPAY Accoun</h5>
                <p>
                  Merchants virtual payment account on MOOKHPAY through which
                  they are able to view payments collected.
                </p>
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">
                  2. REQUIREMENTS FOR REGISTRATION
                </h4>
                <p>
                  In order to use MOOKHPAY, you hereby consent to provide and
                  agree to complete all required KYC’s and information elements
                  on MOOKHPAY registration web pages. You must register a valid
                  bank account and M-PESA enabled number to receive settlements
                  from MOOKHPAY. You undertake and agree to provide current,
                  complete and accurate information and maintain it as current
                  and accurate. We may require you to provide additional
                  information as a condition of continued use of MOOKHPAY, or to
                  assist in determining whether to permit you to continue to use
                  MOOKHPAY. We, in our sole and absolute discretion, may refuse
                  to approve or may terminate existing registrations with or
                  without cause or notice, other than any notice required by any
                  applicable law, and not waived herein.
                </p>
                <p>
                  By agreeing to this Terms of Service for Merchants, you
                  represent that you are:
                </p>
                <p> - 18 years old or older;</p>
                <p>
                  {" "}
                  - and Capable of entering into a legally binding agreement.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">3. PAYMENT PROCESSING</h4>
                <p>
                  MOOKHPAY allows merchants to process payment transactions
                  through multiple payment options.
                </p>
                <p>
                  MOOKHPAY will store information from Customers, such as their
                  Payment Instruments, and will process Payment Transactions on
                  behalf of Merchants.
                </p>
                <p>
                  We may delay payment processing of suspicious transactions or
                  transactions which may involve fraud, misconduct, or violate
                  applicable law, this Terms of Service for Merchants, or other
                  applicable MOOKHPAY policies, as determined in MOOKHPAY’s sole
                  and absolute discretion.
                </p>
                <p>
                  Merchant authorizes MOOKHPAY to charge or debit to Merchants
                  MOOKHPAY account the necessary charge necessary to complete
                  processing of a Payment Transaction by a Customer. Merchant
                  also authorizes the crediting to Merchants MOOKHPAY account in
                  connection with reversals, refunds, or adjustments through
                  MOOKHPAY.
                </p>

                <p>
                  You acknowledge and agree that your transactions are between
                  you and the Customer, and not with MOOKHPAY.
                </p>
                <p>
                  MOOKHPAY is not a party to Merchants purchase of Products, and
                  MOOKHPAY is not a Merchant or a Customer in connection with
                  any Payment Transaction, unless expressly designated as such
                  in the listing of the Product on a MOOKHPAY Web Site
                  www.MOOKHPAY.com.
                </p>
                <p>
                  You agree to protect MOOKHPAY from any fraudulent activity and
                  ensure Customer security.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">
                  4. LIMITATION ON THE USE OF SERVICE
                </h4>
                <p>
                  We reserve the right to change, suspend or discontinue any
                  aspect of MOOKHPAY at any time, including hours of operation
                  or availability of MOOKHPAY or any MOOKHPAY feature, without
                  notice and without liability. We also reserve the right to
                  impose limits on certain MOOKHPAY features or restrict access
                  to parts or all of MOOKHPAY without notice and without
                  liability.
                </p>
                <p>
                  We do not warrant that the functions contained in MOOKHPAY
                  will be uninterrupted or error free, and we shall not be
                  responsible for any service interruptions (including, but not
                  limited to, power outages, system failures or other
                  interruptions that may affect the receipt, processing,
                  acceptance, completion or settlement of Payment Transactions
                  or MOOKHPAY).
                </p>
                <p>
                  We may limit or suspend your use of MOOKHPAY at any time, in
                  our sole and absolute discretion. If we suspend your use of
                  MOOKHPAY, we will attempt to notify you by your registered
                  electronic mail in your MOOKHPAY account.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">
                  5. MOOKHPAY ACCOUNT INFORMATION
                </h4>
                <ol style={{ listStyleType: "lower-roman" }}>
                  <i>
                    <li>
                      Maintaining the confidentiality of your MOOKHPAY Account.
                    </li>
                  </i>
                  <i>
                    <li>
                      Any and all transactions by persons that you give access
                      to or that otherwise use your MOOKHPAY account.
                    </li>
                  </i>
                  <i>
                    <li>
                      Any and all consequences of use or misuse of your MOOKHPAY
                      account.
                    </li>
                  </i>
                  <i>
                    <li>
                      You agree to notify us immediately of any unauthorized use
                      of your MOOKHPAY account or any other breach of security
                      regarding MOOKHPAY of which you have knowledge.
                    </li>
                  </i>
                </ol>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">
                  6. PRIVACY AND DATA PROTECTION
                </h4>
                <p>
                  You understand and agree that personal information provided to
                  us in connection with MOOKHPAY is subject to MOOKHPAY’s
                  Privacy Policy.
                </p>
                <p>
                  MOOKHPAY is firmly committed to protecting the privacy of your
                  personal information and the personal information of your
                  customers. By using the Service, you acknowledge and agree
                  that MOOKHPAYs collection, usage and disclosure of this
                  personal information is governed by our Privacy policy.
                </p>
                <p>Additionally, if:</p>
                <ol style={{ listStyleType: "lower-alpha", paddingLeft: 21 }}>
                  <li>
                    You are established in the European Economic Area (EEA).
                  </li>
                  <li>
                    You provide goods or services to customers in the EEA.
                  </li>
                  <li>
                    You are otherwise subject to the requirements of the EU
                    General Data Protection Regulation.
                  </li>
                </ol>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">7. OPTIONAL TOOLS</h4>
                <p>
                  We may provide you with access to third-party tools over which
                  we neither monitor nor have any control nor input.
                </p>
                <p>
                  You acknowledge and agree that we provide access to such tools
                  "as is" and "as available" without any warranties,
                  representations or conditions of any kind and without any
                  endorsement. We shall have no liability whatsoever arising
                  from or relating to your use of optional third-party tools.
                </p>
                <p>
                  Any use by you of optional tools offered through the site is
                  entirely at your own risk and discretion and you should ensure
                  that you are familiar with and approve of the terms on which
                  tools are provided by the relevant third-party provider(s).
                </p>
                <p>
                  We may also, in the future, offer new services and/or features
                  through the website (including, the release of new tools and
                  resources). Such new features and/or services shall also be
                  subject to these Terms of Service.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">
                  8.ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION
                </h4>
                <p>
                  We are not responsible if information made available on this
                  site is not accurate, complete or current. Any reliance on the
                  material on this site is at your own risk.
                </p>
                <p>
                  We reserve the right to modify the contents of this site at
                  any time but we shall inform you of any substantial changes
                  that may affect your personal information.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">9. SERVICE FEES</h4>
                <p>
                  We may charge a fee to integrate MOOKHPAY on your website.
                  MOOKHPAY commission is applicable only when a transaction is
                  processed using any of our payment methods. There is a NO
                  REFUND policy on our fee after transactions are completed
                  using MOOKHPAY.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">10. REFUND POLICY</h4>
                <p>
                  As a buyer, we are fully committed to ensuring that you are
                  able to use MOOKHPAY safely and confidently. Should you
                  require a refund for your purchase, kindly get in touch with
                  the merchant you are purchasing from to request a refund.
                </p>
                <p>
                  Should that not yield any results you can reach out to us on
                  info@mookhpay.com and we will follow up with the merchant
                  regarding your refund request. All refund requests must first
                  be approved by the merchant.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">11. DISPUTES</h4>
                <p>
                  MOOKHPAY will provide various tools to assist Merchants and
                  Customers in communicating with each other to resolve a
                  dispute that may arise with respect to their transaction.
                </p>
                <p>
                  If Merchant and Customers are unable to resolve a dispute, we
                  can mediate disputes between them if either party requests
                  assistance.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">
                  12. MOOKHPAY IS NOT A BANKING INSTITUTION
                </h4>
                <p>
                  MOOKHPAY processes Payment Transactions on behalf of
                  Merchants. MOOKHPAY is not a bank or other chartered
                  depository institution.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">13. TERMINATION OF SERVICE</h4>
                <p>
                  We may, in our sole and absolute discretion without liability
                  to you or any third party, terminate your use of MOOKHPAY for
                  any reason, including without limitation inactivity or
                  violation of this Terms of Service or other policies we may
                  establish from time to time.
                </p>
                <p>
                  Upon termination of your use of MOOKHPAY, you remain liable
                  for all Payment Transactions and any other obligations you
                  have incurred.
                </p>
                <p>
                  Upon termination, we have the right to prohibit your access to
                  MOOKHPAY, including without limitation by deactivating your
                  MOOKHPAY account and to refuse future access to MOOKHPAY by
                  you.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">
                  14. NO ENDORSEMENT OF PRODUCTS
                </h4>
                <p>
                  MOOKHPAY does not represent or endorse, and shall not be
                  responsible for:
                </p>
                <ol style={{ listStyleType: "lower-roman", paddingLeft: 21 }}>
                  <i>
                    <li>
                      The safety, quality, accuracy, reliability, integrity or
                      legality of any Product, the truth or accuracy of the
                      description of Products, or of any advice, opinion, offer,
                      proposal, statement, data or other information
                      (collectively, “Content”) displayed or distributed,
                      purchased or paid through MOOKHPAY.
                    </li>
                  </i>
                  <i>
                    <li>
                      The ability of Customers to buy Products or Merchants to
                      deliver Products. MOOKHPAY hereby disclaims any liability
                      or responsibility for errors or omissions in any Content
                      or in MOOKHPAY.
                    </li>
                  </i>
                </ol>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">15. SEVERABILITY</h4>
                <p>
                  In the event that any provision of these Terms of Service is
                  determined to be unlawful, void or unenforceable, such
                  provision shall nonetheless be enforceable to the fullest
                  extent permitted by applicable law, and the unenforceable
                  portion shall be deemed to be severed from these Terms of
                  Service, such determination shall not affect the validity and
                  enforceability of any other remaining provisions.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">16. GOVERNING LAW</h4>
                <p>
                  These Terms of Service and any separate agreements whereby we
                  provide you Services shall be governed by and construed in
                  accordance with the laws of Kenya.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">17. ENTIRE AGREEMENT</h4>
                <p>
                  The failure of us to exercise or enforce any right or
                  provision of these Terms of Service shall not constitute a
                  waiver of such right or provision.
                </p>
                <p>
                  These Terms of Service and any policies or operating rules
                  posted by us on this site or in respect to The Service
                  constitutes the entire agreement and understanding between you
                  and us and govern your use of the Service, replacing any prior
                  or simultaneous agreements, communications and proposals,
                  whether oral or written, between you and us (including, but
                  not limited to, any prior versions of the Terms of Service).
                </p>
                <p>
                  Any confusion as to the meaning of these Terms of Service
                  shall not be used against MOOKHPAY.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">
                  18. LIMITATIONS OF LIABILITY; FORCE MAJEURE
                </h4>
                <p>
                  MOOKHPAY shall not be liable to the Buyer in the event of any
                  disruption of MOOKHPAY or the Payment Platform or any part
                  thereof resulting from Force Majeure and MOOKHPAY may suspend
                  MOOKHPAY or part thereof in such an event.
                </p>
                <p>
                  Force Majeure for purposes of this Terms of Service means any
                  situation or event that makes it impossible for MOOKHPAY to
                  perform its obligations and includes but is not limited to any
                  act of God such as lighting, floods, earthquakes, prohibitive
                  decisions made by the government or local authority or civil
                  war conflict and industrial strikes as well as any global or
                  partial dysfunction of MOOKHPAY caused by disruption or
                  suspension of the telecommunication facilities.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">19. PROHIBITED USES</h4>
                <p>
                  In addition to other prohibitions as set forth in the Terms of
                  Service, you are prohibited from using the site or its
                  content:
                </p>
                <ol style={{ listStyleType: "lower-alpha", paddingLeft: 21 }}>
                  <li>For any unlawful purpose.</li>
                  <li>
                    To solicit others to perform or participate in any unlawful
                    acts.
                  </li>
                  <li>
                    To violate any international, National regulations, rules,
                    laws, or local ordinances.
                  </li>
                  <li>
                    To infringe upon or violate our intellectual property rights
                    or the intellectual property rights of others.
                  </li>
                  <li>
                    To harass, abuse, insult, harm, defame, slander, disparage,
                    intimidate, or discriminate based on gender, sexual
                    orientation, religion, ethnicity, race, age, national
                    origin, or disability
                  </li>
                  <li>
                    To upload or transmit viruses or any other type of malicious
                    code that will or may be used in any way that will affect
                    the functionality or operation of the Service or of any
                    related website, other websites, or the Internet.
                  </li>
                  <li>
                    To collect or track the personal information of others; (i)
                    to spam, phish, pharm, pretext, spider, crawl, or scrape.
                  </li>
                  <li>
                    For any obscene or immoral purpose or to interfere with the
                    security features of the Service or any related website,
                    other websites, or the Internet..
                  </li>
                  <p>
                    We reserve the right to terminate your use of the Service or
                    any related website for violating any of the prohibited
                    uses.
                  </p>
                  <hr />
                </ol>
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">
                  20. MODIFICATIONS OF TERMS OF SERVICE FOR BUYERS
                </h4>
                <p>
                  We have the right, in our sole and absolute discretion, to
                  change, modify, or amend any portion of this Terms of Service
                  at any time by posting notification on MOOKHPAY Web Site or
                  otherwise communicating the notification to you.
                </p>
                <p>
                  The changes will become effective, and shall be deemed
                  accepted by you, after the initial posting and shall apply on
                  a going-forward basis with respect to Payment Transactions
                  initiated after the posting date. In the event that you do not
                  agree with any such modification, your sole and exclusive
                  remedy is to terminate your use of MOOKHPAY.
                </p>
                <hr />
              </div>
              <div className="terms-body">
                <h4 className="font-semibold">21. CONTACT INFORMATION</h4>
                <p>
                  Questions about the Terms of Service should be sent to us at{" "}
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
                <hr style={{ visibility: "hidden" }} />
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
