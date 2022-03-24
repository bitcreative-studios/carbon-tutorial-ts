import React from 'react'
import styles from './TutorialHeader.module.scss'
import {
  Header,
  HeaderContainer,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  HeaderSideNavItems,
  SideNav,
  SideNavItems,
  SkipToContent,
} from '@carbon/react'
import {
  AppSwitcher20,
  Notification20,
  UserAvatar20,
} from '@carbon/icons-react'
import { Link } from 'gatsby'

export type TutorialHeaderProps = {}

const TutorialHeader = () => {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Carbon Tutorial">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName element={Link} prefix="IBM" to="/">
            Carbon Tutorial
          </HeaderName>
          <HeaderNavigation>
            <HeaderMenuItem>Repositories</HeaderMenuItem>
          </HeaderNavigation>
          <SideNav isPersistent={false} expanded={isSideNavExpanded}>
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem element={Link} to="/repos">
                  Repositories
                </HeaderMenuItem>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
          <HeaderGlobalBar>
            <HeaderGlobalAction>
              <Notification20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction>
              <UserAvatar20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction>
              <AppSwitcher20 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      )}
    />
  )
}

export default TutorialHeader
