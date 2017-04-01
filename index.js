console.log('Welcome to try-bigquery-api.');

const BigQuery = require('@google-cloud/bigquery');

const projectId = 'static-gravity-163312';

const bigquery = BigQuery({
  projectId: projectId
});

const datasetName = 'my_new_dataset';

// bigquery.createDataset(datasetName)
//   .then(function (results) {
//     const dataset = results[0];
//
//     console.log(`Dataset ${dataset.id} created`);
//   });




const datasets = bigquery.getDatasets()
  .then(function (datasets) {
    console.log(datasets);
  });

console.log(datasets);





