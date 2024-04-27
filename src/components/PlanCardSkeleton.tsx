export default function PlanCardSkeleton() {
  return (
    <div className="animate-pulse card rounded-2xl flex flex-col h-[540px] lg:h-[440px] px-4 pt-12 pb-6 relative">
      <div className="flex justify-center px-12 absolute top-[-20px] left-0 right-0 w-full">
        <div className="rounded-full bg-slate-700 h-10 w-36"></div>
      </div>
      <div className="flex justify-between mb-4 mt-3">
        <div className="px-3 h-4 w-20 bg-slate-700 rounded pt-[2px]"></div>
        <div className="px-3 h-4 w-10 bg-slate-700 rounded pt-[2px]"></div>
      </div>

      <div className="my-1 h-6 w-10/12 bg-slate-700 rounded"></div>

      <div className="mt-2 h-2 w-16 bg-slate-700 rounded m-0 mb-10"></div>

      {[1, 2, 3, 4, 5, 6].map(feature => (
        <div key={feature} className="flex gap-2 items-center m-0 mb-2">
          <div className="rounded-full bg-slate-700 h-5 w-5"></div>
          <div className="h-2 w-10/12 bg-slate-700 rounded"></div>
        </div>
      ))}

      <div className="flex justify-center mt-auto px-[40px]">
        <div className="rounded-full bg-slate-700 h-10 w-36"></div>
      </div>
    </div>
  );
}
