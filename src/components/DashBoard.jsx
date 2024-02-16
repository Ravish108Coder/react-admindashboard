import { cilBank } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CCard, CCardBody, CCardText, CCol, CRow } from '@coreui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import TableComponent from './TableComponent';

const DashBoard = () => {
    const liwithlinkStyle = {
        fontSize: "0.9rem",
    };
    const linkStyle = {
        textDecoration: "none",
        color: '#999'
    };
    return (
        <div className='px-3 py-4'>

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <ol className="breadcrumb">
                    <li style={liwithlinkStyle} className="breadcrumb-item"><Link style={linkStyle} to="/dashboard">Dashboard</Link></li>
                </ol>
            </div>

            <div className="widgets-cont">
                <CRow>
                    <CCol xs={3}>
                        <CCard color={'primary'} textColor='white'>
                            <CCardBody >
                                <CCardText>
                                    <div className="card-text-cont d-flex justify-content-between align-items-center">
                                        <div className="total-cnt d-flex flex-column">
                                            <p>Total Bookings</p>
                                            <h3>4</h3>
                                        </div>
                                        <div className="avtar-cont">
                                        <CIcon size='xxl' icon={cilBank} />
                                        </div>
                                    </div>
                                </CCardText>
                            </CCardBody>
                        </CCard>
                    </CCol>
                    <CCol xs={3}>
                        <CCard color={'success'} textColor='white'>
                            <CCardBody >
                                <CCardText>
                                    <div className="card-text-cont d-flex justify-content-between align-items-center">
                                        <div className="total-cnt d-flex flex-column">
                                            <p>Total Tour</p>
                                            <h3>4</h3>
                                        </div>
                                        <div className="avtar-cont">
                                        <CIcon size='xxl' icon={cilBank} />
                                        </div>
                                    </div>
                                </CCardText>
                            </CCardBody>
                        </CCard>
                    </CCol>
                    <CCol xs={3}>
                        <CCard color={'danger'} textColor='white'>
                            <CCardBody >
                                <CCardText>
                                    <div className="card-text-cont d-flex justify-content-between align-items-center">
                                        <div className="total-cnt d-flex flex-column">
                                            <p>Total Space</p>
                                            <h3>4</h3>
                                        </div>
                                        <div className="avtar-cont">
                                        <CIcon size='xxl' icon={cilBank} />
                                        </div>
                                    </div>
                                </CCardText>
                            </CCardBody>
                        </CCard>
                    </CCol>
                    <CCol xs={3}>
                        <CCard color={'secondary'} textColor='white'>
                            <CCardBody >
                                <CCardText>
                                    <div className="card-text-cont d-flex justify-content-between align-items-center">
                                        <div className="total-cnt d-flex flex-column">
                                            <p>Total Car</p>
                                            <h3>4</h3>
                                        </div>
                                        <div className="avtar-cont">
                                        <CIcon size='xxl' icon={cilBank} />
                                        </div>
                                    </div>
                                </CCardText>
                            </CCardBody>
                        </CCard>
                    </CCol>
                    
                </CRow>

            </div>

            <div className="all-tables">
                <TableComponent />
                <TableComponent />
                <TableComponent />
                <TableComponent />
            </div>
        </div>
    )
}

export default DashBoard