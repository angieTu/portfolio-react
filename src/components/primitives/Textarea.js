import React from "react";

const Textarea = ({ children, ...props }) => {
  return <textarea {...props}>{children}</textarea>;
};

export default Textarea;
