import { CButton, CButtonGroup, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CFormCheck, CListGroup, CListGroupItem, CModal, CModalHeader, CModalTitle, CTableDataCell, CTableRow } from '@coreui/react';
import { useState } from 'react';

const CancelBookingTableRow = () => {
    const [visible, setVisible] = useState(false)
  const [bookingDetails, setBookingDetails] = useState(true)
    const dropdownItemStyle = {
        fontWeight: '400',
        color: '#3a3b45'
      }
    return (
            <CTableRow style={{ height: '55px', verticalAlign: 'middle' }}>
                <CTableDataCell style={{ color: '#757575' }}>user@gmail.com</CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>
                    <CButton onClick={() => setVisible(!visible)}>rEOU1634531779</CButton>
                    <CModal
                        size='lg'
                        visible={visible}
                        onClose={() => setVisible(false)}
                        aria-labelledby="LiveDemoExampleLabel"
                    >
                        <CModalHeader onClose={() => setVisible(false)}>
                            <CModalTitle id="LiveDemoExampleLabel">Booking ID: #rEOU1634531779</CModalTitle>
                        </CModalHeader>
                        <div className="modal-buttons px-3 py-2">
                            <CButtonGroup role="" aria-label="Basic checkbox toggle button ">
                                <CFormCheck
                                    reverse={true}
                                    onChange={() => setBookingDetails(prev => !prev)}
                                    type="radio"
                                    button={{ color: 'primary', variant: !bookingDetails ? 'ghost' : '' }}
                                    name="btnradio"
                                    id="btnradio1"
                                    autoComplete="off"
                                    label="Booking Details"
                                />
                                <CFormCheck
                                    onChange={() => setBookingDetails(prev => !prev)}
                                    type="radio"
                                    button={{ color: 'primary', variant: bookingDetails ? 'ghost' : '' }}
                                    name="btnradio"
                                    id="btnradio2"
                                    autoComplete="off"
                                    label="Customer Information"
                                />
                            </CButtonGroup>
                        </div>

                        {
                            bookingDetails ?
                                <>
                                    <CListGroup className='mt-3'>
                                        <CListGroupItem>
                                            <div className="CListGroupItem-cont  d-flex w-100 justify-content-between align-items-center">
                                                <span>Service Name</span>
                                                <span>Rent a Mini Cooper S Convertible</span>
                                            </div>
                                        </CListGroupItem>
                                        <CListGroupItem>
                                            <div className="CListGroupItem-cont  d-flex w-100 justify-content-between align-items-center">
                                                <span>Booking Status</span>
                                                <span>
                                                    <CButton style={{ fontSize: '12px', color: 'white' }} color="info">Pending</CButton>
                                                </span>
                                            </div>
                                        </CListGroupItem>
                                        <CListGroupItem>
                                            <div className="CListGroupItem-cont  d-flex w-100 justify-content-between align-items-center">
                                                <span>Booking Date</span>
                                                <span>17/10/2021</span>
                                            </div>
                                        </CListGroupItem>
                                        <CListGroupItem>
                                            <div className="CListGroupItem-cont  d-flex w-100 justify-content-between align-items-center">
                                                <span>Payment Method</span>
                                                <span>Mercadopago</span>
                                            </div>
                                        </CListGroupItem>
                                        <CListGroupItem>Vestibulum at eros</CListGroupItem>
                                        <CListGroupItem>
                                            <div className="CListGroupItem-cont  d-flex w-100 justify-content-between align-items-center">
                                                <span>Start Date:</span>
                                                <span>10/15/2021</span>
                                            </div>
                                        </CListGroupItem>
                                        <CListGroupItem>
                                            <div className="CListGroupItem-cont  d-flex w-100 justify-content-between align-items-center">
                                                <span>End Date:</span>
                                                <span>10/16/2021</span>
                                            </div>
                                        </CListGroupItem>
                                        <CListGroupItem>
                                            <div className="CListGroupItem-cont  d-flex w-100 justify-content-between align-items-center">
                                                <span>Nights:</span>
                                                <span>2</span>
                                            </div>
                                        </CListGroupItem>
                                        <CListGroupItem>
                                            <div className="CListGroupItem-cont  d-flex w-100 justify-content-between align-items-center">
                                                <span>Car Number:</span>
                                            </div>
                                        </CListGroupItem>
                                    </CListGroup>

                                    <CListGroup className='mt-4'>
                                        <CListGroupItem>
                                            <div className="CListGroupItem-cont  d-flex w-100 justify-content-between align-items-center">
                                                <span>Total:</span>
                                                <span>$500</span>
                                            </div>
                                        </CListGroupItem>
                                    </CListGroup>
                                </>

                                :
                                <>
                                    <CListGroup className='mt-3'>
                                        <CListGroupItem>
                                            <div className="CListGroupItem-cont  d-flex w-100 justify-content-between align-items-center">
                                                <span>Customer Name</span>
                                                <span>showrav Hasan</span>
                                            </div>
                                        </CListGroupItem>
                                        <CListGroupItem>
                                            <div className="CListGroupItem-cont  d-flex w-100 justify-content-between align-items-center">
                                                <span>Customer Email</span>
                                                <span>showrabhasan715@gmail.com</span>
                                            </div>
                                        </CListGroupItem>
                                        <CListGroupItem>
                                            <div className="CListGroupItem-cont  d-flex w-100 justify-content-between align-items-center">
                                                <span>Customer Number</span>
                                                <span>17283320</span>
                                            </div>
                                        </CListGroupItem>
                                        <CListGroupItem>
                                            <div className="CListGroupItem-cont  d-flex w-100 justify-content-between align-items-center">
                                                <span>Customer Address</span>
                                                <span>Tangail,Dhaka,Bangladesh</span>
                                            </div>
                                        </CListGroupItem>
                                        <CListGroupItem>
                                            <div className="CListGroupItem-cont  d-flex w-100 justify-content-between align-items-center">
                                                <span>Customer City:</span>
                                                <span>add</span>
                                            </div>
                                        </CListGroupItem>
                                        <CListGroupItem>
                                            <div className="CListGroupItem-cont  d-flex w-100 justify-content-between align-items-center">
                                                <span>Customer State:</span>
                                                <span>dhaka</span>
                                            </div>
                                        </CListGroupItem>
                                        <CListGroupItem>
                                            <div className="CListGroupItem-cont  d-flex w-100 justify-content-between align-items-center">
                                                <span>Customer Country:</span>
                                                <span>Belarus</span>
                                            </div>
                                        </CListGroupItem>
                                        <CListGroupItem>
                                            <div className="CListGroupItem-cont  d-flex w-100 justify-content-between align-items-center">
                                                <span>Zip Code:</span>
                                                <span>1234</span>
                                            </div>
                                        </CListGroupItem>

                                    </CListGroup>
                                </>
                        }
                    </CModal>
                </CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>Bank</CTableDataCell>
                <CTableDataCell style={{ color: '#757575' }}>hi</CTableDataCell>
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

            </CTableRow>
    )
}

export default CancelBookingTableRow