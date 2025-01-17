import MainContainer from "../../Elements/MainContainer";
import CardMenubar from "./CardMenubar";
import SearchBox from "./SearchBox";

export default function TopHeader() {
  return (
    <div className="bg-secondary w-full py-8">
      <MainContainer className="flex items-center justify-between gap-3">
        <div></div>

        {/* search box */}
        <SearchBox />

        {/* card menu bar */}
        <CardMenubar />
      </MainContainer>
    </div>
  );
}
