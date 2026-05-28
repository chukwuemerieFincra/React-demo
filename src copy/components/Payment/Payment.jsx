// import React from 'react';
// import { 
//   FiArrowLeft, 
//   FiUser, 
//   FiPhone, 
//   FiMail, 
//   FiMapPin, 
//   FiClock 
// } from 'react-icons/fi';
// import { TbTruckDelivery, TbBox } from 'react-icons/tb';
// import './Payment.css';

// export default function Payment() {
//   const orderData = {
//     id: "#10425",
//     status: "Scheduled",
//     clientName: "Delight Nursery School",
//     mobile: "08123456789",
//     email: "delightskool@gmail.com",
//     address: "Taslim Elias Cls. V/Island, Box 61502, Ikoyi, Lagos",
//     dateTime: "14/03/2026 2:00 PM",
//     driver: "Olisa",
//     items: [
//       { service: "Washing & Dry", items: "Shirts (5)", total: "₦12,000" },
//       { service: "Ironing", items: "Agbada (2)", total: "₦3,000" },
//       { service: "Stain Removal", items: "Duvet (1)", total: "₦5,000" }
//     ]
//   };

//   return (
//     <div className="payment-container">
//       {/* Top Header Navigation */}
//       <div className="header-nav">
//         <button className="back-button" onClick={() => console.log('Back clicked')}>
//           <FiArrowLeft className="back-icon" /> Back
//         </button>
//       </div>

//       {/* Main Status Header */}
//       <div className="main-header">
//         <div className="header-left">
//           <div className="icon-container">
//             <TbBox size={24} color="white" />
//           </div>
//           <div>
//             <h1 className="title">Pickup</h1>
//             <p className="order-id">{orderData.id}</p>
//           </div>
//         </div>
//         <div className="status-badge">{orderData.status}</div>
//       </div>

//       {/* Client Details Section */}
//       <div className="details-section">
//         <div className="detail-row">
//           <FiUser className="detail-icon" />
//           <span className="detail-text">
//             <span className="label">Client Name: </span>{orderData.clientName}
//           </span>
//         </div>
        
//         <div className="detail-row">
//           <FiPhone className="detail-icon" />
//           <span className="detail-text">
//             <span className="label">Mobile: </span>{orderData.mobile}
//           </span>
//         </div>

//         <div className="detail-row">
//           <FiMail className="detail-icon" />
//           <span className="detail-text">
//             <span className="label">Email: </span>{orderData.email}
//           </span>
//         </div>

//         <div className="detail-row">
//           <FiMapPin className="detail-icon" />
//           <span className="detail-text">
//             <span className="label">Address: </span>{orderData.address}
//           </span>
//         </div>

//         <div className="detail-row">
//           <FiClock className="detail-icon" />
//           <span className="detail-text">
//             <span className="label">Date & Time: </span>{orderData.dateTime}
//           </span>
//         </div>

//         <div className="detail-row">
//           <TbTruckDelivery className="detail-icon" />
//           <span className="detail-text">
//             <span className="label">Driver: </span>{orderData.driver}
//           </span>
//         </div>
//       </div>

//       {/* Order Items Table */}
//       <div className="order-items-container">
//         <h2 className="section-title">Order Items</h2>
//         <table className="order-table">
//           <thead>
//             <tr className="table-header-row">
//               <th className="th text-left">Individual Service</th>
//               <th className="th text-left">Items</th>
//               <th className="th text-right">Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orderData.items.map((item, index) => (
//               <tr key={index} className="table-body-row">
//                 <td className="td service-cell">{item.service}</td>
//                 <td className="td items-cell">{item.items}</td>
//                 <td className="td total-cell text-right">{item.total}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Action Buttons */}
//       <div className="button-container">
//         <button className="start-btn" onClick={() => console.log('Start Task')}>
//           Start Task
//         </button>
//         <button className="track-btn" onClick={() => console.log('Track')}>
//           Track
//         </button>
//       </div>
//     </div>
//   );
// }