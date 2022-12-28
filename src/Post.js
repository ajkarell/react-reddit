function Post(props) {
  return (
    <div className="px-4 py-1 my-1 rounded-lg bg-zinc-700">
      <span className="text-lg">{props.title}</span>
      <a href={props.url}>
        <img className="h-72 my-1" src={props.url} alt="thumbnail" />
      </a>
      <a href={"https://reddit.com/" + props.permalink}>
        <span>{props.num_comments}</span>
        {props.num_comments === 1 ? " comment" : " comments"}
      </a>
    </div>
  );
}

export default Post;
