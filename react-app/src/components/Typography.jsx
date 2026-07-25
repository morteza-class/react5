const Typography = ({ element, className, children }) => {
  const TagComponent = element ? element : 'span'
  return (
    <TagComponent className={className}>{children}</TagComponent>
  )
}
export default Typography;