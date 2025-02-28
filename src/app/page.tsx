export default function Home() {
  return (
    <div className="content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="break-words text-3xl sm:text-4xl font-bold mb-6">
        Tips for Financial Cybersecurity
      </h1>
      <div className="intro space-y-4 mb-8">
        <p>
          Financial institutions work to protect your financial information, but
          you also play a vital role. While cybercrime can&apos;t be entirely
          prevented, understanding account takeovers and taking proactive steps
          can help secure your information.
        </p>
        <p>
          A customer account takeover happens when criminals steal login
          credentials to access personal accounts, often financial ones. Some
          mix real and fake data to create fraudulent accounts for their
          benefit.
        </p>
      </div>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
        How Do Account Takeovers Happen?
      </h2>
      <div className="takeovers grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="takeover-box p-4">
          <strong>Phishing emails</strong>
          <p>
            Fake emails posing as legitimate companies, requesting sensitive
            information.
          </p>
        </div>
        <div className="takeover-box p-4">
          <strong>Social engineering calls</strong>
          <p>
            Cybercriminals impersonate financial representatives to trick you
            into sharing account details.
          </p>
        </div>
        <div className="takeover-box p-4">
          <strong>Data beaches or dark web sales</strong>
          <p>Stolen customer login credentials sold and misused.</p>
        </div>
        <div className="takeover-box p-4">
          <strong>SMS phishing</strong>
          <p>
            Fraudulent text messages trick you into revealing sensitive
            information.
          </p>
        </div>
        <div className="takeover-box p-4">
          <strong>Dumpster diving</strong>
          <p>Retrieve your discarded statements for account details.</p>
        </div>
      </div>

      <p className="font-semibold mb-4">Signs of a Compromised Account:</p>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Unauthorized transactions: unknown money movements or deposits.</li>
        <li>Missing funds or securities: unexpected depletion of assets.</li>
        <li>
          Unauthorized account changes: address, email, or phone number updates
          you didn&apos;t make.
        </li>
        <li>
          Unexpected notifications: alerts about changes you didn&apos;t request.
        </li>
        <li>
          Missing financial documents: statements or confirmations not received.
        </li>
        <li>
          Unfamiliar accounts on credit report: unknown accounts or creditors
          appearing.
        </li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
        Tips for Proactively Safeguard Your Accounts
      </h2>
      <div>
        <ol className="list-decimal space-y-6 pl-8">
          <li>
            <strong>Watch What You Click</strong>
            <p>
              Visit official websites or apps instead of clicking on suspicious
              links to avoid malware.
            </p>
          </li>
          <li>
            <strong>Protect Your Personal Information</strong>
            <p>
              Don&apos;t share sensitive information unless you verify the request.
            </p>
          </li>
          <li>
            <strong>Use Strong Password</strong>
            <p>
              Create long, unpredictable passwords with a mix of characters,
              update them regularly, use different password for each account,
              and use a password manager.
            </p>
          </li>
          <li>
            <strong>Enable Multifactor Authentication (MFA)</strong>
            <p>
              Add extra security layers like SMS codes or biometric
              verification.
            </p>
          </li>
          <li>
            <strong>Maintain Device Security</strong>
            <p>
              Use up-to-date security software, operating system and web
              browser, and enable automatic updates.
            </p>
          </li>
          <li>
            <strong>Back Up Your Files</strong>
            <p>
              Store copies in a safe place in case your computer gets
              compromised.
            </p>
          </li>
          <li>
            <strong>Use Your Own Device</strong>
            <p>
              Avoid using public computers to access your financial accounts. If
              you must use them, be sure to clear the cache and history after
              logging out.
            </p>
          </li>
          <li>
            <strong>Browse Carefully</strong>
            <p>
              Ensure sites begin with &quot;https&quot; and have a padlock symbol. Avoid
              opening multiple webpages in a single browser. Always log out
              after use.
            </p>
          </li>
          <li>
            <strong>Be Cyber Safe When Using Wi-Fi</strong>
            <p>
              Use trusted and encrypted public wireless networks and secure your
              home Wi-Fi.
            </p>
          </li>
          <li>
            <strong>Monitor Financial Correspondence and Accounts</strong>
            <p>
              Regularly review statements and transaction history. Report
              suspicious activity immediately.
            </p>
          </li>
          <li>
            <strong>Research companies before transactions</strong>
            <p>
              Check for reviews, complaints, or scam reports before making
              online purchases.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
