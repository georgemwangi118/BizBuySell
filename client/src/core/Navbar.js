import React, { Fragment } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "./styles/navbar.css";
import icon from "../images/logo.png";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "blue" };
  } else {
    return { color: "#000" };
  }
};

const NavbarMenu = ({ history }) => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="d-flex navbar"
    >
      <Container fluid="lg">
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src={icon}
              alt="logo"
              width="70"
              height="30"
              className="d-inline-block align-top"
              style={{ background: "crimson" }}
            />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center me-auto">
            <NavDropdown title="Buy a Business" id="collasible-nav-dropdown">
              <LinkContainer to="/shop">
                <NavDropdown.Item>Search for a Business</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/established-business-for-sale">
                <NavDropdown.Item>Established Business</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/asset-for-sale">
                <NavDropdown.Item>Asset Sales</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/how-to-buy-business">
                <NavDropdown.Item>How to buy a business</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/bizbuysell-edge">
                <NavDropdown.Item>BizBuySell Edge</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <NavDropdown title="Sell a Business" id="collasible-nav-dropdown">
              <LinkContainer to="/shop">
                <NavDropdown.Item>
                  Sell a Business on BizBuySell
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/brokers">
                <NavDropdown.Item>Sell multiple Business</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/how-to-sell-a-business">
                <NavDropdown.Item>How to sell a business</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/small-business-valuation">
                <NavDropdown.Item>Value a Business</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <NavDropdown title="Resources" id="collasible-nav-dropdown">
              <LinkContainer to="/learning-center">
                <NavDropdown.Item>Learning Center</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/finance-center">
                <NavDropdown.Item>Finance Center</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/blog">
                <NavDropdown.Item>Business for Sale Blog</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <NavDropdown title="Get Financing" id="collasible-nav-dropdown">
              <LinkContainer to="/learning-center">
                <NavDropdown.Item>Learning Center</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/finance-center">
                <NavDropdown.Item>Finance Center</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/blog">
                <NavDropdown.Item>Business for Sale Blog</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>

          <Nav className="justify-content-end">
            <LinkContainer to="/cart" style={isActive(history, "/cart")}>
              <Nav.Link>
                Cart <sup>{itemTotal()}</sup>
              </Nav.Link>
            </LinkContainer>

            {isAuthenticated() && isAuthenticated().user.role === 0 && (
              <LinkContainer
                to="/user/dashboard"
                style={isActive(history, "/user/dashboard")}
              >
                <Nav.Link>Dashboard</Nav.Link>
              </LinkContainer>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
              <LinkContainer
                to="/admin/dashboard"
                style={isActive(history, "/admin/dashboard")}
              >
                <Nav.Link>Dashboard</Nav.Link>
              </LinkContainer>
            )}

            {!isAuthenticated() && (
              <Fragment>
                <LinkContainer
                  to="/signin"
                  style={isActive(history, "/signin")}
                >
                  <Nav.Link>Signin</Nav.Link>
                </LinkContainer>

                <LinkContainer
                  to="/signup"
                  style={isActive(history, "/signup")}
                >
                  <Nav.Link>Signup</Nav.Link>
                </LinkContainer>
              </Fragment>
            )}
            {/**Signout not functioning, will checkout later */}
            {!isAuthenticated() && (
              <Fragment>
                <LinkContainer to="/logout">
                  <Nav.Link
                    style={{ cursor: "pointer", color: "#ffffff" }}
                    onClick={() =>
                      signout(() => {
                        history.push("/");
                      })
                    }
                  >
                    Signout
                  </Nav.Link>
                </LinkContainer>
              </Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withRouter(NavbarMenu);
