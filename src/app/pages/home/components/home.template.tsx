import Header from "../../../core/components/headers/header.template";
import Sidebar from "../../../core/components/sidebars/sidebar.template";

function Home() {
  return (
    <>
      <Header />
      <div className="max-w-[1100px] flex m-[auto] relative">
        <div className="max-w-[356px] mt-[12px] w-full absolute left-[0]">
          <Sidebar />
        </div>
      </div>
    </>
  );
}
export default Home;
