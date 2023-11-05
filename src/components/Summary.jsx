import {useState, useEffect} from 'react';

import { copy, linkIcon, loader, tick } from '../assets';
import { useLazyGetSummaryQuery } from '../services/article';

const Summary = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });

const [allArticles, setAllArticles] = useState([]);

const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

useEffect(() => {
  const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'))

  if(articlesFromLocalStorage) {
    setAllArticles(articlesFromLocalStorage)
  }
}, [])


//event handler to fetch from the API
const handleSubmit = async (e) => {
  e.preventDefault(); //prevents reloading when submitted

  const { data } = await getSummary ({
    articleUrl: article.url
  });
  
  if(data?.summary){
    const newArticle = {
      ...article,
      summary: data.summary
    };

    const updatedAllArticles = [newArticle, ...allArticles];

    setArticle(newArticle);
    setAllArticles(updatedAllArticles)

    localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
  }
}//end handleSubmit


  return (
    <section className="mt-16 w-full max-w-xl">
      {/*search*/}
      <div className="flex flex-col w-ful gap-2">
        <form action="" className="relative flex justify-center items-center"
          onSubmit = {handleSubmit}
        >
          <img src={linkIcon} alt="link-icon" 
          className='absolute left-0 my-2 ml-3 w-5'/>

          <input 
            type="text" 
            placeholder='Paste or Enter url'
            value={article.url}
            onChange={(e) => setArticle({
              ...article, //the previous article
              url: e.target.value //update the url
            })}
            required
            className='url_input peer-focus:border-gray-700 peer-focus:text-gray-700'
          />

          <button
            //no need for submit attribute since the button is inside a form
            className='submit_btn'
          >
            Enter
          </button>
        </form>

        {/*Browse url history */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className='link_card'
            >
              <div className="copy_btn">
                <img src="" alt="copy_icon" className='w-[40%] h-[40%] object-contain' />
              </div>
              <p
                className='flex-1 font-satoshi text-blue-700 font-medium text-sm truncate'
              >{item.url}</p>
            </div>
          ))}
        </div>
      </div>

      {/*display Results */}
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <img src={loader} alt='loader' className='w-20 h-20 object-contain' />
        ) : error ? (
            <p
              className='font-inter font-bold text-black text-center'
            >well that was not suppose to happen
              <br />
              <span className='font-satoshi font-normal text-gray-700'>
                {error?.data?.error} 
              </span>
            </p>
        ) : (
            article.summary && (
              <div className='flex flex-col gap-3'>
                <h2 className='font-satoshi font-bold text-gray-600 text-xl'>
                  Article <span className='blue_gradient'>Summary</span>
                </h2>
                <div className="summary_box">
                  <p>{article.summary}</p>
                </div>
              </div>
            )
        )
        }
          </div>
    </section>
  )
}

export default Summary