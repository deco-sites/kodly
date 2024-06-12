import Image from "apps/website/components/Image.tsx";
import { asset } from "$fresh/runtime.ts";

function Header() {
  return (
    <div class="py-8 lg:px-0 px-6 fixed bottom-0 w-full mx-auto">
      <Image
        src={asset("/logo.svg")}
        alt={"Kodly logo"}
        height={20}
        width={50}
      />
    </div>
  );
}

export default Header;
