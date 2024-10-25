

const Blog = ({blog, handleBookMark, handleReadTime}) => {
    const {id, cover, title, author_img, author,posted_date, reading_time, hashtags} = blog
    return (
        <div className="w-[845px]">
            <img className="w-full mt-[40px]" src={cover} alt="" />
            <div className="flex justify-between mt-[34px]">
                <div className="flex items-center">
                    <img className="w-[60px] mr-6" src={author_img} alt="" />
                    <div className="text-left">
                        <h2>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <h4 className="mr-2 text-[#111111] text-opacity-60">{reading_time} min read</h4>
                    <button onClick={() => handleBookMark(blog)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path 
                        d="M17.593 3.322C18.693 3.45 19.5 4.399 19.5 5.507V21L12 17.25L4.5 21V5.507C4.5 4.399 5.306 3.45 6.407 3.322C10.1232 2.89063 13.8768 2.89063 17.593 3.322Z"
                        stroke="#111111" 
                        strokeOpacity="0.6" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    />
                    </svg></button>
                </div>
            </div>
            <h1 className="text-left max-w-[737px] mt-4">{title}</h1>
            <div className="flex mt-4">
                {
                    hashtags.map( (hash) => <h4 key={hash} className="text-[#111111] text-opacity-60 mr-4">#{hash}</h4>)
                }
            </div>
            <h4 className="text-left mt-[21px]"><button onClick={() => handleReadTime(id, reading_time)} className="text-[#6047EC] underline">Mark as read</button></h4>
            <hr className="mt-[38px]" />
        </div>
    );
};

export default Blog;
