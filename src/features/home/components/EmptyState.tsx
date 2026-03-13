import Image from "next/image";

interface PropsType {
  image: string;
  width: number;
  height: number;
  alt: string;
  children: React.ReactNode;
}

const EmptyState = ({ image, width, height, alt, children }: PropsType) => {
  return (
    <div className="flex flex-col items-center gap-4 py-10">
      <p className="w-[120px] h-[120px] mobile:w-[240px] mobile:h-[240px] flex items-center justify-center">
        <Image src={image} width={width} height={height} alt={alt} />
      </p>
      <p className="text-center text-slate-500">{children}</p>
    </div>
  );
};

export default EmptyState;
