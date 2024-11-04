export interface supplier {
    data: Datum[];
}

export interface Datum {
    id:      number;
    name:    string;
    ruc:     number;
    email?:   string;
    phone:   number;
    address: string;
}