import Axios from "../../utils/axios";

const getBlog = async(id) => {

    const blog = await Axios.get(`/blogs/${id}`)
    return blog.data

}

export default getBlog;