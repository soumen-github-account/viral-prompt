import AdminNavbar from "./components/common/Navbar";


const Layout = ({ children }) => {
  return <div><AdminNavbar />{children}</div>;
};

export default Layout;