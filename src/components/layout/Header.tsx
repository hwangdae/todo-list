import Link from "next/link";

const Header = () => {
  return (
    <header className="h-[60px] bg-white py-2.5 border-b border-slate-200 container-padding">
      <div className="max-w-300 mx-auto">
        <Link href="/">
          <picture className="inline-block">
            {/* 데스크탑 + 태블릿 */}
            <source
              media="(min-width: 768px)"
              srcSet="/images/icons/logo-desktop.svg"
            />

            {/* 모바일 */}
            <img
              src="/images/icons/logo-mobile.svg"
              alt="로고 이미지"
              className="h-[40px] w-auto"
            />
          </picture>
        </Link>
      </div>
    </header>
  );
};

export default Header;
