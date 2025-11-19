import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BrandName } from "@/components/BrandName";
import { FileText, CheckCircle, AlertTriangle, Scale, Shield, DollarSign, Clock, XCircle } from "lucide-react";

const TermsOfService = () => {
  const lastUpdated = "November 19, 2025";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 md:pt-40 pb-16 bg-gradient-to-br from-secondary/30 to-background overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <Scale className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Legal Agreement</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
              <p className="text-xl text-muted-foreground">
                Terms and conditions for using our IT services
              </p>
              <p className="text-sm text-muted-foreground">
                Last Updated: {lastUpdated}
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              {/* Introduction */}
              <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="flex items-start gap-4 mb-4">
                  <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      These Terms of Service ("Terms") constitute a legally binding agreement between you and <BrandName inline size="sm" /> (PTY) Ltd ("Company", "we", "us", or "our") concerning your access to and use of our IT services, software development, hardware solutions, and related services (collectively, the "Services").
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
                    </p>
                  </div>
                </div>
              </section>

              {/* Definitions */}
              <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  2. Definitions
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong className="text-white">"Client"</strong> means any individual or entity that engages our Services.</li>
                  <li><strong className="text-white">"Services"</strong> means all IT solutions, software development, hardware support, security technologies, IT consulting, and training programs provided by the Company.</li>
                  <li><strong className="text-white">"Deliverables"</strong> means any software, documentation, reports, or other work products created by the Company for the Client.</li>
                  <li><strong className="text-white">"Confidential Information"</strong> means any non-public information disclosed by either party.</li>
                </ul>
              </section>

              {/* Services Provided */}
              <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  3. Services Provided
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Company provides the following IT services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Hardware Solutions - Supply, installation, and maintenance of computer hardware and networking equipment</li>
                  <li>Software Development - Custom software applications, web development, and mobile applications</li>
                  <li>Security Technologies - Cybersecurity solutions, network security, and data protection</li>
                  <li>IT Consulting - Strategic IT planning, system architecture, and technology advisory</li>
                  <li>Training Programs - IT skills development and technology training</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Specific service details, deliverables, timelines, and pricing will be outlined in individual service agreements or proposals.
                </p>
              </section>

              {/* Client Obligations */}
              <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  4. Client Obligations
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a Client, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide accurate and complete information necessary for service delivery</li>
                  <li>Respond promptly to requests for information or decisions</li>
                  <li>Provide timely access to systems, facilities, and personnel as needed</li>
                  <li>Ensure you have proper authorization to engage our Services</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Use the Services only for lawful purposes</li>
                  <li>Maintain the confidentiality of any access credentials provided</li>
                </ul>
              </section>

              {/* Payment Terms */}
              <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-primary" />
                  5. Payment Terms
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">5.1 Fees and Billing</h3>
                    <p className="leading-relaxed">
                      Fees for Services will be specified in individual service agreements or proposals. Unless otherwise agreed in writing, payment terms are as follows:
                    </p>
                    <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                      <li>Invoices are due within 30 days of the invoice date</li>
                      <li>For projects exceeding R50,000, a 50% deposit may be required</li>
                      <li>Recurring services are billed monthly in advance</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">5.2 Late Payment</h3>
                    <p className="leading-relaxed">
                      Late payments will incur interest at a rate of 2% per month or the maximum rate permitted by law, whichever is lower. The Company reserves the right to suspend Services if payment is more than 30 days overdue.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">5.3 Pricing Changes</h3>
                    <p className="leading-relaxed">
                      The Company reserves the right to modify pricing with 30 days' written notice to the Client.
                    </p>
                  </div>
                </div>
              </section>

              {/* Intellectual Property */}
              <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  6. Intellectual Property Rights
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">6.1 Custom Deliverables</h3>
                    <p className="leading-relaxed">
                      Upon full payment, the Client will own all intellectual property rights in custom software, applications, and other deliverables specifically created for the Client under a service agreement.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">6.2 Company Property</h3>
                    <p className="leading-relaxed">
                      The Company retains all rights to:
                    </p>
                    <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                      <li>Pre-existing tools, frameworks, and code libraries</li>
                      <li>General knowledge, skills, and experience</li>
                      <li>Methodologies and processes</li>
                      <li>Company branding and marketing materials</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">6.3 Third-Party Software</h3>
                    <p className="leading-relaxed">
                      Third-party software, libraries, or frameworks incorporated into deliverables remain subject to their respective licenses.
                    </p>
                  </div>
                </div>
              </section>

              {/* Confidentiality */}
              <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  7. Confidentiality
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Both parties agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Maintain the confidentiality of all Confidential Information disclosed</li>
                  <li>Use Confidential Information only for the purpose of performing Services</li>
                  <li>Not disclose Confidential Information to third parties without prior written consent</li>
                  <li>Implement reasonable security measures to protect Confidential Information</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  This obligation does not apply to information that is publicly available, independently developed, or required to be disclosed by law.
                </p>
              </section>

              {/* Warranties and Disclaimers */}
              <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  8. Warranties and Disclaimers
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">8.1 Company Warranties</h3>
                    <p className="leading-relaxed">
                      The Company warrants that:
                    </p>
                    <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                      <li>Services will be performed with reasonable skill and care</li>
                      <li>Deliverables will substantially conform to agreed specifications</li>
                      <li>The Company has the right to provide the Services</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">8.2 Disclaimer</h3>
                    <p className="leading-relaxed">
                      EXCEPT AS EXPRESSLY PROVIDED IN THESE TERMS, THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                    </p>
                  </div>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  9. Limitation of Liability
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>The Company's total liability for any claims arising from or related to the Services shall not exceed the total fees paid by the Client in the 12 months preceding the claim</li>
                    <li>The Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                    <li>The Company shall not be liable for loss of profits, data, business opportunities, or reputation</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    This limitation applies regardless of the legal theory of liability (contract, tort, negligence, etc.).
                  </p>
                </div>
              </section>

              {/* Term and Termination */}
              <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  10. Term and Termination
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">10.1 Term</h3>
                    <p className="leading-relaxed">
                      These Terms commence when you first access or use the Services and continue until terminated.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">10.2 Termination for Convenience</h3>
                    <p className="leading-relaxed">
                      Either party may terminate ongoing services with 30 days' written notice. The Client remains responsible for payment for all work completed prior to termination.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">10.3 Termination for Cause</h3>
                    <p className="leading-relaxed">
                      Either party may terminate immediately if the other party:
                    </p>
                    <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                      <li>Materially breaches these Terms and fails to cure within 14 days of written notice</li>
                      <li>Becomes insolvent or enters bankruptcy proceedings</li>
                      <li>Engages in fraudulent or illegal activities</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">10.4 Effect of Termination</h3>
                    <p className="leading-relaxed">
                      Upon termination:
                    </p>
                    <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                      <li>All outstanding fees become immediately due</li>
                      <li>The Company will deliver all completed work</li>
                      <li>Each party will return or destroy Confidential Information</li>
                      <li>Sections relating to payment, intellectual property, confidentiality, and liability survive termination</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Indemnification */}
              <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  11. Indemnification
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Client agrees to indemnify and hold harmless the Company from any claims, damages, or expenses arising from:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                  <li>Client's use of the Services in violation of these Terms</li>
                  <li>Client's violation of applicable laws or regulations</li>
                  <li>Client's infringement of third-party rights</li>
                  <li>Content or data provided by the Client</li>
                </ul>
              </section>

              {/* Governing Law */}
              <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Scale className="w-6 h-6 text-primary" />
                  12. Governing Law and Dispute Resolution
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    These Terms are governed by the laws of the Republic of South Africa. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Pretoria, Gauteng.
                  </p>
                  <p className="leading-relaxed">
                    Before initiating legal proceedings, the parties agree to attempt resolution through good-faith negotiations for a period of 30 days.
                  </p>
                </div>
              </section>

              {/* General Provisions */}
              <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  13. General Provisions
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">13.1 Modifications</h3>
                    <p className="leading-relaxed">
                      The Company may modify these Terms at any time. Continued use of the Services after changes constitutes acceptance of the modified Terms.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">13.2 Entire Agreement</h3>
                    <p className="leading-relaxed">
                      These Terms, together with any service agreements or proposals, constitute the entire agreement between the parties.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">13.3 Severability</h3>
                    <p className="leading-relaxed">
                      If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full effect.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">13.4 Waiver</h3>
                    <p className="leading-relaxed">
                      Failure to enforce any provision does not constitute a waiver of that provision.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">13.5 Assignment</h3>
                    <p className="leading-relaxed">
                      The Client may not assign these Terms without the Company's prior written consent. The Company may assign these Terms in connection with a merger, acquisition, or sale of assets.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> EDGARBRIGHTGROUP@GMAIL.COM</p>
                  <p><strong>Phone:</strong> 071 157 8316 / 072 447 6949</p>
                  <p><strong>Location:</strong> Pretoria, Gauteng, South Africa</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
