import TagUnion from "./tag";

/**
 * @for Request
 * @description used for collection of the tags i chose
 */
interface TagProps {
  id: number;
  tag: TagUnion;
  selected: boolean;
}

export type { TagProps };
