import { Calendar } from '@/components/ui/calendar';
import i18n from '@/i18n';
import React from 'react';
import { lt, enUS } from 'date-fns/locale';

export default function CheckAvailabilitySection() {
  const currentLang = i18n.language;

  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const bookedDates = Array.from({ length: 12 }, (_, i) => new Date(2025, 9, 15 + i));
  console.log(' bookedDates: ', bookedDates);
  return (
    <Calendar
      mode="single"
      defaultMonth={date}
      classNames={{}}
      selected={date}
      onSelect={setDate}
      numberOfMonths={2}
      disabled={bookedDates}
      locale={currentLang === 'lt' ? lt : enUS}
      modifiers={{
        booked: bookedDates,
      }}
      modifiersClassNames={{
        booked: '[&>button]:line-through opacity-100',
      }}
      className="rounded-lg border shadow-sm"
    />
  );
}
