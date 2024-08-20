import Link from "next/link";
import Card from "../Card";

const AccessMenu = () => {
  return (
    <div className="mt-14">
      <h3 className="font-bold">Access Menu</h3>
      <div className="grid grid-cols-2 gap-6 mt-3">
        <Link href="/create-visit">
          <Card title="Create Visit" color="bg-red-600" />
        </Link>
        <Link href="/visit-list">
          <Card title="My List Ticket" color="bg-fuchsia-900" />
        </Link>
        <Link href="/assets">
          <Card title="My Asset" color="bg-amber-600" />
        </Link>
        <Link href="/e-sik">
          <Card title="E-SIK" color="bg-emerald-500" />
        </Link>
        <Link href="/soc">
          <Card title="SOC" color="bg-sky-300" />
        </Link>
        <Link href="/outgoing-goods">
          <Card title="Outgoing Goods" color="bg-zinc-700" />
        </Link>
      </div>
    </div>
  );
};

export default AccessMenu;
