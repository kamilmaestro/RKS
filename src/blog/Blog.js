import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { ToDoContainer, ToDoTitle } from "../pages/ToDo/ToDo.styles";
import ColoredText from "../components/ColoredText/ColoredText";
import { collection, getDocs } from 'firebase/firestore'
import { db } from "../database/firebase";
import ArticlesList from "./ArticlesList";

const Blog = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    const getArticles = async () => {
      const articlesRef = collection(db, 'articles');
      await getDocs(articlesRef).then((data) => {
        let articlesData = data.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
        const sortedArticles = articlesData.sort((a, b) => b.createdAt - a.createdAt);
        setArticles(sortedArticles)
      }).catch((err) => {
        console.log(err);
      })
    }
      getArticles()
    }, [])

  return (
    <Layout title={'Blog'}>
      <ToDoContainer>
        <ToDoTitle>
          Najnowsze
          <ColoredText> informacje</ColoredText>
        </ToDoTitle>
        <ArticlesList articles={articles} />
      </ToDoContainer>
    </Layout>
  );
};

export default Blog;