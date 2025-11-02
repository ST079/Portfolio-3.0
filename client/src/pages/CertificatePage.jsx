import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFilter,
  FaExternalLinkAlt,
  FaDownload,
  FaAward,
} from "react-icons/fa";
import { categories, certificatesInfo } from "../data/certificate";

const CertificatePage = () => {
  const [certificates, setCertificates] = useState([]);
  const [filter, setFilter] = useState("all");
  const [selectedCert, setSelectedCert] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with mock data
    const fetchCertificates = async () => {
      try {
        setTimeout(() => {
          setCertificates(certificatesInfo);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching certificates:", error);
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  const filteredCertificates = certificates.filter((cert) => {
    const matchesFilter = filter === "all" || cert.category === filter;
    return matchesFilter;
  });

  const openModal = (certificate) => {
    setSelectedCert(certificate);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  const getCategoryColor = (category) => {
    const colors = {
      frontend: "bg-green-500",
      backend: "bg-purple-500",
    };
    return colors[category] || "bg-gray-500";
  };

  if (loading) {
    return (
      <div className={`p-6 rounded-lg shadow-lg`}>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <motion.h1
        className="text-3xl font-bold mb-8 font-mono border-b-2 border-blue-500 pb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        $ certificates
      </motion.h1>

      {/* Stats Header */}
      <div className={`p-6 rounded-lg mb-8 `}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold font-mono flex items-center">
              <FaAward className="text-yellow-500 mr-3" />
              Professional Certifications
            </h2>
            <p className={`mt-2 `}>
              Validating expertise across modern technologies
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold font-mono">
              {certificates.length}
            </div>
            <div>Total Certificates</div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`flex items-center px-4 py-2 rounded-full font-mono text-sm whitespace-nowrap transition ${
                filter === category.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <FaFilter className="mr-2" size={12} />
              {category.name}
              <span
                className={`ml-2 px-1.5 py-0.5 rounded-full text-xs ${
                  filter === category.id ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Certificates Grid */}
      <AnimatePresence>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {filteredCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`rounded-lg overflow-hidden cursor-pointer transform transition hover:scale-105`}
              onClick={() => openModal(certificate)}
            >
              {/* Certificate Header */}
              <div
                className={`p-4 ${getCategoryColor(
                  certificate.category
                )} text-white`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{certificate.title}</h3>
                    <p className="text-sm opacity-90">{certificate.issuer}</p>
                  </div>
                  <FaAward className="text-white opacity-80" />
                </div>
              </div>

              {/* Certificate Body */}
              <div className="p-2 shadow-sm mb-5 bg-body-tertiary rounded">
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-sm px-2 py-1 rounded`}>
                    {new Date(certificate.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full capitalize `}
                  >
                    {certificate.category}
                  </span>
                </div>

                <p className={`text-sm mb-4 `}>{certificate.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {certificate.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`text-xs px-2 py-1 rounded `}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <button className={`flex items-center text-sm `}>
                    <FaExternalLinkAlt className="mr-1" size={12} />
                    View
                  </button>
                  {/* <button className={`flex items-center text-sm `}>
                    <FaDownload className="mr-1" size={12} />
                    Download
                  </button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredCertificates.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <FaAward className={`mx-auto text-4xl mb-4 `} />
          <h3 className="text-xl font-mono mb-2">No certificates found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </motion.div>
      )}

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto `}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                className={`p-6 ${getCategoryColor(
                  selectedCert.category
                )} text-white rounded-t-lg`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedCert.title}</h2>
                    <p className="text-lg opacity-90">{selectedCert.issuer}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-white opacity-80 hover:opacity-100"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 bg-amber-50">
                <div className="p-6">
                  {/* Certificate Image */}
                  <div className="mb-6">
                    <img
                      src={selectedCert.imageUrl}
                      alt={selectedCert.title}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-mono text-sm mb-2">ISSUED</h4>
                    <p>
                      {new Date(selectedCert.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-sm mb-2">CATEGORY</h4>
                    <p className="capitalize">{selectedCert.category}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-mono text-sm mb-2">DESCRIPTION</h4>
                  <p>{selectedCert.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-mono text-sm mb-2">SKILLS VALIDATED</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm `}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {selectedCert.credentialUrl && (
                    <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-mono `}
                    >
                      <FaExternalLinkAlt />
                      Verify Credential
                    </a>
                  )}

                  {selectedCert.credentialID && (
                    <div
                      className={`flex-1 flex flex-col items-center justify-center gap-2 py-3 px-4 rounded-lg font-mono border `}
                    >
                      <span className="font-bold">Credential ID</span>
                      <span>{selectedCert.credentialID}</span>
                    </div>
                  )}
                  {/* <button
                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-mono border `}
                  >
                    <FaDownload />
                    Download PDF
                  </button> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CertificatePage;
