import {  CCollapse, CContainer, CNavItem, CNavLink, CNavbar, CNavbarNav, CNavbarToggler, CSidebarToggler } from '@coreui/react'
import React, { useState } from 'react'

const Navbar = () => {
    const [visible, setVisible] = useState(false)
    return (
      <>
        <CNavbar  expand="lg" colorScheme="light" className="bg-light py-3">
          <CContainer className='mx-0'>
            <CNavbarToggler onClick={() => setVisible(!visible)} />
            <CCollapse className="navbar-collapse" visible={visible}>
            <CSidebarToggler/>
              <CNavbarNav>
                <CNavItem>
                  <CNavLink to="/" active>
                    Home
                  </CNavLink>
                </CNavItem>
              </CNavbarNav>
            </CCollapse>
          </CContainer>
        </CNavbar>
      </>
    )
}

export default Navbar