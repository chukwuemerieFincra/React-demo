import React from 'react'
import "./Createorder.css"
import {Link} from "react-router-dom"

const Createorder = () => {

  return (
   <div className="order-container">
      <div className="order-modal">
        <div className="top">
          <h2>Create an Order</h2>
          <button className="close-btn">×</button>
        </div>

        <form className="order-form">
          {/* First Row */}
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="John Doe" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="example@gmail.com" />
          </div>

          {/* Second Row */}
          <div className="form-group">
            <label>Mobile</label>
            <input type="text" placeholder="+234" />
          </div>

          <div className="form-group">
            <label>Assign a Driver</label>
            <select>
              <option>Select an option</option>
              <option>Driver 1</option>
              <option>Driver 2</option>
            </select>
          </div>

          {/* Address */}
          <div className="form-group full-width">
            <label>Address</label>
            <input type="text" placeholder="enter address" />
          </div>

          {/* Service Section */}
          <div className="service-section">
            <div className="service-left">
              <h4>Choose Service</h4>

              <div className="checkbox-group">
                <label>
                  <input  className="form-checkbox" type="checkbox" />
                  Individual Service
                </label>

                <label>
                  <input type="checkbox" defaultChecked />
                  Package
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Service Type</label>
              <select>
                <option>Select an option</option>
              </select>
            </div>

            <div className="form-group">
              <label>Service Package</label>
              <select>
                <option>Select an option</option>
              </select>
            </div>
          </div>

          {/* Button */}
          <Link to="/dashboard/orderdetails">
            <button className="submit-btn" type="submit">
              Create Order
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Createorder
