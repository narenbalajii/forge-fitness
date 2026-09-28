const https = require('https');

const ids = [
  "1583454110551-21f2fa2afe61",
  "1571019613454-1cb2f99b2d8b",
  "1601422407692-ec4eeec1d9b3",
  "1567013127542-490d757e51fc",
  "1594381898411-846e7d193883",
  "1571731956672-f2b94d7dd0cb",
  "1534438327276-14e5300c3a48",
  "1540497077202-7c8a3999166f",
  "1577221084712-45b0445d2b00",
  "1574680096145-d05b474e2155",
  "1517836357463-d25dfeac3438",
  "1485395578879-6c3ab3f3c1a3",
  "1599901860904-17e6ed7083a0",
  "1571019614242-c5c5dee9f50b",
  "1609207925812-4b5c4d4b1f73",
  "1490645935967-10de6ba17061"
];

Promise.all(ids.map(id => {
  return new Promise(resolve => {
    https.request(`https://images.unsplash.com/photo-${id}?w=800`, { method: 'HEAD' }, (res) => {
      resolve({ id, status: res.statusCode });
    }).end();
  });
})).then(results => {
  console.log("Unsplash Image Statuses:");
  results.forEach(r => console.log(`${r.id} : ${r.status}`));
});
