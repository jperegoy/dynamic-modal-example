import React from 'react';
import ModalWrapper from '../modalWrapper'

import './alternateModal.scss';

const emailSignupModal = props => {
    return (
        <ModalWrapper allowExit={true} handleModalClose={ props.handleModalClose }>
            <div className="m-alternate-modal">
                <hgroup>
                    <h2>{props.heading.text}</h2>
                </hgroup>

                <form onSubmit={ e => e.preventDefault() } className="m-alternate-modal__form">
                    <input type="text" placeholder="Sandor Clegane" />
                    <input type="email" placeholder="email@example.com" />
                    <button>Join the list</button>
                </form>
            </div>
        </ModalWrapper>
    )
}

export default emailSignupModal;