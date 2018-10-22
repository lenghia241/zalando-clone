import React from "react";

export default function Hover({ onHover, children }) {
  return (
    <div className="hover">
      <div className="hover__no-hover">{children}</div>
      <div className="hover__hover">
        {children}
        {onHover}
      </div>
    </div>
  );
}
