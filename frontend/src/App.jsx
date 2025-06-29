import React, { useState } from 'react';
import Step1Name from './components/Step1Name';
import Step2Wheels from './components/Step2Wheels';
import Step3VehicleType from './components/Step3VehicleType';
import Step4Model from './components/Step4Model';
import Step5Date from './components/Step5Date';
import ProgressBar from './components/ProgressBar';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    wheels: '',
    vehicleType: '',
    vehicleId: '',
    startDate: '',
    endDate: ''
  });

  const next = () => setStep(prev => prev + 1);
  const prev = () => setStep(prev => prev - 1);

  const goToStep = (num) => setStep(num);

  const updateFormData = (newData) =>
    setFormData(prev => ({ ...prev, ...newData }));

  return (
  
    <div style={{position:"relative",top:"-50px",left:"300px",display:"flex",gap:"18px",flexDirection:"column"}} className="container mt-5">
      <Navbar/>
         <Banner/>
      <ProgressBar step={step} />
      {step === 1 && <Step1Name next={next} updateFormData={updateFormData} data={formData} />}
      {step === 2 && <Step2Wheels next={next} prev={prev} updateFormData={updateFormData} data={formData} />}
      {step === 3 && <Step3VehicleType next={next} prev={prev} updateFormData={updateFormData} data={formData} />}
      {step === 4 && <Step4Model next={next} prev={prev} updateFormData={updateFormData} data={formData} />}
      {step === 5 && <Step5Date prev={prev} formData={formData} goToStep={goToStep} />}
    </div>
  );
};

export default App;