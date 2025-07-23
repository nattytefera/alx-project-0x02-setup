// pages/posts.tsx

import React from 'react';
import { PostProps } from '@/interfaces';
import PostCard from '@/components/common/PostCard';
import Header from '@/components/layout/Header';

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
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

// Static generation at build time
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: PostProps[] = await res.json();

  return {
    props: {
      posts: data.slice(0, 10), // Show only first 10 for demo
    },
  };
};

export default PostsPage;
