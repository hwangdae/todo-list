import Image from "next/image";

interface PropsType {
  image: string;
  alt: string;
  children: React.ReactNode;
}

const EmptyState = ({ image, alt, children }: PropsType) => {
  return (
    <div className="flex flex-col items-center gap-4 py-10">
      <p className="w-[240px] h-[240px] flex items-center justify-center">
        <Image src={image} width={240} height={240} alt={alt} />
      </p>
      <p className="text-center text-slate-500">{children}</p>
    </div>
  );
};

export default EmptyState;
