import { Comment } from "./comment";
import { Author } from "./author";

export interface Post {
    date?: string;
    type?: string;
    visits?: number;
    title?: string;
    text?: string;
    image?: string;
    pdf?: string;
    comments?: Comment[];
    author?: Author;
}
