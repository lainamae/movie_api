const express = require('express'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override');

const app = express();

let movies = [
  {
    title: 'Frozen 2',
    description: 'Elsa the Snow Queen has an extraordinary gift -- the power to create ice and snow. But no matter how happy she is to be surrounded by the people of Arendelle, Elsa finds herself strangely unsettled. After hearing a mysterious voice call out to her, Elsa travels to the enchanted forests and dark seas beyond her kingdom -- an adventure that soon turns into a journey of self-discovery.',
    genre: 'Animated',
    director: 'Jennifer Lee',
    imageURL: 'images/frozen2.jpeg',
  },
  {
    title: 'The Hobbit: An Unexpected Journey',
    description:
      'Bilbo Baggins (Martin Freeman) lives a simple life with his fellow hobbits in the shire, until the wizard Gandalf (Ian McKellen) arrives and convinces him to join a group of dwarves on a quest to reclaim the kingdom of Erebor. The journey takes Bilbo on a path through treacherous lands swarming with orcs, goblins and other dangers, not the least of which is an encounter with Gollum (Andy Serkis) and a simple gold ring that is tied to the fate of Middle Earth in ways Bilbo cannot even fathom.',
    genre: 'Fantasy',
    director: 'Peter Jackson',
    imageURL: 'images/hobbitunexpected.jpg',
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    description:
      "Adaptation of the first of J.K. Rowling's popular children's novels about Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, an English boarding school for wizards. There, he meets several friends who become his closest allies and help him discover the truth about his parents' mysterious deaths.",
    genre: 'Fantasy',
    director: 'Chris Columbus',
    imageURL: 'images/hpsorcersstone.jpeg',
  },
  {
    title: 'Mulan (1998)',
    description: 'Fearful that her ailing father will be drafted into the Chinese military, Mulan (Ming-Na Wen) takes his spot -- though, as a girl living under a patriarchal regime, she is technically unqualified to serve. She cleverly impersonates a man and goes off to train with fellow recruits. Accompanied by her dragon, Mushu (Eddie Murphy), she uses her smarts to help ward off a Hun invasion, falling in love with a dashing captain along the way.',
    genre: 'Animated',
    director: 'Tony Bancroft',
    imageURL: 'images/mulan.jpeg',
  },
  {
    title: 'Maleficent',
    description:
      "As a beautiful young woman of pure heart, Maleficent (Angelina Jolie) has an idyllic life in a forest kingdom. When an invading army threatens the land, Maleficent rises up to become its fiercest protector. However, a terrible betrayal hardens her heart and twists her into a creature bent on revenge. She engages in an epic battle with the invading king's successor, then curses his newborn daughter, Aurora -- realizing only later that the child holds the key to peace in the kingdom.",
    genre: 'Fantasy',
    director: 'Robert Stromberg',
    imageURL: 'images/maleficent.jpg',
  },
  {
    title: 'Lord of the Rings: The Fellowship of the Ring',
    description:
      'An ancient Ring thought lost for centuries has been found, and through a strange twist of fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it. However, he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir, and his three Hobbit friends Merry, Pippin, and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign.',
    genre: 'Adventure',
    director: 'Peter Jackson',
    imageURL: 'images/LOTRfellowship.jpeg',
  },
  {
    title: 'The Nightmare before Christmas',
    description:
      "The film follows the misadventures of Jack Skellington, Halloweentown's beloved pumpkin king, who has become bored with the same annual routine of frightening people in the" +
      ' "real world." When Jack accidentally stumbles on Christmastown, all bright colors and warm spirits, he gets a new lease on life -- he plots to bring Christmas under his control by kidnapping Santa Claus and taking over the role. But Jack soon discovers even the best-laid plans of mice and skeleton men can go seriously awry.',
    genre: 'Fantasy',
    director: 'Tim Burton',
    imageURL: 'images/nightmarebeforechristmas.jpeg',
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
  res.send('Welcome to my movie club!');
});

app.use(express.static('public'));

app.get('static/documentation.html', (req, res) => {});

// get a list of all movies

app.get('/movies', (req, res) => {
  res.json(movies);
  res.send('Successful GET request returning data on all the movies');
});

// get data about a single movie by title

app.get('/movies/:title', (req, res) => {
  res.json(
    movies.find((movie) => {
      return movie.title === req.params.title;
    })
  );
  res.send('Successful GET request returning data on' + title + '.');
});

// return data about a genre by name/title

app.get('/movies/genres/:genre', (req, res) => {
  res.json(
    genres.find((genre) => {
      return genres.genre === req.params.genre;
    })
  );
});

// return data about a director by name

app.get('/movies/directors/:director', (req, res) => {
  res.json(
    directors.find((director) => {
      return directors.director === req.params.director;
    })
  );
});

// add a new user

app.post('/users', (req, res) => {
  let newUser = req.body;

  if (!newUser.username) {
    const message = 'Missing "username" in request body.';
    res.status(400).send(message);
  } else {
    newUser.id = uuid.v4();
    users.push(newUser);
    res.status(201).send(newUser);
  }
});

// update user info (username)

app.put('/users/:ID/info', (req, res) => {});

// add movie to a user's favorites

app.put('/users/:ID/favorites', (req, res) => {});

// remove a movie by ID

app.delete('/users/:ID/favorites', (req, res) => {});

// allow users to deregister

app.delete('/users/:ID/deactivate', (req, res) => {});

// status & error

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
