import React from "react";
import Layout from "../components/Layout/Layout";
import { ToDoContainer, ToDoTitle } from "../pages/ToDo/ToDo.styles";
import ContentRenderer from "./ContentRenderer";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../database/firebase";

const Article = () => {

  const { id } = useParams();

  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const docRef = doc(db, 'articles', id);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          setArticle({ id: docSnapshot.id, ...docSnapshot.data() });
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [id]);

  const getTitle = (title) => {
    const words = title.split(' ');
    const last = words[words.length - 1];
    const wordsWithoutLast = words.slice(0, -1).join(' ');

    return (
      <ToDoTitle style={{display: 'flex', justifyContent: 'center', fontFamily: 'Roboto'}}>
        <p style={{textAlign: 'center'}}>
          <span>{wordsWithoutLast}</span>{" "}
          <span style={{ color: "#8F0406" }}>{last}</span>
        </p>
      </ToDoTitle>
    )
  }

  return (
    <Layout title={'Blog'}>
      <ToDoContainer>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
          <img
            src={article ? article.imageUrl : ''}
            alt="Zdjęcie drużyny piłkarskiej"
            style={{maxWidth: '700px', maxHeight: '600px', height: 'auto', width: '100%'}}
          />
        </div>
        <div style={{width: '95%', marginBottom: 150, maxWidth: '1200px'}}>
          {article && getTitle(article.title)}
          { article && <ContentRenderer article={article} /> }
        </div>
      </ToDoContainer>
    </Layout>
  );
};

export default Article;