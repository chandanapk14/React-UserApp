import React from 'react'
import Navbar from './Navbar'

const DeleteUser = () => {
  return (
    <div>
        <Navbar/>
        <h5><u><center>DELETE USER</center></u></h5><br></br>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">ENTER USER ID</label>
                    <input type="text" className="form-control" />
                    </div>
                    <br></br><div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                        <button className="btn btn-danger">DELETE</button>
                    </div>
                </div>
            </div>
        </div>
    </div></div>
  )
}

export default DeleteUser