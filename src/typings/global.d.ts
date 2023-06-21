interface Category {
  txt: string;
  pn?: string;
  disabled?: boolean;
  children?: Array<Category>;
}
