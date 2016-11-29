function makecard(thumb, title, channel, publish, videoid){
  return `<div class="mdl-card mdl-shadow--2dp utube" id='${videoid}'>
      <div class="mdl-card__supporting-text texttube">
          <img src="${thumb}" />
          <div class="text">
              <span class="titulo">${title}</span><br />
              <span class="canal">${channel}</span><br /><br /><br />
              <span class="pub">${publish}</span>
          </div>
      </div>
  </div>`
}

function searchvideo(query){
  $('.videos').html('')
  let apiKey = 'AIzaSyAGPzQ_KugklsczsxBzTqBwars3SsB4V2Q',
      max_videos = 10,
      url = "https://www.googleapis.com/youtube/v3/search?order=viewcount&part=snippet&q=" + escape(query) + "&type=video+&videoDefinition=high&key=" + apiKey + "&maxResults="+ max_videos

  $.getJSON(url, (json)=>{
    let obj = []
    $(json.items).each((key, item)=>{
      let date = item.snippet.publishedAt.substr(0, 10)
      let time = item.snippet.publishedAt.substr(11, 8)
      let card = makecard(item.snippet.thumbnails.default.url, item.snippet.title.substr(0, 20) + '...', item.snippet.channelTitle, date + ' ' + time, item.id.videoId)
      $('.videos').append(card)
    })
  })
}
