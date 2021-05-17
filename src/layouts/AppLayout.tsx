import Footer from '../components/appComponents/Footer';
import Navbar from '../components/appComponents/Navbar';

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
