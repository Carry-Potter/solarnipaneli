import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPostsData } from './blogPostsData';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPostsData.find((post) => post.id === parseInt(id));

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-center text-xl">Blog post nije pronađen.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero sekcija */}
      <section className="w-full py-12 md:py-24 bg-green-900">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">{post.title}</h1>
          <p className="text-white text-center mt-4">{post.date}</p>
        </div>
      </section>

      {/* Sadržaj blog posta */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          <div className="space-y-6">
            {post.sections.map((section, index) => (
              <div key={index} className="mb-8">
                {section.title && (
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.title}</h2>
                )}
                {section.content && section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-600 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    {section.list.map((item, lIndex) => (
                      <li key={lIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;