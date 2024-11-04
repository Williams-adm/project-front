export interface branch {
    data: Datum[];
}

export interface Datum {
    id:      number;
    name:    string;
    country: string;
    city:    string;
    address: string;
    phone:   number;
    email?:   string;
}
