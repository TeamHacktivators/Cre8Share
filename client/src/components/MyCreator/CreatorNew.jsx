import React from 'react'
import './CreatorNew.css'
export const CreatorNew = () => {
    return (
        <div>
            <body id="page-top"/>

                {/*<!-- Page Wrapper -->*/}
                <div id="wrapper">

                    {/*<!-- Sidebar -->*/}
                    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                        {/*<!-- Sidebar - Brand -->*/}
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                            
                            <div className="sidebar-brand-text mx-3">Cre8Share <sup></sup></div>
                        </a>

                        { /*<!-- Divider -->*/}
                        <hr className="sidebar-divider my-0"/>

                            {/*<!-- Nav Item - Dashboard -->*/}
                            <li className="nav-item active">
                                <a className="nav-link" href="index.html">
                                    <i className="fas fa-fw fa-tachometer-alt"></i>
                                    <span>Dashboard</span></a>
                            </li>
    
                            {/*<!-- Divider -->*/}
                            <hr className="sidebar-divider"/>

                                {/* !-- Nav Item - Dashboard -- */}
                                <div className="sidebar-heading">
                                    Interface
                                </div>

                                {/*<!-- Nav Item - Pages Collapse Menu -->*/}
                                <li className="nav-item">
                                    <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseTwo"
                                        aria-expanded="true" aria-controls="collapseTwo">
                                        <i className="fas fa-fw fa-cog"></i>
                                        <span>HOME</span>
                                    </a>
                                    
                                </li>

                                {/*<!-- Nav Item - Utilities Collapse Menu -->*/}
                                <li className="nav-item">
                                    <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseUtilities"
                                        aria-expanded="true" aria-controls="collapseUtilities">
                                        <i className="fas fa-fw fa-wrench"></i>
                                        <span>Settings</span>
                                    </a>
                                    
                                </li>

                                {/*<!-- Divider -->*/}
                                <hr className="sidebar-divider"/>

                                    {/*<!-- Heading -->*/}
                                    <div className="sidebar-heading">
                                        Addons
                                    </div>

                                    {/*<!-- Nav Item - Pages Collapse Menu -->*/}
                                    <li className="nav-item">
                                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                                            aria-expanded="true" aria-controls="collapsePages">
                                            <i className="fas fa-fw fa-folder"></i>
                                            <span>Pages</span>
                                        </a>
                                        <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                                            <div className="bg-white py-2 collapse-inner rounded">
                                                <h6 className="collapse-header">Login Screens:</h6>
                                                <a className="collapse-item" href="login.html">Login</a>
                                                <a className="collapse-item" href="register.html">Register</a>
                                                <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                                                <div className="collapse-divider"></div>
                                                <h6 className="collapse-header">Other Pages:</h6>
                                                <a className="collapse-item" href="404.html">404 Page</a>
                                                <a className="collapse-item" href="blank.html">Blank Page</a>
                                            </div>
                                        </div>
                                    </li>

                                    {/*<!-- Nav Item - Charts -->*/}
                                    <li className="nav-item">
                                        <a className="nav-link" href="charts.html">
                                            <i className="fas fa-fw fa-chart-area"></i>
                                            <span>Allot Shares</span></a>
                                    </li>

                                    {/*!-- Nav Item - Tables -- */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="tables.html">
                                            <i className="fas fa-fw fa-table"></i>
                                            <span>Tables</span></a>
                                    </li>

                                    {/*<!-- Divider -->*/}
                                    <hr className="sidebar-divider d-none d-md-block"/>

                                        {/*<!-- Sidebar Toggler (Sidebar) -->*/}
                                        <div className="text-center d-none d-md-inline">
                                            <button className="rounded-circle border-0" id="sidebarToggle"></button>
                                        </div>

                                        {/*<!-- Sidebar Message -->*/}
                                        

                                    </ul>
                                    {/*<!-- End of Sidebar -->*/}

                                    {/*<!-- Content Wrapper -->*/}
                                    <div id="content-wrapper" className="d-flex flex-column">

                                        {/*<!-- Main Content -->*/}
                                        <div id="content">

                                            {/*<!-- Topbar -->*/}
                                            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                                                {/*<!-- Sidebar Toggle (Topbar) -->*/}
                                                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                                    <i className="fa fa-bars"></i>
                                                </button>

                                                {/*<!-- Topbar Search -->*/}
                                                <form
                                                    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                                            aria-label="Search" aria-describedby="basic-addon2"/>
                                                            <div className="input-group-append">
                                                                <button className="btn btn-primary" type="button">
                                                                    <i className="fas fa-search fa-sm"></i>
                                                                </button>
                                                            </div>
                                                    </div>
                                                </form>

                                                {/*<!-- Topbar Navbar -->*/}
                                                <ul className="navbar-nav ml-auto">

                                                    {/*<!-- Nav Item - Search Dropdown (Visible Only XS) -->*/}
                                                    <li className="nav-item dropdown no-arrow d-sm-none">
                                                        <a className="nav-link dropdown-toggle" href="/" id="searchDropdown" role="button"
                                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="fas fa-search fa-fw"></i>
                                                        </a>
                                                        {/*<!-- Dropdown - Messages -->*/}
                                                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                                            aria-labelledby="searchDropdown">
                                                            <form className="form-inline mr-auto w-100 navbar-search">
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control bg-light border-0 small"
                                                                        placeholder="Search for..." aria-label="Search"
                                                                        aria-describedby="basic-addon2"/>
                                                                        <div className="input-group-append">
                                                                            <button className="btn btn-primary" type="button">
                                                                                <i className="fas fa-search fa-sm"></i>
                                                                            </button>
                                                                        </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </li>

                                                    {/*<!-- Nav Item - Alerts -->*/}
                                                    <li className="nav-item dropdown no-arrow mx-1">
                                                        <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown" role="button"
                                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="fas fa-bell fa-fw"></i>
                                                            {/*<!-- Counter - Alerts -->*/}
                                                            <span className="badge badge-danger badge-counter">3+</span>
                                                        </a>
                                                        {/*<!-- Dropdown - Alerts -->*/}
                                                        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                                            aria-labelledby="alertsDropdown">
                                                            <h6 className="dropdown-header">
                                                                Alerts Center
                                                            </h6>
                                                            <a className="dropdown-item d-flex align-items-center" href="/">
                                                                <div className="mr-3">
                                                                    <div className="icon-circle bg-primary">
                                                                        <i className="fas fa-file-alt text-white"></i>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="small text-gray-500">December 12, 2019</div>
                                                                    <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                                                </div>
                                                            </a>
                                                            <a className="dropdown-item d-flex align-items-center" href="/">
                                                                <div className="mr-3">
                                                                    <div className="icon-circle bg-success">
                                                                        <i className="fas fa-donate text-white"></i>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="small text-gray-500">December 7, 2019</div>
                                                                    $290.29 has been deposited into your account!
                                                                </div>
                                                            </a>
                                                            <a className="dropdown-item d-flex align-items-center" href="/">
                                                                <div className="mr-3">
                                                                    <div className="icon-circle bg-warning">
                                                                        <i className="fas fa-exclamation-triangle text-white"></i>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="small text-gray-500">December 2, 2019</div>
                                                                    Spending Alert: We've noticed unusually high spending for your account.
                                                                </div>
                                                            </a>
                                                            <a className="dropdown-item text-center small text-gray-500" href="/">Show All Alerts</a>
                                                        </div>
                                                    </li>

                                                    {/*<!-- Nav Item - Messages -->*/}
                                                    

                                                    <div className="topbar-divider d-none d-sm-block"></div>

                                                    {/*<!-- Nav Item - User Information -->*/}
                                                    <li className="nav-item dropdown no-arrow">
                                                        <a className="nav-link dropdown-toggle" href="/" id="userDropdown" role="button"
                                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">SUMIT TIWARI</span>
                                                            <img className="img-profile rounded-circle"
                                                                src="img/undraw_profile.svg"/>
                                                        </a>
                                                        {/*<!-- Dropdown - User Information -->*/}
                                                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                                            aria-labelledby="userDropdown">
                                                            <a className="dropdown-item" href="/">
                                                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                                                Profile
                                                            </a>
                                                            <a className="dropdown-item" href="/">
                                                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                                                Settings
                                                            </a>
                                                            <a className="dropdown-item" href="/">
                                                                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                                                Activity Log
                                                            </a>
                                                            <div className="dropdown-divider"></div>
                                                            <a className="dropdown-item" href="/" data-toggle="modal" data-target="#logoutModal">
                                                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                                                Logout
                                                            </a>
                                                        </div>
                                                    </li>

                                                </ul>

                                            </nav>
                                            {/*<!-- End of Topbar -->*/}

                                            {/*<!-- Begin Page Content -->*/}
                                            <div className="container-fluid">

                                                {/*<!-- Page Heading -->*/}
                                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                                                    <a href="/" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                                        className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                                                </div>

                                                {/*<!-- Content Row -->*/}
                                                <div className="row">

                                                    {/*<!-- Earnings (Monthly) Card Example -->*/}
                                                    <div className="col-xl-3 col-md-6 mb-4">
                                                        <div className="card border-left-primary shadow h-100 py-2">
                                                            <div className="card-body">
                                                                <div className="row no-gutters align-items-center">
                                                                    <div className="col mr-2">
                                                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                                            Earnings (Monthly)</div>
                                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                                                    </div>
                                                                    <div className="col-auto">
                                                                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/*<!-- Earnings (Monthly) Card Example -->*/}
                                                    <div className="col-xl-3 col-md-6 mb-4">
                                                        <div className="card border-left-success shadow h-100 py-2">
                                                            <div className="card-body">
                                                                <div className="row no-gutters align-items-center">
                                                                    <div className="col mr-2">
                                                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                                            Earnings (Annual)</div>
                                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                                                                    </div>
                                                                    <div className="col-auto">
                                                                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/*<!-- Earnings (Monthly) Card Example -->*/}
                                                    <div className="col-xl-3 col-md-6 mb-4">
                                                        <div className="card border-left-info shadow h-100 py-2">
                                                            <div className="card-body">
                                                                <div className="row no-gutters align-items-center">
                                                                    <div className="col mr-2">
                                                                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Stocks Listed
                                                                        </div>
                                                                        <div className="row no-gutters align-items-center">
                                                                            <div className="col-auto">
                                                                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="progress progress-sm mr-2">
                                                                                    <div className="progress-bar bg-info a1" role="progressbar"
                                                                                        ></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-auto">
                                                                        <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/*<!-- Pending Requests Card Example -->*/}
                                                    <div className="col-xl-3 col-md-6 mb-4">
                                                        <div className="card border-left-warning shadow h-100 py-2">
                                                            <div className="card-body">
                                                                <div className="row no-gutters align-items-center">
                                                                    <div className="col mr-2">
                                                                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                                            Pending Requests</div>
                                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                                                    </div>
                                                                    <div className="col-auto">
                                                                        <i className="fas fa-comments fa-2x text-gray-300"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/*<!-- Content Row -->*/}

                                                <div className="row">

                                                    {/*<!-- Area Chart -->*/}
                                                    <div className="col-xl-8 col-lg-7">
                                                        <div className="card shadow mb-4">
                                                            {/*<!-- Card Header - Dropdown -->*/}
                                                            <div
                                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                                <h6 className="m-0 font-weight-bold text-primary">Channel Performance</h6>
                                                                <div className="dropdown no-arrow">
                                                                    <a className="dropdown-toggle" href="/" role="button" id="dropdownMenuLink"
                                                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                                        aria-labelledby="dropdownMenuLink">
                                                                        <div className="dropdown-header">Dropdown Header:</div>
                                                                        <a className="dropdown-item" href="/">Action</a>
                                                                        <a className="dropdown-item" href="/">Another action</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item" href="/">Something else here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/*<!-- Card Body -->*/}
                                                            <div className="card-body">
                                                                <div className="chart-area">
                                                                    <canvas id="myAreaChart"></canvas>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/*<!-- Pie Chart -->*/}
                                                    <div className="col-xl-4 col-lg-5">
                                                        <div className="card shadow mb-4">
                                                            {/*<!-- Card Header - Dropdown -->*/}
                                                            <div
                                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                                <h6 className="m-0 font-weight-bold text-primary">Channel Valuation</h6>
                                                                <div className="dropdown no-arrow">
                                                                    <a className="dropdown-toggle" href="/" role="button" id="dropdownMenuLink"
                                                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                                        aria-labelledby="dropdownMenuLink">
                                                                        <div className="dropdown-header">Dropdown Header:</div>
                                                                        <a className="dropdown-item" href="/">Action</a>
                                                                        <a className="dropdown-item" href="/">Another action</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item" href="/">Something else here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/*<!-- Card Body -->*/}
                                                            <div className="card-body">
                                                                <div className="chart-pie pt-4 pb-2">
                                                                    <canvas id="myPieChart"></canvas>
                                                                </div>
                                                                <div className="mt-4 text-center small">
                                                                    <span className="mr-2">
                                                                        <i className="fas fa-circle text-primary"></i> Direct
                                                                    </span>
                                                                    <span className="mr-2">
                                                                        <i className="fas fa-circle text-success"></i> Social
                                                                    </span>
                                                                    <span className="mr-2">
                                                                        <i className="fas fa-circle text-info"></i> Referral
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/*<!-- Content Row -->*/}
                                                <div className="row">

                                                    {/*<!-- Content Column -->*/}
                                                    <div className="col-lg-6 mb-4">

                                                        {/*<!-- Project Card Example -->*/}
                                                        <div className="card shadow mb-4">
                                                            <div className="card-header py-3">
                                                                <h6 className="m-0 font-weight-bold text-primary">Channel Stocks</h6>
                                                            </div>
                                                            <div className="card-body">
                                                                <h4 className="small font-weight-bold"> First Week<span
                                                                    className="float-right">20%</span></h4>
                                                                <div className="progress mb-4">
                                                                    <div className="progress-bar bg-danger a2" role="progressbar" ></div>
                                                                </div>
                                                                <h4 className="small font-weight-bold">Second Week <span
                                                                    className="float-right">40%</span></h4>
                                                                <div className="progress mb-4">
                                                                    <div className="progress-bar bg-warning a3" role="progressbar" ></div>
                                                                </div>
                                                                <h4 className="small font-weight-bold">Third Week<span
                                                                    className="float-right">60%</span></h4>
                                                                <div className="progress mb-4">
                                                                    <div className="progress-bar a4" role="progressbar" ></div>
                                                                </div>
                                                                <h4 className="small font-weight-bold">Fourth Week <span
                                                                    className="float-right">80%</span></h4>
                                                                <div className="progress mb-4">
                                                                    <div className="progress-bar bg-info a5" role="progressbar" ></div>
                                                                </div>
                                                                <h4 className="small font-weight-bold">Fifth Week <span
                                                                    className="float-right">Complete!</span></h4>
                                                                <div className="progress">
                                                                    <div className="progress-bar bg-success a6" role="progressbar" ></div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/*<!-- Color System -->*/}
                                                        

                                                    </div>

                                                    <div className="col-lg-6 mb-4">

                                                        {/*<!-- Illustrations -->*/}
                                                        <div className="card shadow mb-4">
                                                            <div className="card-header py-3">
                                                                <h6 className="m-0 font-weight-bold text-primary">Channel Analytics</h6>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="text-center">
                                                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 a7" src="img/undraw_posting_photo.svg" alt="..."/>
                                                                </div>
                                                                <p> Here
                                                                    You Will Show Daily Subscribers And Likes Gain</p>
                                                                <a target="_blank" rel="nofollow" href="https://undraw.co/"> Allot Shares
                                                                     &rarr;</a>
                                                            </div>
                                                        </div>

                                                        {/*<!-- Approach -->*/}
                                                        <div className="card shadow mb-4">
                                                            <div className="card-header py-3">
                                                                <h6 className="m-0 font-weight-bold text-primary">Your Youtube Channel</h6>
                                                            </div>
                                                            <div className="card-body">
                                                                <p>Here You Will Find Your Youtube Channel Profile And Your Performance </p>
                                                                
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                            {/*<!-- /.container-fluid -->*/}

                                        </div>
                                        {/*<!-- End of Main Content -->*/}

                                        {/*<!-- Footer -->*/}
                                        
                                        {/*<!-- End of Footer -->*/}

                                    </div>
                                    {/*<!-- End of Content Wrapper -->*/}

                                </div>
                                {/*<!-- End of Page Wrapper -->*/}

                                {/*<!-- Scroll to Top Button-->*/}
                                <a className="scroll-to-top rounded" href="#page-top">
                                    <i className="fas fa-angle-up"></i>
                                </a>

                                {/*<!-- Logout Modal-->*/}
                                <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                                            <div className="modal-footer">
                                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                                <a className="btn btn-primary" href="login.html">Logout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                    )
}
