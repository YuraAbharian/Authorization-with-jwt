 import axios from 'axios'

 const instance = axios.create({
     baseURL: 'http://localhost:3001/',
     withCredentials: true,
 });


export const LoginAPI = {
    authMe: ()=> {
        return instance.get(`me/`)
    },
    register:(login, email,password  )=>{

        return instance.post(`register/`, {login, email,password  }).then( res => res )
    },
    login:( email,password  )=>{

        return instance.post(`login/`, { email,password  })
    },
    logout: ()=>{
        return instance.get(`logout`)
    }
};


export const UserAPI = {
    getUser: (pageSize = 100, page = 1)=> {
        return instance.get(`users?page=${page}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow: (id)=>{
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })

    },
    unfollow: (id)=>{
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })

    }
};


export const ProfileAPI ={
  addPost: (post)=> {
      return instance.post(`addposts/`, {post})
          .then(response => {
              return response.data
          });
  },
  getPost: ()=>{
      return instance.get(`allposts`)
          .then(response => {
              return response.data
          });
  }
};