const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const express = require('express');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

const compiler = Webpack(config);
const server = new WebpackDevServer(compiler, {
    setup: (app) => {

        app.post('/upload', (req, res) => {
            var form = formidable.IncomingForm();
            form.multiples = true;
            form.keepExtensions = true;
            form.uploadDir = path.join(__dirname, '/uploads/');
            form.parse(req, (err, fields, files) => {
                if (err) return res.status(500).json({error: err});
                res.status(200).json({uploaded: true});
            });
            form.on('fileBegin', (name, file) => {
                const [fileName, fileExt] = file.name.split('.');
                file.path = path.join(form.uploadDir, `${fileName}_${new Date().getTime()}.${fileExt}`);
            });
        });
    }
});

server.listen(8080, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:8080');
});