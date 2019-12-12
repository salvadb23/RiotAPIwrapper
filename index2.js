const fetch = require("node-fetch");
const axios = require("axios");

async function getSummonerLevel(summonerName, apiKey){
    let url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`
    let res = await axios.get(url)
    return res.data.summonerLevel
}

async function getAccountId(summonerName, apiKey){
    let url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`
    let res = await axios.get(url)
    return res.data.accountId
}

async function getPuuid(summonerName, apiKey){
    let url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`
    let res = await axios.get(url)
    return res.data.puuid
}

async function getTFTData(summonerName, apiKey){
    let url = `https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/${summonerName}?api_key=${apiKey}`
    let res = await axios.get(url)
    return res.data
}

async function getMatchDataLOL(summonerId, apiKey){
    let url = `https://na1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${summonerId}?api_key=${apiKey}`
    let res = await axios.get(url)
    return res.data
}

async function getMatchDataTFT(puuid, apiKey){
    let url = `https://na1.api.riotgames.com/tft/match/v1/matches/by-puuid/${puuid}/ids?api_key=${apiKey}`
    let res = await axios.get(url)
    return res.data
}

async function getChampionRotation(apiKey){
    let url = `https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${apiKey}`
    let res = await axios.get(url)
    return res.data
}


getSummonerLevel("salvadb", "RGAPI-dae7d6bd-181a-494c-8386-7806d2ef7dcd").then((res)=> {
    console.log(res)
})

getChampionRotation( "RGAPI-dae7d6bd-181a-494c-8386-7806d2ef7dcd").then((res)=> {
    console.log(res)
})