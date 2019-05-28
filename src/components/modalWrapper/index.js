import React from 'react';
import './modalWrapper.scss';

const ModalWrapper = props => {
    const handleBackgroundExit = e => {
        if (e.target === e.currentTarget) props.handleModalClose();
    }

    console.log('wrapper props',props)

    const CloseModalButton = () => {
        return (
            <div className="a-close-modal-button" onClick={ props.handleModalClose }>
                <span>&times;</span>
            </div>
        )
    }

    return (
        <div className="o-modal-wrapper" onClick={ handleBackgroundExit }>
            { props.allowExit  && <CloseModalButton /> }
            { props.children }
        </div>
    )
}

export default ModalWrapper;