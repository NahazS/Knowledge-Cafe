import Bookmark from "./Bookmark";

const Bookmarks = ({bookMark, readTime}) => {

    return (
        <div>
            <div className="mt-[40px]">
                <h2 className="w-[411px] px-[48px] py-[21px] border-[1px] border-[#6047EC] rounded-lg bg-[#6047ec] bg-opacity-10">Spent time on read : {readTime} min</h2>
            </div>
            <div className="p-[40px] bg-[#111111] bg-opacity-5 rounded-lg mt-6 text-left">
                <h2>Bookmarked Blogs : {bookMark.length}</h2>
                {
                    bookMark.map((bookMark, idx) => <Bookmark key={idx} bookmark={bookMark}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;