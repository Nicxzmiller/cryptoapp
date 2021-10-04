import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import * as url from "url";

const NewsApiHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
    'x-rapidapi-host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
}


const createNewsRequest = (url) => ({baseUrl: process.env.REACT_APP_NEWS_API_URL})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptoNews: builder.query({
            query:({newsCategory, count}) => createNewsRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;