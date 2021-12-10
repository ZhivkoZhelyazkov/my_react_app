import { Modal, Button } from 'react-bootstrap';

const SaveDialog = ({
    show,
    onClose,
    onSave
}) => {
    return (

        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title className="modalTitle">Please confirm</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h4 className="modalBody">Do you want to save changes?</h4>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
                <Button variant="primary" onClick={onSave}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SaveDialog;
