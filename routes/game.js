const express = require('express');
const router = express.Router();
const restrict = require("../middlewares/restrict");
const apiRestrict = require("../middlewares/apiRestrict");
const {Game, Biodata, History} = require('../models');

router.get('/dashboards', restrict, async (req, res) => {
    const data = await History.findAll({
    });
    const biodata = await Biodata.findAll({})
    console.log(data)
    res.render('dashboards', {data, biodata})
})

router.use(express.urlencoded({extended: true}))

router.post('/dashboards', async (_, res) => {
    const game = await Game.create({
        username: req.body.username,
        password: req.body.password,
    });
    res.status(201).json(game)
})

router.get('/history/edit/:id', async (req, res) => {
    const data = await History.findByPk(req.params.id)
    res.render('edit', {history: data})
})

router.get('/history/post', async (req, res) => {
    res.render('create')
})

router.post('/history/update', async (req, res) => {
    await History.update({
        GameId: req.body.gameId,
        playedAt: Date.now(),
        score: req.body.score
    }, {
        where: {
            id: +req.body.id
        }
    });
    res.redirect('/dashboards')
})

router.post('/history/post', async (req, res) => {
    await History.create({
        GameId: req.body.gameId,
        playedAt: Date.now(),
        score: req.body.score,
    });
    res.redirect('/dashboards')
})

router.put('/dashboards/:id', async (req, res) => {
    const game = await Game.update({
        username: req.body.username,
        password: req.body.password,
    }, {
        where: {
            id: req.params.id
        }
    });
    res.status(201).json(game)
})

router.get('/history/delete/:id', async(req, res) => {
    await History.destroy({
        where: {
            id: req.params.id
        }
    })
    res.redirect('/dashboards')
})

router.delete('/dashboards', async (req, res) => {
    const game = await Game.destroy({
        where: {
            id: req.body.id
        }
    });
    res.status(201).json(game)
})

module.exports =  router;