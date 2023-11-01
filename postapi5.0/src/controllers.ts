import { Request, Response } from 'express';
const { PostServiceMongo } = require("./service/postServiceMongo");
const { PostServiceMySql } = require("./service/postServiceMysql");
import {validationResult} from 'express-validator';
import { IPostService } from './service/ipostservice';

export const useMongoDB = true; 
const postService: IPostService = useMongoDB ? new PostServiceMongo() : new PostServiceMySql();

export const createPost = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((error) => error.msg);
            return res.status(422).json({ errors: errorMessages });
        } else {
            const createdPost = await postService.createPost(req.body);
            res.json(createdPost);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: `An error occurred while creating the post.${err}`});
    }
};

export const updatePost = async (req: Request, res: Response) => {
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return res.status(422).json({ errors: errorMessages });
  } 

    try {
        const updatedPost = await postService.updatePost({
            id: req.params.id,
            title: req.body.title,
            author: req.body.author,
            content: req.body.content,
            category: req.body.category,
            subcategory: req.body.subcategory
        });
        res.status(200).json({ message: 'Post updated successfully.' , updatedPost });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred while updating the post.' });
    }
};
export const getPostById = async (req: Request, res: Response) => {
    try {
        const post = await postService.getPostById({ id: req.params.id });

        if (!post) {
            return res.status(404).json({ error: "Post not found." });
        }

        res.status(200).json(post);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred while fetching the post.' });
    }
};


export const getAllPosts = async (req: Request, res: Response) => {
    try {
        const posts = await postService.getAllPosts({
            id: '',
            title: '',
            author: '',
            content: '',
            category: '',
            subcategory: ''
        });
        res.status(200).json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred while fetching posts.' });
    }
};

export const deletePost = async (req: Request, res: Response) => {
    try {
        const deletedPost = await postService.deletePost({id : req.params.id});
        res.status(204).json({ message: 'Post deleted successfully.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred while deleting the post.' });    }
};


