// Step1.jsx
import React from "react";

const Step1 = ({ formData, handleChange, handleNext }) => {
  return (
    <div className="flex flex-col gap-4">
      <label className="text-lg">Hey, what's your name?</label>
      <input
        required
        type="text"
        name="user_name"
        value={formData.user_name}
        onChange={handleChange}
        placeholder="Enter your name"
        className="p-3 rounded-lg bg-neutral-700 focus:outline-none"
      />
      <button
        onClick={handleNext}
        disabled={!formData.user_name.trim()}
        className={`mt-4 ${
          formData.user_name.trim()
            ? "bg-purple-600 hover:bg-purple-700"
            : "bg-gray-600 cursor-not-allowed"
        } px-6 py-2 rounded-lg transition`}
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
