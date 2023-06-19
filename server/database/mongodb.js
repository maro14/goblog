import { connect } from 'mongoose'


export const dbConnect = (req, res) => {
    const MONGOURI = process.env.MONGODB

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