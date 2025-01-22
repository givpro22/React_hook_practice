
export default function Modal({ref}) {

    return (
        <>
            <dialog ref={ref} onClose={onReset}>
                <h2>모달 연습중입니다</h2>
                <div>hi</div>

            <form method="dialog">
                <button>Close</button>
            </form>
            </dialog>
        </>
    )
};