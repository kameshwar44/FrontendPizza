import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { Route, Routes } from "react-router";
import Userlist from "./../Components/Admin/Userlist";
import OrderList from "./../Components/Admin/OrderList";
import AddNewPizza from "./../Components/Admin/AddNewPizza";
import Pizzaslist from "./../Components/Admin/Pizzaslist";


function AdminScreen() {
  const navigate = useNavigate();
  const { pizzaId } = useParams();

  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
          <Col md={3}>
            <div
              vertical
              style={{
                display: "flex",
                justifyContent: "center",
                textDecoration:'none',
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <NavLink style={{color:"white", textDecoration: "none",backgroundColor:"blue",width:"100px",height:"40px",border:"2px solid black", borderRadius:'20px',alignItems:'center',display:'flex',justifyContent:"center" }} to="/admin/userlist">All Users</NavLink>
              <NavLink style={{ color:"white",textDecoration: "none",backgroundColor:"blue",width:"100px",height:"40px",border:"2px solid black", borderRadius:'20px',alignItems:'center',display:'flex',justifyContent:"center" }}   to="/admin/pizzalist">All Pizzas</NavLink>
              <NavLink style={{color:"white", textDecoration: "none",backgroundColor:"blue",width:"100px",height:"40px",border:"2px solid black", borderRadius:'20px',alignItems:'center',display:'flex',justifyContent:"center" }}   to="/admin/addnewpizza">AddNewPizza</NavLink>
              <NavLink  style={{ color:"white",textDecoration: "none",backgroundColor:"blue",width:"100px",height:"40px",border:"2px solid black", borderRadius:'20px',alignItems:'center',display:'flex',justifyContent:"center" }}  to="/admin/orderlist">All Orders</NavLink>
            </div>
          </Col>
          <Col md={8}>
            <Routes>
              <Route path="/userlist" element={<Userlist />} exact />
             
              <Route path="/pizzalist" element={<Pizzaslist />} exact />
              <Route path="/addnewpizza" element={<AddNewPizza />} exact />
              <Route path="/orderlist" element={<OrderList />} exact />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminScreen;
