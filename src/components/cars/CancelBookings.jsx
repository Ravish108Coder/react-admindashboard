import { CCol, CFormInput, CFormSelect, CRow, CTable, CTableBody, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import { CSmartPagination } from '@coreui/react-pro';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CancelBookingTableRow from './CancelBookingTableRow';

const CancelBookings = () => {
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
  return (
    <div className='px-3 py-4'>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Cancel Booking</h1>
        <ol className="breadcrumb">
          <li style={liwithlinkStyle} className="breadcrumb-item"><Link style={linkStyle} to="/cancel-bookings">Dashboard</Link></li>
          <li style={liwithlinkStyle} className="breadcrumb-item"><Link style={linkStyle} to="/cancel-bookings">Cancel Booking</Link></li>
        </ol>
      </div>
      <section className="cancel-booking cotainer p-3  " style={boxshadowStyle}>



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
                <CTableHeaderCell style={{ color: '#6e707e' }} scope="col">User Email</CTableHeaderCell>
                <CTableHeaderCell style={{ color: '#6e707e' }} scope="col">Booking Number</CTableHeaderCell>
                <CTableHeaderCell style={{ color: '#6e707e' }} scope="col">Method</CTableHeaderCell>
                <CTableHeaderCell style={{ color: '#6e707e' }} scope="col">Details</CTableHeaderCell>
                <CTableHeaderCell style={{ color: '#6e707e' }} scope="col">Status</CTableHeaderCell>
              </CTableRow>
            </CTableHead>

            <CTableBody >

                 <CancelBookingTableRow />
                 <CancelBookingTableRow />
                 <CancelBookingTableRow />
                 <CancelBookingTableRow />
                 <CancelBookingTableRow />
                 <CancelBookingTableRow />
                 <CancelBookingTableRow />

            </CTableBody>

          </CTable>
        </div>

        <div style={{ color: '#757575' }} className="lower-after-table d-flex justify-content-between mx-3">
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

export default CancelBookings