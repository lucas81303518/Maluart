import { Box, Button, Modal, Typography } from "@material-ui/core";
import React from "react";
import { isPropertySignature } from "typescript";

import "./modal.component.scss";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onSave:()=> void;
}
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius:'10px',
  boxShadow: 24,
  p: 4,
};
const MyModal: React.FC<ModalProps> = ({ title, isOpen, onClose, children, onSave}) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
         {title}
        </Typography>
        <div id="modal-modal-description">
         {children}
        </div>
        <div className="button-container">
          <Button onClick={onSave} variant="outlined">Salvar</Button>
        </div>
      </Box>
    </Modal>
  );
};
export default MyModal;
