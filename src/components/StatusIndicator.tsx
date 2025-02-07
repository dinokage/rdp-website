interface StatusIndicatorProps {
  status: "operational" | "downtime" | "degraded" | "maintenance" | "loading";
}

const StatusIndicator = ({ status }: StatusIndicatorProps) => {
  const borderColor = {
    operational: "border-green-500",
    downtime: "border-red-500",
    degraded: "border-yellow-500",
    maintenance: "border-purple-500",
    loading: "border-gray-500",
  }[status];

  const bgColor = {
    operational: "bg-green-500",
    downtime: "bg-red-500",
    degraded: "bg-yellow-500",
    maintenance: "bg-purple-500",
    loading: "bg-gray-500",
  }[status];

  return (
    <div className="mt-12 flex items-center justify-center space-x-2">
      <div className="relative w-4 h-4 flex items-center justify-center">
        {/* Expanding pulse ring */}
        <div
          className={`absolute w-4 h-4 border-1.5 rounded-full animate-[pulse_2s_ease-out_infinite] opacity-60 ${borderColor}`}
        />
        {/* Core dot */}
        <div className={`relative h-2 w-2 rounded-full ${bgColor}`} />
      </div>
      <span className="text-sm text-gray-400">
        {status === "loading"
          ? "Checking status..."
          : status === "operational"
          ? "All Systems Operational"
          : status === "downtime"
          ? "Service Outage"
          : status === "degraded"
          ? "Partial Service Disruption"
          : status === "maintenance"
          ? "Ongoing Maintenance"
          : "Unknown Status"}
      </span>
    </div>
  );
};

export default StatusIndicator;
