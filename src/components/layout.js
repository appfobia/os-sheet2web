import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Button} from "react-bootstrap"
import "./layout.css"


export default ({children})=>(
    <div>
        <TopNav/>
        {children}
    </div>
)

function TopNav(){
    return(
    <header className="header text-white">
        <Navbar expand="lg">
            <div className="container">
                <Navbar.Brand className = "navbar-left" href="#home">sheet2web</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav btn" />
                    <Navbar.Collapse className = "navbar-right" id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="nav-link n-item" to="/">Home</Link>
                        <Link className="nav-link n-item" to="/about/">About</Link>
                        <Link className="nav-link n-item" to="/contact/">Contact</Link>
                    </Nav>
                    <Button className="n-item">Get Started</Button>
                    </Navbar.Collapse>
            </div>
        </Navbar>
        <div className="head-text text-center">
            <div className="row">
                <div className="col-lg-8 col-sm-8 mx-auto">
                    <h1 className="display-4 d-none d-md-block my-lg-3">Made With Open Source sheet2web</h1>
                    <h1 className="d-md-none my-lg-3" style={{fontWeight:'300'}}>Made With Open Source sheet2web</h1>
                    <h3 className="col-lg-12 col-md-8 text-center mt-50" style={{fontWeight:'200'}}>Spin up your own Gatsby Website</h3>
                </div>
            </div>
        </div>
        <div className="btn-call-to-action text-center">
            <Button className="mx-auto btn-round">Get Started</Button>
        </div>
    </header>
  )}