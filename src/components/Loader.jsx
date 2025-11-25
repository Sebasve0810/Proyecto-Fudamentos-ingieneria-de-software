import React from "react";

export default function Loader({ fullScreen = true, message = "Cargando..." }) {
  const containerClass = fullScreen
    ? "min-h-[60vh] flex items-center justify-center"
    : "flex items-center justify-center py-6";

  return (
    <div className={containerClass}>
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-slate-300 border-t-blue-500 rounded-full animate-spin" />
        <p className="text-sm text-slate-500">{message}</p>
      </div>
    </div>
  );
}
