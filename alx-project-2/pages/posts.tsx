import React, { useEffect, useState } from 'react';
import { PostProps } from '@/interfaces';
import PostCard from '@/components/common/PostCard';
import Header from '@/components/layout/Header';

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data.slice(0, 10)); // Show only first 10 for demo
    };

    fetchPosts();
  }, []);

  return (
    <>
      {/* <Header /> */}
      <div className="p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
            id={post.id}
          />
        ))}
      </div>
    </>
  );
};

export default PostsPage;
