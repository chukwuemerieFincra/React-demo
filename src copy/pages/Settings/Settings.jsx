import React, { useState } from "react";
import "./Settings.css";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

const Settings = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    businessName: "Washing Laundry Services",
    email: "washing@gmail.com",
    phone: "+234-8012-544-49",
    address: "123 Dautin Street, Ikotepo, Lagos",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [notifications, setNotifications] = useState({
    orderAlerts: true,
    newUserAlerts: true,
    cancellationAlerts: false,
  });

  const businessFields = [
    { label: "Business Name", key: "businessName", type: "text" },
    { label: "Email", key: "email", type: "email" },
    { label: "Phone", key: "phone", type: "tel" },
    { label: "Address", key: "address", type: "text" },
  ];

  const notificationSettings = [
    {
      key: "orderAlerts",
      title: "Order Alerts",
      desc: "Get notified when a new order is placed",
    },
    {
      key: "newUserAlerts",
      title: "New user Alerts",
      desc: "Get notified when a new user registered",
    },
    {
      key: "cancellationAlerts",
      title: "Cancellation Alerts",
      desc: "Get notified when a user cancels during pickup",
    },
  ];

  const passwordFields = [
    {
      label: "Current Password",
      key: "currentPassword",
      show: showCurrentPassword,
      setShow: setShowCurrentPassword,
    },
    {
      label: "New Password",
      key: "newPassword",
      show: showNewPassword,
      setShow: setShowNewPassword,
    },
    {
      label: "Confirm New Password",
      key: "confirmPassword",
      show: showConfirmPassword,
      setShow: setShowConfirmPassword,
    },
  ];

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleToggle = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleUpdatePassword = () => {
    console.log("Update Password:", formData);
  };

  const handleSaveChanges = () => {
    console.log("Save Changes:", formData, notifications);
  };
  return (
    <main className="settings-page">
      <div className="settingsContainer">
        <div className="settingsCard">
          <div className="cardHeader">
            <h3>Business Information</h3>
            <p>Update your business details and contact information</p>
          </div>
          <div className="cardBody">
            {businessFields.map((field) => (
              <div className="formGroup" key={field.key}>
                <label>{field.label}</label>
                <input
                  type={field.type}
                  value={formData[field.key]}
                  onChange={(e) => handleInputChange(field.key, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="settingsCard">
          <div className="cardHeader">
            <h3>Notification Preferences</h3>
            <p>Choose which notifications you want to receive</p>
          </div>
          <div className="cardBody">
            {notificationSettings.map((item) => (
              <div className="toggleRow" key={item.key}>
                <div className="toggleInfo">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={notifications[item.key]}
                    onChange={() => handleToggle(item.key)}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="settingsCard">
          <div className="cardHeader">
            <h3>Change Password</h3>
          </div>
          <div className="cardBody">
            {passwordFields.map((field) => (
              <div className="formGroup" key={field.key}>
                <label>{field.label}</label>
                <div className="passwordWrapper">
                  <input
                    type={field.show ? "text" : "password"}
                    value={formData[field.key]}
                    onChange={(e) =>
                      handleInputChange(field.key, e.target.value)
                    }
                  />
                  <button
                    type="button"
                    className="eyeBtn"
                    onClick={() => field.setShow(!field.show)}
                  >
                    {field.show ? <RiEyeOffLine /> : <RiEyeLine />}
                  </button>
                </div>
              </div>
            ))}
            <button
              className="updatePasswordBtn"
              onClick={handleUpdatePassword}
            >
              Update Password
            </button>
          </div>
        </div>

        <button className="saveChangesBtn" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </div>
    </main>
  );
};
export default Settings;
