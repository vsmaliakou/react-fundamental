import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../components/API/PostService';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchingPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  const [fetchingComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchingPostById(id);
    fetchingComments(id);
  }, [id]);

  return (
    <div>
      <h1>Вы открыли страницу поста с Id = {id}</h1>
      {isLoading
        ? <Loader />
        : <div>{post.id}. {post.title}</div>
      }
      <h1>Комментарии</h1>
      {isComLoading
        ? <Loader />
        : <div>{comments.map(comm => {
          return (
            <div key={comm.id} style={{ marginTop: '15px' }}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          );
        })}</div>
      }
    </div>
  );
};

export default PostIdPage;
