import { Close } from '@mui/icons-material';
import { Alert, Box, Collapse, IconButton } from '@mui/material';
import { get, isEmpty } from 'lodash';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { resetAlert } from '../../actions/ui';

const XetuxAlert = () => {
  const dispatch = useDispatch();
  const alert_info = useSelector((state) => state.ui.alert_info);
  const [open, setOpen] = React.useState(true);
  const [message, setMessage] = React.useState("Something happened!");
  const [severity, setSeverity] = React.useState("success");

  useEffect(() => {
    setMessage(get(alert_info, "message", ""));
    setSeverity(get(alert_info, "severity", ""));
  }, [alert_info])

  useEffect(() => {
    if (isEmpty(message) || isEmpty(severity)) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [message, severity])

  const handleResetAlert = () => {
    dispatch(resetAlert());
  }



  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          severity={severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                handleResetAlert();
              }}
            >
              <Close fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
}

export default XetuxAlert