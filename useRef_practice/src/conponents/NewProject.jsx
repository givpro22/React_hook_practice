import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({onAdd, onCancel}) {
    const modal = useRef()

    const title = useRef();
    const description = useRef();
    const duedate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDuedate = duedate.current.value;

        if(enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDuedate.trim() === "") {
                modal.current.open()
                return
            ;
        }


        onAdd(
            {title: enteredTitle,
            description: enteredDescription,
            duedate: enteredDuedate}
        )
    }


    return (

    <>
    <Modal ref={modal} buttonCaption="닫기">
        <h2 className='my-4 text-xl font-bold text-stone-500'>값이 틀림</h2>
        <p className='mb-4 text-stone-400'> 값을 입력해주세요~!~!</p>
    </Modal> 
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className=" text-stone-800 hover:text-stone-950" onClick={onCancel}>취소</button></li>
            <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}>저장
            </button></li>
        </menu>
        <div>
            <Input ref={title} label="제목"/>
            <Input ref={description} label="설명" textarea={true}/>
            <Input type="date" ref={duedate} label="마감일"/>
        </div>
    </div>
    </>
)}