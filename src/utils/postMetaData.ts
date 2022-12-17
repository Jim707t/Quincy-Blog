import * as fs from 'fs';
import * as pf from 'fs/promises';
import matter from "gray-matter";
import { Metadata } from "./MetaData";
//const fs = require('fs')

const PostMetadata = (): Metadata[] => {
  const folder = 'content/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

export default PostMetadata;
