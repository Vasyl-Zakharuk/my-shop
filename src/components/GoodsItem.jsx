import { useContext } from 'react';
import { ShopContext } from '../context';

function GoodsItem(props) {
    const { id, name, description, price, image_link } = props;

    const { addToBasket } = useContext(ShopContext);

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={image_link} alt={name} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{name}</span>
                <p>{description}</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn'
                    onClick={() =>
                        addToBasket({
                            id,
                            name,
                            price,
                        })
                    }
                >
                    Купити
                </button>
                <span className='right'>{price} $</span>
            </div>
        </div>
    );
}

export { GoodsItem };
