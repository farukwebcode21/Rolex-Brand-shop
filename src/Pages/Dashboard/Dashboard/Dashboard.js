import React from 'react'
import { Col, Row } from 'react-bootstrap';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import DashboardHome from '../DashboardHome/DashboardHome';
import Logout from '../Logout/Logout';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrder from '../ManageOrder/ManageOrder';
import ManageProduct from '../ManageProduct/ManageProduct';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import useAuth from '../../../hooks/useAuth'
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin, user, logOut } = useAuth();

    return (
        <>
            <Row>
                <Col xs={12} sm={2}>
                <div className="text-white bg-dark mt-2 mb-2" style={{height:'100vh'}}>
                    <ul className="nav nav-pills flex-column">
                            {admin && <div>
                                <li><Link to={`${url}/manageallorder`} className="nav-link border-bottom rounded-pill text-white">Manage All Orders</Link></li>
                                <li><Link to={`${url}/addproduct`} className="nav-link border-bottom rounded-pill text-white">Add Product</Link></li>
                                <li><Link to={`${url}/makeadmin`} className="nav-link border-bottom rounded-pill text-white">Make Admin</Link></li>
                                <li><Link to={`${url}/manageproduct`} className="nav-link border-bottom rounded-pill text-white">Manage Products</Link></li>
                            </div>}
                            {!admin && <div>
                                <li><Link to={`${url}/myorder`} className="nav-link border-bottom rounded-pill text-white">My Orders</Link></li>
                                <li><Link to={`${url}/review`} className="nav-link border-bottom rounded-pill text-white">Reviews</Link></li>
                                <li><Link to={`${url}/pay`} className="nav-link border-bottom rounded-pill text-white">Pay</Link></li>
                            </div>}
                            {user?.email ?
                                <li onClick={logOut} className="nav-link border-bottom rounded-pill text-white">Logout</li> :
                                <li><Link to="/login" className="nav-link border-bottom rounded-pill text-white">Login</Link></li>
                            }
                    </ul>
                </div>
                </Col>
                <Col xs={12} sm={10}>
                    <Switch>
                    <Route exact path={path}>
                    <DashboardHome/>
                    </Route>
                    <AdminRoute path={`${path}/manageallorder`}>
                        <ManageOrder/>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addproduct`}>
                        <AddProduct/>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin/>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproduct`}>
                        <ManageProduct/>
                    </AdminRoute>
                    <Route path={`${path}/logout`}>
                        <Logout/>
                    </Route>
                    <Route path={`${path}/myorder`}>
                        <MyOrders/>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review/>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay/>
                    </Route>
                </Switch>
                </Col>
            </Row>
        </>
    )
}

export default Dashboard;
