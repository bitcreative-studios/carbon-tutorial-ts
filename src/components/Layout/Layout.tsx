import React from 'react'
import TutorialHeader from '../TutorialHeader'
import { Content } from '@carbon/react'

export type LayoutProps = {
  children: any
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <TutorialHeader />
      <Content>{children}</Content>
    </>
  )
}

export default Layout
