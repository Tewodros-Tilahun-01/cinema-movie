// Static movie data
const MOVIES_DATA = [
  {
    _id: 1,
    titleImg: "../assets/movies/transformer-title.png",
    bgImg: "../assets/movies/bg-transformer.jpg",
    previewImg: "../assets/movies/transformer.jpg",
    video: "https://www.youtube.com/embed/TxPNrwbuxN0",
    title: "Transformer",
    year: "2023",
    date: "18th September",
    ageLimit: "15+",
    length: "2h 07min",
    category: "Adventure",
    type: "coming",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
    active: true,
  },
  {
    _id: 2,
    titleImg: "../assets/movies/meg-2-title.png",
    bgImg: "../assets/movies/bg-meg-2.jpeg",
    previewImg: "../assets/movies/meg-2.jpg",
    video: "https://www.youtube.com/embed/dG91B3hHyY4",
    title: "Meg 2",
    year: "2023",
    date: "04th August",
    ageLimit: "16+",
    length: "1h 56min",
    category: "Thriller",
    type: "coming",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
    active: false,
  },
  {
    _id: 3,
    titleImg: "../assets/movies/fast-x-title.png",
    bgImg: "../assets/movies/bg-fast-x.jpeg",
    previewImg: "../assets/movies/fast-x.jpeg",
    video: "https://www.youtube.com/embed/32RAq6JzY-w",
    title: "Fast X",
    year: "2023",
    date: "04th October",
    ageLimit: "12+",
    length: "2h 21min",
    category: "Action",
    type: "coming",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
    active: false,
  },
  {
    _id: 4,
    titleImg: "../assets/movies/jailer-title.png",
    bgImg: "../assets/movies/bg-jailer.jpeg",
    previewImg: "../assets/movies/jailer.jpg",
    video: "https://www.youtube.com/embed/lshAqOT7BB8",
    title: "Jailer",
    year: "2023",
    date: "09th November",
    ageLimit: "15+",
    length: "2h 48min",
    category: "Action",
    type: "coming",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
    active: false,
  },
  {
    _id: 5,
    titleImg: "../assets/movies/beautiful-disaster-title.png",
    bgImg: "../assets/movies/bg-beautiful-disaster.jpeg",
    previewImg: "../assets/movies/beautiful-disaster.jpeg",
    video: "https://www.youtube.com/embed/nvaenzyXl4o",
    title: "Beautiful Disaster",
    year: "2023",
    date: "12th November",
    ageLimit: "12+",
    length: "1h 45min",
    category: "Romance",
    type: "coming",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
    active: false,
  },
  {
    _id: 6,
    titleImg: "../assets/movies/ape-title.png",
    bgImg: "../assets/movies/bg-ape.jpeg",
    previewImg: "../assets/movies/ape.jpg",
    video: "https://www.youtube.com/embed/dtyPh5yCoWg",
    title: "Ape vs. Mecha Ape",
    year: "2023",
    date: "30th December",
    ageLimit: "14+",
    length: "2h 45min",
    category: "Thriller",
    type: "coming",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
    active: false,
  },
  {
    _id: 7,
    titleImg: "../assets/movies/assassin-title.png",
    bgImg: "../assets/movies/bg-assassin.jpg",
    previewImg: "../assets/movies/assassin.jpg",
    video: "https://www.youtube.com/embed/qiUATuIhUw8",
    title: "Assassin",
    year: "2023",
    date: "17th September",
    ageLimit: "16+",
    length: "1h 28min",
    category: "Thriller",
    type: "coming",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
    active: false,
  },
  {
    _id: 8,
    titleImg: "../assets/movies/no-hard-feelings-title.png",
    bgImg: "../assets/movies/bg-no-hard-feelings.jpeg",
    previewImg: "../assets/movies/no-hard-feelings.jpeg",
    video: "https://www.youtube.com/embed/7psP7xBEa28",
    title: "No Hard Feelings",
    year: "2023",
    date: "06th October",
    ageLimit: "14+",
    length: "1h 43min",
    category: "Romance",
    type: "coming",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
    active: false,
  },
  {
    _id: 9,
    titleImg: "../assets/movies/peter-pan-and-wendy-title.png",
    bgImg: "../assets/movies/bg-peter-pan-and-wendy.jpeg",
    previewImg: "../assets/movies/peter-pan-and-wendy.jpg",
    video: "https://www.youtube.com/embed/9Ji5U2sTlLU",
    title: "Peter Pan & Wendy",
    year: "2023",
    date: "14th October",
    ageLimit: "12+",
    length: "1h 49min",
    category: "Adventure",
    type: "coming",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
    active: false,
  },
  {
    _id: 10,
    titleImg: "../assets/movies/heart-of-stone-title.png",
    bgImg: "../assets/movies/bg-heart-of-stone.jpeg",
    previewImg: "../assets/movies/heart-of-stone.jpg",
    video: "https://www.youtube.com/embed/XuDwndGaCFo",
    title: "Heart of Stone",
    year: "2023",
    date: "25th November",
    ageLimit: "14+",
    length: "2h 02min",
    category: "Adventure",
    type: "coming",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
    active: false,
  },
  {
    _id: 11,
    titleImg: "../assets/movies/the-little-mermaid-title.png",
    bgImg: "../assets/movies/bg-little-mermaid.jpg",
    previewImg: "../assets/movies/the-little-mermaid.jpeg",
    video: "https://www.youtube.com/embed/kpGo2_d3oYE",
    title: "The Little Mermaid",
    year: "2023",
    date: "27th September",
    ageLimit: "12+",
    length: "2h 14min",
    category: "Romance",
    type: "schedule",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
    active: false,
  },
  {
    _id: 12,
    titleImg: "../assets/movies/the-65-title.png",
    bgImg: "../assets/movies/bg-65.jpeg",
    previewImg: "../assets/movies/65.jpg",
    video: "https://www.youtube.com/embed/bHXejJq5vr0",
    title: "Sixty Five",
    year: "2023",
    date: "27th October",
    ageLimit: "15+",
    length: "1h 33min",
    category: "Action",
    type: "schedule",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
    active: false,
  },
  {
    _id: 13,
    titleImg: "../assets/movies/the-black-demon-title.png",
    bgImg: "../assets/movies/bg-the-black-demon.jpeg",
    previewImg: "../assets/movies/the-black-demon.jpg",
    video: "https://www.youtube.com/embed/z1xJAyVKAPY",
    title: "The Black Demon",
    year: "2023",
    date: "21st October",
    ageLimit: "16+",
    length: "1h 40min",
    category: "Thriller",
    type: "schedule",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
    active: false,
  },
  {
    _id: 14,
    titleImg: "../assets/movies/the-tank-title.png",
    bgImg: "../assets/movies/bg-the-tank.jpeg",
    previewImg: "../assets/movies/the-tank.jpeg",
    video: "https://www.youtube.com/embed/23GmhsmrCIo",
    title: "The Tank",
    year: "2023",
    date: "03rd November",
    ageLimit: "17+",
    length: "1h 40min",
    category: "Horror",
    type: "schedule",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
    active: false,
  },
  {
    _id: 15,
    titleImg: "../assets/movies/the-covenant-title.png",
    bgImg: "../assets/movies/bg-the-covenant.jpeg",
    previewImg: "../assets/movies/the-covenant.jpg",
    video: "https://www.youtube.com/embed/02PPMPArNEQ",
    title: "The Covenant",
    year: "2023",
    date: "16th December",
    ageLimit: "12+",
    length: "2h 03min",
    category: "Action",
    type: "schedule",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
    active: false,
  },
];

