// React
import React, { memo } from 'react'
// images
import successIcon from "../../images/Usable/actionSuccess.svg"
// components
import { Stack } from '@mui/material'
import LoginTitleComponent from '../../components/LoginComponents/LoginTitleComponent'

const ActionSuccess = memo(() => {
  return (
    <Stack justifyContent="center" alignItems="center" height="100%" sx={{
      '& img': {
        mt: "45px",
        mb: "20px"
      }
    }}>
      <LoginTitleComponent title="Пароль восстановлен" />
      <img src={successIcon} />
    </Stack>
  )
})

export default ActionSuccess
