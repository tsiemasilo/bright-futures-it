import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BrandName } from "@/components/BrandName";
import { Shield, Lock, Eye, Users, FileText, Globe, AlertCircle, Mail } from "lucide-react";

const PrivacyPolicy = () => {
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
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Legal Information</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
              <p className="text-xl text-muted-foreground">
                How we protect and manage your personal information
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
                    <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      <BrandName inline size="sm" /> (PTY) Ltd ("we", "us", "our") is committed to protecting your privacy and ensuring that your personal information is collected, processed, and disclosed properly, lawfully, and transparently in accordance with the Protection of Personal Information Act 4 of 2013 (POPIA).
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our IT services.
                    </p>
                  </div>
                </div>
              </section>

              {/* Company Details */}
              <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  2. Company Details
                </h2>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Registered Name:</strong> <BrandName inline size="sm" /> (PTY) Ltd</p>
                  <p><strong>Physical Address:</strong> Pretoria, Gauteng, South Africa</p>
                  <p><strong>Contact Email:</strong> EDGARBRIGHTGROUP@GMAIL.COM</p>
                  <p><strong>Contact Phone:</strong> 071 157 8316 / 072 447 6949</p>
                </div>
              </section>

              {/* Information Officer */}
              <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Mail className="w-6 h-6 text-primary" />
                  3. Information Officer
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In compliance with POPIA, we have appointed an Information Officer responsible for ensuring compliance with POPIA requirements:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Contact Email:</strong> EDGARBRIGHTGROUP@GMAIL.COM</p>
                  <p><strong>Contact Phone:</strong> 071 157 8316</p>
                </div>
              </section>

              {/* What Personal Information We Collect */}
              <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Eye className="w-6 h-6 text-primary" />
                  4. What Personal Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect and process the following categories of personal information:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">From Clients/Customers:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Full name and contact details (email, phone, physical address)</li>
                      <li>Company details (for business clients)</li>
                      <li>Financial information (banking details, tax information)</li>
                      <li>IT infrastructure and system information</li>
                      <li>Usage data and technical logs</li>
                      <li>Communications with us (emails, support tickets)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">From Website Visitors:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>IP addresses and browser information</li>
                      <li>Device information and operating system</li>
                      <li>Pages visited and time spent on site</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Purpose and Legal Basis */}
              <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  5. Purpose and Legal Basis for Processing
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We process your personal information for the following purposes:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Service Delivery:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>To provide IT services, support, and maintenance</li>
                      <li>To manage service agreements and contracts</li>
                      <li>To communicate about services and technical issues</li>
                      <li>To process payments and invoices</li>
                    </ul>
                    <p className="text-sm mt-2 text-muted-foreground"><em>Legal Basis: Contractual obligations and consent</em></p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Business Operations:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>To comply with legal and regulatory requirements</li>
                      <li>To manage vendor and supplier relationships</li>
                      <li>To enforce our terms and conditions</li>
                      <li>For internal record keeping and auditing</li>
                    </ul>
                    <p className="text-sm mt-2 text-muted-foreground"><em>Legal Basis: Legal obligations and legitimate interests</em></p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Security:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>To protect against unauthorized access and cyber threats</li>
                      <li>To monitor system integrity and prevent fraud</li>
                      <li>To conduct security audits and incident response</li>
                    </ul>
                    <p className="text-sm mt-2 text-muted-foreground"><em>Legal Basis: Legitimate interests and legal obligations</em></p>
                  </div>
                </div>
              </section>

              {/* Sharing Information */}
              <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-primary" />
                  6. Sharing of Personal Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may share your personal information with:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Service Providers:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Cloud hosting providers</li>
                      <li>Payment processors</li>
                      <li>Software vendors and technology partners</li>
                      <li>Professional advisors (legal, accounting)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Regulatory Authorities:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>The Information Regulator</li>
                      <li>Law enforcement agencies (when legally required)</li>
                      <li>Professional bodies and industry regulators</li>
                    </ul>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We ensure all third-party operators sign written contracts requiring them to protect personal information in accordance with POPIA.
                  </p>
                </div>
              </section>

              {/* Data Subject Rights */}
              <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  7. Your Rights Under POPIA
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Under POPIA, you have the right to:
                </p>
                <ul className="list-none space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>Access</strong> - Request copies of your personal information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>Correction</strong> - Request correction of inaccurate or incomplete information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>Deletion</strong> - Request deletion of your personal information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>Objection</strong> - Object to processing of your personal information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>Data Portability</strong> - Receive your data in a structured format</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise your rights, contact our Information Officer at EDGARBRIGHTGROUP@GMAIL.COM or 071 157 8316
                </p>
              </section>

              {/* Security Measures */}
              <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Lock className="w-6 h-6 text-primary" />
                  8. Security Measures
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information, including:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Technical Measures:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Encryption of data in transit and at rest</li>
                      <li>Secure firewalls and intrusion detection</li>
                      <li>Regular security audits</li>
                      <li>Multi-factor authentication</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Organizational Measures:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Staff training on data protection</li>
                      <li>Confidentiality agreements</li>
                      <li>Clear data handling policies</li>
                      <li>Regular security reviews</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Data Retention */}
              <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  9. Data Retention
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We retain personal information only for as long as necessary to fulfill the purposes for which it was collected and to comply with legal obligations:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Client contracts and financial records: 5-7 years</li>
                  <li>Technical logs and system data: 12-24 months</li>
                  <li>Marketing consent records: Until consent is withdrawn</li>
                </ul>
              </section>

              {/* Complaints */}
              <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  10. Complaints
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have concerns about how we process your personal information, you may:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Contact our Information Officer: EDGARBRIGHTGROUP@GMAIL.COM | 071 157 8316</li>
                  <li>Lodge a complaint with the Information Regulator (South Africa):
                    <div className="ml-6 mt-2 space-y-1">
                      <p>Address: JD House, 27 Stiemens Street, Braamfontein, Johannesburg, 2001</p>
                      <p>Email: inforegulator@justice.gov.za</p>
                      <p>Phone: 010 023 5207</p>
                      <p>Website: <a href="https://inforegulator.org.za" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://inforegulator.org.za</a></p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Consent */}
              <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4">11. Consent</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By using our services, you consent to the collection, processing, and use of your personal information as described in this Privacy Policy.
                </p>
              </section>

              {/* Contact */}
              <section className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Questions About This Policy?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
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

export default PrivacyPolicy;
