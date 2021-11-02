import React, { FC, ReactNode } from 'react'

import { Box } from '@mui/material'
import { styled } from '@mui/system'

export interface CenterProps {
  children?: ReactNode
  className?: string
}

const RelativeBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: 'calc(100% - 56px)',
  [theme.breakpoints.up('sm')]: {
    height: 'calc(100% - 64px)',
  },
}))

const AbsoluteBox = styled(Box)({
  display: 'flex',
  position: 'absolute',
  inset: 0,
})

const CenterBox = styled(Box)({
  margin: 'auto',
})

const Center: FC<CenterProps> = ({ children }) => (
  <RelativeBox>
    <AbsoluteBox>
      <CenterBox>{children}</CenterBox>
    </AbsoluteBox>
  </RelativeBox>
)

export default Center
