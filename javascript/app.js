requirejs.config({
    baseUrl: '../fake_nm', // change to node_modules when 23.1.0 has been released
    paths: {
        'agGrid': 'ag-grid-community/dist/ag-grid-community.amd.min', // for community features
        // 'agGrid': 'ag-grid-enterprise/dist/ag-grid-enterprise.amd.min',   // for enterprise features
    }
});

requirejs(['agGrid'], function (agGrid) {
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

    // let the grid know which columns and what data to use
    var gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData
    };

    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
});
