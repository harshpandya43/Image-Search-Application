import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID 18412ae71a273ac2196b557ae68a6387f93ba2a9811b9c111f9aaf646d30dc10'                
    }
});