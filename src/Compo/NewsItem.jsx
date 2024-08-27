const NewsItem = ({ title = "No Title Available", description, url, src }) => {
    // Define the fallback image and text
    const fallbackImage = "https://via.placeholder.com/330x200";
    const defaultDescription = "This is an informative piece about something that has just happened.";

    return (
        <div
            className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
            style={{ maxWidth: "345px" }}
        >
            <img
                src={src || fallbackImage}
                style={{ height: "200px", width: "330px" }}
                className="card-img-top"
                alt={title.slice(0, 50)}
            />
            <div className="card-body">
                <h5 className="card-title">
                    {title.length > 50 ? `${title.slice(0, 50)}...` : title}
                </h5>
                <p className="card-text">
                    {description
                        ? description.length > 90
                            ? `${description.slice(0, 90)}...`
                            : description
                        : defaultDescription}
                </p>
                <a href={url} className="btn btn-primary">
                    Read More
                </a>
            </div>
        </div>
    );
};

export default NewsItem;
