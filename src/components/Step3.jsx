// Step3.jsx
import React from "react";

const Step3 = ({ formData, handleChange, sendEmail, isSending }) => {
  return (
    <div className="flex flex-col gap-4">
      <label className="text-lg">Alright, what’s the message?</label>
      <textarea
        required
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Write your message"
        rows={4}
        className="p-3 rounded-lg bg-neutral-700 focus:outline-none"
      />
      <button
        onClick={sendEmail}
        disabled={!formData.message.trim() || isSending}
        className={`mt-4 ${
          formData.message.trim() && !isSending
            ? "bg-purple-600 hover:bg-purple-700"
            : "bg-gray-600 cursor-not-allowed"
        } px-6 py-2 rounded-lg transition`}
      >
        {isSending ? "Sending..." : "Send"}
      </button>
    </div>
  );
};

export default Step3;
