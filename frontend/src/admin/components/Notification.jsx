import React from "react";
import { useNotification } from "./context/NotificationContext";

const Notification = () => {
  const { notification } = useNotification();

  if (!notification) return null;

  const { message, type } = notification;

  const getClass = () => {
    switch (type) {
      case "success":
        return "alert alert-success";
      case "error":
        return "alert alert-danger";
      case "loading":
        return "alert alert-info";
      default:
        return "alert alert-secondary";
    }
  };

  return (
    <div
      className={`${getClass()} position-fixed top-0 end-0 m-3 shadow`}
      style={{ zIndex: 9999, minWidth: "250px" }}
    >
      {type === "loading" && (
        <span className="spinner-border spinner-border-sm me-2"></span>
      )}
      {message}
    </div>
  );
};

export default Notification;
