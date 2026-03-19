import SectionTitle from '../components/SectionTitle';
import CertificateCard from '../components/CertificateCard';

const certificatesData = [
  {
    title: 'Training in Data Structures and using C++',
    issuer: 'Cipher Schools',
    date: 'Jun 2025 - Jul 2025',
    link: 'https://drive.google.com/file/d/1ztK2aFp4JivI-lIAkgwwdT_xFlRavYXB/view'
  },
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL Online Certifications',
    date: 'Apr 2025',
    link: 'https://drive.google.com/file/d/1JqtqZX5D5QhDVX868JAPX2zNbJ0p4dU0/view'
  },
  {
    title: 'Google IT Support: Bits and Bytes',
    issuer: 'Coursera',
    date: 'Apr 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/VJL0AF4R01ES?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  },
  {
    title: 'Unlocking DSA with C',
    issuer: 'CSE Pathshala',
    date: 'Mar 2024',
    link: 'https://drive.google.com/file/d/1Nc7o4O31UrQayU0BzQ9OdgvkLBlQhEt9/view'
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          title="Certificates & Training" 
          subtitle="Continuous learning and professional credentials" 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {certificatesData.map((cert, index) => (
            <CertificateCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              link={cert.link}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
