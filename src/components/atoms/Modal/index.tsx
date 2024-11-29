import { FC, ReactElement, useEffect, useRef } from "react";
import { createPortal } from "react-dom"

interface IModal {
    children: ReactElement | string;
    showModal: boolean;
    closeModal: () => void;
    isBlocking?: boolean;
    className?: string;
}

const Modal: FC<IModal> = ({ children, showModal = false, closeModal, isBlocking = true, className, ...porps }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleOutsideClicked = (e) => {
            if (!isBlocking && modalRef.current && !modalRef.current?.contains(e.target)) {
                closeModal();
            }
        }

        document.addEventListener('mousedown', handleOutsideClicked);
        return () => { document.removeEventListener('mousedown', handleOutsideClicked); }
    }, [modalRef])

    return showModal && createPortal(
        <div {...porps} className={`absolute bg-black bg-opacity-30 backdrop-blur-[3px] w-full h-screen top-0 left-0 ${className}`}>
            <div className='flex justify-center items-center w-full h-full'>
                <div ref={modalRef}>
                    {children}
                </div>
            </div>
        </div>
        , document.body
    );
}

export default Modal