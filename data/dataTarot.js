const dataTarot = [
    {
        name: "The Fool",
        number: "0",
        arcana: "Major Arcana",
        suit: null,
        img: require("../assets/cards/m00.jpg"),
        meaning:"He inspires courage, for he understands that every day is a chance to open up new areas in your life, and with that comes a mixture of anticipation, wonder, awe and curiosity"
      },
      {
        name: "The Magician",
        number: "1",
        arcana: "Major Arcana",
        suit: null,
        img: require("../assets/cards/m01.jpg"),
        meaning: "Remember that you are powerful, create your inner world, and the outer will follow."
      },
      {
        name: "The High Priestess",
        number: "2",
        arcana: "Major Arcana",
        suit: null,
        img: require("../assets/cards/m02.jpg"),
        meaning:"Her appearance in a reading can signify that it is time for you to listen to your intuition rather than prioritizing your intellect and conscious mind."
      },
      {
        name: "The Empress",
        number: "3",
        arcana: "Major Arcana",
        suit: null,
        img: require("../assets/cards/m03.jpg"),
        meaning:"The Empress is associated with fertility, expression, creativity and nurturing among many other aspects."
      },
      {
        name: "The Emperor",
        number: "4",
        arcana: "Major Arcana",
        suit: null,
        img: require("../assets/cards/m04.jpg"),
        meaning:"He is a symbol of the masculine principle - the paternal figure in life that gives structure, creates rules and systems, and imparts knowledge."
      },
      {
        name: "The Hierophant",
        number: "5",
        arcana: "Major Arcana",
        suit: null,
        img: require("../assets/cards/m05.jpg"),
        meaning:"The Hierophant card suggests that it’s better for you to follow social structures which are established and have their own traditions"
      },
      {
        name: "The Lovers",
        number: "6",
        arcana: "Major Arcana",
        suit: null,
        img: require("../assets/cards/m06.jpg"),
        meaning:"The trust and the unity that the lovers have gives each of them confidence and strength, empowering the other."
      },
      {
        name: "The Chariot",
        number: "7",
        arcana: "Major Arcana",
        suit: null,
        img: require("../assets/cards/m07.jpg"),
        meaning:"The Chariot shows that you should pursue the plan with a structured and ordered approach."
      },
      {
        name: "Strength",
        number: "8",
        arcana: "Major Arcana",
        suit: null,
        img: require("../assets/cards/m08.jpg"),
        meaning:"Your resilience will greatly aid you, and your fearlessness means that you should have no issues speaking your mind."
      },
      {
        name: "The Hermit",
        number: "9",
        arcana: "Major Arcana",
        suit: null,
        img: require("../assets/cards/m09.jpg"),
        meaning:"He walks through the dark night of his unconscious, guided only by the low light of the northern star, with his destination being his home, his self."
      },
      {
        name: "Wheel of Fortune",
        number: "10",
        arcana: "Major Arcana",
        suit: null,
        img: require("../assets/cards/m10.jpg"),
        meaning:"The same forces that govern the changing of the seasons, or the rising and setting of the sun is also the master of luck and the fate of individuals."
      },
      {
        name: "Justice",
        number: "11",
        arcana: "Major Arcana",
        suit: null,
        img: require("../assets/cards/m11.jpg"),
        meaning:"If you have been wronged, this card's appearance may bring you relief. On the other hand, if your actions caused pain to others, this card serves as a warning."
      },
      {
        name: "The Hanged Man",
        number: "12",
        arcana: "Major Arcana",
        suit: null,
        img: require("../assets/cards/m12.jpg"),
        meaning:"The Hanged Man card reflects a particular need to suspend certain action. As a result, this might indicate a certain period of indecision."
      },
      {
        name: "Death",
        number: "13",
        arcana: "Major Arcana",
        suit: null,
        img: require("../assets/cards/m13.jpg"),
        meaning:"The Death card signals that one major phase in your life is ending, and a new one is going to start."
      },
      {
        name: "Temperance",
        number: "14",
        arcana: "Major Arcana",
        suit: null,
        img: require("../assets/cards/m14.jpg"),
        meaning:"The Temperance tarot card suggests moderation and balance, coupled with a lot of patience."
      },
      {
        name: "The Devil",
        number: "15",
        arcana: "Major Arcana",
        suit: null,
        img: require("../assets/cards/m15.jpg"),
        meaning:"Addiction to substances or material pleasures can also be the reason for your feelings of powerlessness and entrapment."
      },
      {
        name: "The Tower",
        number: "16",
        arcana: "Major Arcana",
        suit: null,
        img: require("../assets/cards/m16.jpg"),
        meaning:"The old ways are no longer useful, and you must find another set of beliefs, values and processes to take their place."
      },
      {
        name: "The Star",
        number: "17",
        arcana: "Major Arcana",
        suit: null,
        img: require("../assets/cards/m17.jpg"),
        meaning:"To see this card is a message to have faith, for the universe will bless you and bring forth all that you need."
      },
      {
        name: "The Moon",
        number: "18",
        arcana: "Major Arcana",
        suit: null,
        img: require("../assets/cards/m18.jpg"),
        meaning:"The moon's light can bring you clarity and understanding and you should allow your intuition to guide you through this darkness. "
      },
      {
        name: "The Sun",
        number: "19",
        arcana: "Major Arcana",
        suit: null,
        img: require("../assets/cards/m19.jpg"),
        meaning:"The card shows that you have a significant sense of deserved confidence right now. "
      },
      {
        name: "Judgement",
        number: "20",
        arcana: "Major Arcana",
        suit: null,
        img: require("../assets/cards/m20.jpg"),
        meaning:"To see this card can also indicate that you are in a period of awakening, brought on by the act of self-reflection. "
      },
      {
        name: "The World",
        number: "21",
        arcana: "Major Arcana",
        suit: null,
        img: require("../assets/cards/m21.jpg"),
        meaning:"To encounter the World in your cards is to encounter a great unity and wholeness."
      },
      {
        name: "Ace of Cups",
        number: "1",
        arcana: "Minor Arcana",
        suit: "Cups",
        img: require("../assets/cards/c01.jpg"),
        meaning:"The release indicated by this card may either be spiritual or emotional, depending on what you are going through."
      },
      {
        name: "Two of Cups",
        number: "2",
        arcana: "Minor Arcana",
        suit: "Cups",
        img: require("../assets/cards/c02.jpg"),
        meaning:"A strong pair is indicated here, the joy of two becoming one."
      },
      {
        name: "Three of Cups",
        number: "3",
        arcana: "Minor Arcana",
        suit: "Cups",
        img: require("../assets/cards/c03.jpg"),
        meaning:"The Three of Cups is about spending quality time with people you cherish in your life."
      },
      {
        name: "Four of Cups",
        number: "4",
        arcana: "Minor Arcana",
        suit: "Cups",
        img: require("../assets/cards/c04.jpg"),
        meaning:"You are feeling apathetic - regardless of what happens, whether the day is good or bad, none of it matters to you."
      },
      {
        name: "Five of Cups",
        number: "5",
        arcana: "Minor Arcana",
        suit: "Cups",
        img: require("../assets/cards/c05.jpg"),
        meaning:"Instead of moving towards a more positive perspective, this card seems to say that you are dwelling in the past, inducing feelings of self-pity and regret."
      },
      {
        name: "Six of Cups",
        number: "6",
        arcana: "Minor Arcana",
        suit: "Cups",
        img: require("../assets/cards/c06.jpg"),
        meaning:"You may be seeking the comfort and warmth of people that unconditionally love you."
      },
      {
        name: "Seven of Cups",
        number: "7",
        arcana: "Minor Arcana",
        suit: "Cups",
        img: require("../assets/cards/c07.jpg"),
        meaning:"You will need to separate what is real and what is not so that you can make better choices."
      },
      {
        name: "Eight of Cups",
        number: "8",
        arcana: "Minor Arcana",
        suit: "Cups",
        img: require("../assets/cards/c08.jpg"),
        meaning:"You are coming to a realization that you must step away from what is familiar."
      },
      {
        name: "Nine of Cups",
        number: "9",
        arcana: "Minor Arcana",
        suit: "Cups",
        img: require("../assets/cards/c09.jpg"),
        meaning:"The Nine of Cups is normally associated with extreme happiness and satisfaction."
      },
      {
        name: "Ten of Cups",
        number: "10",
        arcana: "Minor Arcana",
        suit: "Cups",
        img: require("../assets/cards/c10.jpg"),
        meaning:"To see the Ten of cups is to indicate a true emotional fulfillment - one where the lonely self-satisfaction of the Nine of Cups is shared with others to create a true sense of community and family."
      },
      {
        name: "Page of Cups",
        number: "11",
        arcana: "Minor Arcana",
        suit: "Cups",
        img: require("../assets/cards/c11.jpg"),
        meaning:"It symbolizes persistence as this is the only way that you can make your dreams come true."
      },
      {
        name: "Knight of Cups",
        number: "12",
        arcana: "Minor Arcana",
        suit: "Cups",
        img: require("../assets/cards/c12.jpg"),
        meaning:"He appears as a messenger – and with him, he carries an invitation or an arrival of something or someone which will benefit you."
      },
      {
        name: "Queen of Cups",
        number: "13",
        arcana: "Minor Arcana",
        suit: "Cups",
        img: require("../assets/cards/c13.jpg"),
        meaning:"The Queen of Cups can also represent the trusted inner voice you have within you."
      },
      {
        name: "King of Cups",
        number: "14",
        arcana: "Minor Arcana",
        suit: "Cups",
        img: require("../assets/cards/c14.jpg"),
        meaning:"The King of Cups represents a balance between the intellect and emotions. He indicates that there is a strong relationship between understanding and feeling."
      },
      {
        name: "Ace of Swords",
        number: "1",
        arcana: "Minor Arcana",
        suit: "Swords",
        img: require("../assets/cards/s01.jpg"),
        meaning:"The Ace of Swords indicates that one is about to experience a moment of breakthrough."
      },
      {
        name: "Two of Swords",
        number: "2",
        arcana: "Minor Arcana",
        suit: "Swords",
        img: require("../assets/cards/s02.jpg"),
        meaning:"We find ourselves in a situation where we must make a choice...Neither seems particularly appealing."
      },
      {
        name: "Three of Swords",
        number: "3",
        arcana: "Minor Arcana",
        suit: "Swords",
        img: require("../assets/cards/s03.jpg"),
        meaning:"Sometimes life gives us no choice - we are knocked down. But what determines one's future is the choice of whether to remain down, or rise again."
      },
      {
        name: "Four of Swords",
        number: "4",
        arcana: "Minor Arcana",
        suit: "Swords",
        img: require("../assets/cards/s04.jpg"),
        meaning:"The Four of Swords is a moment of rest. Whether this is from a choice to withdraw, or whether it is from pure exhaustion, it is not clear."
      },
      {
        name: "Five of Swords",
        number: "5",
        arcana: "Minor Arcana",
        suit: "Swords",
        img: require("../assets/cards/s05.jpg"),
        meaning:"What is more important to you? Mutual progress, or winning?"
      },
      {
        name: "Six of Swords",
        number: "6",
        arcana: "Minor Arcana",
        suit: "Swords",
        img: require("../assets/cards/s06.jpg"),
        meaning:"Despite your sadness, you need to remember that moving on is the ideal option for your future."
      },
      {
        name: "Seven of Swords",
        number: "7",
        arcana: "Minor Arcana",
        suit: "Swords",
        img: require("../assets/cards/s07.jpg"),
        meaning:"There are instances when we are forced to be sneaky, hoping that we will not be discovered. When we are found out, we have to face the consequences."
      },
      {
        name: "Eight of Swords",
        number: "8",
        arcana: "Minor Arcana",
        suit: "Swords",
        img: require("../assets/cards/s08.jpg"),
        meaning:"Surrendering one’s power to an unknown entity, whether it's fate, or God, the government or something else means that you are giving away your own personal responsibility to affect change."
      },
      {
        name: "Nine of Swords",
        number: "9",
        arcana: "Minor Arcana",
        suit: "Swords",
        img: require("../assets/cards/s09.jpg"),
        meaning:"Sometimes this card can be associated with trauma - one which may be shameful for you to confide with others about."
      },
      {
        name: "Ten of Swords",
        number: "10",
        arcana: "Minor Arcana",
        suit: "Swords",
        img: require("../assets/cards/s10.jpg"),
        meaning:"The story as it unfolds from the ace to the ten is one where an untrained individual uses this weapon for faulty reasons - makes many mistakes, and then spends an entire lifetime attempting to run away from the power that he misused."
      },
      {
        name: "Page of Swords",
        number: "11",
        arcana: "Minor Arcana",
        suit: "Swords",
        img: require("../assets/cards/s11.jpg"),
        meaning: "Her aptitude for language also makes her an incredible communicator, and with her love of ideas, you may find her always engaged in some passionate debate."
      },
      {
        name: "Knight of Swords",
        number: "12",
        arcana: "Minor Arcana",
        suit: "Swords",
        img: require("../assets/cards/s12.jpg"),
        meaning: "Once the knight sets forth towards his goals, there is absolutely no stopping him. He doesn’t see - and he doesn’t care - about any upcoming challenges. "
      },
      {
        name: "Queen of Swords",
        number: "13",
        arcana: "Minor Arcana",
        suit: "Swords",
        img: require("../assets/cards/s13.jpg"),
        meaning:"This card represents the importance of making judgments without relying on emotion alone. The Queen of Swords beckons you to look at all the facts before making a decision."
      },
      {
        name: "King of Swords",
        number: "14",
        arcana: "Minor Arcana",
        suit: "Swords",
        img: require("../assets/cards/s14.jpg"),
        meaning:"Because he rules over the suit of swords, he has a special connection to rules, laws, and diplomacy, which are systems of logical thought applied and manifest on earth."
      },
      {
        name: "Ace of Wands",
        number: "1",
        arcana: "Minor Arcana",
        suit: "Wands",
        img: require("../assets/cards/w01.jpg"),
        meaning:"The Ace of Wands calls out to you to follow your instincts. If you think that the project that you've been dreaming of is a good idea, and then just go ahead and do it. "
      },
      {
        name: "Two of Wands",
        number: "2",
        arcana: "Minor Arcana",
        suit: "Wands",
        img: require("../assets/cards/w02.jpg"),
        meaning:"The Two of Wands is a more mature version of the ace of wands, meaning that that this tarot card is all about planning and moving forward – progression."
      },
      {
        name: "Three of Wands",
        number: "3",
        arcana: "Minor Arcana",
        suit: "Wands",
        img: require("../assets/cards/w03.jpg"),
        meaning:"The Three of Wands hints that you are creating a stable foundation for yourself."
      },
      {
        name: "Four of Wands",
        number: "4",
        arcana: "Minor Arcana",
        suit: "Wands",
        img: require("../assets/cards/w04.jpg"),
        meaning:"Oftentimes the card is known to reflect a period of holidays when you are together with your friends and family for an extended period of time."
      },
      {
        name: "Five of Wands",
        number: "5",
        arcana: "Minor Arcana",
        suit: "Wands",
        img: require("../assets/cards/w05.jpg"),
        meaning:"This tarot card encourages that you accept the competition as a way for you to improve yourself without feeling any malice towards them."
      },
      {
        name: "Six of Wands",
        number: "6",
        arcana: "Minor Arcana",
        suit: "Wands",
        img: require("../assets/cards/w06.jpg"),
        meaning:"The card is indicative that you have managed to harness the strengths and talents that you have within you in an attempt to bring a particularly successful outcome in your life."
      },
      {
        name: "Seven of Wands",
        number: "7",
        arcana: "Minor Arcana",
        suit: "Wands",
        img: require("../assets/cards/w07.jpg"),
        meaning:"The overall meaning of the Seven of Wands is to hold your ground, no matter what is challenging your position."
      },
      {
        name: "Eight of Wands",
        number: "8",
        arcana: "Minor Arcana",
        suit: "Wands",
        img: require("../assets/cards/w08.jpg"),
        meaning:"Perhaps important news will be coming on your way, and you may experience a sudden, yet steady positive growth."
      },
      {
        name: "Nine of Wands",
        number: "9",
        arcana: "Minor Arcana",
        suit: "Wands",
        img: require("../assets/cards/w09.jpg"),
        meaning:"The Nine of Wands symbolizes a life of someone who has undergone many trials, but through determination and will, they were able to overcome them."
      },
      {
        name: "Ten of Wands",
        number: "10",
        arcana: "Minor Arcana",
        suit: "Wands",
        img: require("../assets/cards/w10.jpg"),
        meaning:"Although it sounds marvelous and satisfying, the card depicts a lot of responsibilities on your side."
      },
      {
        name: "Page of Wands",
        number: "11",
        arcana: "Minor Arcana",
        suit: "Wands",
        img: require("../assets/cards/w11.jpg"),
        meaning:"When you get the Page of Wands, it simply means something is within you, something that triggers you to make discoveries, indulge in investments or take the next advancement in life."
      },
      {
        name: "Knight of Wands",
        number: "12",
        arcana: "Minor Arcana",
        suit: "Wands",
        img: require("../assets/cards/w12.jpg"),
        meaning:"If you are starting a creative project, then you should do so with lots of energy and enthusiasm."
      },
      {
        name: "Queen of Wands",
        number: "13",
        arcana: "Minor Arcana",
        suit: "Wands",
        img: require("../assets/cards/w13.jpg"),
        meaning:"The Queen of Wands has a positive and an uplifting energy; they represent someone who is willing to be by your side and stand up for you. "
      },
      {
        name: "King of Wands",
        number: "14",
        arcana: "Minor Arcana",
        suit: "Wands",
        img: require("../assets/cards/w14.jpg"),
        meaning:"The King of Wands is a natural born leader of people, and he is also extremely capable."
      },
      {
        name: "Ace of Pentacles",
        number: "1",
        arcana: "Minor Arcana",
        suit: "Pentacles",
        img: require("../assets/cards/p01.jpg"),
        meaning:"Watering this seed has the potential to be very rewarding - for anything that is grown on this energy is meant to be stable, secure and give a good yield."
      },
      {
        name: "Two of Pentacles",
        number: "2",
        arcana: "Minor Arcana",
        suit: "Pentacles",
        img: require("../assets/cards/p02.jpg"),
        meaning:"For those that may have more coins to go around, they can afford to be less careful, but at this moment things may be tight."
      },
      {
        name: "Three of Pentacles",
        number: "3",
        arcana: "Minor Arcana",
        suit: "Pentacles",
        img: require("../assets/cards/p03.jpg"),
        meaning:"Successful projects usually require different kinds of expertise, and at this moment, the Three of Pentacles means that all the skills required are coming together."
      },
      {
        name: "Four of Pentacles",
        number: "4",
        arcana: "Minor Arcana",
        suit: "Pentacles",
        img: require("../assets/cards/p04.jpg"),
        meaning:"There is a chance to turn you into an overly possessive or greedy person who wants to ensure that no one is capable of taking away your own wealth. "
      },
      {
        name: "Five of Pentacles",
        number: "5",
        arcana: "Minor Arcana",
        suit: "Pentacles",
        img: require("../assets/cards/p05.jpg"),
        meaning:"There is a chance that you will lose something significant, whether it is financial wealth or an important item."
      },
      {
        name: "Six of Pentacles",
        number: "6",
        arcana: "Minor Arcana",
        suit: "Pentacles",
        img: require("../assets/cards/p06.jpg"),
        meaning:"As you can tell from the imagery in the card, the Six of Pentacles can be about charity. You can either be the man giving away money to the needy, or a beggar gratefully receiving what you need from wealthy donor."
      },
      {
        name: "Seven of Pentacles",
        number: "7",
        arcana: "Minor Arcana",
        suit: "Pentacles",
        img: require("../assets/cards/p07.jpg"),
        meaning:"It reaffirms you of your long-term vision and helps to show that you are not confined to seeing results in the short term only."
      },
      {
        name: "Eight of Pentacles",
        number: "8",
        arcana: "Minor Arcana",
        suit: "Pentacles",
        img: require("../assets/cards/p08.jpg"),
        meaning:"The Eight of Pentacles refers to the efforts that you undertake. There is a possibility that there will be a lot of things that you need to address."
      },
      {
        name: "Nine of Pentacles",
        number: "9",
        arcana: "Minor Arcana",
        suit: "Pentacles",
        img: require("../assets/cards/p09.jpg"),
        meaning: "The Nine of Pentacles conveys not only joy, but also the feeling of security and freedom that material wealth can bring."
      },
      {
        name: "Ten of Pentacles",
        number: "10",
        arcana: "Minor Arcana",
        suit: "Pentacles",
        img: require("../assets/cards/p10.jpg"),
        meaning:"Your legacy is sure to stand for quite a long time to come."
      },
      {
        name: "Page of Pentacles",
        number: "11",
        arcana: "Minor Arcana",
        suit: "Pentacles",
        img: require("../assets/cards/p11.jpg"),
        meaning:"Guided by the pentacles, she is deeply tied to the earth, nature, and all of its gifts. She cherishes the body, for it too is something which is a manifestation of her element."
      },
      {
        name: "Knight of Pentacles",
        number: "12",
        arcana: "Minor Arcana",
        suit: "Pentacles",
        img: require("../assets/cards/p12.jpg"),
        meaning:"This knight has the patience to accomplish all his given duties and is considered by others reliable and committed to his work."
      },
      {
        name: "Queen of Pentacles",
        number: "13",
        arcana: "Minor Arcana",
        suit: "Pentacles",
        img: require("../assets/cards/p13.jpg"),
        meaning:"But do not mistake her for being only a homebody - alongside all these motherly attributes, she can plan business ventures and execute her plans successfully."
      },
      {
        name: "King of Pentacles",
        number: "14",
        arcana: "Minor Arcana",
        suit: "Pentacles",
        img: require("../assets/cards/p14.jpg"),
        meaning:"He is a provider and a protector, for under his care is a flourishing and abundant kingdom where its citizens are prosperous and encouraged to grow."
      }
]

export default dataTarot