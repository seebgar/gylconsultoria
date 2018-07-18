import { Post } from "./post";

export interface Publication {
    id?: string;
    title?: string;
    text?: string;
    image?: string;
    visits?: number;
    date?: string;
    posts?: Post[];
}
