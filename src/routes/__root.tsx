import * as React from 'react'
import { Outlet, RootRoute, createRootRoute } from '@tanstack/react-router'
import Header from '../Header'
import Footer from '../Footer'

export const Route: RootRoute = createRootRoute({
  component: RootComponent,
})

function RootComponent():React.JSX.Element {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}
