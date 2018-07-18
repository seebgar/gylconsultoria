import { Reply } from "./reply";

export interface Seed {
    id?: string;
    author?: string;
    author_image?: string;
    date?: string;
    text?: string;
    image?: string;
    title?: string;
    ups?: number;
    replies?: Reply[]; 
}
