import { CButton, CCol, CContainer, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CFormCheck, CFormInput, CFormSelect, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import { cilTrash } from '@coreui/icons';
import CIcon from '@coreui/icons-react';

const TableComponent = () => {
    const dropdownItemStyle = {
        fontWeight: '400',
        color: '#3a3b45'
      }
    return (
            <div className="actual-table py-5" style={{ fontSize: '0.9rem' }}>

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
    )
}

export default TableComponent