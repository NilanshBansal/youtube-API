import React,{Component} from "react";
import {Meteor} from "meteor/meteor";

export default class SearchBar extends Component{
    constructor(props){
        super(props);
        this.searchVideos=this.searchVideos.bind(this);
        this.searchChange=this.searchChange.bind(this);
        this.videoIdChange=this.videoIdChange.bind(this);
        this.getVideoStats=this.getVideoStats.bind(this);
        this.videoIdCommentsChange=this.videoIdCommentsChange.bind(this);
        this.getVideoComments=this.getVideoComments.bind(this);
        this.state={search:"",videoId:"",videoIdComments:""};
    }
    searchChange(event){
        this.setState({search:event.target.value});
    }
    searchVideos(){
        console.log(this.state.search);
        Meteor.call("search_Videos_By_Query",this.state.search,(err,res)=>{
            if(err){
                throw Meteor.Error(err);
            }
            else{
                console.log("res: ",res);
            }
        })
    }

    videoIdChange(event){
        this.setState({videoId:event.target.value});
    }

    getVideoStats(){
        Meteor.call("get_Video_Statistics",this.state.videoId,(err,res)=>{
            if(err){
                throw Meteor.Error(err);
            }
            else{
                console.log(res);
            }
        })
    }
    videoIdCommentsChange(event){
        this.setState({videoIdComments:event.target.value});        
        // Meteor.call("")
    }

    getVideoComments(){
        Meteor.call("get_Video_Comments",this.state.videoIdComments,(err,res)=>{
            if(err){
                throw Meteor.Error(err);
            }
            else{
                console.log(res);
            }
        })
    }

    render(){
        return (
            <div>
        <div className="container">
            <h2>SearchBar</h2>
            <input type="text" className="form-control" onChange={this.searchChange}/>
            <button className="btn btn-primary btn-lg" onClick={this.searchVideos}>Search</button>
        </div>
        <div className="container">
            <h2>Get Video Statistics</h2>
            <input type="text" className="form-control" onChange={this.videoIdChange} />
            <button className="btn btn-warning btn-lg" onClick={this.getVideoStats}>Get Stats</button>
        </div> 
        <div className="container">
            <h2>Bring All Comments & Replies</h2>
            <input type="text" className="form-control" onChange={this.videoIdCommentsChange} />
            <button className="btn btn-success btn-lg" onClick={this.getVideoComments}>Get Stats</button>
            
        </div>       
        </div>
    )
    }
}