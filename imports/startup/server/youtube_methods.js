import { Meteor } from "meteor/meteor";
import { HTTP } from "meteor/http";


Meteor.methods({
    "search_Videos_By_Query"(searchQuery) {
        let baseUrl="https://www.googleapis.com/youtube/v3/";
        let customisedPartUrl="search?";
        let part="id,snippet";
        let key='AIzaSyAzKwsrjBPMLhX-ufV4pOO1MMNjNUEdIa0';
        let maxResults=50;
        let apiUrl=`${baseUrl}${customisedPartUrl}part=${part}&q=${searchQuery}&key=${key}&maxResults=${maxResults}`
        let res = HTTP.call("get", apiUrl);
        return res;
    },
    "get_Video_Statistics"(videoId){
        let baseUrl="https://www.googleapis.com/youtube/v3/";
        let customisedPartUrl="videos?";
        let part="id,snippet,statistics";
        let key='AIzaSyAzKwsrjBPMLhX-ufV4pOO1MMNjNUEdIa0';
        
        let apiUrl=`${baseUrl}${customisedPartUrl}part=${part}&id=${videoId}&key=${key}`
        let res = HTTP.call("get", apiUrl);
        return res;
    },
    "get_Video_Comments"(videoId){
        let baseUrl="https://www.googleapis.com/youtube/v3/";
        let customisedPartUrl="commentThreads?";
        let part="snippet,replies";
        let key='AIzaSyAzKwsrjBPMLhX-ufV4pOO1MMNjNUEdIa0';
        let maxResults=100;

        let apiUrl=`${baseUrl}${customisedPartUrl}part=${part}&videoId=${videoId}&key=${key}&maxResults=${maxResults}`
        
        let res = HTTP.call("get", apiUrl);
        return res;

    }
})