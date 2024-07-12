import React from 'react'
import "./header.css"

function Header() {
  return (
    <div>
        <header className="admin-header">
        <div className="container ">
            <div className="row align-items-center float-start">
                <div className="col-md-6">
                    <h1>Trang Quản Trị</h1>
                </div>
                <div className="col-md-6 text-right">
                    <p>Xin chào, <strong>Admin</strong> | <a href="#">Đăng xuất</a></p>
                </div>
            </div>
        </div>
    </header>
    </div>
  )
}

export default Header
