import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { lt, enUS } from 'date-fns/locale';
import i18n from '@/i18n';
import { useState } from 'react';

type AdminAvailabilityCalendarProps = {
    initialBookedDates?: Date[];
};

export default function AdminAvailabilityCalendar({
    initialBookedDates = [],
}: AdminAvailabilityCalendarProps) {
    const currentLang = i18n.language;

    const [selectedDates, setSelectedDates] = useState<Date[]>([]);
    const [bookedDates, setBookedDates] = useState<Date[]>(initialBookedDates);

    const toggleDate = (date: Date | undefined) => {
        if (!date) return;

        const exists = selectedDates.some(
            (d) => d.toDateString() === date.toDateString()
        );

        if (exists) {
            setSelectedDates((prev) =>
                prev.filter((d) => d.toDateString() !== date.toDateString())
            );
        } else {
            setSelectedDates((prev) => [...prev, date]);
        }
    };

    const saveBookedDates = async () => {
        try {
            const newBookedDates = [...bookedDates, ...selectedDates];

            // Remove duplicates
            const uniqueDates = Array.from(
                new Map(
                    newBookedDates.map((date) => [
                        date.toDateString(),
                        date,
                    ])
                ).values()
            );

            setBookedDates(uniqueDates);

            // await fetch('/api/booked-dates', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         dates: uniqueDates.map((date) =>
            //             date.toISOString()
            //         ),
            //     }),
            // });

            setSelectedDates([]);

            console.log('Booked dates saved');
        } catch (error) {
            console.error('Failed to save booked dates:', error);
        }
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="rounded-xl border p-4 shadow-sm w-fit">
                <Calendar
                    mode="single"
                    numberOfMonths={2}
                    locale={currentLang === 'lt' ? lt : enUS}
                    onSelect={toggleDate}
                    modifiers={{
                        selected: selectedDates,
                        booked: bookedDates,
                    }}
                    modifiersClassNames={{
                        selected:
                            'bg-blue-600 text-white hover:bg-blue-600',
                        booked:
                            'bg-red-500 text-white line-through opacity-100',
                    }}
                    className="rounded-md"
                />
            </div>

            <div className="flex gap-4">
                <Button onClick={saveBookedDates}>
                    Save booked dates
                </Button>

                <Button
                    variant="outline"
                    onClick={() => setSelectedDates([])}
                >
                    Clear selection
                </Button>
            </div>

        </div>
    );
}