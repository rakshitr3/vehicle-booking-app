import { useState } from "react";

const Step1Name = ({ next, updateFormData, data }) => {
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!data.firstName || !data.lastName) {
      setError('Please fill in both names.');
      return;
    }
    setError('');
    next();
  };

  return (
    <div>
      <h4>First, What's your name?</h4>
      <h6>First Name </h6>
      <input className="form-control mb-2" placeholder="First Name" value={data.firstName}
        onChange={(e) => updateFormData({ firstName: e.target.value })} />
          
        <h6>Last Name</h6>
      <input className="form-control mb-2" placeholder="Last Name" value={data.lastName}
        onChange={(e) => updateFormData({ lastName: e.target.value })} />
        
      {error && <p className="text-danger">{error}</p>}
      <button className="btn btn-primary mt-2" onClick={handleNext} style={{width:"100%",background:"grey",border:"none", borderRadius:"0px"}}>Next</button>
    </div>
  );
};

export default Step1Name;
