import React from 'react';

const SortButtons = ({ onSort }) => {
    return (
        <div>
            <button onClick={() => onSort('market_cap')}>Sort by Market Cap</button>
            <button onClick={() => onSort('percentage_change')}>Sort by Percentage Change</button>
        </div>
    );
};

export default SortButtons;
