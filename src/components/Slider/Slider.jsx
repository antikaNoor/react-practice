import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const PriceRangeSlider = ({ priceRange, setPriceRange }) => {
    return (
        <div className="price-range-slider">
            <label>Price Range:</label>
            <InputRange
                maxValue={1000} // Set your maximum price value
                minValue={0}   // Set your minimum price value
                value={priceRange}
                onChange={value => setPriceRange(value)}
            />
        </div>
    );
};

export default PriceRangeSlider;
