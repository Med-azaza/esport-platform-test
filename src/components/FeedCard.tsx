import Image from "next/image";

type Props = {
  thumbnail: string;
  title: string;
  description: string;
};

const FeedCard = ({ thumbnail, title, description }: Props) => (
  <div className="flex items-center gap-3  rounded-xl p-2 border border-white/10 cursor-pointer">
    <div className="relative w-20 h-20 rounded-md overflow-hidden shrink-0 opacity-80">
      <Image src={thumbnail} alt="Thumbnail" fill className="object-cover" />
      <Image
        src="/youtube-icon.png"
        alt="Play"
        width={24}
        height={24}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
    <div className="flex-1">
      <h4 className="text-white text-sm font-semibold">{title}</h4>
      <p className="text-white/50 text-xs line-clamp-2">{description}</p>
    </div>
  </div>
);

export default FeedCard;
