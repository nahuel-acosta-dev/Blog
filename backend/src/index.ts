import app from './app';
import './database';

app.listen(app.get('port'),() => {
    console.log('sever on port 8000')
})
