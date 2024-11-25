import React from 'react'
import * as styleGuide from './index'
import bemHelper from 'react-bem-helper'
import './styles/styles.scss'
import Navigation from './Navigation'
import { Viewer } from './Viewer'
import PropTypes from 'prop-types'
import { ReactRouterProps } from './types'

const BEMClassName = new bemHelper('styleGuide')

export const Layout = ({ path }: { path: string }) => {
  const components = styleGuide.list()
  const name = styleGuide.getName()

  return (
    <div {...BEMClassName()}>
      <Navigation components={components} name={name} path={path} />
      <div {...BEMClassName('contents')}>
        {!components.length ? (
          <div {...BEMClassName('panel')}>
            Install successfull, now go add some <code>component.info.js</code>{' '}
            files
          </div>
        ) : (
          <Viewer path={path} />
        )}
      </div>
    </div>
  )
}

export const RouterLayout = (props: ReactRouterProps) => (
  <Layout path={props.match.params.component} />
)

Layout.propTypes = {
  variation: PropTypes.string,
  component: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }),
  params: PropTypes.object,
}
