const birthdayMessages = [
  {
    message: "Happy Birthday Joe!",
    name: "Brad and Holly Finer"
  },
  {
    message: "Hey hey BIG JOE.  Looks like you have a SPECIAL DAY TODAY.  So from your woodshop buddy from Escanaba Michigan Monica and I send you HAPPY BIRTHDAY WISHES and may God BLESS YOU IN A VERY SPECIAL WAY AS WELL.",
    name: "Robert Mortel"
  },
  {
    message: "Happy Birthday, Joe!",
    name: "Kevin and Mary Herzog, Owatonna Marian HS"
  },
  {
    message: "Happy Birthday Joe.  Hope you're having a wonderful day!",
    name: "Kim Ahlgren Logsdon"
  },
  {
    message: "Happy Birthday Cousin Joe!  May you have a fantastic day!  Hope to see you again sometime soon.  Love you.",
    name: "JoAnn tracy Polomis, Wausaukee WI"
  },
  {
    message: "Happy Birthday Joe!",
    name: "Sarah Tacheny (Sarah Torgerson Owatonna, class of 1976)"
  },
  {
    message: "Happy birthday - sending my greetings to you and to the whole family!",
    name: "Maria Barathe (previously Marika Hunova, exchange student from Bratislava)"
  },
  {
    message: "We enjoyed looking at your 90 year pictorial. \n\n Looks like you hit this thing called life right out of the park! \n\n Absolutely enjoy and celebrate this milestone day.  Can't wait to see you and your family again. \n\n Love smiles and toast.",
    name: "Lisa and Mike Tracy",
    email: "lisa.tracy4@gmail.com"
  },
  {
    message: "Greetings from Vernon British Columbia! Congratulations on your 90th birthday. Sadly we will not be able to see you in Sun Village this year. Howard will miss the golf and we will both miss the wonderful folks (like you and Carol) that we have met along the way. \n\n Best wishes and we do hope that we will be able to see you sometime in the future. \n\n Thinking of you on this special day.",
    name: "Howard Ross and Judy Hershman",
    email: "playsystems3@gmail.com"
  },
  {
    message: "I understand it is your birthday Joe, trust you and your family have a special time, it is my grandchild’s birthday today as well. \n\n Take care, have a fun and a memorable day with your family. \n\n Love you both.",
    name: "Donnie (Donalda) Karpiuk",
    email: "wdkarpiuk@gmail.com"
  },
  {
    message: "We wanted to send our birthday wishes to you, Joe. 🎂 It is indeed a day to be the star of the show and celebrate you !! Hope it was full of all good things and many cherished memories. \n\n Happy Birthday and many more happy returns!",
    name: "Val & Jeff Bergeman (Ethan's mom 😀 )",
    email: "vkberge@gmail.com"
  },
  {
    message: "Hi, you big wiener, \n\n A short but sweet note to offer belated 90th birthday wishes and congratulations on being 90 years young, hope it was a great day. I know Wolfie would have been there under normal circumstances and (if invited!) I would have been delighted to be there too…. however, I’m sure we’ll get to see you before your 100th! \n\n Take care, please give Carol our love, catch up soon, I hope.",
    name: "Marc Baker",
    email: "marc@visionassociates.co.uk"
  },
  {
    message: "Just wanted to wish you the happiest of birthdays. Not much is happening around here. We have been able to do a few things despite the co vid thing going. Going to the lake and enjoying the grandkids.  JP is just finishing up 2nd crop hay but most of the land he rents out to other farmers. Only have a few cows just enough for butchering and pay a few bills.  The summer here was pretty hot with lots of rain.  We have a garden that is keeping us busy now. \n\n Hope you had a great birthday and celebration.  Jill did a great job on the website, we especially enjoyed looking at the old pictures of the farm and everyone. I don’t think our girls ever saw a picture of the farm house. \n\n  If you ever get out to Wisconsin please stop by or come stay at the lake.  Love and God bless on your birthday and give our love to everyone.",
    name: "JP and Becky Tracy family",
    email: "jptjr@centurytel.net"
  },
  {
    message: "Happy Birthday even if it is a little belated. Mike Mcd said he was going to send out an email, but then I didn’t get it until I looked in my junk mail box. Lo and Behold - no, not the second coming but the email with your address so I could write you. I hope you had a good birthday. Now for sure you can call yourself BIG and OLD. It’s quite an accomplishment. Lots of years, lots of memories, lots of people who have known you. And quite a life. Congratulations on all the folks you known, the family you have raised, the houses you have chain sawed, er remodeled. Some story.\n\n Take care of yourself, Big.",
    name: "Cole Mason",
    email: "cvmason@comcast.net"
  },
  {
    message:
      "Happy Birthday, Joe. 90 years young. Amazing! But we know you had help getting there.",
    name: "Don & Marlys Overlie",
    email: "mardonove@gmail.com"
  },
  {
    message:
      "Happy birthday Joe I hope to see you guys next time your in Phoenix :)",
    name: "Christian Knuth",
    email: "christianknuth99@gmail.com"
  },
  {
    message:
      "We are wishing you the happiest of birthdays “Grandpa Joe”! \n\n We certainly were blessed to have such fun years with you and Carol during Jake and Josh’s Camas Little League days.  Those were some of the best years we’ve had visiting you in Arizona for spring training and getting to watch all those baseball games and tournaments.  (Not to mention watching umpire Joe in action too).  Thanks for all the fun and laughs over the years. We have great memories. \n\n Sending love and happy 90th birthday wishes for another great year Joe! God bless! 💕 \n\n Love, JoLynn & the rest of the Mansur’s",
    name: "JoLynn Mansur",
    email: "jjmansur@comcast.net"
  },
  {
    message:
      "Hello Joe, \n\n I see you are moving up to the 90 space in a few days. Congratulations on reaching this milestone. \n\n We all look forward to being with you in Surprise to raise a glass to the number 90. \n\n Good luck on your birthday, and, stay healthy.",
    name: "Bruce Samson",
    email: "brucesamson@hotmail.com"
  },
  {
    message:
      "Happy Birthday Joe! Just because you are 90 doesn't mean we are going feel sorry for you and just let you win. So you better keep in shape for all the family fun that is coming in the future. Plus you might be winning in our Nascar pool but the season is only half over!",
    name: "Tim Stransky",
    email: "tjstransky@charter.net"
  },
  {
    message:
      "I am Tim Stransky’s cousin, I went to visit Tim and Jill at yout residence in Vancouver this last Winter. Had the honor to see you and your wife. Hope you have a great day in celebrating your Birthday with family and friends! Enjoy your Special Day!!!!!",
    name: "Pamela Henry",
    email: "pippygrrr@hotmail.com"
  },
  {
    message:
      "Hugs \n\n Kisses \n\n and Lovely \n\n ❤️ 90th ❤️Birthday Wishes to Grandpa Joe 🥰🎂🌹 \n\n Eric, Rose, Rabby , Aaron",
    name: "Sung Family",
    email: "rose4420@gmail.com"
  },
  {
    message:
      "Big Guy, \n\n I think it was 40 years ago when you hit your 2 iron farther than I hit my driver at Tumwater Valley. We had some great times on the golf course and on the back deck having beer and brats. We all hope you enjoy your BIG DAY and keep on going strong. However you still owe me a chain for my saw that you borrowed to cut open the side of your house to move the window and the sliding door.And we still talk about the toilet in the closet for your Mom. \n\n Love you Man, Happy Birthday from all the McDonalds",
    name: "Mike, Jeanne, Molly, Meghan, Brady and Conor McDonald",
    email: "mtmcdonal@aol.com"
  },
  {
    message:
      "Happy Birthday Grandpa Joe! \n\n Thanks for being a good friend and a great example for myself, Josh, and Anna. \n\n Hope things clear up so we can all get together in AZ in the spring like usual. \n\n Hope you have a wonderful day.",
    name: "Jeff Mansur",
    email: "jeff.mansur@me.com"
  },
  {
    message:
      "Happy, happy birthday Joe! I hope you have a wonderful birthday and year-no one deserves it more!  Thank you for welcoming us into your family, your AZ home, for being a grandpa to christian and Jackson, and for taking such good care of us over the years!  Love, Kymra & The Knuth's",
    name: "Kymra Knuth",
    email: "kknuth@hoffman.com"
  },
  {
    message:
      "Happy Birthday to my dad - not everyone is lucky enough to have a dad who would: \n\n 1) Drive over 75 miles roundtrip in the winter to buy a Burger King Whopper on my 10th birthday. \n\n 2) Spend so much time with me at the horse barn when I got my horse when I turned 12 years old. \n\n 3) Attend my very first Nascar race this year when I am 62 - which included infield tickets so I could see the cars and drivers up close. \n\n Can't wait to see what adventures come up in the future! But I don't think we'll be spending my birthdays at Burger King - I have better taste in 2020!! Love you.",
    name: "Jill",
    email: "tjstransky@gmail.com"
  },
  {
    message: "Happy birthday to the best grandpa a girl could ask for!",
    name: "Beth",
    email: "wakandadr@gmail.com"
  },
  {
    message:
      "HAPPY 90TH BIRTHDAY GRANDPA JOE !! We hope you have a wonderful day filled with presents, family time and lots of gluten free cake. We wish we could see you on your special day but we will be loving you from afar and look forward to FaceTiming you instead !! Love to you always !!",
    name: "Jack and Ella",
    email: "jackjpleckinger@gmail.com"
  },
  {
    message: "Happy Birthday Joe!",
    name: "Bob Tidwell",
    email: "r3075@comcast.net"
  },
  {
    message:
      "Hey Joe - Who is that devilishly good looking guy in the high school graduation picture?  Someone must have photoshopped that for you! :)  Lots of great memories of Friday night lights with the Owatonna 'Indians', baseball at Dartts Park and Apache camping trailers.  I could always hear Joe cheering above the crowd at Indian football, basketball and baseball games.  Thanks for all the great memories !!!   Hope you have a special  90th  with your family and a lot of Zoom friends.  You still have a graceful golf swing so I know you must be scoring less than 90 on the links. \n\n Happy Birthday. \n\n P.S.Could you give Bruce a few golf lessons to get him ready for the next Stimson Cup? :)",
    name: "Craig Kinney",
    email: "kinneycem@hotmail.com"
  },
  {
    message:
      "Happy B-day Joe!!!!!!! You don't look a day older than 89 @ 11 months. Have a good day.",
    name: "Mel",
    email: "1golfme@gmail.com"
  },
  {
    message:
      "Dear Joe, \n\n A very happy birthday and congratulations from the heart for you & your people! \n\n Wonderful pictures of a wonderful life & family!! \n\n For me it was such a big pleasure to meet you and Bird's Legs in Hilton Head, and share very very nice days there with you and all the others. \n\n Take good care and enjoy your day!",
    name: "Juan R. Telleria (Spain)",
    email: "jrtelleria@servicopter.com"
  },
  {
    message: "Hi Joe, We'll toast you this winter in AZ. All the BEST",
    name: "George Littlejohn & Elaine Bamford",
    email: "glittlejohn@shaw.ca"
  },
  {
    message:
      "Happy happy happy birthday! While there are many days and birthdays in August, this one has to be my favorite. Cheers to the man who taught me how to golf and who introduced me to reading real newspapers. I love you so much and hope you have the best day on your 90th!",
    name: "Carolyn",
    email: "carolynstransky@gmail.com"
  },
  {
    message:
      "Lieber Joe, Herzlichen Glückwunsch zum 90ten Geburtstag! Ich wünsche dir viel Gesundheit, Glück und Freude für die nächsten Jahre. Ich freue mich schon auf unser nächstes Wiedersehen. Viele Grüße.",
    name: "Florian",
    email: "florian.blankenburg@web.de"
  }
];

export default birthdayMessages;
