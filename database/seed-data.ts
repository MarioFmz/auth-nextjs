import bcrypt from 'bcryptjs';

interface SeedUser {
    name     : string;
    email    : string;
    password : string;
    role     : 'admin'|'worker'
}

interface SeedData {
    users: SeedUser[];
}

export const initialData: SeedData = {
    users: [
        {
            name: 'Mario',
            email: 'mario@mario.com',
            password: bcrypt.hashSync('123456'),
            role: 'admin'
        },
        {
            name: 'Cristina',
            email: 'cristina@cristina.com',
            password: bcrypt.hashSync('123456'),
            role: 'worker'
        },
    ],
}