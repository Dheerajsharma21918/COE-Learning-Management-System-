import React, { useState } from 'react';
import './CourseContent.css';

const CourseContent = ({ module, onComplete, isLastModule, quizCompleted }) => {
  const [videoWatched, setVideoWatched] = useState(false);

  const markAsWatched = () => {
    setVideoWatched(true);
  };

  return (
    <div className="course-content">
      <div className="content-header">
        <h2>{module.title}</h2>
        <div className="module-info">
          <span className="duration">Duration: {module.duration}</span>
          {module.completed && <span className="status-completed">Completed</span>}
        </div>
      </div>
      
      <div className="video-container">
        <iframe
          src={module.videoUrl}
          className="course-video"
          title={module.title}
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
        
        <div className="video-controls">
          <button 
            className="btn-watched"
            onClick={markAsWatched}
          >
            ✅ I've Watched This Video
          </button>
          <button 
            className="btn-primary"
            onClick={() => window.open(module.videoUrl, '_blank')}
          >
            🔗 Open in New Tab
          </button>
        </div>
      </div>
      
      <div className="module-description">
        <h3>About this module</h3>
        <p>{module.description}</p>
      </div>
      
      <div className="completion-section">
        {!module.completed ? (
          <>
            <p>📺 Watch the video completely to unlock the quiz</p>
            <button 
              className={`btn-complete ${videoWatched ? '' : 'disabled'}`}
              onClick={onComplete}
              disabled={!videoWatched}
            >
              {videoWatched ? '🎯 Mark as Complete & Take Quiz' : '⏳ Mark as Watched First'}
            </button>
          </>
        ) : (
          <>
            <p>✅ You've completed this module{quizCompleted ? ' and passed the quiz!' : '.'}</p>
            {!isLastModule && !quizCompleted && (
              <p>➡️ Proceed to the next module to continue your learning journey</p>
            )}
            {quizCompleted && isLastModule && (
              <p>🎉 Congratulations! You've completed the entire course!</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CourseContent;