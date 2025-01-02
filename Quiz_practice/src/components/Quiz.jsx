import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
    const [answerState, setAnswerState] = useState("")
    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1
    const quizIsComplet = activeQuestionIndex === QUESTIONS.length

    const handleAnswerClick = useCallback(function handleAnswerClick(selectedAnswer) {
        setAnswerState('answered')
        setUserAnswers(preveUserAnswers => {    
            return [...preveUserAnswers, selectedAnswer]})

        setTimeout(() => {
            if (selectedAnswer === QUESTIONS[activeQuestionIndex].correctAnswer) {
                setAnswerState('correct')
            } else {
                setAnswerState('wrong')
            }

            setTimeout(() => {
                setAnswerState('')
            }, 2000)

        }, 1000)
        
    },[activeQuestionIndex])

    const handleSkipAnswer = useCallback(() => handleAnswerClick(null),[handleAnswerClick])


    if (quizIsComplet) {
        return <div id="summary">
            <img src={quizCompleteImg} alt="Quiz complete"/>
            <h2>퀴즈 완료함함</h2>
        </div>
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers].sort(() => Math.random() - 0.5)


    return (
    <div id="quiz">
        <div id="question">
            <QuestionTimer 
                key={activeQuestionIndex}
                timeout={10000} 
                ontimeout={handleSkipAnswer
                
            }/>
            <h2>
                {QUESTIONS[activeQuestionIndex].text}
            </h2>
            <ul id="answers">
                {shuffledAnswers.map((answer) => {
                
                    <li key={answer} className="answer">
                        <button onClick={() => handleAnswerClick(answer)}>{answer}</button>
                    </li>
                })}
            </ul>
        </div>
    </div>
)}
