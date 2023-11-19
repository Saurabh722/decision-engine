const config = {
    PORT: process.env.PORT || 5003,
    corsOptions: {
        origin: ['http://localhost:5001']
    }
}

export default config;