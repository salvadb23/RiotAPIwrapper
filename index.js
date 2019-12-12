const fetch = require("node-fetch");
const axios = require("axios");

class Summoner {
    constructor(summonerName, apiKey, game){
        this.apiKey = apiKey;
        this.summonerName = summonerName
        this.summonerData = null
        this.game = game
    }

    async getData(){
        let url = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+ this.summonerName + "?api_key=" + this.apiKey
        const res = await axios.get(url)
        this.summonerData = await res.data
        return this
    }

    get summonerLevel(){
        return this.summonerData.summonerLevel
    }

    get summonerId(){
        return this.summonerData.id
    }

    get summonerAccountId(){
        return this.summonerData.accountId
    }

    get puuid(){
        return this.summonerData.puuid
    }

    get summonerProfileId(){
        return this.summonerData.profileIconId
    }

    async getMatchData(){
        if(this.game == "lol"){
            let url = `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${this.summonerAccountId}?api_key=${this.apiKey}`
            try {
                let res = await axios.get(url)
                return res.data
            } catch(err) {
                console.log(err)
            }
        } else if(this.game == "tft"){
            let url  = `https://na1.api.riotgames.com/tft/match/v1/matchlists/by-account/${this.summonerAccountId}?api_key=${this.apiKey}`
            try {
                let res = await axios.get(url)
                return res
            } catch(err){
                console.log(err)
            }
        }

    }

}

const user = new Summoner("salvadb","RGAPI-83dbf91e-09f3-4b41-a955-5235e713dfc7", "lol")

(async () => {
    await user.getData()
    console.log(await user.getMatchData())
})();



