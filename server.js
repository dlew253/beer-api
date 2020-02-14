const express = require('express');
const app = express();
const db = require('./models')

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("HOME")
})
// index get /users
app.get('/Beers', (req, res) => {
    db.Beer.findAll().then(function(Beers) {
        res.json(Beers);
    }).catch(err => {
        console.log(err)
        res.send('ERROR');
    });
});


// create post /users (redirect to users/:id)
app.post('/Beers', (req, res) => {
    console.log(req.body)
    db.Beer.findOrCreate({
        where: {
            name: req.body.name
        },
        default: {
            style: req.body.style,
            ibu: req.body.ibu,
            color: req.body.color
        }
    }).then(function([Beer, created]) {
        console.log(`Your Beer is ${created ? 'in stock' : 'not avaliable'} ${Beer.name} ${Beer.style} `);
        res.redirect(`/beers/${Beer.id}`);
    }).catch(err => {
        console.log(err);
        res.send('ERROR')
    })
});


//show get  /users/:id
app.get('/Beers/:id', (req, res) => {
    res.send("showing one Beer at id" + req.params.id);
});

//update  put /users/:id redirect to same
app.put('/Beers/:id', (req, res)=> {
    res.send("UPDATE BEER AT ID" + req.params.id);
});

//destroy  delete  
app.put('/beers/:id', (req, res)=> {
    res.send("UPDATE BEER AT ID" + req.params.id);
});

//destroy  delete  
app.put('/beers/:id', (req, res)=> {
 db.beer.destroy ({
    where: {
        name: 'Rainier'
    }
}).then(function(deletedBeer) {
    console.log('BYE')
    console.log(deletedBeer);
}).catch(err => console.log(err));
});


app.listen(3000, ()=>console.log('Youres listening to the smooth sounds of my beer'));