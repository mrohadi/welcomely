export default function Ticket() {
  return (
    <div className="flex flex-col justify-start h-[140px] px-8 py-6 bg-white rounded-[5px] border border-[#e2e5ea] gap-2 mt-2">
      <div className="h-[22px] justify-start items-center gap-3 inline-flex">
        <p className="text-[#a7abb2] text-sm font-normal leading-snug tracking-tight">
          ID Tiket: TLT-12345
        </p>
        <div className="w-2 h-2 bg-[#e2e5ea] rounded-full" />
        <p className="text-[#a7abb2] text-sm font-normal leading-snug tracking-tight">
          Office
        </p>
      </div>

      <div className="h-8 justify-between items-center inline-flex">
        <p className="w-[786px] text-[#001a41] text-lg font-semibold leading-normal tracking-tight">
          Alfredo Phileo
        </p>
        <div className="h-8 px-3 py-[5.50px] bg-[#fff1df] rounded justify-center items-center gap-2.5 flex">
          <p className="text-[#fda22b] text-sm font-medium capitalize tracking-tight">
            Waiting for Approval
          </p>
        </div>
      </div>
      <div className="h-[22px] justify-between items-start inline-flex">
        <p className="text-[#3996eb] text-sm font-normal leading-snug tracking-tight">
          Telkomsel Smart Office - Lantai 5
        </p>
        <div className="justify-start items-center gap-[11px] flex">
          <p className="text-[#4e5764] text-sm font-normal leading-snug tracking-tight">
            20 Maret 2022
          </p>
          <div className="w-2 h-2 bg-[#e2e5ea] rounded-full" />
          <p className="text-[#4e5764] text-sm font-normal leading-snug tracking-tight">
            09:00 - 12:00
          </p>
        </div>
      </div>
    </div>
  );
}
