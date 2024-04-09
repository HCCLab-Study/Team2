import { useEffect, useState } from 'react';

import { customAxios } from '../api/http/axios';

export default function useFetchData(url) {
	const [data, setData] = useState([]);

	useEffect(() => {
		customAxios.get(url).then((res) => {
			setData(res.data);
		});
	}, [url]);

	return data;
}
