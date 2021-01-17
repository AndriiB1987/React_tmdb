import axios from 'axios';
export const AXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmRiOGMxMjQ5NjgyMGViMmRkMmY2YTRhZDkxMzhiYiIsInN1YiI6IjYwMDM1ODRlYTY3MjU0MDAzZjExNjc5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SCgLiIM77m5i5ynXN9UEPJtz14RaXCBTczyBgTT8bhI'       
   }  
})