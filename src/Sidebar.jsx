import {
     CNavGroup, CNavItem, CNavTitle, CSidebar, CSidebarBrand, CSidebarNav
} from "@coreui/react"
import toast from "react-hot-toast";
import { Link } from "react-router-dom"
const Sidebar = () => {
    const linkStyle = {
        width: "100%",
        textDecoration: "none",
        color: 'rgba(255, 255, 255, 0.6)',
      };
    return (
        <div className="h-100">
            <CSidebar color="light" style={{height: "100%"}} visible={true} className="bg-dark">
                <CSidebarBrand style={{padding: "2rem 0"}}>BOOKPRO</CSidebarBrand>
                <CSidebarNav expand="true">
                    <CNavTitle >
                    <Link  onClick={() => { toast.success('Welcome to DashBoard') }}  style={linkStyle} to="/dashboard">DASHBOARD</Link>
                    </CNavTitle>
                    <CNavGroup toggler="Hotel"></CNavGroup>
                    <CNavGroup toggler="Tour"></CNavGroup>
                    <CNavGroup toggler="Space"></CNavGroup>
                    <CNavGroup toggler="Car">
                    <CNavItem  to="/">All Cars</CNavItem>
                    <CNavItem  to="/">All Attributes</CNavItem>
                        <CNavItem  to="/">
                            <Link onClick={() => { toast.success('All bookings') }}  style={linkStyle} to="/all-bookings">All Bookings</Link>
                        </CNavItem>
                        <CNavItem to="/">
                            <Link onClick={() => { toast.success('Pending bookings') }} style={linkStyle} to="/pending-bookings">Pending Bookings</Link>
                        </CNavItem>
                    </CNavGroup>
                    <CNavItem to="/">
                        <Link onClick={() => { toast.success('Cancel bookings') }} style={linkStyle} to="/cancel-bookings">Cancel Bookings</Link>
                    </CNavItem>
                    <CNavGroup toggler="General Settings"></CNavGroup>
                    <CNavGroup toggler="Home Page Settings"></CNavGroup>
                    <CNavGroup toggler="Payment Settings"></CNavGroup>
                    <CNavGroup toggler="Menu Page Settings"></CNavGroup>
                    <CNavGroup toggler="Blog"></CNavGroup>
                    <CNavGroup toggler="Email Settings"></CNavGroup>
                </CSidebarNav>
            </CSidebar>
        </div>
    )
}

export default Sidebar