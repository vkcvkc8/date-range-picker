import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function MyDateRangePicker() {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const handleDateRangeChange = (ranges) => {
    setDateRange([ranges.selection]);
  };

  return (
    <div>
      <h1>Date Range Picker</h1>
      <DateRangePicker ranges={dateRange} onChange={handleDateRangeChange} />
    </div>
  );
}
