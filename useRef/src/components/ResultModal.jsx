import { forwardRef, useRef, useImperativeHandle } from "react"

const ResultModal = forwardRef(function ResultModal({targetTime, remaining}, ref) {
    const dialog = useRef()
    const userLost = remaining <=0
    const formattedRemainingTime = (remaining / 1000).toFixed(2)

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })

    return <dialog ref={dialog} className="result-modal" >
        {userLost && <h2>You lost</h2>}
        <p>타켓 시간은 <strong>{targetTime}</strong></p>
        <p>you stopped the timer{formattedRemainingTime} </p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>   
})

export default ResultModal