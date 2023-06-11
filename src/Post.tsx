interface PostProps {
  title: string;
  url: string;
  permalink: string;
  num_comments: number;
  className: string;
}

export default function Post({ title, url, permalink, num_comments, className }: PostProps) {
  return (
    <div className={`${className} px-4 py-1 rounded-lg bg-zinc-700`}>
      <span className="text-lg">{title}</span>
      <a href={url}>
        <img className="h-72 my-1 rounded" src={url} alt="thumbnail" />
      </a>
      <a href={"https://reddit.com/" + permalink}>
        <span>{num_comments}</span>
        {num_comments === 1 ? " comment" : " comments"}
      </a>
    </div>
  );
}
