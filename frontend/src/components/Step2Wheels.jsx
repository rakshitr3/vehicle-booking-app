import { useState } from "react";

const Step2Wheels = ({ next, prev, updateFormData, data }) => {
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!data.wheels) {
      setError('Please select a wheel option.');
      return;
    }
    setError('');
    next();
  };

  return (
    <div>
      <h4>Number of Wheels</h4>
      {[2, 4].map(opt => (
        <div key={opt} className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="wheels"
            value={opt}
            checked={Number(data.wheels) === opt}
            onChange={() => updateFormData({ wheels: opt })}
          />
          <label className="form-check-label">{opt}</label>
        </div>
      ))}
      {error && <p className="text-danger">{error}</p>}
      <button className="btn btn-secondary me-2 mt-2" style={{width:"25%"}} onClick={prev}>Back</button>
      <button className="btn btn-primary mt-2" style={{width:"25%"}}  onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step2Wheels;
