import { Author } from "./author";

export interface Comment {
    date?: string;
    text?: string;
    author?: Author;
}
