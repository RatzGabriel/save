const axios = require('axios');
const cheerio = require('cheerio');

const url =
  'https://www.linkedin.com/jobs/view/2778533726/?alternateChannel=search&refId=mhikOWlKmtT2q1RgoIySeg%3D%3D&trackingId=ZqB%2BXctwEVqSU9KFBsD2BQ%3D%3D&trk=d_flagship3_search_srp_jobs';
axios(url)
  .then((response) => {
    const $ = cheerio.load(response.data);

    let title = $('#ember291').text();
    console.log('test', title.length);
  })
  .catch((err) => {
    console.log('error:', err);
  });
