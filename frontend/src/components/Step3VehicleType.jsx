import { useEffect, useState } from 'react';

const Step3VehicleType = ({ next, prev, updateFormData, data }) => {
  const [types, setTypes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/types')
      .then(res => res.json())
      .then(json => {
        const filtered = json.filter(type => type.wheels === Number(data.wheels));
        setTypes(filtered);
      });
  }, [data.wheels]);

  const handleNext = () => {
    if (!data.vehicleType) {
      setError('Select a vehicle type.');
      return;
    }
    setError('');
    next();
  };

  return (
    <div>
      <h4>Type of vehicle</h4>
      {types.map(type => (
        <div className="form-check" key={type.id}>
          <input
            type="radio"
            className="form-check-input"
            name="vehicleType"
            value={type.id}
            checked={data.vehicleType == type.id}
            onChange={() => updateFormData({ vehicleType: type.id })}
          />
          <label className="form-check-label">{type.name}</label>
        </div>
      ))}
      {error && <p className="text-danger">{error}</p>}
      <button className="btn btn-secondary me-2 mt-2" style={{width:"25%"}} onClick={prev}>Back</button>
      <button className="btn btn-primary mt-2" style={{width:"25%"}} onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step3VehicleType;
