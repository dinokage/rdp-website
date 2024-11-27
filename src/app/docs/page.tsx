"use client"
import { useEffect, useState } from "react";
// import SkeletonLoader from "./skeleton";
// import Card from "./card";
import { Skeleton } from "@nextui-org/react";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");

  useEffect(() => {
    // Fetch the text from the API
    fetch("https://hub.dummyapis.com/delay?seconds=2")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text(); // Assuming the API returns plain text
      })
      .then((data) => {
        setText(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="max-w-[400px] w-full flex items-center gap-3">
      <div>
        <Skeleton className="flex rounded-full w-12 h-12" />
      </div>
      <div className="w-full flex flex-col gap-1.5">
        {loading ? (
          <Skeleton className="h-3 w-3/5 rounded-lg" />
        ) : (
          <p className="h-3 w-4/5 rounded-lg text-base" style={{ fontSize: "0.75rem", lineHeight: "1rem" }}>{text}</p>
        )}
        {loading ? (
          <Skeleton className="h-3 w-4/5 rounded-lg" />
        ) : (
          <p className="h-3 w-4/5 rounded-lg text-base" style={{ fontSize: "0.75rem", lineHeight: "1rem" }}>{text}</p>
        )}
        {loading ? (
          <Skeleton className="h-3 w-5/5 rounded-lg" />
        ) : (
          <p className="h-3 w-5/5 rounded-lg text-base" style={{ fontSize: "0.75rem", lineHeight: "1rem" }}>{text}</p>
        )}
      </div>
    </div>
  );
}
