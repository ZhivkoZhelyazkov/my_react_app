import { Modal, Button } from 'react-bootstrap';

const ConfirmDialog = ({
    show,
    onClose,
    onConfirm
}) => {
    return (

        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title className="modalTitle">Please confirm</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h4 className="modalBody">Do you really want to delete this product?</h4>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
                <Button variant="primary" onClick={onConfirm}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmDialog;
