export interface PostCreatePayload {   
    id?: string;
    author?: string;
    title?: string;
    content?: string;
    category?: string;
    subcategory?: string;
  }
  
  export interface PostUpdatePayload extends PostCreatePayload {
      type?: any;
      payload?: any;
}
  
  export interface PostCreateResponse {
    posts?: any;
    id?: string;
    author?: string;
    title?: string;
    content?: string;
    category?: string;
    subcategory?: string;
  }
  
  