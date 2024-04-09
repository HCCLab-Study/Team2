import { http, HttpResponse } from 'msw';

const membersHandler = [
	http.get('/members', () => {
		return HttpResponse.json([
			{ name: '강준우', department: '컴퓨터정보공학부', roles: ['#Full Stack', '#AI'], image: '/A.png' },
			{ name: '고석환', department: '정보융합학부', roles: ['#Front End'], image: '/B.png' },
			{ name: '서대원', department: '정보융합학부', roles: ['#Front End'], image: '/C.png' },
			{ name: '고석환', department: '정보융합학부', roles: ['#Data Analyst', '#AI'], image: '/A.png' },
			{ name: '고석환', department: '정보융합학부', roles: ['#Frontend', '#UX'], image: '/B.png' },
			{ name: '고석환', department: '정보융합학부', roles: ['#Frontend'], image: '/C.png' },
		]);
	}),
];

export default membersHandler;
