import React from "react";
import { useState, useEffect } from "react";
import "./blog.css";
import BlogCard from "../components/BlogCard";
import { apiService } from "../services/api";

function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await apiService.getBlogs();
            setBlogs(data);
        } catch (error) {
            console.log("Error", error);
            setError("Failed to load blogs. Please try again later.");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <section id="blogs" className="blogs">
            <div className="container-fluid">
                <div className="row">
                    <h4 className="section-title">our Blog</h4>
                </div>
                <div className="row mt-5">
                    {loading && (
                        <div className="col-12 text-center">
                            <p>Loading blogs...</p>
                        </div>
                    )}
                    {error && (
                        <div className="col-12 text-center">
                            <p style={{ color: 'red' }}>{error}</p>
                        </div>
                    )}
                    {!loading && !error && blogs.length > 0 &&
                        blogs.map((blog) => {
                            return <BlogCard key={blog._id} blog={blog} />;
                        })}
                </div>
            </div>
        </section>
    );
}

export default Blog;
