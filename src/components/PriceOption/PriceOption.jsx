import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
	const {name, price, features} = option;
	return (
		<div className='bg-blue-500 rounded-lg p-4 text-white flex flex-col'>
			<h2>
				<span className='text-5xl'>{price}</span>
			</h2>
			<h4 className='text-3xl'>{name}</h4>
			<div className='my-5 flex-grow'>
			{
				features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
			}
			</div>
			<button className='mt-12 p-2 rounded-lg bg-blue-600 w-full hover:bg-sky-900'>Buy Now</button>
		</div>
	);
};

PriceOption.propTypes = {
	option: PropTypes.object
}
export default PriceOption;