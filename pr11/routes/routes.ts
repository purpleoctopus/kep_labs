export const users = [{
    id: 1,
    name: "Ostapiuk Denys",
    email: "ostapiuk@piedpiper.com",
    },
    {
    id: 2,
    name: "Choboda Yurii",
    email: "choboda@piedpiper.com",
    },
];

export const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });
    app.get('/users', (request, response) => {
        response.send(users);
    });
}