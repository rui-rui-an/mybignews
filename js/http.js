(function(window){
    let baseUrl = 'http://localhost:8080/api/v1'
    let BigNew = {
        latest : baseUrl + '/index/latest',
        hotpic: baseUrl + '/index/hotpic',
        search: baseUrl + '/index/search',
        category: baseUrl + '/index/category',
        rank: baseUrl + '/index/rank',
        latest_comment: baseUrl + '/index/latest_comment',
        article: baseUrl + '/index/article',
        post_comment: baseUrl + '/index/post_comment',
        get_comment: baseUrl + '/index/get_comment',
        attention: baseUrl + '/index/attention',
        
    }

    window.BigNew = BigNew

})(window)