const https = require('https');

const candidate_ids = [
  "1521590832167-7a1a0c0282b8", // weights
  "1581009146145-b5ef050c2e1e", // weights
  "1494597564530-871f2b93ac55", // trainer female
  "1558611848-73f7eb4001a1", // nutrition/coach
  "1518611012118-6a60d0ddabce", // trainer female
];

Promise.all(candidate_ids.map(id => {
  return new Promise(resolve => {
    https.request(`https://images.unsplash.com/photo-${id}?w=800`, { method: 'HEAD' }, (res) => {
      resolve({ id, status: res.statusCode });
    }).end();
  });
})).then(results => {
  results.forEach(r => console.log(`${r.id} : ${r.status}`));
});
