import { Skeleton } from "@nextui-org/react";
export default function Card({ text }: { text: string }) {
    return (
      <div className="w-full flex flex-col gap-1.5">
        <p className="h-3 w-3/5 rounded-lg text-base" style={{ fontSize: "0.75rem", lineHeight: "1rem" }}>{text}</p>
        <Skeleton className="h-3 w-4/5 rounded-lg" />
        <p className="h-3 w-3/5 rounded-lg text-base" style={{ fontSize: "0.75rem", lineHeight: "1rem" }}>{text}</p>
        <Skeleton className="h-3 w-5/5 rounded-lg" />
        <p className="h-3 w-3/5 rounded-lg text-base" style={{ fontSize: "0.75rem", lineHeight: "1rem" }}>{text}</p>
      </div>
    );
  }