import "./popper.style.scss";
function Popper({ children }: { children: JSX.Element[] | JSX.Element }) {
  return <div className="wrapper">{children}</div>;
}
export default Popper;
