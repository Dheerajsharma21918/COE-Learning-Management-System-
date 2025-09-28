import React, { useState } from 'react';
import CourseContent from './CourseContent';
import Quiz from './Quiz';
import './Dashboard.css';

const Dashboard = () => {
  const [user] = useState({ name: 'Learner'});
  const [currentVideo, setCurrentVideo] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [modules, setModules] = useState([
    {
      id: 1,
      title: "SMT Solder Paste Printer",
      videoUrl: "https://drive.google.com/file/d/1rNPmhgvM-kn9Z-Ba-puri_ipcHkYbGsi/preview",
      description: "Learn about the SMT Screen Printer, its functions, alignment processes, and operational parameters.",
      duration: "02:59",
      completed: false

    },
    {
      id: 2,
      title: "Solder Paste Printing Defects",
      videoUrl: "https://drive.google.com/file/d/1xZ_AYf5gv-DvjzDwEzZbrP_yggqGixic/preview",
      description: "Understand the solder paste printing process, common defects, and quality control measures.",
      duration: "03:32",
      completed: false
    }
  ]);

  const courseData = {
    title: "Solder Paste Printer Course",
    modules: modules
  };

  const markAsComplete = (moduleId) => {
    const updatedModules = modules.map(module => 
      module.id === moduleId ? { ...module, completed: true } : module
    );
    setModules(updatedModules);
    setShowQuiz(true);
  };

  const handleQuizCompletion = (passed) => {
    setShowQuiz(false);
    if (passed) {
      setQuizCompleted(true);
      if (currentVideo < courseData.modules.length - 1) {
        setCurrentVideo(currentVideo + 1);
        setQuizCompleted(false);
      }
    }
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-left">
          <img src="/logos/coe-logo.png" alt="COE Logo" className="logo coe-logo" />
          <h1>COE Learning Management System</h1>
        </div>
        
        <div className="header-right">
          <div className="user-info">
            <span>Welcome back, {user.name}</span>
            <span className="person">{user.role}</span>
          </div>
          <img src="/logos/company-logo.png" alt="Company Logo" className="logo company-logo" />
        </div>
      </header>
      
      <div className="dashboard-content">
        <aside className="sidebar">
          <div className="course-info">
            <h2>{courseData.title}</h2>
            <div className="progress-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${(currentVideo / courseData.modules.length) * 100}%` }}
                ></div>
              </div>
              <span>Progress: {Math.round((currentVideo / courseData.modules.length) * 100)}%</span>
            </div>
          </div>
          
          <nav className="module-nav">
            <h3>Course Modules</h3>
            <ul>
              {courseData.modules.map((module, index) => (
                <li 
                  key={module.id} 
                  className={`${index === currentVideo ? 'active' : ''} ${module.completed ? 'completed' : ''}`}
                  onClick={() => {
                    setCurrentVideo(index);
                    setShowQuiz(false);
                    setQuizCompleted(false);
                  }}
                >
                  <span className="module-number">{index + 1}</span>
                  <span className="module-title">{module.title}</span>
                  {module.completed && <span className="completed-check">✓</span>}
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        
        <main className="main-content">
          {showQuiz ? (
            <Quiz 
              module={courseData.modules[currentVideo]}
              onComplete={handleQuizCompletion}
            />
          ) : (
            <CourseContent 
              module={courseData.modules[currentVideo]}
              onComplete={() => markAsComplete(courseData.modules[currentVideo].id)}
              isLastModule={currentVideo === courseData.modules.length - 1}
              quizCompleted={quizCompleted}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;