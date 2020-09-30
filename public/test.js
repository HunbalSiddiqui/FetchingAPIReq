const url = 'https://www.thip.media/wp-json/wp/v1/getposts?language=English&last_updated_date=2020-9-10'
// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url2 = 'https://reqres.in/api/users'
// const url3 = 'https://joke-api-strict-cors.appspot.com/random_joke'
// const url4 = 'https://cors-anywhere.herokuapp.com/https://joke-api-strict-cors.appspot.com/jokes/random'
const url5 = 'https://cors-anywhere.herokuapp.com/https://www.thip.media/wp-json/wp/v1/getposts?language=English&last_updated_date=2020-9-10'
const fetchQuestions = ()=> {
    fetch(url5)
    .then((response)=>{
        return response.json()
    })
    .then((obj)=>{
        console.log("object")
        console.log(obj)
    })
    .catch((err)=>{
        console.log(err)
    })
}

fetchQuestions()

