import React from 'react';
import ModalWrapper from '../modalWrapper'

import './modal.scss';

const emailSignupModal = props => {
    return (
        <ModalWrapper allowExit={true} handleModalClose={ props.handleModalClose }>
            <div className="m-modal">
                <hgroup>
                    <h2>MODAL HEADING HERE</h2>
                </hgroup>

                <form onSubmit={ e => e.preventDefault() } className="m-modal__form">
                    <input type="email" placeholder="email@example.com" />
                    <button>Join the list</button>
                </form>
            </div>
        </ModalWrapper>
    )
}

export default emailSignupModal;