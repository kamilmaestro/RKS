import React, { useState } from 'react';
import { db, storage } from "../../database/firebase";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const AddArticle = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const imageRef = ref(storage, `article-images/${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      await addDoc(collection(db, 'articles'), {
        title,
        content,
        imageUrl,
        createdAt: serverTimestamp(),
      });

      setTitle('');
      setContent('');
      setImage(null);
      setLoading(false);
    } catch (error) {
      console.error('Error adding document: ', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Add New Article</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          required 
        ></textarea>
        <input 
          type="file" 
          onChange={handleImageChange} 
          required 
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Add Article'}
        </button>
      </form>
    </div>
  );
};

export default AddArticle;