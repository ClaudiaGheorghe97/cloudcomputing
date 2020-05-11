{"filter":false,"title":"server.js","tooltip":"/server.js","undoManager":{"mark":18,"position":18,"stack":[[{"start":{"row":0,"column":0},"end":{"row":98,"column":2},"action":"insert","lines":["const express = require('express')","const app = express()","app.use('/', express.static('frontend'))","app.listen(8080)","","const Sequelize = require('sequelize')","","const sequelize = new Sequelize('profile', 'username', 'password', {","    dialect: \"mysql\",","    host: \"localhost\"","})","","sequelize.authenticate().then(() => {","    console.log(\"Connected to database\")","}).catch(() => {","    console.log(\"Unable to connect to database\")","})","","const Messages = sequelize.define('messages', {","    subject: Sequelize.STRING,","    name: Sequelize.STRING,","    message: Sequelize.TEXT","})","","app.get('/createdb', (request, response) => {","    sequelize.sync({force:true}).then(() => {","        response.status(200).send('tables created')","    }).catch((err) => {","        console.log(err)","        response.status(200).send('could not create tables')","    })","})","","app.use(express.json())","app.use(express.urlencoded())","","//definire endpoint POST /messages","app.post('/messages', (request, response) => {","    Messages.create(request.body).then((result) => {","        response.status(201).json(result)","    }).catch((err) => {","        response.status(500).send(\"resource not created\")","    })","})","","app.get('/messages', (request, response) => {","    Messages.findAll().then((results) => {","        response.status(200).json(results)","    })","})","","app.get('/messages/:id', (request, response) => {","    Messages.findByPk(request.params.id).then((result) => {","        if(result) {","            response.status(200).json(result)","        } else {","            response.status(404).send('resource not found')","        }","    }).catch((err) => {","        console.log(err)","        response.status(500).send('database error')","    })","})","","app.put('/messages/:id', (request, response) => {","    Messages.findByPk(request.params.id).then((message) => {","        if(message) {","            message.update(request.body).then((result) => {","                response.status(201).json(result)","            }).catch((err) => {","                console.log(err)","                response.status(500).send('database error')","            })","        } else {","            response.status(404).send('resource not found')","        }","    }).catch((err) => {","        console.log(err)","        response.status(500).send('database error')","    })","})","","app.delete('/messages/:id', (request, response) => {","    Messages.findByPk(request.params.id).then((message) => {","        if(message) {","            message.destroy().then((result) => {","                response.status(204).send()","            }).catch((err) => {","                console.log(err)","                response.status(500).send('database error')","            })","        } else {","            response.status(404).send('resource not found')","        }","    }).catch((err) => {","        console.log(err)","        response.status(500).send('database error')","    })","})"],"id":1}],[{"start":{"row":18,"column":0},"end":{"row":98,"column":2},"action":"remove","lines":["const Messages = sequelize.define('messages', {","    subject: Sequelize.STRING,","    name: Sequelize.STRING,","    message: Sequelize.TEXT","})","","app.get('/createdb', (request, response) => {","    sequelize.sync({force:true}).then(() => {","        response.status(200).send('tables created')","    }).catch((err) => {","        console.log(err)","        response.status(200).send('could not create tables')","    })","})","","app.use(express.json())","app.use(express.urlencoded())","","//definire endpoint POST /messages","app.post('/messages', (request, response) => {","    Messages.create(request.body).then((result) => {","        response.status(201).json(result)","    }).catch((err) => {","        response.status(500).send(\"resource not created\")","    })","})","","app.get('/messages', (request, response) => {","    Messages.findAll().then((results) => {","        response.status(200).json(results)","    })","})","","app.get('/messages/:id', (request, response) => {","    Messages.findByPk(request.params.id).then((result) => {","        if(result) {","            response.status(200).json(result)","        } else {","            response.status(404).send('resource not found')","        }","    }).catch((err) => {","        console.log(err)","        response.status(500).send('database error')","    })","})","","app.put('/messages/:id', (request, response) => {","    Messages.findByPk(request.params.id).then((message) => {","        if(message) {","            message.update(request.body).then((result) => {","                response.status(201).json(result)","            }).catch((err) => {","                console.log(err)","                response.status(500).send('database error')","            })","        } else {","            response.status(404).send('resource not found')","        }","    }).catch((err) => {","        console.log(err)","        response.status(500).send('database error')","    })","})","","app.delete('/messages/:id', (request, response) => {","    Messages.findByPk(request.params.id).then((message) => {","        if(message) {","            message.destroy().then((result) => {","                response.status(204).send()","            }).catch((err) => {","                console.log(err)","                response.status(500).send('database error')","            })","        } else {","            response.status(404).send('resource not found')","        }","    }).catch((err) => {","        console.log(err)","        response.status(500).send('database error')","    })","})"],"id":2}],[{"start":{"row":16,"column":2},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":17,"column":0},"end":{"row":97,"column":2},"action":"insert","lines":["const Messages = sequelize.define('messages', {","    subject: Sequelize.STRING,","    name: Sequelize.STRING,","    message: Sequelize.TEXT","})","","app.get('/createdb', (request, response) => {","    sequelize.sync({force:true}).then(() => {","        response.status(200).send('tables created')","    }).catch((err) => {","        console.log(err)","        response.status(200).send('could not create tables')","    })","})","","app.use(express.json())","app.use(express.urlencoded())","","//definire endpoint POST /messages","app.post('/messages', (request, response) => {","    Messages.create(request.body).then((result) => {","        response.status(201).json(result)","    }).catch((err) => {","        response.status(500).send(\"resource not created\")","    })","})","","app.get('/messages', (request, response) => {","    Messages.findAll().then((results) => {","        response.status(200).json(results)","    })","})","","app.get('/messages/:id', (request, response) => {","    Messages.findByPk(request.params.id).then((result) => {","        if(result) {","            response.status(200).json(result)","        } else {","            response.status(404).send('resource not found')","        }","    }).catch((err) => {","        console.log(err)","        response.status(500).send('database error')","    })","})","","app.put('/messages/:id', (request, response) => {","    Messages.findByPk(request.params.id).then((message) => {","        if(message) {","            message.update(request.body).then((result) => {","                response.status(201).json(result)","            }).catch((err) => {","                console.log(err)","                response.status(500).send('database error')","            })","        } else {","            response.status(404).send('resource not found')","        }","    }).catch((err) => {","        console.log(err)","        response.status(500).send('database error')","    })","})","","app.delete('/messages/:id', (request, response) => {","    Messages.findByPk(request.params.id).then((message) => {","        if(message) {","            message.destroy().then((result) => {","                response.status(204).send()","            }).catch((err) => {","                console.log(err)","                response.status(500).send('database error')","            })","        } else {","            response.status(404).send('resource not found')","        }","    }).catch((err) => {","        console.log(err)","        response.status(500).send('database error')","    })","})"],"id":4}],[{"start":{"row":18,"column":0},"end":{"row":98,"column":2},"action":"insert","lines":["const Messages = sequelize.define('messages', {","    subject: Sequelize.STRING,","    name: Sequelize.STRING,","    message: Sequelize.TEXT","})","","app.get('/createdb', (request, response) => {","    sequelize.sync({force:true}).then(() => {","        response.status(200).send('tables created')","    }).catch((err) => {","        console.log(err)","        response.status(200).send('could not create tables')","    })","})","","app.use(express.json())","app.use(express.urlencoded())","","//definire endpoint POST /messages","app.post('/messages', (request, response) => {","    Messages.create(request.body).then((result) => {","        response.status(201).json(result)","    }).catch((err) => {","        response.status(500).send(\"resource not created\")","    })","})","","app.get('/messages', (request, response) => {","    Messages.findAll().then((results) => {","        response.status(200).json(results)","    })","})","","app.get('/messages/:id', (request, response) => {","    Messages.findByPk(request.params.id).then((result) => {","        if(result) {","            response.status(200).json(result)","        } else {","            response.status(404).send('resource not found')","        }","    }).catch((err) => {","        console.log(err)","        response.status(500).send('database error')","    })","})","","app.put('/messages/:id', (request, response) => {","    Messages.findByPk(request.params.id).then((message) => {","        if(message) {","            message.update(request.body).then((result) => {","                response.status(201).json(result)","            }).catch((err) => {","                console.log(err)","                response.status(500).send('database error')","            })","        } else {","            response.status(404).send('resource not found')","        }","    }).catch((err) => {","        console.log(err)","        response.status(500).send('database error')","    })","})","","app.delete('/messages/:id', (request, response) => {","    Messages.findByPk(request.params.id).then((message) => {","        if(message) {","            message.destroy().then((result) => {","                response.status(204).send()","            }).catch((err) => {","                console.log(err)","                response.status(500).send('database error')","            })","        } else {","            response.status(404).send('resource not found')","        }","    }).catch((err) => {","        console.log(err)","        response.status(500).send('database error')","    })","})"],"id":5}],[{"start":{"row":3,"column":16},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":6},{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"insert","lines":["a"]},{"start":{"row":4,"column":1},"end":{"row":4,"column":2},"action":"insert","lines":["p"]},{"start":{"row":4,"column":2},"end":{"row":4,"column":3},"action":"insert","lines":["p"]},{"start":{"row":4,"column":3},"end":{"row":4,"column":4},"action":"insert","lines":["."]},{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"insert","lines":["l"]},{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"insert","lines":["i"]},{"start":{"row":4,"column":6},"end":{"row":4,"column":7},"action":"insert","lines":["s"]}],[{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"insert","lines":["t"],"id":7},{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["e"]},{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["n"]}],[{"start":{"row":3,"column":10},"end":{"row":5,"column":0},"action":"remove","lines":["(8080)","app.listen",""],"id":9}],[{"start":{"row":3,"column":10},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":10}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":12},"action":"insert","lines":["()"],"id":11}],[{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["p"],"id":12},{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["r"]},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["o"]}],[{"start":{"row":3,"column":11},"end":{"row":3,"column":14},"action":"remove","lines":["pro"],"id":13},{"start":{"row":3,"column":11},"end":{"row":3,"column":18},"action":"insert","lines":["process"]}],[{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["."],"id":14},{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"insert","lines":["e"]}],[{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"remove","lines":["e"],"id":15},{"start":{"row":3,"column":19},"end":{"row":3,"column":22},"action":"insert","lines":["env"]}],[{"start":{"row":3,"column":22},"end":{"row":3,"column":23},"action":"insert","lines":["."],"id":16},{"start":{"row":3,"column":23},"end":{"row":3,"column":24},"action":"insert","lines":["P"]},{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":["O"]},{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"insert","lines":["R"]},{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":["T"]}],[{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"insert","lines":["}"],"id":17},{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["}"]}],[{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"remove","lines":["}"],"id":18},{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"remove","lines":["}"]}],[{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"insert","lines":["|"],"id":19},{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["|"]}],[{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["8"],"id":20},{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"insert","lines":["0"]},{"start":{"row":3,"column":31},"end":{"row":3,"column":32},"action":"insert","lines":["8"]},{"start":{"row":3,"column":32},"end":{"row":3,"column":33},"action":"insert","lines":["0"]}]]},"ace":{"folds":[],"scrolltop":7.5,"scrollleft":0,"selection":{"start":{"row":12,"column":37},"end":{"row":12,"column":37},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1589221562153,"hash":"170cdafa31619a6f5c85f801ed5165799b78ec4c"}