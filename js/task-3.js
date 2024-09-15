const profile = {
    //profil: [{username: "Jacob", playTime: 300}],
    username: "Jacob",
    playTime: 300,

    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`;
    },

    changeUsername(name) {  
        this.username = name;
        return `${this.username} has ${this.playTime} active hours!`;
    },

    updatePlayTime(time) {
        this.playTime += time;
        return `${this.username} has ${this.playTime} active hours!`;
    }


};


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
