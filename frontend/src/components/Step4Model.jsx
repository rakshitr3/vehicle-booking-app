import { useEffect, useState } from 'react';

const Step4Model = ({ next, prev, updateFormData, data }) => {
  const [models, setModels] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/types/${data.vehicleType}/vehicles`)
      .then(res => res.json())
      .then(setModels);                                                   
  }, [data.vehicleType]);

  const handleNext = () => {
    if (!data.vehicleId) {
      setError('Select a vehicle model.');
      return;
    }
    setError('');
    next();
  };

  return (
    <div>
      <h4>Select Vehicle Model</h4>
      {models.map(vehicle => (
        <div className="form-check" key={vehicle.id}>
          <input
            type="radio"
            className="form-check-input"
            name="vehicleId"
            value={vehicle.id}
            checked={data.vehicleId == vehicle.id}
            onChange={() => updateFormData({ vehicleId: vehicle.id })}
          />
          <label className="form-check-label">{vehicle.modelName}</label>
        </div>
      ))}
      {error && <p className="text-danger">{error}</p>}
      <button className="btn btn-secondary me-2 mt-2" style={{width:"25%"}} onClick={prev}>Back</button>
      <button className="btn btn-primary mt-2" style={{width:"25%"}} onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step4Model;
