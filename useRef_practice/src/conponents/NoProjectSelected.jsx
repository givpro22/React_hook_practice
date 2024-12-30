import noProjectImage from '../assets/no-projects.png';
import Button from './Button';

export default function NoProjectSelected({onStartAddProject}) {
    return (
        <div className="w-2/3 mt-24 text-center">
            <img src={noProjectImage} className='object-contain w-16 h-16 mx-auto'/>
            <h2 className='my-4 text-xl font-bold text-stone-500'>선택한 프로젝트가 업습니다</h2>
            <p className='mb-4 text-stone-400'>Select a project or get started with a new one</p>
            <p className='mt-8'>
                <Button onClick={onStartAddProject}>
                    새로운 프로젝트 만들기
                </Button>
            </p>
        </div>

    )
}