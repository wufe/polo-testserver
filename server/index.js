const express = require('express');
const app = express();
const port = 3000;
const path = require('path')
const os = require('os');

// const staticPath = path.resolve(__dirname, '..', 'dist');
// console.log({ staticPath })

// app.use('/dist', express.static(staticPath));

app.all('/', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
    <div id="app"></div>
    <table>
        <tr><td colspan=2 style="font-weight: bold; text-align: center">Machine</td></tr>
        <tr>
            <td>Hostname</td>
            <td>${os.hostname()}</td>
        </tr>
        <tr><td colspan=2 style="font-weight: bold; text-align: center">Repository</td></tr>
        <tr>
            <td>Branch</td>
            <td>Master</td>
        </tr>
        <tr><td colspan=2 style="font-weight: bold; text-align: center">General request info</td></tr>
        <tr>
            <td>URL</td>
            <td>${req.url}</td>
        </tr>
        <tr>
            <td>Hostname</td>
            <td>${req.hostname}</td>
        </tr>
        <tr><td colspan=2 style="font-weight: bold; text-align: center">Headers</td></tr>
        ${Object.entries(req.headers).map(([key, value]) =>
        `<tr>
                <td>${key}</td>
                <td>${value}</td>
            </tr>`).join('')}
        <tr><td><a href="/fwd-test">Forward test</a></td></tr>
    </table>
    <script type="text/javascript" src="/dist/client.js"></script>
</body>
</html>`)
});

app.all('/fwd-test', (req, res) => {
    res.send(`This is the /fwd-test endpoint.
    If you are seeing this, probably the forward has not been successful.`);
});

app.all('/fwd-dest-test', (req, res) => {
    res.send(`This is the /fwd-dest-test endpoint: the forward has been successful.`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})