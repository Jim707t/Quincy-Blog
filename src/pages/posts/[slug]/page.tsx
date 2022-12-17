import React from 'react'
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import PostMetadata from "../../../utils/postMetaData";

const getPostContent = (slug: string) => {
    const folder = "content/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
  };
  
  export const generateStaticParams = async () => {
    const posts = PostMetadata();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  };
  

export default function page(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>

      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  )
}
