// argument vector : 샘플 데이터를 코드로 입력하여 저장
const userArgs = process.argv.slice(2);

if(!userArgs[0].startsWith('mongodb')){
    console.log('Error : You need to specify a valid mongodb URL as the first argument')
    return;
}

// populate 파일에 필요한 패키지 가져오기
const mongoose = require("mongoose");
const mongoDB = userArgs[0];
const {User, Article, Follow} = require("./models/model");
const crypto = require("crypto");
const fs = require("fs");

// user 생성하는 함수
async function createUser(username, email, password = '123'){}

// 게시물 생성하는 함수
async function createArticle(username, postId){}

// 팔로우 생성하는 함수
async function createFollow(follower, following){}

// 위의 함수를 호출하는 함수
async function createData(){}
