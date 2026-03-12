import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-[60px] bg-white py-2.5 border-b border-slate-200">
      <div className="max-w-300 mx-auto">
        <Link href="/">
          <Image
            src={"/images/logo.png"}
            width={151}
            height={40}
            alt="로고 이미지"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
