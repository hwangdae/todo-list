import Link from "next/link";

const Header = () => {
  return (
    <header className="h-15 bg-white py-2.5 border-b border-slate-200 container-padding">
      <div className="max-w-300 mx-auto">
        <Link href="/">
          <picture className="inline-block">
            {/* 데스크탑 + 태블릿일 때 로고 이미지*/}
            <source
              media="(min-width: 768px)"
              srcSet="/images/icons/logo-desktop.svg"
            />

            {/* 모바일일 때 로고 이미지 */}
            <img
              src="/images/icons/logo-mobile.svg"
              alt="로고 이미지"
              className="h-10 w-auto"
            />
          </picture>
        </Link>
      </div>
    </header>
  );
};

export default Header;
