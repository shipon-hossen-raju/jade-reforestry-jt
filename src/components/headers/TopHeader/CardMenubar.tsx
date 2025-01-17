import arrowDownIcon from "@/asserts/icons/arrow-down.svg";
import singleUserIcon from "@/asserts/icons/user-circle-single--circle.svg";
import shoppingCartIcon from "@/asserts/icons/shopping-bag-hand-bag.svg";
import CustomImage from "@/components/Elements/CustomImage";

export default function CardMenubar() {
  return (
    <div className="flex items-center justify-end gap-6">
      {/* country names */}
      <div className="flex items-center gap-1.5">
        <p>Netherlands</p>
        <CustomImage src={arrowDownIcon} width={10} height={15} />
      </div>

      {/* user logo */}
      <div className="flex items-center gap-1.5">
        <CustomImage src={singleUserIcon} width={17} height={17} />
        <p>Inloggen</p>
      </div>

      {/* cart */}
      <div className="">
        <CustomImage src={shoppingCartIcon} width={24} height={24} />
      </div>
    </div>
  );
}
