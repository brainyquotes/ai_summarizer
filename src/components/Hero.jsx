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
            Summarise and Simplify your reading with this Open-source article summarizer that transforms 
            lengthy articles into clear and concise summaries

        </h2>
    </header>
  )
}

export default Hero