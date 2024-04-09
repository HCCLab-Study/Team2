import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import useFetchData from '../../hooks/useFetchData';
import './page.css';

export default function SchedulePage() {
	const scheduleData = useFetchData('/schedule');

	return (
		<main className="w-5/6 mx-auto flex-col flex-grow flex mt-4">
			<h2>HCC-Lab Study Calendar</h2>
			<FullCalendar height="820px" events={scheduleData} defaultView="dayGridMonth" plugins={[dayGridPlugin]} />
		</main>
	);
}
