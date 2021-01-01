import React, { FC } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'

function Alert(props: AlertProps) {
  const { severity, onClose } = props
  return (
    <MuiAlert
      elevation={6}
      variant="filled"
      severity={severity}
      onClose={onClose}
    />
  )
}

interface Props {
  open: boolean
  setOpen: (b: boolean) => void
}

const CustomSnackbar: FC<Props> = (props: Props) => {
  const { open, setOpen } = props
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success">
        This is a success message!
      </Alert>
    </Snackbar>
  )
}

export default CustomSnackbar
