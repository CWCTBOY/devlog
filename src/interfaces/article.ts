import TagUnion from "./tag";

/**
 * @for Response
 * @description used for thumbnail of the article
 */
interface ContentsProps {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tags: TagUnion[];
  view: number;
  likeCount: number;
  thumbnailUrl: string;
}

/**
 * @for Request
 * @description used for detail of the article
 */
interface ArticleProps {
  tags: TagUnion[];
  content: string;
  timestamp: Date;
}
export type { ContentsProps, ArticleProps };
