const mongoose = require('mongoose')
const { Feed } = require('../modules/Feed')


const landing = (req, res) => {
    res.redirect('/feed')
}

const home = (req, res) => {
    
    if (req.method == "GET"){
        Feed.find().sort({updatedAt: -1})
            .then(result => {
                res.render('index', {result})
            })
            .catch(err => console.log(err))
    }

    if (req.method == "POST"){
        date = new Date()
        d = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
        newFeed = new Feed({
            name: req.body.name,
            message: req.body.message,
            date: d
        })
        newFeed.save()
        res.redirect('/feed')
    }
}

const viewOne = (req, res) => {
    Feed.findById({_id:req.params.abboud})
        .then(result => res.render('view-one', {result}))
        .catch(err => console.log(err))
}

const tributeToDelete = (req, res) => {
    Feed.findByIdAndDelete({_id:req.params.sam})
        .then(() => res.redirect('/feed'))
        .catch(err => console.log(err))
}

const editFeed = (req, res) => {

    if (req.method == "GET"){
        Feed.findById({_id:req.params.id})
            .then(result => res.render('edit-feed', {result}))
            .catch(err => console.log(err))
    }

    if (req.method == "POST"){
        Feed.findByIdAndUpdate({_id:req.params.id})
            .then(result => {
                result.name = req.body.name
                result.message = req.body.message
                result.save()
            })
                .then(()=> res.redirect(`/feed/${req.params.id}`))
                .catch(err => console.log(err))
            .catch(err => console.log(err))

    }
}

module.exports = {
    home,
    landing,
    viewOne,
    tributeToDelete,
    editFeed
}