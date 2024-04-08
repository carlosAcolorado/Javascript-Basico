const users = [
    { name: "ManzDev", type: "streamer", color: "indigo" },
    { name: "afor_digital", type: "streamer", color: "blue" },
    { name: "BlurSoul_", type: "moderator", color: "indigo" },
    { name: "felixicaza", type: "moderator", color: "blue" },
    { name: "pheralb", type: "moderator", color: "green" },
    { name: "omaaraguirre", type: "viewer", color: "orange" },
    { name: "LuisLlamas_es", type: "viewer", color: "orange" },
    { name: "ZeroBl", type: "viewer", color: "black" }
  ];

const usersByType = Object.groupBy(users, ({type}) => type);

console.log(usersByType);
