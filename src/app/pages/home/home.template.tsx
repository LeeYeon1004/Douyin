import Content from "../../core/components/contents/content.template";
import Header from "../../core/components/headers/header.template";
import Sidebar from "../../core/components/sidebars/sidebar.template";

function Home() {
  return (
    <div className="select-none">
      <Header />
      <div className="max-w-[1150px] flex justify-between m-[auto] mt-[60px] relative">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}
export default Home;
