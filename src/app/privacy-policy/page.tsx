import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HookX Privacy Policy',
  description: 'Learn how HookX collects, uses, and protects your data.',
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-[#765EEF] pb-2">
      {title}
    </h2>
    <div className="text-gray-700 leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-[#765EEF] mr-2">•</span>
    <span>{children}</span>
  </li>
);

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#765EEF] to-[#9D8AFF] mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-8 text-center">
            <p className="text-gray-600">
              <strong>Effective Date:</strong> May 20, 2025<br />
              <strong>Last Updated:</strong> May 20, 2025
            </p>
          </div>

          <Section title="1. Introduction">
            <p>At HookX, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you engage with our services, website, and lead generation forms.</p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We may collect the following types of information when you interact with us:</p>
            <ul className="mt-3 space-y-2 ml-4">
              <ListItem><strong>Contact Information:</strong> Full name, email address, company name, job title</ListItem>
              <ListItem><strong>Communication Preferences:</strong> Responses from forms, emails, and onboarding calls</ListItem>
              <ListItem><strong>Technical Data:</strong> IP address, browser type, operating system, time zone (if using the site)</ListItem>
            </ul>
            <p className="mt-4">We collect this information via:</p>
            <ul className="mt-2 space-y-2 ml-4">
              <ListItem>Our website contact forms and lead generation forms (e.g., LinkedIn)</ListItem>
              <ListItem>Scheduling tools like Calendly</ListItem>
              <ListItem>Client onboarding processes</ListItem>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use your data for:</p>
            <ul className="mt-2 space-y-2 ml-4">
              <ListItem>Providing you with our services</ListItem>
              <ListItem>Client communication and support</ListItem>
              <ListItem>Sending project updates and related communication</ListItem>
              <ListItem>Improving user experience on our website</ListItem>
              <ListItem>Internal analytics and service optimization</ListItem>
            </ul>
            <p className="mt-4">We do not sell or rent your personal information.</p>
          </Section>

          <Section title="4. Third-Party Services">
            <p>We may use trusted third-party services to operate our business, including but not limited to:</p>
            <ul className="mt-2 space-y-2 ml-4">
              <ListItem>Calendly for scheduling calls</ListItem>
              <ListItem>Notion for client management</ListItem>
              <ListItem>Google Workspace for communication and file sharing</ListItem>
              <ListItem>Zapier for workflow automation</ListItem>
            </ul>
            <p className="mt-4">These services may have access to certain information only as needed and are governed by their own privacy policies.</p>
          </Section>

          <Section title="5. Data Retention and Security">
            <p>We retain your data only as long as necessary to fulfill the purpose it was collected for. All data is stored securely with standard industry protocols to prevent unauthorized access, disclosure, or loss.</p>
          </Section>

          <Section title="6. Your Rights">
            <p>You may:</p>
            <ul className="mt-2 space-y-2 ml-4">
              <ListItem>Request a copy of your data</ListItem>
              <ListItem>Ask us to update, correct, or delete your information</ListItem>
              <ListItem>Withdraw consent for future communication</ListItem>
            </ul>
            <p className="mt-4">To exercise your rights, contact us at: <a href="mailto:createhookx@gmail.com" className="text-[#765EEF] hover:underline">createhookx@gmail.com</a></p>
          </Section>

          <Section title="7. Policy Updates">
            <p>We may update this Privacy Policy from time to time. Any updates will be reflected on this page with a revised effective date.</p>
          </Section>

          <Section title="8. Contact Us">
            <p>If you have questions or concerns about this policy or our data practices, reach out to:</p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="flex items-center text-gray-800">
                <span className="mr-2">📩</span>
                <a href="mailto:createhookx@gmail.com" className="text-[#765EEF] hover:underline">createhookx@gmail.com</a>
              </p>
            </div>
          </Section>

          <div className="mt-12 pt-6 border-t border-gray-200 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center text-[#765EEF] hover:underline"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
