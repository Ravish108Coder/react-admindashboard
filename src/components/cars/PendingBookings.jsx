import { cilTrash } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CButton, CCol, CContainer, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CFormCheck, CFormInput, CFormSelect, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import { CSmartPagination } from '@coreui/react-pro';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const PendingBookings = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const linkStyle = {
    textDecoration: "none",
    color: '#999'
  };
  const liwithlinkStyle = {
    fontSize: "0.9rem",
  };
  const boxshadowStyle = {
    boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    backgroundColor: "#fff"
  };
  const dropdownItemStyle = {
    fontWeight: '400',
    color: '#3a3b45'
  }
  return (
    <div className='px-3 py-4'>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Pending Orders</h1>
        <ol className="breadcrumb">
          <li style={liwithlinkStyle} className="breadcrumb-item"><Link style={linkStyle} to="/dashboard">Dashboard</Link></li>
          <li style={liwithlinkStyle} className="breadcrumb-item"><Link style={linkStyle} to="/pending-bookings">Pending Orders</Link></li>
        </ol>
      </div>
      <section className="cancel-booking cotainer p-3  " style={boxshadowStyle}>

        <div className="upper-before-table d-flex">
          <CFormSelect
            className='mx-3'
            style={{ width: "150px", fontSize: "0.9rem" }}
            aria-label="Default select example"
            options={[
              'Bulk Actions',
              { label: 'Delete', value: '1' },
            ]}
          />
          <CButton style={{ fontSize: '14px' }} color="primary">Apply</CButton>
        </div>

        <div className="before-table d-flex p-4 justify-content-between">
          <div className="first-wrapper w-50 d-flex justify-items-start">
            <div className="show-cont">
              <CRow className='align-items-center'>
                <CCol className='d-flex align-items-center'>
                  <p className='' style={{ marginBottom: "0px" }}>Show</p>
                </CCol>
                <CCol style={{ paddingInline: "0px" }}>
                  <CFormSelect
                    style={{ width: "80px", fontSize: "0.9rem" }}
                    aria-label="Default select example"
                    options={[
                      '10',
                      { label: '25', value: '2' },
                      { label: '50', value: '3' },
                      { label: '100', value: '4' }
                    ]}
                  />
                </CCol>
                <CCol className='d-flex align-items-center'>
                  <p style={{ marginBottom: "0px" }}>Entries</p>
                </CCol>
              </CRow>
            </div>
          </div>
          <div className="second-wrapper w-50 d-flex justify-items-start">
            <div className="SearchBox d-flex align-items-center">
              <span className='mx-2'>Search</span>
              <CFormInput type="text" size="sm" placeholder="" aria-label="sm input example" />
            </div>
          </div>
        </div>

        <div className="actual-table mx-3" style={{ fontSize: '0.9rem' }}>
          <CTable >

            <CTableHead align color='light' style={{ height: '50px !important', fontWeight: '100' }}>
              <CTableRow align='middle'>
                <CTableHeaderCell scope="col">
                  <CFormCheck type="checkbox" value="" aria-label="Checkbox for following text input" />
                </CTableHeaderCell>
                <CTableHeaderCell style={{ color: '#6e707e' }} scope="col">Service</CTableHeaderCell>
                <CTableHeaderCell style={{ color: '#6e707e' }} scope="col">Customer</CTableHeaderCell>
                <CTableHeaderCell style={{ color: '#6e707e' }} scope="col">Total</CTableHeaderCell>
                <CTableHeaderCell style={{ color: '#6e707e' }} scope="col">Status</CTableHeaderCell>
                <CTableHeaderCell style={{ color: '#6e707e' }} scope="col">Book Time</CTableHeaderCell>
                <CTableHeaderCell style={{ color: '#6e707e' }} scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>

            <CTableBody >

              <CTableRow style={{ height: '136px', verticalAlign: 'middle' }}>
                <CTableHeaderCell scope="row">
                  <CFormCheck type="checkbox" value="" aria-label="Checkbox for following text input" />
                </CTableHeaderCell>
                <CTableDataCell style={{ color: '#757575' }}>Rent an Audi Q7</CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>
                  <CContainer >
                    <CRow>
                      <CCol className="align-self-start">Name:showrav Hasan</CCol>
                    </CRow>
                    <CRow>
                      <CCol className="align-self-start">Email:user@gmail.com</CCol>
                    </CRow>
                    <CRow>
                      <CCol className="align-self-start">Number:01728332009</CCol>
                    </CRow>
                    <CRow>
                      <CCol className="align-self-start">City:asdfasdf</CCol>
                    </CRow>
                  </CContainer>
                </CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>$75.6</CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>
                  <CDropdown>
                    <CDropdownToggle size='sm' href="#" color="info">Pending</CDropdownToggle>
                    <CDropdownMenu >
                      <CDropdownItem style={dropdownItemStyle} href="#">Processed</CDropdownItem>
                      <CDropdownItem style={dropdownItemStyle} href="#">Complete</CDropdownItem>
                      <CDropdownItem style={dropdownItemStyle} href="#">Cancel</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>18/12/2023</CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>
                  <div className="action-btns">
                    <CButton color="primary" size="sm">Details</CButton>
                    <CButton className='mx-2' color="danger" size="sm">
                      <CIcon icon={cilTrash} />
                    </CButton>
                  </div>
                </CTableDataCell>

              </CTableRow>

              <CTableRow style={{ height: '136px', verticalAlign: 'middle' }}>
                <CTableHeaderCell scope="row">
                  <CFormCheck type="checkbox" value="" aria-label="Checkbox for following text input" />
                </CTableHeaderCell>
                <CTableDataCell style={{ color: '#757575' }}>Rent an Audi Q7</CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>
                  <CContainer>
                    <CRow>
                      <CCol className="align-self-start">Name:showrav Hasan</CCol>
                    </CRow>
                    <CRow>
                      <CCol className="align-self-start">Email:user@gmail.com</CCol>
                    </CRow>
                    <CRow>
                      <CCol className="align-self-start">Number:01728332009</CCol>
                    </CRow>
                    <CRow>
                      <CCol className="align-self-start">City:asdfasdf</CCol>
                    </CRow>
                  </CContainer>
                </CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>$75.6</CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>
                  <CDropdown>
                    <CDropdownToggle size='sm' href="#" color="info">Pending</CDropdownToggle>
                    <CDropdownMenu >
                      <CDropdownItem style={dropdownItemStyle} href="#">Processed</CDropdownItem>
                      <CDropdownItem style={dropdownItemStyle} href="#">Complete</CDropdownItem>
                      <CDropdownItem style={dropdownItemStyle} href="#">Cancel</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>18/12/2023</CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>
                  <div className="action-btns">
                    <CButton color="primary" size="sm">Details</CButton>
                    <CButton className='mx-2' color="danger" size="sm">
                      <CIcon icon={cilTrash} />
                    </CButton>
                  </div>
                </CTableDataCell>

              </CTableRow>
              <CTableRow style={{ height: '136px', verticalAlign: 'middle' }}>
                <CTableHeaderCell scope="row">
                  <CFormCheck type="checkbox" value="" aria-label="Checkbox for following text input" />
                </CTableHeaderCell>
                <CTableDataCell style={{ color: '#757575' }}>Rent an Audi Q7</CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>
                  <CContainer>
                    <CRow>
                      <CCol className="align-self-start">Name:showrav Hasan</CCol>
                    </CRow>
                    <CRow>
                      <CCol className="align-self-start">Email:user@gmail.com</CCol>
                    </CRow>
                    <CRow>
                      <CCol className="align-self-start">Number:01728332009</CCol>
                    </CRow>
                    <CRow>
                      <CCol className="align-self-start">City:asdfasdf</CCol>
                    </CRow>
                  </CContainer>
                </CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>$75.6</CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>
                  <CDropdown>
                    <CDropdownToggle size='sm' href="#" color="info">Pending</CDropdownToggle>
                    <CDropdownMenu >
                      <CDropdownItem style={dropdownItemStyle} href="#">Processed</CDropdownItem>
                      <CDropdownItem style={dropdownItemStyle} href="#">Complete</CDropdownItem>
                      <CDropdownItem style={dropdownItemStyle} href="#">Cancel</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>18/12/2023</CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>
                  <div className="action-btns">
                    <CButton color="primary" size="sm">Details</CButton>
                    <CButton className='mx-2' color="danger" size="sm">
                      <CIcon icon={cilTrash} />
                    </CButton>
                  </div>
                </CTableDataCell>

              </CTableRow>
              <CTableRow style={{ height: '136px', verticalAlign: 'middle' }}>
                <CTableHeaderCell scope="row">
                  <CFormCheck type="checkbox" value="" aria-label="Checkbox for following text input" />
                </CTableHeaderCell>
                <CTableDataCell style={{ color: '#757575' }}>Rent an Audi Q7</CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>
                  <CContainer>
                    <CRow>
                      <CCol className="align-self-start">Name:showrav Hasan</CCol>
                    </CRow>
                    <CRow>
                      <CCol className="align-self-start">Email:user@gmail.com</CCol>
                    </CRow>
                    <CRow>
                      <CCol className="align-self-start">Number:01728332009</CCol>
                    </CRow>
                    <CRow>
                      <CCol className="align-self-start">City:asdfasdf</CCol>
                    </CRow>
                  </CContainer>
                </CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>$75.6</CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>
                  <CDropdown>
                    <CDropdownToggle size='sm' href="#" color="info">Pending</CDropdownToggle>
                    <CDropdownMenu >
                      <CDropdownItem style={dropdownItemStyle} href="#">Processed</CDropdownItem>
                      <CDropdownItem style={dropdownItemStyle} href="#">Complete</CDropdownItem>
                      <CDropdownItem style={dropdownItemStyle} href="#">Cancel</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>18/12/2023</CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>
                  <div className="action-btns">
                    <CButton color="primary" size="sm">Details</CButton>
                    <CButton className='mx-2' color="danger" size="sm">
                      <CIcon icon={cilTrash} />
                    </CButton>
                  </div>
                </CTableDataCell>

              </CTableRow>
              <CTableRow style={{ height: '136px', verticalAlign: 'middle' }}>
                <CTableHeaderCell scope="row">
                  <CFormCheck type="checkbox" value="" aria-label="Checkbox for following text input" />
                </CTableHeaderCell>
                <CTableDataCell style={{ color: '#757575' }}>Rent an Audi Q7</CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>
                  <CContainer>
                    <CRow>
                      <CCol className="align-self-start">Name:showrav Hasan</CCol>
                    </CRow>
                    <CRow>
                      <CCol className="align-self-start">Email:user@gmail.com</CCol>
                    </CRow>
                    <CRow>
                      <CCol className="align-self-start">Number:01728332009</CCol>
                    </CRow>
                    <CRow>
                      <CCol className="align-self-start">City:asdfasdf</CCol>
                    </CRow>
                  </CContainer>
                </CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>$75.6</CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>
                  <CDropdown>
                    <CDropdownToggle size='sm' href="#" color="info">Pending</CDropdownToggle>
                    <CDropdownMenu >
                      <CDropdownItem style={dropdownItemStyle} href="#">Processed</CDropdownItem>
                      <CDropdownItem style={dropdownItemStyle} href="#">Complete</CDropdownItem>
                      <CDropdownItem style={dropdownItemStyle} href="#">Cancel</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>18/12/2023</CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>
                  <div className="action-btns">
                    <CButton color="primary" size="sm">Details</CButton>
                    <CButton className='mx-2' color="danger" size="sm">
                      <CIcon icon={cilTrash} />
                    </CButton>
                  </div>
                </CTableDataCell>

              </CTableRow>
              <CTableRow style={{ height: '136px', verticalAlign: 'middle' }}>
                <CTableHeaderCell scope="row">
                  <CFormCheck type="checkbox" value="" aria-label="Checkbox for following text input" />
                </CTableHeaderCell>
                <CTableDataCell style={{ color: '#757575' }}>Rent an Audi Q7</CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>
                  <CContainer>
                    <CRow>
                      <CCol className="align-self-start">Name:showrav Hasan</CCol>
                    </CRow>
                    <CRow>
                      <CCol className="align-self-start">Email:user@gmail.com</CCol>
                    </CRow>
                    <CRow>
                      <CCol className="align-self-start">Number:01728332009</CCol>
                    </CRow>
                    <CRow>
                      <CCol className="align-self-start">City:asdfasdf</CCol>
                    </CRow>
                  </CContainer>
                </CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>$75.6</CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>
                  <CDropdown>
                    <CDropdownToggle size='sm' href="#" color="info">Pending</CDropdownToggle>
                    <CDropdownMenu >
                      <CDropdownItem style={dropdownItemStyle} href="#">Processed</CDropdownItem>
                      <CDropdownItem style={dropdownItemStyle} href="#">Complete</CDropdownItem>
                      <CDropdownItem style={dropdownItemStyle} href="#">Cancel</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>18/12/2023</CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>
                  <div className="action-btns">
                    <CButton color="primary" size="sm">Details</CButton>
                    <CButton className='mx-2' color="danger" size="sm">
                      <CIcon icon={cilTrash} />
                    </CButton>
                  </div>
                </CTableDataCell>

              </CTableRow>


            </CTableBody>

          </CTable>
        </div>

        <div style={{color: '#757575'}} className="lower-after-table d-flex justify-content-between mx-3">
          <p>Showing 1 to 10 of 13 entries</p>
          <CSmartPagination
            align="end"
            activePage={currentPage}
            pages={10}
            onActivePageChange={setCurrentPage}
          />
        </div>
      </section>
    </div>
  )
}

export default PendingBookings