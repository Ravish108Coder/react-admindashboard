import {  CButton, CCollapse, CContainer, CNavItem, CNavLink, CNavbar, CNavbarNav, CNavbarToggler, CSidebarToggler } from '@coreui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate();
    return (
      <>
        <CNavbar  expand="lg" colorScheme="dark" className="bg-dark py-3">
          <CContainer className='mx-0'>
            <CNavbarToggler onClick={() => setVisible(!visible)} />
            <CCollapse className="navbar-collapse" visible={visible}>
            <CSidebarToggler/>
              <CNavbarNav>
                <CNavItem>
                  <CNavLink to="/" active>
                    <CButton onClick={()=> navigate('/')}
                    
                     color="light" variant='ghost' className="ml-2">Home</CButton>
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