// Static blog data
const BLOGS_DATA = [
  {
    _id: 1,
    thumbnail: "../assets/blogs/blog-1.jpeg",
    category: "5D Theatre",
    title: "Dolorum optio tempore voluptas dignissimos",
    author: {
      name: "Maria Doe",
      image: "../assets/blogs/blog-author-1.jpg",
    },
    date: "Jan 1, 2023",
  },
  {
    _id: 2,
    thumbnail: "../assets/blogs/blog-2.jpeg",
    category: "Disney",
    title: "Possimus soluta ut id suscipit ea ut in quo quia et soluta",
    author: {
      name: "Allisa Mayer",
      image: "../assets/blogs/blog-author-2.jpg",
    },
    date: "May 10, 2023",
  },
  {
    _id: 3,
    thumbnail: "../assets/blogs/blog-3.jpeg",
    category: "Theatre",
    title: "Nisi magni odit consequatur autem nulla dolorem",
    author: {
      name: "Mark Dower",
      image: "../assets/blogs/blog-author-3.jpg",
    },
    date: "June 23, 2023",
  },
  {
    _id: 4,
    thumbnail: "../assets/blogs/blog-4.jpeg",
    category: "Theatre Cater",
    title: "Non rem rerum nam cum quo minus olor distincti",
    author: {
      name: "Lisa Neymar",
      image: "../assets/blogs/blog-author-4.jpg",
    },
    date: "July 23, 2023",
  },
];

export const apiService = {
  // Get all movies
  getMovies: async () => {
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 0));
      return MOVIES_DATA;
    } catch (error) {
      console.error("Error fetching movies:", error);
      throw error;
    }
  },

  // Get movie by ID
  getMovieById: async (id) => {
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 0));
      const movie = MOVIES_DATA.find((movie) => movie._id === parseInt(id));
      if (!movie) {
        throw new Error("Movie not found");
      }
      return movie;
    } catch (error) {
      console.error("Error fetching movie:", error);
      throw error;
    }
  },

  // Get all blogs
  getBlogs: async () => {
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 0));
      return BLOGS_DATA;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw error;
    }
  },

  // Get blog by ID
  getBlogById: async (id) => {
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 0));
      const blog = BLOGS_DATA.find((blog) => blog._id === parseInt(id));
      if (!blog) {
        throw new Error("Blog not found");
      }
      return blog;
    } catch (error) {
      console.error("Error fetching blog:", error);
      throw error;
    }
  },

  // Health check
  healthCheck: async () => {
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 0));
      return { status: "OK", message: "Static data service is running" };
    } catch (error) {
      console.error("Health check failed:", error);
      throw error;
    }
  },
};
