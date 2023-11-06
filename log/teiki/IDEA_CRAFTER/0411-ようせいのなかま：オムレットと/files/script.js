const main = async () => {
  const data = window.appData;
  document.title = data.title;

  Vue.component('Icon', {
    props: ["path"],
    template: `
      <svg viewBox="0 0 24 24" role="presentation">
        <path :d="path" style="fill: currentcolor;"></path>
      </svg>
    `
  })

  Vue.component('Message', {
    props: ["message"],
    template: `
      <section :class="{message: true, 'message-action': message.type != 'MESSAGE'}">
        <div class="message-inner">
          <div class="main">
            <div v-if="message.type == 'MESSAGE'" class="left">
              <img v-if="message.icon" class="character-icon" :src="'./images'+message.icon" />
              <div v-else class="character-icon no-image" />
            </div>
            <div class="right">
              <div class="recipients" v-if="targetRecipients(message.character, message.refer, message.recipients).length">
                &gt;&gt;<span class="recipient" v-for="recipient in targetRecipients(message.character, message.refer, message.recipients)" :key="recipient.id">{{recipient.name}}({{recipient.id}})</span>
              </div>
              <div class="header">
                <a class="names">
                  <span class="name">{{ message.name }}</span> <span class="character-id">{{ convertCharacterIdText(message.character) }}</span>
                </a>
                <div class="dates">
                  <span class="date">{{ dateString(correctionDate(message.postedAt)) }}</span>
                </div>
              </div>
              <div class="body" v-html="replaceMessage(message.message)"></div>
              <div class="message-details">
                <div class="message-detail" v-if="message.action">
                  <div class="message-detail-icon">
                  </div>
                  <div class="message-detail-text">
                    {{ message.action }}
                  </div>
                </div>
                <div class="message-detail">
                  <div class="message-detail-icon">
                    <Icon path="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12Z" />
                  </div>
                  <div class="message-detail-text">
                    {{ message.state }}
                  </div>
                </div>
                <div v-if="message.lock" class="message-detail">
                  <div class="message-detail-icon">
                    <Icon path="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
                  </div>
                </div>
                <div class="message-detail">
                  <div class="message-detail-icon">
                    <Icon path="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                  </div>
                  <div class="message-detail-text">
                    {{ message.area }}
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </section>
    `,
    methods: {
      targetRecipients: function (character, refer, recipients) {
        const filtered = recipients.filter(recipient => recipient.id != character);
    
        if (filtered.length) {
          return filtered;
        } else {
          if (recipients.length == 1 && recipients[0].id == character && refer == null) {
            return [];
          } else {
            return recipients;
          }
        }
      },
      correctionDate: function (dateString) {
        const date = new Date(dateString);
        date.setHours(date.getHours() - 9);
        return date;
      },
      dateString: function (date) {
        return `${date.getMonth()+1}/${date.getDate()}(${['日','月','火','水','木','金','土'][date.getDay()]}) ${("0"+date.getHours()).slice(-2)}:${("00" + (date.getMinutes())).slice(-2)}`;
      },
      convertCharacterIdText: function (characterId) {
        return '#'+characterId;
      },
      replaceMessage: function (message) {
        return message.replaceAll(/<a class="(item-link|recipe-link)" href="([^"]+?)" target="_blank">/ig, `<span class="$1">`).replaceAll('</a>', '</span>').replaceAll(/src="\/uploaded-images(\/\d+\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}.(png|gif|jpg|jpeg))"/ig, function(_, image) {
          return `src="./images${image}"`
        });
      },
      targetRecipients: function (character, refer, recipients) {
        const filtered = recipients.filter(recipient => recipient.id != character);
    
        if (filtered.length) {
          return filtered;
        } else {
          if (recipients.length == 1 && recipients[0].id == character && refer == null) {
            return [];
          } else {
            return recipients;
          }
        }
      }
    }
  })

  new Vue({
    el: '#app',
    data: function() { return data }
  });
};

main();