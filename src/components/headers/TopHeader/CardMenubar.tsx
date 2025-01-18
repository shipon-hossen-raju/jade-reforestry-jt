import {
  arrowDownIcon,
  shoppingCartIcon,
  userCircleIcon,
} from "@/asserts/icons/icons";

export default function CardMenubar() {
  return (
    <div className="flex items-center justify-end gap-6">
      {/* country names */}
      <div className="flex items-center gap-1.5">
        <p>Netherlands</p>

        <span>{arrowDownIcon}</span>
      </div>

      {/* user logo */}
      <div className="flex items-center gap-1.5">
        <span>{userCircleIcon}</span>
        <p>Inloggen</p>
      </div>

      {/* cart */}
      <div className="">
        <span> {shoppingCartIcon} </span>
      </div>
    </div>
  );
}
