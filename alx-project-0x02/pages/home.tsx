import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { CardProps } from '@/interfaces';
import Header from '@/components/layout/Header';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<CardProps[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddPost = (newPost: CardProps) => {
    setPosts([...posts, newPost]);
  };

  return (
    <>
    {/* <Header /> */}

    <div className="p-6 space-y-6">
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Create Post
      </button>

      {/* Static cards */}
      <Card
        title="Welcome"
        content="This is the home page of the application."
      />
      <Card
        title="About Onebyte"
        content="We build smart maintenance and repair software for power plants."
      />
      <Card
        title="Contact Us"
        content="Reach out via email or LinkedIn for collaboration opportunities."
      />

      {/* Dynamic cards from modal */}
      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}

      {/* Modal */}
      {showModal && (
        <PostModal
          onClose={() => setShowModal(false)}
          onSubmit={handleAddPost}
        />
      )}
    </div>
    </>
  );
};

export default Home;



// import React from 'react';
// import Card from '@/components/common/Card';

// const Home: React.FC = () => {
//   return (
//     <div className="p-6 space-y-4">
//       <Card
//         title="Welcome"
//         content="This is the home page of the application."
//       />
//       <Card
//         title="About Onebyte"
//         content="We build smart maintenance and repair software for power plants."
//       />
//       <Card
//         title="Contact Us"
//         content="Reach out via email or LinkedIn for collaboration opportunities."
//       />
//     </div>
//   );
// };

// export default Home;
