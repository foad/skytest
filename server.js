const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const express = require('express');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');
const xml2js = require('xml2js');

const compiler = Webpack(config);
const server = new WebpackDevServer(compiler, {

    // Express middleware
    setup: (app) => {

        // Upload of xml files
        app.post('/upload', (req, res) => {

            // Set up formidable
            var form = formidable.IncomingForm();
            form.multiples = true;
            form.keepExtensions = true;
            form.uploadDir = path.join(__dirname, '/uploads/');
            form.outputDate = new Date().getTime();

            // Parse file data
            form.parse(req, (err, fields, files) => {
                const [fileName, fileExt] = files.file.name.split('.');
                if (err) return res.status(500).json({error: err});
                res.status(200).json({uploaded: true, path: form.uploadDir, filename: `${fileName}_${form.outputDate}.${fileExt}`});
            });

            // Upload file
            form.on('fileBegin', (name, file) => {
                const [fileName, fileExt] = file.name.split('.');
                file.path = path.join(form.uploadDir, `${fileName}_${form.outputDate}.${fileExt}`);
            });
        });

        // Convert XML to JSON at endpoint
        app.get('/xmlconversion', (req, res) => {

            // Get filename URL param
            var filename = req.query.filename;

            // Convert to JSON & return
            var parser = new xml2js.Parser();
            fs.readFile(path.join(__dirname, '/uploads/', filename), (err, data) => {
                parser.parseString(data, (err, result) => {
                    if (err !== null) console.log(err);
                    res.json(result);
                });
            });
        });
    }
});

server.listen(8080, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:8080');
});