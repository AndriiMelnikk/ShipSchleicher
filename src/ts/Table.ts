export interface Table {
    id: number;
    company: string;
    name: string;
    iban: string;
    bic: string;
    bankName: string;
    additional?: string;
    street?: string;
    postalCode?: number | null;
    country?: string;
    fax?: string;
    mail?: string;
    birthday?: string;
    homepage?: string;
}
