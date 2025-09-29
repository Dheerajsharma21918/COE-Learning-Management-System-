
// components/Quiz.js

import React, { useState } from 'react';
import './Quiz.css';

const Quiz = ({ module, onComplete, onReviewModule }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  // Your quiz questions array here...
  const video1Questions = [

    {
      id: 1,
      question: "What is the primary function of the GKG Titan SMT Screen Printer?",
      options: [
        "Place components on PCB",
        "Inspect solder joints",
        "Print solder paste onto PCB pads",
        "Reflow solder the PCB"
      ],
      correctAnswer: 2
    },
    {
      id: 2,
      question: "Before solder paste printing, what must be aligned?",
      options: [
        "PCB with stencil",
        "PCB with pick & place machine",
        "Squeegee with PCB pads",
        "Conveyor with reflow oven"
      ],
      correctAnswer: 0
    },
    {
      id: 3,
      question: "What is used to push solder paste across the stencil apertures?",
      options: [
        "Vacuum nozzle",
        "Laser beam",
        "Squeegee",
        "Hot air knife"
      ],
      correctAnswer: 2
    },
    {
      id: 4,
      question: "Which parameter is critical for consistent solder paste deposition?",
      options: [
        "Stencil thickness",
        "Conveyor belt speed",
        "Component reel tension",
        "AOI camera resolution"
      ],
      correctAnswer: 0
    },
    {
      id: 5,
      question: "What does the machine's vision system check before printing?",
      options: [
        "Component polarity",
        "Fiducial marks",
        "Reflow profile",
        "Operator badge"
      ],
      correctAnswer: 1
    },
    {
      id: 6,
      question: "Which cleaning method is commonly used in the printer to clean the stencil underside?",
      options: [
        "Air pressure",
        "Ultrasonic waves",
        "Vacuum + solvent wipe",
        "Laser cleaning"
      ],
      correctAnswer: 2
    },
    {
      id: 7,
      question: "What happens if stencil and PCB are not properly aligned?",
      options: [
        "Double reflow",
        "Component misplacement",
        "Solder paste bridging",
        "Automatic machine shutdown"
      ],
      correctAnswer: 2
    },
    {
      id: 8,
      question: "Why is controlled squeegee pressure important?",
      options: [
        "To reduce machine vibration",
        "To prevent PCB warpage",
        "To ensure proper paste filling of stencil apertures",
        "To align fiducial marks"
      ],
      correctAnswer: 2
    },
    {
      id: 9,
      question: "What is the typical angle of the squeegee blade during paste printing?",
      options: [
        "0°",
        "30°",
        "45°",
        "90°"
      ],
      correctAnswer: 2
    },
    {
      id: 10,
      question: "Which parameter directly affects the amount of solder paste deposited?",
      options: [
        "Stencil thickness",
        "Stencil cleaning frequency",
        "Reflow temperature",
        "Conveyor belt width"
      ],
      correctAnswer: 0
    },
    {
      id: 11,
      question: "What is the purpose of the 2D solder paste inspection inside the printer?",
      options: [
        "To verify solder joint quality",
        "To check paste height and coverage",
        "To measure PCB warpage",
        "To inspect component polarity"
      ],
      correctAnswer: 1
    },
    {
      id: 12,
      question: "If excess solder paste remains on the stencil surface, what should be done?",
      options: [
        "Adjust conveyor width",
        "Increase squeegee speed",
        "Recycle or remove paste properly",
        "Run reflow oven"
      ],
      correctAnswer: 2
    },
    {
      id: 13,
      question: "What is the purpose of the stencil cleaning cycle after every few prints?",
      options: [
        "Reduce cycle time",
        "Maintain solder paste deposition quality",
        "Cool down PCB",
        "Improve reflow soldering"
      ],
      correctAnswer: 1
    },
    {
      id: 14,
      question: "What does insufficient solder paste on pads lead to?",
      options: [
        "Open solder joints",
        "Solder bridging",
        "Component tombstoning",
        "Reflow overheating"
      ],
      correctAnswer: 0
    },
    {
      id: 15,
      question: "Which feature in GKG Titan helps to minimize operator intervention?",
      options: [
        "Manual alignment tool",
        "Automatic vision alignment",
        "Hand squeegee mode",
        "Conveyor belt calibration"
      ],
      correctAnswer: 1
    },
    {
      id: 16,
      question: "What should an operator always wear while working on SMT printers?",
      options: [
        "Safety shoes only",
        "ESD apron and wrist strap",
        "Hard hat",
        "Face shield"
      ],
      correctAnswer: 1
    },
    {
      id: 17,
      question: "What is the standard environment requirement for solder paste printing?",
      options: [
        "High humidity, low temperature",
        "22–25°C, controlled humidity",
        "30–35°C, open ventilation",
        "Random ambient conditions"
      ],
      correctAnswer: 1
    },
    {
      id: 18,
      question: "What action should be taken if solder paste dries on the stencil?",
      options: [
        "Increase reflow oven temperature",
        "Clean stencil immediately",
        "Increase squeegee pressure",
        "Skip alignment process"
      ],
      correctAnswer: 1
    },
    {
      id: 19,
      question: "What is the first step when changing to a new PCB model?",
      options: [
        "Change reflow profile",
        "Change stencil and PCB program",
        "Adjust AOI lighting",
        "Replace conveyor belt"
      ],
      correctAnswer: 1
    },
    {
      id: 20,
      question: "What does excessive squeegee pressure cause?",
      options: [
        "Increased paste transfer",
        "Damage to stencil and PCB",
        "Better alignment",
        "Reduced cleaning frequency"
      ],
      correctAnswer: 1
    }
  ];

  // Quiz questions for second video
  const video2Questions = [
    {
      id: 1,
      question: "What is the first step in the solder paste printing process?",
      options: [
        "PCB clamping",
        "Component placement",
        "Reflow soldering"
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      question: "Which machine is commonly used for solder paste printing?",
      options: [
        "Pick and Place Machine",
        "Screen Printer",
        "AOI Machine"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "What is applied on the PCB through the stencil?",
      options: [
        "Flux",
        "Adhesive",
        "Solder paste"
      ],
      correctAnswer: 2
    },
    {
      id: 4,
      question: "What ensures correct alignment between PCB and stencil?",
      options: [
        "Manual alignment",
        "Fiducial cameras",
        "Reflow oven"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "What tool spreads solder paste on the stencil?",
      options: [
        "Nozzle",
        "Squeegee blade",
        "Feeder"
      ],
      correctAnswer: 1
    },
    {
      id: 6,
      question: "What parameter is controlled during paste spreading?",
      options: [
        "Air flow",
        "Angle and pressure",
        "Reflow profile"
      ],
      correctAnswer: 1
    },
    {
      id: 7,
      question: "Why is solder paste printing considered critical in SMT?",
      options: [
        "It determines final component count",
        "It ensures accurate paste deposition",
        "It sets reflow temperature"
      ],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "What happens if solder paste is misaligned?",
      options: [
        "Reflow becomes faster",
        "Component misplacement",
        "Stronger solder joints"
      ],
      correctAnswer: 1
    },
    {
      id: 9,
      question: "Which material is used as the stencil?",
      options: [
        "Plastic film",
        "Metal sheet",
        "Glass plate"
      ],
      correctAnswer: 1
    },
    {
      id: 10,
      question: "What checks the quality of solder paste printing?",
      options: [
        "AOI system",
        "Reflow oven",
        "Pick and place machine"
      ],
      correctAnswer: 0
    },
    {
      id: 11,
      question: "How is excess solder paste handled during printing?",
      options: [
        "Recycled back",
        "Heated immediately",
        "Thrown away"
      ],
      correctAnswer: 0
    },
    {
      id: 12,
      question: "Which of the following defects is common in solder paste printing?",
      options: [
        "Tombstoning",
        "Insufficient paste",
        "Cold solder joint"
      ],
      correctAnswer: 1
    },
    {
      id: 13,
      question: "What is the main function of fiducial marks?",
      options: [
        "Hold PCB in place",
        "Assist in alignment",
        "Indicate reflow zones"
      ],
      correctAnswer: 1
    },
    {
      id: 14,
      question: "Which step follows solder paste printing?",
      options: [
        "Reflow soldering",
        "Component placement",
        "PCB cleaning"
      ],
      correctAnswer: 1
    },
    {
      id: 15,
      question: "What determines the volume of solder paste applied?",
      options: [
        "Stencil thickness",
        "Reflow oven length",
        "Pick and place speed"
      ],
      correctAnswer: 0
    },
    {
      id: 16,
      question: "What ensures uniform solder paste deposition?",
      options: [
        "Accurate stencil design",
        "High reflow temperature",
        "Strong airflow"
      ],
      correctAnswer: 0
    },
    {
      id: 17,
      question: "What type of defect occurs if too much solder paste is deposited?",
      options: [
        "Open circuit",
        "Solder bridging",
        "Component missing"
      ],
      correctAnswer: 1
    },
    {
      id: 18,
      question: "Why is solder paste viscosity important?",
      options: [
        "It prevents oxidation",
        "It affects paste flow and print quality",
        "It increases reflow oven efficiency"
      ],
      correctAnswer: 1
    },
    {
      id: 19,
      question: "How often should stencils be cleaned during production?",
      options: [
        "After every PCB",
        "After defined cycle (e.g., 4 hours)",
        "Only once per shift"
      ],
      correctAnswer: 1
    },
    {
      id: 20,
      question: "Which factor does NOT affect solder paste printing quality?",
      options: [
        "Stencil alignment",
        "Squeegee pressure",
        "Reflow oven temperature"
      ],
      correctAnswer: 2
    }
  ];
  
  const quizQuestions = module.id === 1 ? video1Questions : video2Questions;

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex
    });
  };

  const calculateScore = () => {
    let correct = 0;
    quizQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    const percentage = (correct / quizQuestions.length) * 100;
    setScore(percentage);
    setShowResults(true);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleQuizCompletion = () => {
    onComplete(score >= 70);
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const handleReviewModuleClick = () => {
    // Reset quiz state and call the review function
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
    onReviewModule();
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>Quiz: {module.title}</h2>
        <p>Answer all {quizQuestions.length} questions to complete the module. You need 70% to pass.</p>
      </div>
      
      {!showResults ? (
        <div className="quiz-content">
          <div className="question-progress">
            Question {currentQuestion + 1} of {quizQuestions.length}
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="question-card">
            <h3>{quizQuestions[currentQuestion].question}</h3>
            <div className="options">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <div 
                  key={index}
                  className={`option ${selectedAnswers[currentQuestion] === index ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(currentQuestion, index)}
                >
                  <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                  <span className="option-text">{option}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="quiz-navigation">
            <button 
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="btn-secondary"
            >
              Previous
            </button>
            <span className="question-counter">
              {currentQuestion + 1} / {quizQuestions.length}
            </span>
            <button 
              onClick={handleNext}
              className="btn-primary"
              disabled={selectedAnswers[currentQuestion] === undefined}
            >
              {currentQuestion === quizQuestions.length - 1 ? 'Submit Quiz' : 'Next Question'}
            </button>
          </div>
        </div>
      ) : (
        <div className="quiz-results">
          <div className={`result-card ${score >= 70 ? 'passed' : 'failed'}`}>
            <h3>{score >= 70 ? 'Congratulations!' : 'Quiz Failed'}</h3>
            <div className="score-display">
              <div className="score-circle">
                <span>{Math.round(score)}%</span>
              </div>
            </div>
            <p className="result-message">
              {score >= 70 
                ? `You passed the quiz with a score of ${Math.round(score)}%!`
                : `Your score is ${Math.round(score)}%, which is below the required 70%.`
              }
            </p>
            <div className="result-actions">
              {score >= 70 ? (
                <button 
                  onClick={handleQuizCompletion}
                  className="btn-primary"
                >
                  {module.id === 1 ? 'Continue to Next Module' : 'Complete Course'}
                </button>
              ) : (
                <>
                  <button 
                    onClick={handleRetakeQuiz}
                    className="btn-primary"
                  >
                    Retake Quiz
                  </button>
                  <button 
                    onClick={handleReviewModuleClick}
                    className="btn-secondary"
                  >
                    Review Module Again
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
 