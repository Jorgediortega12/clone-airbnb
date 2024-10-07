import bcryptjs from "bcryptjs"; 

interface SeedUser {
    email: string; 
    name: string; 
    password: string
}

interface SeedData {
    user: SeedUser[]; 
}

export const initialData: SeedData = {
    user: [
        {
            email: "jorge@google.com", 
            name: "jorge diaz", 
            password: bcryptjs.hashSync("1234567", 10)
        },
        {
            email: "luis@google.com", 
            name: "luis diaz", 
            password: bcryptjs.hashSync("1234567", 10)
        }
    ]
}