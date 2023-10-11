import Axios from "../../utils/axios";

const getRelatedBlog = async(tag, id) => {
    console.log(tag)
    let querystring="";
    
    querystring += tag.map(data=> `tags_like=${data}`).join("&")

    querystring += `&id_ne=${id}`
    console.log(querystring)
    const blog = await Axios.get(`/blogs?${querystring}`)
    return blog.data

}

export default getRelatedBlog;