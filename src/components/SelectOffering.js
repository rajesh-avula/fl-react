import React, { useState } from 'react';
import OfferingGrid from './OfferingGrid';
import Search from './Search';

function SelectOffering() {
    const [filterredData, setFilteredData] = useState([]);
    const searchHandler = (searchTerm) => {
        if (searchTerm !== "") {
            const result = products.filter((d) => {
                return (d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    d.offeringCategory.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                    d.businessModel.toString().toLowerCase().includes(searchTerm.toLowerCase()))
            })
            setFilteredData(result)
        } else {
            setFilteredData(products)
        }
    }
    const products = [
        { id: 1, name: 'MAYA Subscription', offeringCategory : "Desktop Product", businessModel : "Subscription", plc : "MAYAS" },
        { id: 2, name: 'MAYA Perpetual', offeringCategory : "Desktop Product", businessModel : "Perpetual", plc : "MAYAS"  },
        { id: 3, name: 'MAYA Training', offeringCategory : "Training", businessModel : "Maintenance", plc : "MAYAS"  },
        { id: 4, name: 'MAYA Maintenance', offeringCategory : "Service", businessModel : "Maintenance", plc : "MAYAS"  },
        { id: 5, name: 'MAYA Test Product', offeringCategory : "Other", businessModel : "Subscription", plc : "MAYAS"  },
    ]
    return (
        <div>
            <h2>Select Offering</h2>
            <label>Search for an offering to configure <sub>(search an offering name,ID, or PLC)</sub></label>
            <Search searchHandler={searchHandler}/>
            <OfferingGrid
                products={filterredData}
            />
        </div>
    );
}

export default SelectOffering;