require('dotenv').config();

export const config = {
    port: process.env.PORT || 4010,
    limit_size: process.env.LIMIT_SIZE || 3145728,
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT || 3306),
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || 'root',
        database: process.env.DB_NAME || 'test_nextqa',
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'Left to the Right?!?',
        expiresIn: process.env.JWT_EXPIRES_IN || '2d',
    },
};
