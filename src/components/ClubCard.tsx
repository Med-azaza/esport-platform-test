import Image from "next/image";

type ClubCardProps = {
  name: string;
  timezone: string;
  logo: string;
};

const ClubCard = ({ name, timezone, logo }: ClubCardProps) => {
  return (
    <div className="flex items-center justify-between rounded-2xl p-3 border border-white/10">
      <div className="flex items-center gap-3">
        <Image
          src={logo}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h4 className="text-white font-semibold text-sm">{name}</h4>
          <p className="text-white/50 text-xs">🕒 {timezone}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="">
          <Image src="/flag.png" alt={name} width={20} height={20} />
        </span>
        <button className="border border-[#00ffc3] text-[#00ffc3] px-3 py-1 text-xs rounded-full hover:bg-[#00ffc3]/10 transition">
          Join now
        </button>
      </div>
    </div>
  );
};

export default ClubCard;
