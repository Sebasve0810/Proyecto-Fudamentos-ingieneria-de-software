import React from "react";

export default function Alert({ type = "info", children }) {
  const base = "px-4 py-3 rounded-lg text-sm mb-3 border";
  const variants = {
    info: "bg-blue-50 text-blue-800 border-blue-100",
    success: "bg-green-50 text-green-800 border-green-100",
    error: "bg-red-50 text-red-800 border-red-100",
  };
  const classes = variants[type] || variants.info;
  return <div className={base + " " + classes}>{children}</div>;
}
