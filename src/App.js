import { useState } from "react";
import Button from "./Button";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  return (
    <div className="steps">
      <div className="numbers">
        {messages.map((_, i) => (
          <div className={step >= i + 1 ? "active" : ""} key={i}>
            {i + 1}
          </div>
        ))}
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <Button onClick={handlePrevious}>
          <span>👈</span> Previous
        </Button>
        <Button onClick={handleNext}>
          Next <span>👉</span>
        </Button>
      </div>
    </div>
  );
}
