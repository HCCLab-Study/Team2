import { http, HttpResponse } from 'msw';

const scheduleHandler = [
	http.get('/schedule', () => {
		return HttpResponse.json([
			{ title: '스터디', date: '2024-03-26', color: '#890F1F' },
			{ title: '스터디', date: '2024-04-02', color: '#890F1F' },
		]);
	}),
];

export default scheduleHandler;
