requirejs.config({
    baseUrl: '../fake_nm',
    paths: {
        'agGrid': 'ag-grid-community/dist/ag-grid-community.amd.min', // for community features
        // 'agGrid': 'ag-grid-enterprise/dist/ag-grid-enterprise.amd.min',   // for enterprise features
        'ag-grid-react': 'ag-grid-react/dist/ag-grid-react.amd.min',
        'react': 'https://unpkg.com/react@16/umd/react.development',
        'react-dom': 'https://unpkg.com/react-dom@16/umd/react-dom.development',
        'react-dom/server': 'https://unpkg.com/browse/react-dom@16.13.1/umd/react-dom-server.browser.development',
        'prop-types': 'https://unpkg.com/prop-types@15.6.0/prop-types'
    }
});

requirejs(['ag-grid-react', 'react', 'react-dom'], function (agGridReact, React, ReactDOM) {
    var columnDefs = [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"}
    ];

    // specify the data
    var rowData = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ];

    var App = React.createElement("div", {
            className: "ag-theme-balham",
            style: {
                height: '150px',
                width: '500px'
            }
        },
        React.createElement(agGridReact.AgGridReact, {
            columnDefs,
            rowData
        })
    );

    ReactDOM.render(App, document.getElementById('root'));
});
