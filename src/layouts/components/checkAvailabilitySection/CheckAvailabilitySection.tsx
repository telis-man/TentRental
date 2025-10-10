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
    <div className="flex gap-20">
      <div className="flex flex-col gap-2 justify-start items-end pb-2">
        <h1 className="text-6xl font-extrabold animate-text-reveal">
          Patikrink užimtumą kalendoriuje
        </h1>
        <h1 className="text-4xl ">Radai laisvą laiką?</h1>
        <h2 className="text-4xl underline cursor-pointer mt-6">
          Rezervuok <i>gamping</i> palapinę savo šventei
        </h2>
      </div>
      <Calendar
        mode="single"
        defaultMonth={date}
        classNames={{}}
        readOnly={true}
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
    </div>
  );
}
