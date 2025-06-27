const ProgressBar = ({ step }) => (
  <div className="progress mb-4">
    <div
      className="progress-bar"
      style={{ width: `${(step / 5) * 100}%` }}
    >
      Step {step}/5
    </div>
  </div>
);

export default ProgressBar;
