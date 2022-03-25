import * as React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import cls from 'classnames'
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Column,
  Grid,
  Row,
  Tab,
  Tabs,
} from 'carbon-components-react'
import {
  banner,
  featureGridLabel,
  heading,
  secondRow,
  subHeading,
  tabContent,
  tabs,
} from '../styles/pages/home/index-page.module.scss'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Grid className="bx--grid--no-gutter" fullWidth>
        <Row className={banner}>
          <Column lg={16}>
            <Breadcrumb noTrailingSlash>
              <BreadcrumbItem>
                <Link to="/">Getting Started</Link>
              </BreadcrumbItem>
            </Breadcrumb>
            <h1 className={heading}>Design &amp; build with Carbon</h1>
          </Column>
        </Row>
        <Row className={secondRow}>
          <Column className="bx--no-gutter">
            <Tabs className={tabs}>
              <Tab label="About">
                <Grid fullWidth>
                  <Row className={tabContent}>
                    <Column md={4} lg={7}>
                      <h2 className={subHeading}>What is Carbon?</h2>
                      <p className="heroCopy">
                        Carbon is IBM’s open-source design system for digital
                        products and experiences. With the IBM Design Language
                        as its foundation, the system consists of working code,
                        design tools and resources, human interface guidelines,
                        and a vibrant community of contributors.
                      </p>
                      <Button>Learn More</Button>
                    </Column>
                    <Column md={4} lg={{ offset: 1, span: 8 }}>
                      <StaticImage
                        src="../images/hero-image.png"
                        alt="Hero Image"
                      />
                    </Column>
                  </Row>
                </Grid>
              </Tab>
              <Tab label="Design">
                <Grid fullWidth className="bx--grid--no-gutter">
                  <Row className={tabContent}>
                    <Column>
                      <p>
                        Rapidly build beautiful and accessible experiences. The
                        Carbon kit contains all resources you need to get
                        started.
                      </p>
                    </Column>
                  </Row>
                </Grid>
              </Tab>
              <Tab label="Develop">
                <Grid fullWidth className="bx--grid--no-gutter">
                  <Row className={tabContent}>
                    <Column>
                      <p>
                        Carbon provides styles and components in Vanilla, React,
                        Angular, and Vue for anyone building on the web.
                      </p>
                    </Column>
                  </Row>
                </Grid>
              </Tab>
            </Tabs>
          </Column>
        </Row>
        <Row>
          <Column>
            <h3 className={featureGridLabel}>The Principles</h3>
          </Column>
          <Column>Carbon is Open</Column>
          <Column>Carbon is Modular</Column>
          <Column>Carbon is Consistent</Column>
        </Row>
      </Grid>
    </Layout>
  )
}

export default IndexPage
