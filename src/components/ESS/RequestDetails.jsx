import React from "react";
import { Navbar, Nav, Form, Dropdown, Col } from "react-bootstrap";
import {
  AiOutlineLogout,
  AiOutlineSortAscending,
  AiOutlineSortDescending,
  AiOutlineAlignLeft,
  AiOutlineHome,
  AiOutlineCheckSquare,
  AiOutlineCalendar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { Table } from "react-bootstrap";
import '../../css/NavEss.css';

function RequestDetails() {
  return (
    <>
      <div>
        <Navbar>
          <Navbar.Brand>
            <Dropdown className="align">
              <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                <AiOutlineAlignLeft />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/">
                  <AiOutlineHome />
                  &nbsp;&nbsp;Home
                </Dropdown.Item>
                <Dropdown.Item href="/essnav">
                  <AiOutlineCheckSquare />
                  &nbsp;&nbsp;Ess
                </Dropdown.Item>
                <Dropdown.Item href="/timesheet">
                  <AiOutlineCalendar />
                  &nbsp;&nbsp;Timesheet
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to={"/essnav"}>
                ESS Request
              </Nav.Link>
              <Nav.Link as={Link} to={"/requestdetails"}>
                Request Details
              </Nav.Link>
            </Nav>
            <Form inline>
              <button className="a" id="logout">
                Logout
                <AiOutlineLogout />
              </button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <h1>Navbar is fixed, This is Request Details Page</h1>
    </>
  );
}

export default RequestDetails;
