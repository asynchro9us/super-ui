import { useState } from "react"

const useModal = () : [boolean, () => void, () => void] => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return [showModal, openModal, closeModal];
}

export default useModal;