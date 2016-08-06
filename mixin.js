var userProfile = {
  name: null,
  address: null,
  city: null,
  state: null,
  zipcode:null,
  avatar: null
}

function getProfileUpdate(profile){
  var keys = Object.keys(profile);
  return keys.reduce(function(output, key){
    console.log("Current Value for " + key + " is: " + profile.key);
    console.log("Would you like to change value for " + key + "?");
    output[key] = Math.random()*100 + "Peanuts";
    console.log("Value for " + key + " is now "  + output[key]);
    return output;
  }, {})
}

function updateProfile(changes){
  Object.assign(userProfile,changes);
}

var updates= getProfileUpdate(userProfile);
updateProfile(updates);

console.log(userProfile)
