export interface AddressReponse {
    id:        number;
    name:      string;
    lastname:  string;
    codePhone: string;
    phone:     string;
    cp:        string;
    col:       string;
    city:      string;
    address:   string;
}

export type AddressRequest = Omit<AddressReponse, 'id'>;
