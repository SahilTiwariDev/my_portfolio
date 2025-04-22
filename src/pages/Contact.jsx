import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import ScrollToTop from "../components/ScrollToTop";

const Contact = () => {
  const [start, setStart] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false); // ✅ Added

  const handleNext = () => {
    if (step === 1 && formData.user_name.trim() === "") return;
    if (step === 2 && !/\S+@\S+\.\S+/.test(formData.user_email)) return;
    setStep((prev) => prev + 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = () => {
    if (formData.message.trim() === "") return;

    setIsSending(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setFormData({ user_name: "", user_email: "", message: "" });
        setStep(1);
        setStart(false);
        setShowSuccessMsg(true); // ✅ Show message
        setTimeout(() => setShowSuccessMsg(false), 4000); // ✅ Hide after 4s
      })
      .catch((err) => console.error("Email error:", err))
      .finally(() => setIsSending(false));
  };

  const formVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -40, transition: { duration: 0.4 } },
  };

  const getProgressWidth = () => {
    if (step === 1) return "0%";
    if (step === 2) return "50%";
    return "100%";
  };

  return (
    <div className="relative min-h-screen bg-neutral-800 text-white font-mono px-4 sm:px-6 flex items-center justify-center">
      <ScrollToTop />

      {/* ✅ Success Message */}
      {showSuccessMsg && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-2xl z-50 text-sm sm:text-base md:text-lg sm:px-8 sm:py-4"
        >
          On the way! 🚀
        </motion.div>
      )}

      <div className="absolute top-6 left-6 text-xl">
        Contact <span className="text-purple-500">/&gt;</span>
      </div>

      <div className="w-full max-w-md sm:max-w-lg mx-auto">
        {!start ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center gap-6"
          >
            <button
              onClick={() => setStart(true)}
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-lg transition shadow-lg"
            >
              Wanna tell me something?
            </button>
          </motion.div>
        ) : (
          <>
            {/* Progress Bar */}
            <div className="w-full mt-4 mb-6">
              <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-purple-500 rounded-full animate-wave"
                  initial={{ width: 0 }}
                  animate={{ width: getProgressWidth() }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                ></motion.div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={formVariants}
                >
                  <Step1
                    formData={formData}
                    handleChange={handleChange}
                    handleNext={handleNext}
                  />
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={formVariants}
                >
                  <Step2
                    formData={formData}
                    handleChange={handleChange}
                    handleNext={handleNext}
                  />
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={formVariants}
                >
                  <Step3
                    formData={formData}
                    handleChange={handleChange}
                    sendEmail={sendEmail}
                    isSending={isSending}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;
