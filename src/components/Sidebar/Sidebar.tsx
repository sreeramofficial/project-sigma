import React, { FC } from 'react'

import { Drawer, Typography, Toolbar, Divider } from '@mui/material'

export interface SidebarProps {
  isOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
  title?: string
  children?: JSX.Element
  logo?: JSX.Element
}

const Sidebar: FC<SidebarProps> = ({ children, isOpen, onClose, title }) => (
  <Drawer onClose={onClose} open={isOpen} variant='temporary'>
    <Toolbar>
      <Typography color='textSecondary' variant='h6' noWrap>
        {title}
      </Typography>
    </Toolbar>
    <Divider />
    {children}
  </Drawer>
)

export default Sidebar
