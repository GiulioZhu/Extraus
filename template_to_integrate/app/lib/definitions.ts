// definitions for the data (shapes, types, etc.)

export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    location: string;
    role: string;
    company: Company;
    commitment: string[];
    Expertise: string[];
};

// need to think about employee employers and user relationship later on
export type Employee = {

};

export type Company = {
    id: number;
    name: string;
    description: string;
    location: string;
};
