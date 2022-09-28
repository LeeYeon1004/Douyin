import Header from "../../core/components/headers/header.template";
import Sidebar from "../../core/components/sidebars/sidebar.template";

function Home() {
  return (
    <div className="select-none ">
      <Header />
      <div className="max-w-[1150px] flex m-[auto] relative">
        <Sidebar />
      </div>
    </div>
  );
}
export default Home;
