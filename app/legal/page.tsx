import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { COMPANY_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Legal, Privacy Notice & Cookie Policy",
  description:
    "Privacy Notice, Cookie Policy, and statutory company registration details for Blue Phoenix Marine.",
};

export default function LegalPage() {
  return (
    <>
      <PageHero
        title="LEGAL & PRIVACY"
        subtitle="Privacy Notice & Cookie Policy"
        backgroundImage="/images/bpm-images/main-headers-logo.png"
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Privacy Notice */}
          <div>
            <p className="font-display text-3xl font-bold uppercase tracking-[0.04em] text-black">
              Privacy Notice
            </p>
            <div className="mt-3 mb-8 h-[3px] w-10 bg-[#ff513b]" />

            <div className="space-y-8 text-base leading-relaxed text-[#626262]">
              <div>
                <h2 className="font-display text-lg font-bold uppercase tracking-[0.06em] text-black">
                  1. Privacy Notice &amp; Cookie Policy
                </h2>
                <p className="mt-2">
                  At Blue Phoenix Marine, we are committed to maintaining the trust and confidence
                  of our visitors to our website, subscribers to our newsletter and those who use
                  our contact form. Here you’ll find information on how we treat data that we
                  collect from visitors to our website, or when someone subscribes to our newsletter
                  or when someone uses our contact form.
                </p>
              </div>

              <div>
                <h2 className="font-display text-lg font-bold uppercase tracking-[0.06em] text-black">
                  2. Visitors to our website
                </h2>
                <p className="mt-2">
                  When someone visits www.bluephoenixmarine.com we use a third party service, Google
                  Analytics, to collect standard internet log information and details of visitor
                  behaviour patterns. We do this to find out things such as the number of visitors
                  to the various parts of the site. This information is only processed in a way
                  which does not identify anyone. We do not make, and do not allow Google to make,
                  any attempt to find out the identities of those visiting our website.
                </p>
                <p className="mt-3">
                  If we do want to collect personally identifiable information through our website,
                  we will be up front about this. We will make it clear when we collect personal
                  information and will explain what we intend to do with it.
                </p>
              </div>

              <div>
                <h2 className="font-display text-lg font-bold uppercase tracking-[0.06em] text-black">
                  3. Newsletter Signup
                </h2>
                <p className="mt-2">
                  As part of the registration process for our monthly e-newsletter, we collect
                  personal information. We use that information for a couple of reasons: to tell you
                  about stuff you’ve asked us to tell you about; to contact you if we need to obtain
                  or provide additional information; to check our records are right and to check
                  every now and then that you’re happy and satisfied. We don&apos;t rent or trade
                  email lists with other organisations and businesses.
                </p>
                <p className="mt-3">
                  You can unsubscribe to general mailings at any time of the day or night by
                  clicking the unsubscribe link at the bottom of any of our emails or by emailing
                  our Data Protection Officer, Ade Ladele —{" "}
                  <a
                    href={`mailto:${COMPANY_INFO.dpoEmail}`}
                    className="font-semibold text-[#3273a5] underline"
                  >
                    {COMPANY_INFO.dpoEmail}
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="font-display text-lg font-bold uppercase tracking-[0.06em] text-black">
                  4. Contact Form Data
                </h2>
                <p className="mt-2">
                  As part of the gathering of contact information process from a contact form on our
                  website, we collect personal information. We use that information to get in
                  contact with you to discuss your project requirements, to contact you if we need
                  to obtain or provide additional information, and to check our records are right.
                  We don&apos;t rent or trade email lists with other organisations and businesses.
                </p>
              </div>

              <div>
                <h2 className="font-display text-lg font-bold uppercase tracking-[0.06em] text-black">
                  5. Links to other websites
                </h2>
                <p className="mt-2">
                  This privacy notice does not cover the links within this site linking to other
                  websites. Those sites are not governed by this Privacy Policy, and if you have
                  questions about how a site uses your information, you’ll need to check that site’s
                  privacy statement.
                </p>
              </div>

              <div>
                <h2 className="font-display text-lg font-bold uppercase tracking-[0.06em] text-black">
                  6. Access to your personal information
                </h2>
                <p className="mt-2">
                  You are entitled to access the personal information that we hold. Email your
                  request to our Data Protection Officer, Tunji Ladele —{" "}
                  <a
                    href={`mailto:${COMPANY_INFO.dpoEmail}`}
                    className="font-semibold text-[#3273a5] underline"
                  >
                    {COMPANY_INFO.dpoEmail}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Cookie Policy */}
          <div className="border-t border-neutral-200 pt-14">
            <p className="font-display text-3xl font-bold uppercase tracking-[0.04em] text-black">
              Cookie Policy
            </p>
            <div className="mt-3 mb-8 h-[3px] w-10 bg-[#ff513b]" />

            <div className="space-y-8 text-base leading-relaxed text-[#626262]">
              <div>
                <h2 className="font-display text-lg font-bold uppercase tracking-[0.06em] text-black">
                  1. Cookie Policy
                </h2>
                <p className="mt-2">
                  We use a system of classifying the different types of cookies which we use on the
                  Website, or which may be used by third parties through our websites. The
                  classification was developed by the International Chamber of Commerce UK and
                  explains more about which cookies we use, why we use them, and the functionality
                  you will lose if you decide you don&apos;t want to have them on your device.
                </p>
              </div>

              <div>
                <h2 className="font-display text-lg font-bold uppercase tracking-[0.06em] text-black">
                  2. What is a cookie?
                </h2>
                <p className="mt-2">
                  Cookies are text files containing small amounts of information which are
                  downloaded to your personal computer, mobile or other device when you visit a
                  website. Cookies are then sent back to the originating website on each subsequent
                  visit, or to another website that recognises that cookie.
                </p>
              </div>

              <div>
                <h2 className="font-display text-lg font-bold uppercase tracking-[0.06em] text-black">
                  3. Cookies used on the website
                </h2>
                <p className="mt-2">
                  <strong className="text-black">Strictly necessary cookies:</strong> These cookies
                  enable services you have specifically asked for and are essential in order to
                  enable you to move around the Website and use its features.
                </p>
                <p className="mt-3">
                  <strong className="text-black">Performance cookies:</strong> These cookies collect
                  anonymous information on the pages visited to improve how the Website works.
                </p>
                <p className="mt-3">
                  <strong className="text-black">Functionality cookies:</strong> These cookies
                  remember choices you make to improve your experience.
                </p>
              </div>
            </div>
          </div>

          {/* Company Address */}
          <div className="border-t border-neutral-200 pt-14">
            <p className="font-display text-2xl font-bold uppercase tracking-[0.04em] text-black">
              Blue Phoenix Marine Contact Information
            </p>
            <div className="mt-3 mb-6 h-[3px] w-10 bg-[#ff513b]" />
            <p className="text-base leading-relaxed text-[#626262]">
              If you wish to contact us by post, please address your correspondence to:{" "}
              <strong className="text-black">{COMPANY_INFO.headquarters}</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
