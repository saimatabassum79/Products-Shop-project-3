export const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Top Destinations to Visit in 2025",
      desc: "Discover the most trending places you must explore in 2025 for unforgettable experiences.",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
      author: "Admin",
      date: "Jan 12, 2025",
    },
    {
      id: 2,
      title: "How to Plan a Budget-Friendly Tour",
      desc: "Learn how to enjoy premium travel experiences while staying within budget.",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
      author: "Travel Guide",
      date: "Feb 05, 2025",
    },
    {
      id: 3,
      title: "The Ultimate Packing Checklist",
      desc: "A complete packing guide to ensure you never forget essentials on your next trip.",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
      author: "Explorer",
      date: "Mar 18, 2025",
    },
  ];

  return (
    <section className="pb-20  bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-blue-600 font-semibold uppercase tracking-wide">Latest News & Articles</h3>
          <h2 className="text-4xl font-bold mt-2">Our Latest Travel Blog</h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Stay updated with the best travel guides, tips, and stories from around the world.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex gap-4 text-sm text-gray-500 mb-3">
                  <span>📅 {blog.date}</span>
                  <span>👤 {blog.author}</span>
                </div>

                <h3 className="text-xl font-bold mb-2 hover:text-[#F54A00] transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">{blog.desc}</p>

                <button className="text-[#F54A00] font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};