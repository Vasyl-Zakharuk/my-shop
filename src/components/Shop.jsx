import { useState, useEffect } from 'react';
import { API_URL } from '../config';

import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function getGoods() {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                data && setGoods(data);
                setLoading(false);
            });
    }, []);

    return (
        <main className='container content'>
            {loading ? <Preloader /> : <GoodsList goods={goods} />}
        </main>
    );
}

export { Shop };
