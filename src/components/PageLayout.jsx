import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router'
import MyCard from './MyCard'
import SideMenu from './SideMenu'

function PageLayout() {
  const { pathname } = useLocation()
  const contentRef = useRef(null)
  const previousPath = useRef(pathname)

  useEffect(() => {
    if (previousPath.current !== pathname && window.matchMedia('(max-width: 859px)').matches) {
      contentRef.current?.scrollIntoView({ block: 'start' })
    } else {
      window.scrollTo(0, 0)
    }
    contentRef.current?.focus({ preventScroll: true })
    previousPath.current = pathname
  }, [pathname])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="portfolio-layout">
        <MyCard />
        <main id="main-content" className="page-content" tabIndex={-1} ref={contentRef}>
          <Outlet />
        </main>
        <SideMenu />
      </div>
    </>
  )
}

export default PageLayout
