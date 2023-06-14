import { connect } from 'mongoose'


export const dbConnect = (req, res) => {
    const MONGOURI = "mongodb://localhost:27017/goblog"

    try {
        connect(MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Database connected');
    } catch (err) {
        console.log('database error', err);
    }
}