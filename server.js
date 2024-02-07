

const express = require('express');
var cors = require('cors');

const fs = require('fs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var url = require('url');
const { resolve } = require('path');
const { reject, tryEach } = require('async');

const path = require('path')
const app = express();
app.use(cors({ credentials: true, origin: 'http://localhost:4200' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());




_todoList = [
    { id: 1, title: 'example todo 1', detail: 'example detail 1', status: 'done' },
    { id: 2, title: 'example todo 2', detail: 'example detail 2', status: 'pending' },
    { id: 3, title: 'example todo 3', detail: 'example detail 3', status: 'pending' }
];



app.get('/todo-list', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Encoding', 'UTF-8');
    res.end(JSON.stringify(_todoList));

});


app.get('/todo', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Encoding', 'UTF-8');
    var id = req.query.id;

    if (id == '') {
        let result = { status: 0, statusText: 'id required.', todo: null }
        res.end(JSON.stringify(result));
    } else {

        let newTodos = _todoList.filter(item => {
            console.log('filter ', item)
            return item.id == id;
        });


        let result;
        if (newTodos.length > 0) {
            result = { status: 1, statusText: '', todo: newTodos[0] };
        } else {
            result = { status: 1, statusText: '', todo: null };
        }


        res.end(JSON.stringify(result));

    }



});

app.post('/todo', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Encoding', 'UTF-8');
    var x = req.body;
    var id = x.id;

    try {
        if (!id) {

            const ids = _todoList.map(object => {
                return object.id;
            });
            const max = Math.max(...ids);
            console.log('max id', ids, max)
            id = max + 1;
            let title = req.body.title;
            let detail = req.body.detail;
            let status = 'Pending';
            let newTodoItem = { id: id, title: title, detail: detail, status: status }
            _todoList.push(newTodoItem);
            let result = { status: 1, todo: newTodoItem, statusText: 'inserted' }
            res.end(JSON.stringify(result));

        } else {

            let updatedItem;
            let i = 0;
            for (i = 0; i <= _todoList.length - 1; i++) {

                if (_todoList[i].id == id) {
                    if (req.body.title) {
                        _todoList[i].title = req.body.title;
                    }
                    if (req.body.detail) {
                        _todoList[i].detail = req.body.detail;
                    }

                    if (req.body.status) {
                        _todoList[i].status = req.body.status;
                    }

                    updatedItem = _todoList[i];

                    break;
                }
            }




            let result = { status: 1, todo: updatedItem, statusText: 'updated' }
            res.end(JSON.stringify(result));
        }
    } catch (error) {
        let result = { status: 0, todo: null, statusText: error }
        res.end(JSON.stringify(result));
    }

});




app.post('/delete', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Encoding', 'UTF-8');
    var x = req.body;
    var id = x.id;

    try {
        if (id == '') {
            let result = { status: 0, statusText: 'id required.' }
            res.end(JSON.stringify(result));
        } else {

            let newTodos = _todoList.filter(item => {
                return item.id != id;
            });

            _todoList = JSON.parse(JSON.stringify(newTodos));

            let result = { status: 1, statusText: 'deleted', id: id }
            res.end(JSON.stringify(result));
        }
    } catch (error) {
        let result = { status: 0, todo: null, statusText: error }
        res.end(JSON.stringify(result));
    }

});




app.listen(9000, () => {
    console.log('Application is running on port 9000');
});



