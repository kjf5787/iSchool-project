import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PeopleModal({username, facebook, imagePath, interestArea, 
    name, phone, office, title, twitter, website, email, tagLine}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className='pplButton' onClick={handleOpen}>{name}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modalBox">
          <Typography id="modal-modal-title" className="modalBoldText" variant="h5" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-title" className="modalBoldText" variant="h6" component="h2">
            {title}
          </Typography>
          <img src={imagePath} alt={name} className="modalImg"/>
          { website &&
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Website: <a href={website}>{website}</a>
            </Typography>
          }
          { interestArea &&
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Interest Area: {interestArea}
            </Typography>
          }
        </Box>
      </Modal>
    </div>
  );
}