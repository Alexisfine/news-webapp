import http from './http'

const queryNewsLatest = () => {
    return http.get('/api/news_latest')
}

const queryNewsBefore = (time) => {
    return http.get('/api/news_before', {
        params: {
            time
        }
    })
}

const queryNewsInfo = (id) => {
    return http.get('/api/news_info', {
        params: {
            id
        }
    })
} 

const queryStoryExtra = (id) => {
    return http.get('/api/story_extra', {
        params: {
            id
        }
    })
}

const api = {queryNewsLatest, queryNewsBefore, queryNewsInfo, queryStoryExtra}
export default api