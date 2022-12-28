import { useState, useEffect } from "react";
import Post from "./Post";
import logo from "./logo.svg";

function App() {
  const [links, setLinks] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.reddit.com/r/guineapigs.json")
      .then((res) => res.json())
      .then((res) => res.data.children)
      .then((children) =>
        children
          .map((child) => child.data)
          .filter(
            (link) => link.post_hint === "image" && link.domain !== "reddit.com"
          )
      )
      .then((links) => {
        setLinks(links);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-800 text-white">
      <header className="flex items-center">
        <img src={logo} className="h-12" alt="logo" />
        <span className="text-xl font-bold">Reddit browser</span>
      </header>
      <div className="grow px-4">
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <div className="flex flex-col items-start">
            {links.map((link) => (
              <Post
                title={link.title}
                url={link.url}
                permalink={link.permalink}
                num_comments={link.num_comments}
                name={link.name}
              />
            ))}
          </div>
        )}
      </div>
      <footer className="w-full text-center">&copy; 2023 Aaro Karell</footer>
    </div>
  );
}

export default App;
