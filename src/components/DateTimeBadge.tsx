import { format } from "date-fns";
import React from "react";
import { MdOutlineAlarm } from "react-icons/md";

interface DateTimeDisplayProps {
  date: Date;
}

const DateTimeDisplay: React.FC<DateTimeDisplayProps> = ({ date }) => {
  const formattedDate = format(date, "EEE, dd MMM yyyy, h:mm a");

  return (
    <div className="inline-flex items-center rounded-full bg-gray-200 self-center py-1.5 px-3 text-xs text-white text-nowrap">
      <MdOutlineAlarm className="text-gray-600" size="1.5em" />
      <div className="ml-1 text-gray-600 font-semibold">{formattedDate}</div>
    </div>
  );
};

export default DateTimeDisplay;
