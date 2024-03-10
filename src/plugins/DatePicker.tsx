import { ChangeEvent, useState } from "react";

interface DatePickerProps {
  name: string;
  label: string;
}

export const DatePicker = ({ name, label }: DatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(new Date(event.target.value));
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-gray-700">
        {label}
      </label>
      <input
        type="date"
        name={name}
        id={name}
        value={selectedDate ? selectedDate.toISOString().split("T")[0] : ""}
        onChange={handleDateChange}
        className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};
