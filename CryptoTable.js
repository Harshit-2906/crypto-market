import React, { useState, useEffect } from 'react';
import CryptoRow from './CryptoRow';
import Search from './Search';
import SortButtons from './SortButtons';

const CryptoTable = () => {
    const [cryptos, setCryptos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Fetch data using async/await
    const fetchDataAsync = async () => {
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
            const data = await response.json();
            setCryptos(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchDataAsync();
    }, []);

    // Handle search
    const handleSearch = () => {
        return cryptos.filter(crypto =>
            crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    // Handle sort
    const handleSort = (type) => {
        const sortedCryptos = [...cryptos].sort((a, b) => {
            if (type === 'market_cap') {
                return b.market_cap - a.market_cap;
            } else if (type === 'percentage_change') {
                return b.price_change_percentage_24h - a.price_change_percentage_24h;
            }
            return 0;
        });
        setCryptos(sortedCryptos);
    };

    return (
        <div>
            <h1>Crypto Market</h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={() => setCryptos(handleSearch())} />
            <SortButtons onSort={handleSort} />
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Current Price</th>
                        <th>Total Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {cryptos.map(crypto => (
                        <CryptoRow key={crypto.id} crypto={crypto} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CryptoTable;
