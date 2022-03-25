import React from 'react'
import {
  Header,
  HeaderContainer,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  SkipToContent,
} from 'carbon-components-react'
import {
  Notification20,
  AppSwitcher20,
  UserAvatar20,
} from '@carbon/icons-react'
import { Link } from 'gatsby'

export type TutorialHeaderProps = {}

const TutorialHeader = ({}: TutorialHeaderProps) => {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header>
          <SkipToContent />
          <HeaderMenuButton
            isActive={isSideNavExpanded}
            onClick={onClickSideNavExpand}
          />
          {/**  @ts-ignore */}
          <HeaderName element={Link} prefix="IBM" to="/">
            Carbon Tutorial
          </HeaderName>

          <HeaderNavigation>
            {/**  @ts-ignore */}
            <HeaderMenuItem element={Link} to="/repos">
              Repos
            </HeaderMenuItem>
          </HeaderNavigation>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Notifications">
              <Notification20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="User Account">
              <UserAvatar20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="Switch Apps">
              <AppSwitcher20 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      )}
    />
  )
}

export default TutorialHeader
