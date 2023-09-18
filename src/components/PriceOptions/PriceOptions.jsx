import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

	const PriceOptions = [
		{
			"id": 1,
			"name": "Basic Membership",
			"price": "$29.99/month",
			"features": [
				"Access to cardio and strength training areas",
				"Locker room access",
				"Personalized fitness assessment",
				"Online class reservations",
				"Discounts on merchandise"
			]
		},
		{
			"id": 2,
			"name": "Premium Membership",
			"price": "$49.99/month",
			"features": [
				"Unlimited access to all gym facilities",
				"Group fitness classes included",
				"Complimentary towel service",
				"Discounts on personal training sessions",
				"Access to sauna and steam room"
			]
		},
		{
			"id": 3,
			"name": "Student Membership",
			"price": "$19.99/month",
			"features": [
				"Access to cardio and strength training areas",
				"Valid student ID required",
				"Locker room access",
				"Discounts on student-only events"
			]
		},
		{
			"id": 4,
			"name": "Family Membership",
			"price": "$79.99/month",
			"features": [
				"Access for two adults and two children",
				"Discounts on additional family members",
				"Childcare services available",
				"Group fitness classes included",
				"Family-friendly events"
			]
		}
	]


	return (
		<div>
			<div className="grid px-24 md:px-0 md:grid-cols-4 gap-6">
			{
				PriceOptions.map((option, index )=> <PriceOption option={option} key={index}></PriceOption>)
			}
			</div>
		</div>
	);
};

export default PriceOptions;