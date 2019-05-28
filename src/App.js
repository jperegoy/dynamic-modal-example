import React from 'react';
import './App.css';

import Modal from './components/modals/modal';
import AlternateModal from './components/modals/alternateModal';

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            modalContent: null
        }
    }

    openModal = (modal) => {
        this.setState({ modalContent: modal })
    }
    closeModal = () => {
        this.setState({ modalContent: null })
    }

    render() {
        return (
            <div className="App">
                <h1>Beautiful Page Content</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam nisi doloremque omnis obcaecati similique ducimus exercitationem, fugit deleniti asperiores qui. Facere ratione eligendi et sit obcaecati tempora consequatur, doloribus architecto.</p>
                <button onClick={ () => this.openModal(<Modal handleModalClose={ this.closeModal } />) }>Open Modal</button>
                <button onClick={ () => this.openModal(<AlternateModal handleModalClose={ this.closeModal } />) }>Open Alternate Modal</button>

                { this.state.modalContent }
            </div>
        );
    }
}

export default App;
