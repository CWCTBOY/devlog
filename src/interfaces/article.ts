import TagUnion from "./tag";

/**
 * @for Response
 * @description used for thumbnail of the article
 */
interface ContentsProps {
  id: number;
  image: string;
  title: string;
  view: number;
  comment: number;
  tags: TagUnion[];
}

/**
 * @for Request
 * @description used for detail of the article
 */
interface ArticleProps {
  tags: TagUnion[];
  content: string;
  timestamp: number;
}
export type { ContentsProps, ArticleProps };
