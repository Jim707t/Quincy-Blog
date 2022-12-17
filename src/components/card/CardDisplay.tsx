import PostMetadata from "../../utils/postMetaData";
import Card from "./Card";

export default function CardDisplay() {
  const postMetadata = PostMetadata();
  const card = postMetadata.map((post) => (
    <Card key={post.slug} {...post} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{card}</div>
  );
};