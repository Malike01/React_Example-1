import axios from "axios";

const getUsers = (user_id) => {
  return new Promise(async(resolve, reject) => {
    const { data:user } = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);
    resolve(user);
  });
};

const getPosts = (user_id) => {
  return new Promise(async (resolve, reject) => {
    const { data:post } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
    resolve(post);
  });
};

async function getData(user_id) {
    try {
        const getUser = await getUsers(user_id);
        const getPost = await getPosts(user_id);

       getUser.getPost=getPost;
        return getUser;

      }catch(e){
        console.log(e);
      }
}

export default getData;