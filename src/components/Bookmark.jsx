const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className="p-5 bg-white rounded-lg mt-4">
            <h4>{title}</h4>
        </div>
    );
};

export default Bookmark;