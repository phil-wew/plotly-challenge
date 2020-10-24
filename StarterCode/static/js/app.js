// Plan

// init function 
// 1) Fill out dropdown with all of the ids
// 2) Calls a buildPage function that draws the chart and the panel for the first one

// buildPage function 
// 1) That takes one parameter, which is the subject ID
// 2) Draws our plotly charts and fills the panel

// Need an event listener for the dropdown
// optionChanged function
// - That takes as a parameter the user selection


function buildPage(subject) {

    d3.json("samples.json").then((data) => {

        console.log(subject);

        var metadata = data.metadata;
        //filter data
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];

        // d3 select id from sample-metadata
        var panel = d3.select("#sample-metadata");

        panel.html("");


        Object.entries(meta).forEach(([key, value]) => {
            // append h6 with value
            panel.append("h6").text(`key.toUppderCase()}: ${value}`);

        })


    });
}


function init() {

    // Fill dropdown with IDs
    // Get firstOne id and call buildPage with that id

    d3.json("samples.json").then((data) => {

        var selector = d3.select("#selDataset");

        console.log(data);

        data.names.forEach((ids) => {
            selector
                .append("option")
                .text(ids)
                .property("value", ids)
        })

        firstOne = data.names[0];

        buildPage(firstOne);

    })
}

function optionChanged(selection) {

    buildPage(selection);
}


init()