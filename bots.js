AssistanceBOT = {
  Activate: function () {
    SendHTML("AssistanceBOT", `<p>Hello, welcome to Not Very Social Media.</p>
<b>The only social media platform where you can only chat with yourself (and a few annoying bots).</b>
<i>The best website of it's kind in the <s>18th</s> wait no I meant 21st century.</i>`);
    SendText("AssistanceBOT", `You may notice that the font (and background color) is oscillating.  This is due to the fact that I just now discovered that you can animate fonts, and I find this is rather funny.
You will soon also notice that you can't change your username.  That is because I was too lazy to make that a feature.  It is also to ensure people do not use any rude usernames.  If you REALLY need to change it, you're can to do it with the browser console.
You likely shall notice that the message controls hover above the messages.  You can read the messages that get covered by spamming a few more messages and scrolling down.
Eventually you will see that your messages do not save.  That is since if you make the mistake of closing the tab unintentionally, you deserve to feel the consequences.  It is also becuase localStorage is a pain to debug since I am working solo on this project.
You may wonder why anyone it has all these annoying features that drive users away.  The reason is because it will ensure the only users with the determination to use it often are the people loyal to the glorious principles behind how this site was designed.`)
    SendText("AssistanceBOT", `I am the AssistanceBOT.
Activate me by entering "Help" as Text.
There is also the SpammerBOT.
Activate it by entering "Spam" as Text.
More Bots Coming Soon!`);
  }
};
SpammerBOT = {
  Activate: function () {
    for (var i = 1; i < 200; i++) {
      SendText("SpammerBOT", "hahahahahahaha")
    }
  }
};
