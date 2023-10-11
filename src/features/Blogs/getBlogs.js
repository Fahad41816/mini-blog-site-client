import Axios from "../../utils/axios";

const getBlogs = async(Sort, filter) => {

  // http://localhost:9000/blogs?_sort=likes&_order=desc

    if(Sort !== " " && filter !== " "){
        const blogs = await Axios.get(`/blogs?_sort=${Sort}&_order=desc${filter === "saved" && "&isSaved=true"}`)
        return blogs.data
    }else{
        const blogs = await Axios.get('/blogs?')
        return blogs.data
    }

   

}

export default getBlogs;