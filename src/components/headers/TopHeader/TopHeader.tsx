import MainContainer from "../../Elements/MainContainer";
import CardMenubar from "./CardMenubar";
import SearchBox from "./SearchBox";

export default function TopHeader() {
  return (
    <div className="bg-secondary w-full py-6">
      <MainContainer className="flex flex-col md:flex-row items-center justify-between gap-3">
        <div></div>

        {/* search box */}
        <SearchBox />

        {/* card menu bar */}
        <CardMenubar />
      </MainContainer>
    </div>
  );
}
