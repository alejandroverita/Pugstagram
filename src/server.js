import sirv from 'sirv';
import compression from 'compression';
import polka from 'polka';
import * as sapper from '@sapper/server';

//call node_env
const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

//start server
polka()
    .use(
        compression({threshold: 0}),
        sirv('static', {dev} ), //handle static
        sapper.middleware()
    )
    .listen(PORT, err => {
        if(err) console.log('Ha habido un error', err);
    });
