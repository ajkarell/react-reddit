import { useState, useEffect } from 'react';
import Post from './Post';
import logo from './assets/react.svg'

function App() {
  const [links, setLinks] = useState<any[] | null>(null);

  useEffect(() => {
    async function runEffect() {
      const result = await fetch("https://www.reddit.com/r/guineapigs.json");
      const data = (await result.json()).data.children.map((child: any) => child.data).filter((link: any) => link.post_hint === "image" && link.domain !== "reddit.com");
      setLinks(data);
    }
    
    void runEffect();
  }, []);

  return (
    <div className="p-4 min-h-screen flex flex-col bg-zinc-800 text-white">
      <header className="mb-2 flex items-center">
        <img src={logo} className="pr-4 h-12" alt="logo" />
        <span className="text-xl font-bold">Reddit browser</span>
      </header>
      <div className="grow">
        {links == null ? (
          <span>Loading...</span>
        ) : (
          <div className="flex flex-col items-start">
            {links.map((link) => (
              <Post
                className='my-2'
                title={link.title}
                url={link.url}
                permalink={link.permalink}
                num_comments={link.num_comments}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
