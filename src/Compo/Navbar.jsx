import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <div id="newsCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <span className="badge bg-light text-dark fs-4">My-News</span>
                            </div>
                            <div className="carousel-item">
                                <span className="badge bg-light text-dark fs-4">Breaking News</span>
                            </div>
                            <div className="carousel-item">
                                <span className="badge bg-light text-dark fs-4">Top Stories</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
