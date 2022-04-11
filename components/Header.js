import Routes from "./routes"
import Link from "next/link";
const Header = () => {
  
  return (
    <><meta charSet="utf-8" />
      <title>Download YouTube Shorts Video - YouTube Shorts Downloader</title>
      <meta name="description" content="YouTube shorts video download for free. Best YouTube Shorts video downloader online tool. Save YouTube shorts videos to device." />
      <meta property="og:description" content="YouTube shorts video download for free. Best YouTube Shorts video downloader online tool. Save YouTube shorts videos to device." />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <link rel="stylesheet" href="style.css" />
      <nav className="bg-main-primary w-100 d-flex justify-content-between align-items-center"><a className="text-white text-decoration-none d-flex p-3 font-weight-semi " href="/"><img src="/logo.svg" className="mr-2" height="25px" width="25px" />Youtube Shorts Downloader</a>
        <ul className="list-inline justify-content-end m-0 p-3 main-menu align-items-center">
          <li><Link href="/"><a className="text-white text-decoration-none mr-2 p-3 font-weight-semi" >Home</a></Link></li>
          <li><Link href="/blog"><a className="text-white text-decoration-none mr-2 p-3 font-weight-semi" >Blog</a></Link></li>
          <li><Link href="/contact"><a className="text-white text-decoration-none mr-5 p-3 font-weight-semi" >Contact
            Us</a></Link></li>
            <li><Link href="/short-to-mp3"><a className="text-white text-decoration-none mr-5 p-3 font-weight-semi" >Short to MP3</a></Link></li>
            <li><Link href="/youtube-thumbnail-downloader"><a className="text-white text-decoration-none mr-5 p-3 font-weight-semi" >Youtube Thumbnail Downloader</a></Link></li>
          <li>
            <div className="mb-0 form-group"><div className="">
              <Routes/>
            </div>
            </div>
          </li>
        </ul>
      </nav>


    </>
  );
};
export default Header;
