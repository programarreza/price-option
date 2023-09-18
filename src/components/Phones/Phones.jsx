import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { Audio, InfinitySpin } from 'react-loader-spinner'

const Phones = () => {
	const [phones, setPhones] = useState([])
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// fetch(' https://openapi.programming-hero.com/api/phones?search=iphone')
		// .then(response => response.json())
		// .then(data => setPhones(data.data))

		axios('https://openapi.programming-hero.com/api/phones?search=iphone')
			.then(data => {
				const phoneData = data.data.data;
				const phonesWithFakeData = phoneData.map(phone => {
					const obj = {
						name: phone.phone_name,
						price: parseInt(phone.slug.split('-')[1])
					}
					return obj;
				})
				console.log(phonesWithFakeData);
				setPhones(phonesWithFakeData);
				setLoading(false);
			})
	}, [])

	return (
		<div>
			{loading && <div>
				<InfinitySpin
					width='200'
					color="#4fa94d"
				/>,
				<Audio
					height="80"
					width="80"
					radius="9"
					color='green'
					ariaLabel='three-dots-loading'
					wrapperStyle
					wrapperClass
				/></div>
			}
			<h2 className="text-5xl">Phones : {phones.length}</h2>
			<BarChart width={1200} height={400} data={phones}>
				<Bar dataKey="price" fill="#8884d8" />
				<XAxis dataKey={"name"}></XAxis>
				<YAxis></YAxis>
			</BarChart>
		</div>
	);
};

export default Phones; 