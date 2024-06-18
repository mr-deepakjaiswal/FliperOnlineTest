import React from 'react'

function SideBar() {
  return (
    <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: "280px" , height :"100vh"}}>
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4">Sidebar</span>
      </a>
      <hr />
      
    </div>
  )
}

export default SideBar