import { HeadlineArticle } from "../../models/headline-article";

export interface State {
    headlines: Array<HeadlineArticle>;
    totalResults: number;
    showMore: boolean;
    searchTerm: string;
    sortBy: string;
    article: HeadlineArticle;
}

export const initialState: State = {
    headlines: undefined,
    totalResults: undefined,
    showMore: undefined,
    searchTerm: undefined,
    sortBy: undefined,
    article: undefined,
};
