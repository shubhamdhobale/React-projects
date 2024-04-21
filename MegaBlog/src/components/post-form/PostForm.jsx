import {useCallback} from 'react'
import {useForm} from 'react-hook-form'
import {Button , Input , Select , RTE} from '../index';
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PostForm = () => {
  const {register , handleSubmit,  watch , setValue , control, getValues} = useForm({
    defaultValues :{
      title: "",
      content: "",
      tags : [],
      status: 'public',
      cover: ''
    }
  })

  return (
    <div>PostForm</div>
  )
}

export default PostForm