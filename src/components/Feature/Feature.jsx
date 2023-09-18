import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";
const Feature = ({feature}) => {
	return (
		<div className='flex items-center '>
			<AiFillCheckCircle></AiFillCheckCircle>
			<p className='ml-2'>{feature}</p>
		</div>
	);
};
Feature.propTypes = {
	feature: PropTypes.string,
}
export default Feature;