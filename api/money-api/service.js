import { Service } from 'node-windows';

const svc = new Service({
    name: 'ApiMoney',
    description: 'Api para o projeto money',
    script: 'C:\\Users\\pablo\\Documents\\Programming\\Js\\Money\\money-api\\index.js'
});

svc.on('install', () => {
    svc.start();
});

svc.install();