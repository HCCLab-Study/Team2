import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';

import { queryClient } from './api/queryClient.js';

if (process.env.NODE_ENV === 'development') {
	const { worker } = await import('./mocks/browser');
	worker.start();
}

async function enableMocking() {
	if (process.env.NODE_ENV !== 'development') {
		return;
	}

	const { worker } = await import('./mocks/browser');
	return worker.start();
}

enableMocking().then(() => {
	console.log('Mocking enabled');

	ReactDOM.createRoot(document.getElementById('root')).render(
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<BrowserRouter basename="/">
				<App />
			</BrowserRouter>
		</QueryClientProvider>,
	);
});
