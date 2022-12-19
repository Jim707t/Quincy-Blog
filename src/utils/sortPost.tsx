export const sortPost = (a: Record<string, any>, b: Record<string, any>): number => {
  return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
};
