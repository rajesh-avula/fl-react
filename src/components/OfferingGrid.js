import React from 'react';
import useSortableData from '../customHooks/Sort';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import './OfferingGrid.css'
function OfferingGrid(props) {
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    return (
        <div>
            {items.length > 0 &&
                <table className="offering-table">
                    <thead>
                        <tr style={{ "border-bottom": "1px solid black" }}>
                            <th onClick={() => requestSort('name')} className="table-header-row">Name
                                {sortConfig ? sortConfig.direction === 'ascending' && <KeyboardArrowUpIcon /> : null}
                                {sortConfig ? sortConfig.direction === 'descending' && <KeyboardArrowDownIcon /> : null}
                            </th>
                            <th onClick={() => requestSort('offeringCategory')} className="table-header-row">
                                OFFERING CATEGORY
                                {sortConfig ? sortConfig.direction === 'ascending' && <KeyboardArrowUpIcon /> : null}
                                {sortConfig ? sortConfig.direction === 'descending' && <KeyboardArrowDownIcon /> : null}

                            </th>
                            <th onClick={() => requestSort('businessModel')} className="table-header-row">
                                BUSINESS MODEL
                                {sortConfig ? sortConfig.direction === 'ascending' && <KeyboardArrowUpIcon /> : null}
                                {sortConfig ? sortConfig.direction === 'descending' && <KeyboardArrowDownIcon /> : null}
                            </th>
                            <th onClick={() => requestSort('plc')} className="table-header-row">
                                PLC
                                {sortConfig ? sortConfig.direction === 'ascending' && <KeyboardArrowUpIcon /> : null}
                                {sortConfig ? sortConfig.direction === 'descending' && <KeyboardArrowDownIcon /> : null}

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.offeringCategory}</td>
                                <td>{item.businessModel}</td>
                                <td>{item.plc}</td>
                                <td><button className="btn-Configure"> CONFIGURE</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }

        </div>

    );
};

export default OfferingGrid;