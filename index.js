const express = require('express'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override');

const app = express();

let shows = [
  {
    title: 'She-Ra and the Princesses of Power',
    producer: 'Noelle Stevenson',
  },
  {
    title: 'The Good Place',
    producer: 'Michael Schur',
  },
  {
    title: 'Disenchanment',
    producer: 'Matt Groening',
  },
  {
    title: 'The Magicians',
    producer: 'Sera Gamble',
  },
  {
    title: 'sense8',
    producer: 'The Wachowskis',
  },
  {
    title: 'Avatar: The Last Airbender',
    producer: 'Michael Dante DiMartino',
  },
  {
    title: 'The Legend of Korra',
    producer: 'Bryan Konietzko',
  },
  {
    title: "Schitts's Creek",
    producer: 'Dan Levy',
  },
  {
    title: 'Kipo and the Age of Wonderbeasts',
    producer: 'Radford Sechrist',
  },
  {
    title: 'Gossip Girl',
    producer: 'Stephanie Savage',
  },
];

app.use(morgan('common'));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(methodOverride());

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to my television club!');
});

app.use(express.static('public'));

app.get('/secreturl', (req, res) => {
  res.send('This is a secret url with super top-secret content.');
});

app.get('static/documentation.html', (req, res) => {});

app.get('/shows', (req, res) => {
  res.json(shows);
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
