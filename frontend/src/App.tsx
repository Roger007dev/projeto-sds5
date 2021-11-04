import DataTable from "components/DateaTable";
import Footer from "components/Footer";
import NavBar from "components/Navbar";



function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">ola mundo</h1>
        <DataTable/>
      </div>
      <Footer/>
    </>
  );

}

export default App;
