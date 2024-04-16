<!-- <template>
  <div id="messenger" class="messenger font-bold text-5xl font-Karantina uppercase"></div>
</template>
  
<script>
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.codeletters = "&#*+%?£@§$";
      this.message = 0;
      this.current_length = 0;
      this.fadeBuffer = false;
      this.messages = [
        'ur in the Nusa Vacation flight zone',
        'Plizz fasten ur seat belt',
        'Choose ur best travel package',
        'enjoy ur travel and thank u'
      ];
      setTimeout(this.animateIn, 100);
    },
    generateRandomString(length) {
      var random_text = '';
      while (random_text.length < length) {
        random_text += this.codeletters.charAt(Math.floor(Math.random() * this.codeletters.length));
      }
      return random_text;
    },
    animateIn() {
      if (this.current_length < this.messages[this.message].length) {
        this.current_length = this.current_length + 2;
        if (this.current_length > this.messages[this.message].length) {
          this.current_length = this.messages[this.message].length;
        }
        var message = this.generateRandomString(this.current_length);
        document.getElementById('messenger').innerHTML = message;
        setTimeout(this.animateIn, 10);
      } else {
        setTimeout(this.animateFadeBuffer, 20);
      }
    },
    animateFadeBuffer() {
      if (this.fadeBuffer === false) {
        this.fadeBuffer = [];
        for (var j = 0; j < this.messages[this.message].length; j++) {
          this.fadeBuffer.push({ c: (Math.floor(Math.random() * 12)) + 1, l: this.messages[this.message].charAt(j) });
        }
      }
      var do_cycles = false;
      var message = '';
      for (var k = 0; k < this.fadeBuffer.length; k++) {
        var fader = this.fadeBuffer[k];
        if (fader.c > 0) {
          do_cycles = true;
          fader.c--;
          message += this.codeletters.charAt(Math.floor(Math.random() * this.codeletters.length));
        } else {
          message += fader.l;
        }
      }
      document.getElementById('messenger').innerHTML = message;
      if (do_cycles === true) {
        setTimeout(this.animateFadeBuffer, 100);
      } else {
        setTimeout(this.cycleText, 2000);
      }
    },
    cycleText() {
      this.message = this.message + 1;
      if (this.message >= this.messages.length) {
        this.message = 0;
      }
      this.current_length = 0;
      this.fadeBuffer = false;
      document.getElementById('messenger').innerHTML = '';
      setTimeout(this.animateIn, 2000);
    }
  }
};
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karantina:wght@400;700&display=swap');

.messenger {
  position: absolute;
  font-family: 'Karantina', system-ui;
  top: 116%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
}
</style>
   -->