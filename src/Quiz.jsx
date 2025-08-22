import React, { useState } from 'react';

function Quiz() {
  
  const questions = [
    {
      questionText: 'Which state of matter has a fixed volume but not a fixed shape?',
      answerOptions: [
        { answerText: 'Solid', isCorrect: false },
        { answerText: 'Liquid', isCorrect: true },
        { answerText: 'Gas', isCorrect: false },
        { answerText: 'Plasma', isCorrect: false },
      ],
    },
    {
      questionText: 'In a solid, how do the particles behave?',
      answerOptions: [
        { answerText: 'They move freely and randomly', isCorrect: false },
        { answerText: 'They slide past each other', isCorrect: false },
        { answerText: 'They are fixed in position but vibrate', isCorrect: true },
        { answerText: 'They are far apart and move chaotically', isCorrect: false },
      ],
    },
    {
      questionText: 'Which property of a real fluid causes an object to slow down?',
      answerOptions: [
        { answerText: 'Density', isCorrect: false },
        { answerText: 'Buoyancy', isCorrect: false },
        { answerText: 'Viscosity', isCorrect: true },
        { answerText: 'Temperature', isCorrect: false },
      ],
    },
    {
      questionText: 'In an ideal fluid, what is the main assumption about its particles?',
      answerOptions: [
        { answerText: 'They have a large volume', isCorrect: false },
        { answerText: 'They attract each other with strong forces', isCorrect: false },
        { answerText: 'They have no volume and no intermolecular forces', isCorrect: true },
        { answerText: 'They move very slowly', isCorrect: false },
      ],
    },
  ];

  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  
  const handleAnswerOptionClick = (isCorrect, index) => {
    
    setSelectedAnswer(index);

    if (isCorrect) {
      setScore(score + 1);
    }

  
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null); 
      } else {
        setShowScore(true);
      }
    }, 1000); 
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  return (
    <section style={{ 
        height: 'auto',
        minHeight: '400px',
        margin: '50px auto 20px auto', 
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', 
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginBottom: '10px' }}>Quiz & Practice</h2>
      <p style={{ marginBottom: '20px', textAlign: 'center' }}>Test your understanding with a quick quiz!</p>

      {showScore ? (
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>You scored {score} out of {questions.length}</h3>
          <p style={{ fontSize: '18px', color: score === questions.length ? 'green' : 'red' }}>
            {score === questions.length ? 'Great job! You answered all questions correctly.' : 'Keep practicing to improve your score!'}
          </p>
          <button 
            onClick={restartQuiz}
            style={{ 
              marginTop: '20px',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              backgroundColor: '#007bff',
              color: 'white',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <div style={{ width: '100%', maxWidth: '600px', padding: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div style={{ fontSize: '24px', marginBottom: '20px' }}>{questions[currentQuestion].questionText}</div>
          </div>
          <div style={{ display: 'grid', gap: '10px', width: '100%', maxWidth: '400px' }}>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => {
              const buttonColor = selectedAnswer !== null && (index === selectedAnswer ? (answerOption.isCorrect ? '#28a745' : '#dc3545') : '#fff');
              const textColor = selectedAnswer !== null && (index === selectedAnswer ? '#fff' : '#000');
              const isDisabled = selectedAnswer !== null;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(answerOption.isCorrect, index)}
                  disabled={isDisabled}
                  style={{
                    padding: '15px',
                    fontSize: '16px',
                    backgroundColor: buttonColor,
                    color: textColor,
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    cursor: isDisabled ? 'not-allowed' : 'pointer',
                    textAlign: 'left',
                    transition: 'background-color 0.2s',
                  }}
                >
                  {answerOption.answerText}
                </button>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
}

export default Quiz;