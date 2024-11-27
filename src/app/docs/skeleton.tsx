import { Skeleton } from "@nextui-org/react";

export default function SkeletonLoader() {
    return (
      <div className="w-full flex flex-col gap-1.5">
        <Skeleton className="h-3 w-3/5 rounded-lg" id="text-skeleton" />
        <Skeleton className="h-3 w-4/5 rounded-lg" />
        <Skeleton className="h-3 w-5/5 rounded-lg" />
      </div>
    );
  }