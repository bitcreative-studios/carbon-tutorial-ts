import React from 'react'
import './layou.scss'
import TutorialHeader from '../TutorialHeader'
import { Content } from 'carbon-components-react'

export type LayoutProps = {
  children: React.ReactNode
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
