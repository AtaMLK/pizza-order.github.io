/* import { formatCurrency } from '../../utilities/helpers';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
 */

import PropTypes from 'prop-types';

// Assuming formatCurrency is imported from a utility file
import { formatCurrency } from '../../utilities/helpers';

function MenuItem({ pizza }) {
  return (
    <li>
      <img src={pizza.imageUrl} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      <p>{pizza.ingredients.join(', ')}</p>
      <p>{formatCurrency(pizza.unitPrice)}</p>
      {pizza.soldOut && <span>Sold Out</span>}
    </li>
  );
}

// Define prop types for the pizza object
MenuItem.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    unitPrice: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    soldOut: PropTypes.bool.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuItem;
