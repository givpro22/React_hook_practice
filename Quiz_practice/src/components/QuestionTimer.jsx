import { useState, useEffect } from "react"

export default function QuestionTimer({timeout, ontimeout}) {
    const [remaingTime, setRemainingTime] = useState(timeout)


    useEffect(()=>{
        const timer = setTimeout(ontimeout,timeout)

        return () => clearTimeout(timer)

    }, [timeout, ontimeout])

    useEffect(()=>{
        const interval = setInterval(() => {
            setRemainingTime(prevRemaingingTime => prevRemaingingTime-100 )
        }, 100)
    
        return () => clearInterval(interval)
    }, [])



    return (
        <progress id="question-time" max={timeout} value={remaingTime}/>
    )
}