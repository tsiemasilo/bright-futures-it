import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const generateCompanyProfilePDF = async () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Load and add custom fonts
  try {
    // Load Orbitron font for brand name
    const orbitronResponse = await fetch('/fonts/Orbitron-Bold.ttf');
    const orbitronBlob = await orbitronResponse.blob();
    const orbitronReader = new FileReader();
    
    await new Promise((resolve) => {
      orbitronReader.onload = function() {
        const base64Font = (orbitronReader.result as string).split(',')[1];
        doc.addFileToVFS('Orbitron-Bold.ttf', base64Font);
        doc.addFont('Orbitron-Bold.ttf', 'Orbitron', 'bold');
        resolve(null);
      };
      orbitronReader.readAsDataURL(orbitronBlob);
    });

    // Load Playfair Display font for headings
    const playfairResponse = await fetch('/fonts/PlayfairDisplay-Bold.ttf');
    const playfairBlob = await playfairResponse.blob();
    const playfairReader = new FileReader();
    
    await new Promise((resolve) => {
      playfairReader.onload = function() {
        const base64Font = (playfairReader.result as string).split(',')[1];
        doc.addFileToVFS('PlayfairDisplay-Bold.ttf', base64Font);
        doc.addFont('PlayfairDisplay-Bold.ttf', 'PlayfairDisplay', 'bold');
        resolve(null);
      };
      playfairReader.readAsDataURL(playfairBlob);
    });
  } catch (error) {
    console.warn('Could not load custom fonts, using default fonts', error);
  }

  const primaryColor = '#2563eb'; // Brand blue
  const accentColor = '#6B46C1'; // Purple accent
  const darkColor = '#1D2637'; // Dark navy
  const lightColor = '#F3F4F6'; // Light gray

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;

  // Helper function to add footer to each page
  const addPageFooter = () => {
    const footerY = pageHeight - 12;
    const logoSize = 1.5;
    const logoX = margin;
    
    // Draw small logo
    doc.setFillColor(91, 163, 197); // Light blue
    doc.circle(logoX + logoSize, footerY - 1, logoSize * 0.8, 'F');
    doc.circle(logoX, footerY, logoSize * 0.6, 'F');
    doc.circle(logoX + logoSize * 2, footerY, logoSize * 0.6, 'F');
    
    doc.setFillColor(107, 70, 193); // Purple
    doc.circle(logoX + logoSize, footerY, logoSize * 0.9, 'F');
    
    // Company name with Orbitron font
    doc.setFontSize(8);
    doc.setTextColor(60, 60, 60);
    try {
      doc.setFont('Orbitron', 'bold');
    } catch {
      doc.setFont('helvetica', 'bold');
    }
    doc.text('EDIGHT', logoX + logoSize * 2 + 5, footerY + 1);
    
    // Founders names
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(100, 100, 100);
    const footerText = 'Mantsie Senyane Bright | Edgar Tshwarelo Moloantoa';
    const footerTextWidth = doc.getTextWidth(footerText);
    doc.text(footerText, pageWidth - margin - footerTextWidth, footerY + 1);
  };

  // ==================== PAGE 1: COVER PAGE ====================
  
  // Background gradient effect (simulated with rectangles)
  doc.setFillColor(29, 38, 55); // Dark navy
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Top accent bar
  doc.setFillColor(37, 99, 235); // Blue
  doc.rect(0, 0, pageWidth, 40, 'F');

  // Company logo representation (simplified network design)
  const centerX = pageWidth / 2;
  const logoY = 60;
  
  // Draw network nodes (simplified logo)
  doc.setFillColor(91, 163, 197); // Light blue
  doc.circle(centerX, logoY, 3, 'F');
  doc.circle(centerX - 8, logoY + 8, 2.5, 'F');
  doc.circle(centerX + 8, logoY + 8, 2.5, 'F');
  doc.circle(centerX - 8, logoY + 20, 2.5, 'F');
  doc.circle(centerX + 8, logoY + 20, 2.5, 'F');
  doc.circle(centerX, logoY + 28, 3, 'F');
  
  doc.setFillColor(107, 70, 193); // Purple
  doc.circle(centerX - 4, logoY + 14, 3.5, 'F');
  doc.circle(centerX + 4, logoY + 14, 3.5, 'F');

  // Company name - styled like navbar with cyan glow using Orbitron font
  doc.setTextColor(34, 211, 238); // Cyan-400
  doc.setFontSize(48);
  try {
    doc.setFont('Orbitron', 'bold');
  } catch {
    doc.setFont('helvetica', 'bold');
  }
  doc.text('EDIGHT', centerX, 110, { align: 'center' });

  // Company Slogan
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(200, 200, 200);
  doc.text('THE FUTURE IS RELATED - WE BUILD IT', centerX, 125, { align: 'center' });

  // Decorative line
  doc.setDrawColor(37, 99, 235);
  doc.setLineWidth(0.5);
  doc.line(centerX - 40, 135, centerX + 40, 135);

  // Technology tagline below line
  doc.setFontSize(12);
  doc.setTextColor(150, 150, 150);
  doc.setFont('helvetica', 'normal');
  doc.text('Technology Innovation & IT Solutions', centerX, 143, { align: 'center' });

  // Company Profile title
  doc.setFontSize(32);
  doc.setTextColor(255, 255, 255);
  try {
    doc.setFont('PlayfairDisplay', 'bold');
  } catch {
    doc.setFont('helvetica', 'bold');
  }
  doc.text('COMPANY PROFILE', centerX, 165, { align: 'center' });

  // Year
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('2023', centerX, 172, { align: 'center' });

  // Bottom accent section
  doc.setFillColor(37, 99, 235);
  const bottomY = pageHeight - 60;
  doc.roundedRect(margin, bottomY, pageWidth - (margin * 2), 40, 3, 3, 'F');

  // Contact info on cover
  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'normal');
  doc.text('Pretoria, Gauteng, South Africa', centerX, bottomY + 12, { align: 'center' });
  doc.text('Email: EDGARBRIGHTGROUP@GMAIL.COM', centerX, bottomY + 20, { align: 'center' });
  doc.text('Phone: 071 157 8316 | 072 447 6949', centerX, bottomY + 28, { align: 'center' });

  // Add footer to page 1
  addPageFooter();

  // ==================== PAGE 2: ABOUT & SERVICES ====================
  doc.addPage();

  // Background watermark logo (very light for subtle effect)
  const watermarkCenterX = pageWidth / 2;
  const watermarkCenterY = pageHeight / 2;
  const scale = 8; // Make it bigger
  
  // Very light blue watermark
  doc.setFillColor(240, 245, 250);
  
  // Large watermark logo in center
  doc.circle(watermarkCenterX, watermarkCenterY, 3 * scale, 'F');
  doc.circle(watermarkCenterX - 8 * scale, watermarkCenterY + 8 * scale, 2.5 * scale, 'F');
  doc.circle(watermarkCenterX + 8 * scale, watermarkCenterY + 8 * scale, 2.5 * scale, 'F');
  doc.circle(watermarkCenterX - 8 * scale, watermarkCenterY + 20 * scale, 2.5 * scale, 'F');
  doc.circle(watermarkCenterX + 8 * scale, watermarkCenterY + 20 * scale, 2.5 * scale, 'F');
  doc.circle(watermarkCenterX, watermarkCenterY + 28 * scale, 3 * scale, 'F');
  
  doc.setFillColor(245, 240, 250); // Very light purple
  doc.circle(watermarkCenterX - 4 * scale, watermarkCenterY + 14 * scale, 3.5 * scale, 'F');
  doc.circle(watermarkCenterX + 4 * scale, watermarkCenterY + 14 * scale, 3.5 * scale, 'F');

  // Header background
  doc.setFillColor(37, 99, 235);
  doc.rect(0, 0, pageWidth, 25, 'F');

  // Page title
  doc.setFontSize(24);
  doc.setTextColor(255, 255, 255);
  try {
    doc.setFont('PlayfairDisplay', 'bold');
  } catch {
    doc.setFont('helvetica', 'bold');
  }
  doc.text('About EDIGHT', margin, 17);

  let yPos = 40;

  // Company Overview
  doc.setFontSize(16);
  doc.setTextColor(37, 99, 235);
  try {
    doc.setFont('PlayfairDisplay', 'bold');
  } catch {
    doc.setFont('helvetica', 'bold');
  }
  doc.text('Company Overview', margin, yPos);
  
  yPos += 8;
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  doc.setFont('helvetica', 'normal');
  const overviewText = 'EDIGHT is a visionary IT solutions company based in Pretoria, Gauteng, South Africa. Founded by Mantsie Senyane Bright and Edgar Tshwarelo Moloantoa, the company operates at the intersection of technology, innovation, and empowerment, positioning itself as a catalyst for digital transformation across the African continent. We specialize in delivering cutting-edge, comprehensive technology solutions that transform businesses, enhance operational efficiency, and empower communities through sustainable growth and skills development. With over 3 years of dedicated industry experience, we have successfully delivered innovative, tailored technology solutions to a diverse portfolio of clients, ranging from emerging small businesses and startups to well-established large enterprises across multiple sectors. Our commitment to excellence, customer satisfaction, and continuous innovation drives everything we do, ensuring that every solution we deliver not only meets but exceeds our clients\' expectations while contributing to the broader goal of technological advancement in South Africa and beyond.';
  const splitOverview = doc.splitTextToSize(overviewText, pageWidth - (margin * 2));
  doc.text(splitOverview, margin, yPos);
  yPos += splitOverview.length * 5 + 10;

  // Company Statistics
  doc.setFillColor(243, 244, 246);
  doc.roundedRect(margin, yPos, pageWidth - (margin * 2), 20, 2, 2, 'F');
  
  yPos += 7;
  doc.setFontSize(9);
  doc.setTextColor(37, 99, 235);
  doc.setFont('helvetica', 'bold');
  
  const statX1 = margin + 10;
  const statX2 = centerX - 15;
  const statX3 = centerX + 30;
  
  doc.text('3+ Years', statX1, yPos);
  doc.text('4 Projects', statX2, yPos);
  doc.text('24/7 Support', statX3, yPos);
  
  yPos += 4;
  doc.setFontSize(8);
  doc.setTextColor(80, 80, 80);
  doc.setFont('helvetica', 'normal');
  
  doc.text('Experience', statX1, yPos);
  doc.text('Completed', statX2, yPos);
  doc.text('Available', statX3, yPos);
  
  yPos += 18;

  // Mission & Vision
  doc.setFontSize(16);
  doc.setTextColor(37, 99, 235);
  try {
    doc.setFont('PlayfairDisplay', 'bold');
  } catch {
    doc.setFont('helvetica', 'bold');
  }
  doc.text('Our Mission', margin, yPos);
  
  yPos += 8;
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  doc.setFont('helvetica', 'normal');
  const missionText = 'To empower individuals, businesses, and communities through modern, secure, and transformative technology solutions that drive innovation and sustainable growth.';
  const splitMission = doc.splitTextToSize(missionText, pageWidth - (margin * 2));
  doc.text(splitMission, margin, yPos);
  yPos += splitMission.length * 5 + 10;

  // Vision
  doc.setFontSize(16);
  doc.setTextColor(37, 99, 235);
  try {
    doc.setFont('PlayfairDisplay', 'bold');
  } catch {
    doc.setFont('helvetica', 'bold');
  }
  doc.text('Our Vision', margin, yPos);
  
  yPos += 8;
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  doc.setFont('helvetica', 'normal');
  const visionText = 'To become Africa\'s leading technology solutions provider, recognized for excellence in innovation, security, and customer service while creating meaningful impact through skills development and digital transformation.';
  const splitVision = doc.splitTextToSize(visionText, pageWidth - (margin * 2));
  doc.text(splitVision, margin, yPos);
  yPos += splitVision.length * 5 + 10;

  // Why Choose EDIGHT
  doc.setFontSize(16);
  doc.setTextColor(37, 99, 235);
  try {
    doc.setFont('PlayfairDisplay', 'bold');
  } catch {
    doc.setFont('helvetica', 'bold');
  }
  doc.text('Why Choose EDIGHT', margin, yPos);
  
  yPos += 8;

  const whyChoose = [
    'Customized Solutions: Tailored IT solutions designed to meet your specific business needs',
    'Expert Team: Highly skilled professionals with extensive industry experience',
    'Quality Assurance: Rigorous testing and quality control for all deliverables',
    'Competitive Pricing: Cost-effective solutions without compromising on quality',
    'Ongoing Support: Comprehensive maintenance and 24/7 technical support'
  ];

  doc.setFontSize(9);
  doc.setTextColor(60, 60, 60);
  doc.setFont('helvetica', 'normal');
  
  whyChoose.forEach(item => {
    doc.setFillColor(37, 99, 235);
    doc.circle(margin + 2, yPos - 1.5, 1.2, 'F');
    const splitItem = doc.splitTextToSize(item, pageWidth - (margin * 2) - 6);
    doc.text(splitItem, margin + 6, yPos);
    yPos += splitItem.length * 4 + 4;
  });

  // Add footer to page 2
  addPageFooter();

  // ==================== NEW PAGE: CORE SERVICES ====================
  doc.addPage();

  // Background watermark logo (very light for subtle effect)
  const watermarkCenterXServices = pageWidth / 2;
  const watermarkCenterYServices = pageHeight / 2;
  const scaleServices = 8;
  
  doc.setFillColor(240, 245, 250); // Very light blue
  
  // Large watermark logo in center
  doc.circle(watermarkCenterXServices, watermarkCenterYServices, 3 * scaleServices, 'F');
  doc.circle(watermarkCenterXServices - 8 * scaleServices, watermarkCenterYServices + 8 * scaleServices, 2.5 * scaleServices, 'F');
  doc.circle(watermarkCenterXServices + 8 * scaleServices, watermarkCenterYServices + 8 * scaleServices, 2.5 * scaleServices, 'F');
  doc.circle(watermarkCenterXServices - 8 * scaleServices, watermarkCenterYServices + 20 * scaleServices, 2.5 * scaleServices, 'F');
  doc.circle(watermarkCenterXServices + 8 * scaleServices, watermarkCenterYServices + 20 * scaleServices, 2.5 * scaleServices, 'F');
  doc.circle(watermarkCenterXServices, watermarkCenterYServices + 28 * scaleServices, 3 * scaleServices, 'F');
  
  doc.setFillColor(245, 240, 250); // Very light purple
  doc.circle(watermarkCenterXServices - 4 * scaleServices, watermarkCenterYServices + 14 * scaleServices, 3.5 * scaleServices, 'F');
  doc.circle(watermarkCenterXServices + 4 * scaleServices, watermarkCenterYServices + 14 * scaleServices, 3.5 * scaleServices, 'F');

  // Header background
  doc.setFillColor(37, 99, 235);
  doc.rect(0, 0, pageWidth, 25, 'F');

  // Page title
  doc.setFontSize(24);
  doc.setTextColor(255, 255, 255);
  try {
    doc.setFont('PlayfairDisplay', 'bold');
  } catch {
    doc.setFont('helvetica', 'bold');
  }
  doc.text('Our Core Services', margin, 17);

  yPos = 40;

  const services = [
    {
      title: 'Hardware Solutions',
      desc: 'Complete hardware infrastructure, procurement, installation, and maintenance services including servers, workstations, networking equipment, and peripherals.'
    },
    {
      title: 'Software Development',
      desc: 'Custom software solutions, web and mobile applications, enterprise systems, and digital platforms tailored to your business needs.'
    },
    {
      title: 'Security Technologies',
      desc: 'Comprehensive security solutions including surveillance systems, access control, cybersecurity, network security, and risk management.'
    },
    {
      title: 'IT Consulting & Support',
      desc: 'Expert IT consulting, strategic planning, system optimization, 24/7 technical support, and ongoing maintenance services.'
    },
    {
      title: 'Networking Solutions',
      desc: 'Network design, implementation, wireless solutions, VPN setup, network monitoring, and infrastructure optimization.'
    },
    {
      title: 'Cloud Solutions',
      desc: 'Cloud migration, hosting services, backup and disaster recovery, cloud infrastructure management, and SaaS solutions.'
    },
    {
      title: 'ICT Training & Development',
      desc: 'Professional training programs, certification courses, skills development, and technology workshops for individuals and organizations.'
    }
  ];

  services.forEach((service, index) => {
    if (yPos > pageHeight - 40) {
      doc.addPage();
      // Add header to new page
      doc.setFillColor(37, 99, 235);
      doc.rect(0, 0, pageWidth, 25, 'F');
      doc.setFontSize(24);
      doc.setTextColor(255, 255, 255);
      try {
        doc.setFont('PlayfairDisplay', 'bold');
      } catch {
        doc.setFont('helvetica', 'bold');
      }
      doc.text('Our Services', margin, 17);
      yPos = 40;
    }

    // Service bullet point
    doc.setFillColor(37, 99, 235);
    doc.circle(margin + 2, yPos - 1.5, 1.5, 'F');

    doc.setFontSize(11);
    doc.setTextColor(37, 99, 235);
    doc.setFont('helvetica', 'bold');
    doc.text(service.title, margin + 6, yPos);
    
    yPos += 5;
    doc.setFontSize(9);
    doc.setTextColor(80, 80, 80);
    doc.setFont('helvetica', 'normal');
    const splitDesc = doc.splitTextToSize(service.desc, pageWidth - (margin * 2) - 6);
    doc.text(splitDesc, margin + 6, yPos);
    yPos += splitDesc.length * 4 + 6;
  });

  // Add footer to services page (or overflow page if created)
  addPageFooter();

  // ==================== PAGE 4: TEAM & CONTACT ====================
  doc.addPage();

  // Background watermark logo (very light for subtle effect) - ADDED FOR PAGE 3
  const watermarkCenterX3 = pageWidth / 2;
  const watermarkCenterY3 = pageHeight / 2;
  const scale3 = 8; // Make it bigger
  
  doc.setFillColor(240, 245, 250); // Very light blue
  
  // Large watermark logo in center
  doc.circle(watermarkCenterX3, watermarkCenterY3, 3 * scale3, 'F');
  doc.circle(watermarkCenterX3 - 8 * scale3, watermarkCenterY3 + 8 * scale3, 2.5 * scale3, 'F');
  doc.circle(watermarkCenterX3 + 8 * scale3, watermarkCenterY3 + 8 * scale3, 2.5 * scale3, 'F');
  doc.circle(watermarkCenterX3 - 8 * scale3, watermarkCenterY3 + 20 * scale3, 2.5 * scale3, 'F');
  doc.circle(watermarkCenterX3 + 8 * scale3, watermarkCenterY3 + 20 * scale3, 2.5 * scale3, 'F');
  doc.circle(watermarkCenterX3, watermarkCenterY3 + 28 * scale3, 3 * scale3, 'F');
  
  doc.setFillColor(245, 240, 250); // Very light purple
  doc.circle(watermarkCenterX3 - 4 * scale3, watermarkCenterY3 + 14 * scale3, 3.5 * scale3, 'F');
  doc.circle(watermarkCenterX3 + 4 * scale3, watermarkCenterY3 + 14 * scale3, 3.5 * scale3, 'F');

  // Header background
  doc.setFillColor(37, 99, 235);
  doc.rect(0, 0, pageWidth, 25, 'F');

  // Page title
  doc.setFontSize(24);
  doc.setTextColor(255, 255, 255);
  try {
    doc.setFont('PlayfairDisplay', 'bold');
  } catch {
    doc.setFont('helvetica', 'bold');
  }
  doc.text('Our Leadership Team', margin, 17);

  yPos = 40;

  // Founders Section
  doc.setFontSize(16);
  doc.setTextColor(37, 99, 235);
  try {
    doc.setFont('PlayfairDisplay', 'bold');
  } catch {
    doc.setFont('helvetica', 'bold');
  }
  doc.text('Meet Our Founders', margin, yPos);
  
  yPos += 10;

  const founders = [
    {
      name: 'Mantsie Senyane Bright',
      role: 'Co-Founder & Technology Director',
      bio: 'Mantsie brings extensive expertise in technology innovation and business strategy. With a passion for empowering communities through technology, Mantsie leads our technology vision and ensures we deliver cutting-edge solutions that make a real difference.'
    },
    {
      name: 'Edgar Tshwarelo Moloantoa',
      role: 'Co-Founder & Operations Director',
      bio: 'Edgar specializes in operational excellence and strategic partnerships. His commitment to quality service delivery and customer satisfaction drives our operational standards and ensures we exceed client expectations on every project.'
    }
  ];

  founders.forEach((founder) => {
    // Founder box
    doc.setFillColor(243, 244, 246);
    doc.roundedRect(margin, yPos - 5, pageWidth - (margin * 2), 35, 2, 2, 'F');

    // Avatar placeholder
    doc.setFillColor(37, 99, 235);
    const avatarX = margin + 5;
    const avatarY = yPos;
    doc.circle(avatarX + 6, avatarY + 6, 6, 'F');
    
    // Initials
    doc.setFontSize(10);
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    const initials = founder.name.split(' ').map(n => n[0]).join('');
    doc.text(initials, avatarX + 6, avatarY + 8, { align: 'center' });

    // Name and role
    doc.setFontSize(12);
    doc.setTextColor(37, 99, 235);
    doc.setFont('helvetica', 'bold');
    doc.text(founder.name, avatarX + 15, yPos + 3);
    
    doc.setFontSize(10);
    doc.setTextColor(107, 70, 193);
    doc.setFont('helvetica', 'normal');
    doc.text(founder.role, avatarX + 15, yPos + 9);

    // Bio
    doc.setFontSize(9);
    doc.setTextColor(80, 80, 80);
    const splitBio = doc.splitTextToSize(founder.bio, pageWidth - (margin * 2) - 25);
    doc.text(splitBio, avatarX + 15, yPos + 15);

    yPos += 42;
  });

  // Company Values
  yPos += 5;
  doc.setFontSize(16);
  doc.setTextColor(37, 99, 235);
  try {
    doc.setFont('PlayfairDisplay', 'bold');
  } catch {
    doc.setFont('helvetica', 'bold');
  }
  doc.text('Our Core Values', margin, yPos);
  
  yPos += 8;

  const values = [
    'Innovation: Embracing cutting-edge technology and creative solutions',
    'Excellence: Delivering quality in every project and interaction',
    'Integrity: Building trust through transparency and ethical practices',
    'Empowerment: Enabling growth through skills development and support',
    'Customer Focus: Prioritizing client success and satisfaction'
  ];

  doc.setFontSize(9);
  doc.setTextColor(60, 60, 60);
  doc.setFont('helvetica', 'normal');
  
  values.forEach(value => {
    doc.setFillColor(37, 99, 235);
    doc.circle(margin + 2, yPos - 1.5, 1.2, 'F');
    doc.text(value, margin + 6, yPos);
    yPos += 6;
  });

  // Industry Expertise
  yPos += 6;
  doc.setFontSize(16);
  doc.setTextColor(37, 99, 235);
  try {
    doc.setFont('PlayfairDisplay', 'bold');
  } catch {
    doc.setFont('helvetica', 'bold');
  }
  doc.text('Industry Expertise', margin, yPos);
  
  yPos += 8;

  const industries = [
    'Education & Training',
    'Healthcare & Medical',
    'Retail & E-commerce',
    'Financial Services',
    'Government & Public Sector',
    'Manufacturing & Logistics'
  ];

  doc.setFontSize(9);
  doc.setTextColor(60, 60, 60);
  doc.setFont('helvetica', 'normal');
  
  const col1X = margin + 6;
  const col2X = centerX + 6;
  let currentY = yPos;
  
  industries.forEach((industry, index) => {
    const xPos = index % 2 === 0 ? col1X : col2X;
    if (index % 2 === 0 && index > 0) currentY += 5;
    
    doc.setFillColor(37, 99, 235);
    doc.circle(xPos - 4, currentY - 1.5, 1.2, 'F');
    doc.text(industry, xPos, currentY);
  });
  
  yPos = currentY + 8;

  // Contact Information Section
  yPos += 8;
  doc.setFillColor(29, 38, 55);
  doc.roundedRect(margin, yPos, pageWidth - (margin * 2), 60, 3, 3, 'F');

  yPos += 10;
  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  try {
    doc.setFont('PlayfairDisplay', 'bold');
  } catch {
    doc.setFont('helvetica', 'bold');
  }
  doc.text('Get In Touch', margin + 10, yPos);

  yPos += 10;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  // Location
  doc.setFillColor(37, 99, 235);
  doc.circle(margin + 12, yPos - 1.5, 2, 'F');
  doc.setTextColor(200, 200, 200);
  doc.text('Location:', margin + 18, yPos);
  doc.setTextColor(255, 255, 255);
  doc.text('Pretoria, Gauteng, South Africa', margin + 40, yPos);

  yPos += 7;
  // Phone
  doc.setFillColor(37, 99, 235);
  doc.circle(margin + 12, yPos - 1.5, 2, 'F');
  doc.setTextColor(200, 200, 200);
  doc.text('Phone:', margin + 18, yPos);
  doc.setTextColor(255, 255, 255);
  doc.text('071 157 8316 | 072 447 6949', margin + 40, yPos);

  yPos += 7;
  // Email
  doc.setFillColor(37, 99, 235);
  doc.circle(margin + 12, yPos - 1.5, 2, 'F');
  doc.setTextColor(200, 200, 200);
  doc.text('Email:', margin + 18, yPos);
  doc.setTextColor(255, 255, 255);
  doc.text('EDGARBRIGHTGROUP@GMAIL.COM', margin + 40, yPos);

  yPos += 10;
  // Call to action
  doc.setFontSize(11);
  doc.setTextColor(34, 211, 238);
  doc.setFont('helvetica', 'bold');
  const ctaText = 'Ready to transform your business with technology?';
  doc.text(ctaText, centerX, yPos, { align: 'center' });
  
  yPos += 6;
  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);
  doc.setFont('helvetica', 'normal');
  doc.text('Contact us today to discuss your IT solutions needs.', centerX, yPos, { align: 'center' });

  // Add footer to page 3
  addPageFooter();

  // Save the PDF
  doc.save('EDIGHT_Company_Profile.pdf');
};
