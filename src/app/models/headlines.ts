import { HeadlineArticle } from "./headline-article";

export class Headlines{
    status: string;
    totalResults: number;
    articles: Array<HeadlineArticle>;
    code: string;
    message: string;
}