import React from "react";
import SimpleBar from "simplebar-react";

interface ScrollbarProps {
  className?: string;
  style?: any;
  children?: any;
}

const Scrollbar = ({
  className,
  style,
  children,
  ...otherProps
}: ScrollbarProps) => {
  return (
    <SimpleBar className={className} style={style} {...otherProps}>
      {children}
    </SimpleBar>
  );
};

export default Scrollbar;
