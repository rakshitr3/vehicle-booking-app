import { useState } from "react";

const Step5Date = ({ prev, formData }) => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async () => {
    if (!start || !end) return setStatus('Pick start and end date.');

    const body = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      vehicleId: formData.vehicleId,
      startDate: start,
      endDate: end,
    };

    const res = await fetch('http://localhost:3000/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const result = await res.json();
    setStatus(result.message || result.error);
  };

  return (
    <div>
      <h4>Pick Booking Dates</h4>
      <h6>Start Date</h6>
      <input type="date" className="form-control" value={start} onChange={(e) => setStart(e.target.value)} />
      <h6 className="mt-2">End Date</h6>
      <input type="date" className="form-control" value={end} onChange={(e) => setEnd(e.target.value)} />
      {status && <p className="mt-2">{status}</p>}
      <button className="btn btn-secondary me-2 mt-3" style={{width:"25%"}} onClick={prev}>Back</button>
      <button className="btn btn-success mt-3" style={{width:"25%"}} onClick={handleSubmit}>Book</button>
    </div>
  );
};

export default Step5Date;
