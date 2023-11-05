import { logo } from '../assets';


const Hero = () => {
  return (
    <header className="w-full flex justify-center itms-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={logo} alt="logo" className='w-28 object-contain'/>

            <button
                onClick={() => window.open("https://github.com/brainyquotes/AI_article_summarizer")}
                className="black_btn"
            >Github</button>
        </nav>

        <h1 className="head_text">
                Summarize an Article with <br className='max-md:hidden'/> 
                <span className='orange_gradient'>OpenAI GPT-4</span>
            </h1>
        <h2 className="desc">
            Summarise and Simplify news, article or contents from a URL
            with this Open-source ai summarizer. You may not need to summarize a web page with
            an article, You can summarize a url and it tells what the page or website is all about.
            Give it a try!

        </h2>
    </header>
  )
}

export default Hero