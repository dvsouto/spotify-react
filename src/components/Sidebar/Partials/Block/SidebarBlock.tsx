import "./SidebarBlock.css";

const SidebarBlock = ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div 
      {...props}
      className={`sidebar-block ${props.className}`}
    >
      { children }    
    </div>
  ); 
};

export {
  SidebarBlock
};