import type { FC, ReactElement } from "react";

type PropTypes = {
  element?: HTMLElement | any,
  className?: string,
  children: ReactElement | string
};

const DsTypography: FC<PropTypes> = ({ element, className, children }) => {
  const TagComponent = element ? element : 'span'
  return (
    <TagComponent className={className}>{children}</TagComponent>
  )
}
export default DsTypography;