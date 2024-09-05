import React from 'react';

const CryptoRow = ({ crypto }) => {
    return (
        <tr>
            <td><img src={crypto.image} alt={crypto.name} width="30" /></td>
            <td>{crypto.name}</td>
            <td>{crypto.symbol.toUpperCase()}</td>
            <td>${crypto.current_price}</td>
            <td>{crypto.total_volume}</td>
        </tr>
    );
};

export default CryptoRow;
