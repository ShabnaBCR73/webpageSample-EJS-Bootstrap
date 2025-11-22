const express = require('express')

const app = express();

app.set('view engine' , 'ejs')

app.use(express.static('public'))

let items =[
{name: 'chicken-dum-biriyani' , rate: 600},
{name: 'beef-biriyani' , rate: 700},
{name: 'ghee-rice' , rate: 400}

];

let customers =[
    {name: 'Aalim' , place: 'beypore' , mobile: 12345},
    {name: 'zahra' , place: 'nallalam' , mobile:123435},
    {name: 'Ahzan' , place: 'mundupalam' , mobile:12345},
    {name: 'Nazal' , place: 'ramanattukara' , mobile:123345}

]

app.get('/' , (req,res) => {
    res.render('home')
});

app.get('/card' , (req,res) => {
    res.render('card' , {items})
});

app.get('/table' , (req,res) => {
    res.render('table', {customers})
})

app.listen(3002 , () => console.log('server running'));