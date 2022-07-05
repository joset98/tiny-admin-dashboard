import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import '../../styles/components/sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            
            <div className='sidebarWrapper'>

                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>

                    <ul className='sidebarLinks'>
                        <Link to={'/'} className="link">
                            <li className='sidebarLinkItem active'> <LineStyle className="sidebarIcon" /> Home</li>
                        </Link>

                        <Link to={'/'} className="link">
                            <li className='sidebarLinkItem'>
                                <Timeline className="sidebarIcon" /> Analytics
                            </li>
                        </Link>

                        <Link to={'/'} className="link">
                            <li className='sidebarLinkItem'>
                                <TrendingUp className="sidebarIcon" /> Sales
                            </li>
                        </Link>

                    </ul>
                </div>

                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Quick Menu</h3>

                    <ul className='sidebarLinks'>
                        <Link to={'/users'} className="link">
                            <li className='sidebarLinkItem active'>
                                <PermIdentity className="sidebarIcon" /> Users
                            </li>
                        </Link>

                        <Link to={'/products'} className="link">
                            <li className='sidebarLinkItem'>
                                <Storefront className="sidebarIcon" /> Products
                            </li>
                        </Link>

                        <Link to={'/'} className="link">
                            <li className='sidebarLinkItem'>
                                <AttachMoney className="sidebarIcon" /> Transactions
                            </li>
                        </Link>

                        <Link to={'/'} className="link">
                            <li className="sidebarLinkItem">
                                <BarChart className="sidebarIcon" />
                                Reports
                            </li>
                        </Link>

                    </ul>
                </div>

                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Notifications</h3>

                    <ul className='sidebarLinks'>
                        <li className='sidebarLinkItem active'>
                            <MailOutline className="sidebarIcon" /> Mail
                        </li>

                        <li className='sidebarLinkItem'>
                            <DynamicFeed className="sidebarIcon" /> Feedback
                        </li>

                        <li className='sidebarLinkItem'>
                            <ChatBubbleOutline className="sidebarIcon" /> Message
                        </li>

                    </ul>
                </div>

                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Staff</h3>

                    <ul className='sidebarLinks'>
                        <li className='sidebarLinkItem active'>
                            <WorkOutline className="sidebarIcon" /> Manage
                        </li>

                        <li className='sidebarLinkItem'>
                            <Timeline className="sidebarIcon" /> Analytics
                        </li>

                        <li className='sidebarLinkItem'>
                            <Report className="sidebarIcon" /> Reports
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Sidebar; 