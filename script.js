// Discord webhooks take the form https://discordapp.com/api/webhooks/ID/TOKEN
// Fill those in here
const webhook = {
  id: "{{WEBHOOK_ID}}",
  token: "{{WEBHOOK_TOKEN}}"
}

const flavorStrs = [
  "Topic \"Shadowrun\" has a new post.", 
  "Someone is posting to the Shadowland board!", 
  "An image was pinned to the Shadowrun board.", 
  "Compulsory participation requirements fulfilled.", 
  "New image uploaded", 
  "Someone very cool just uploaded a picture.", 
  "found a thing.", 
  "A new image was pinned to the Shadowrun board.", 
  "Cyberpunkage deployed", 
  "Picture deployed", 
  "UPLOAD COMPLETE. CONTINUE? (Y/n)", 
  "Paydata Secured", 
  `Spoilers for Session ${Math.floor(Math.random()*3)}`,
  "Buy NERPS"
];
const postMoreStrs = [
  "Add more pictures!",
  "Pin a new picture!",
  "Moar picture plz!",
  "Post another picture?",
  "Get more inspiration!",
  "Feed more pictures!",
  "You are now cleared to post more pictures."
]

const flavorPhrase = `${flavorStrs[Math.floor(Math.random()*flavorStrs.length)]}`;
const postMorePhrase = `${postMoreStrs[Math.floor(Math.random()*postMoreStrs.length)]}`;
const body = {
  username: "{{BOT_NAME}}",
  avatar_url: "{{AVATAR_DIRECT_LINK}}",
  content: `${flavorPhrase}\n[==${postMorePhrase}==](https://www.pinterest.com/{{BOARD}})`,
  embeds: [{
    image: {
      url: inputData.image_url
    }
  }]
}
const options = {
  method:"POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify(body)
}

const res = await fetch(`https://discordapp.com/api/webhooks/${webhook.id}/${webhook.token}`, options)

return {res};