"use client";
import { useState } from "react";
import { Link } from "react-router-dom";

function EventCategory() {
  const categories = [
    {
      name: "Drama", image: "/DRAMA.png", events: [
        {
          id: 1,
          title: "Swabalambi",
          day: "Day 1",
          type: "Solo",
          teamSize: "",
          fees: "150",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771947122/g0ze965expo364c8jzzp.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1771953374/xt84ckz05irmps2vfzh9.png",
          desc:
            "Step into the spotlight and let your voice echo with strength at Swabalambi, Ecstasia ’26’s powerful monologue event. This is a stage where words become weapons, emotions turn into stories, and individuality shines through performance. Participants will portray the spirit of self-reliance, courage, and inner resilience through impactful expressions and compelling storytelling. Own the stage, speak your truth, and inspire with the power of your voice.",
          regLink: "https://forms.gle/XLopp7V1QvLYz2Gp7",
        },
        {
          id: 2,
          title: "Ad Spoof",
          day: "Day 2",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771948364/hvu321ripvs5t8ilzk4r.png",
          type: "Team",
          teamSize: "1–4",
          fees: "125 solo and 250 for groups max 4 people",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1771669776/s4aib1x7x7ctsinnxi4p.png",
          desc:
            "Lights, camera, parody! Step into the world of creativity and comedy at Ad Spoof, Ecstasia ’26’s ultimate advertising spoof event. Participants will recreate popular ads with a hilarious twist, blending wit, satire, and performance to entertain the audience. From clever scripting to dramatic delivery, this is your chance to turn familiar commercials into unforgettable comedic masterpieces. Think smart, act bold, and make the crowd laugh out loud!",
          regLink: "https://docs.google.com/forms/d/e/1FAIpQLSfBko5ntf6u5VLQ6Aos_Y2wgRVek-6CHo5uShS5Py_0vtnsUw/viewform?usp=dialog",
        },
        {
          id: 3,
          title: "Pather Dabi",
          day: "Day 1",
          type: "Team",
          teamSize: "10-25",
          fees: "300",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771948859/t6ujom4esfxkundotyeq.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1771670378/zjw920d43pas6ak7cvme.png",
          desc:
            "Bring stories to life beyond the stage at Pather Dabi, Ecstasia ’26’s dynamic street play event. This is where voices rise, emotions resonate, and powerful messages reach the masses through impactful performances.",
          regLink: "https://docs.google.com/forms/d/e/1FAIpQLSfuAmFipYkl8WutAUKtSAWJ7exKP0yvcte82JXgX-LYMosZrA/viewform?usp=dialog",
        },
        {
          id: 4,
          title: "What if?",
          day: "Day 2",
          type: "Team",
          teamSize: "6+1(one extra person for handling background music)",
          fees: "300",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771949162/umgy7qddf3hbanguetog.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1771670733/l61goj4gt0hr6hmjm0wj.png",
          desc:
            "Dare to imagine the impossible at Out of the If-Box? – Out of the If Box, Ecstasia ’26’s ultimate creativity challenge. This event invites participants to think beyond limits, twist realities, and present unique ideas through innovative storytelling and performance. Whether it’s reimagining history, reshaping the future, or flipping everyday situations, this is your chance to break boundaries and let imagination lead the way. Step out of the ordinary and show the world the power of “What If.”",
          regLink: "https://docs.google.com/forms/d/e/1FAIpQLSfXHZ8pJvmkd_RW3GvKPNxaoI-aDkRthq0iDkVFkjur4D80bw/viewform?usp=dialog",
        },
        {
          id: 5,
          title: "Konthoshor",
          day: "Day 2",
          type: "Team",
          teamSize: "4+1(one extra for technical support)",
          fees: "100",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771949226/cmxcmyzfdgsidcj483en.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1771671361/hwekrg4e1hb64vb4wnhl.png",
          desc:
            "Let voices paint vivid stories at Konthoshor, Ecstasia ’26’s captivating Audio Drama Competition. This unique event challenges participants to create immersive dramatic experiences using only voice, sound effects, and creative narration. From powerful emotions to gripping storytelling, every tone, pause, and expression will bring characters and scenes to life.",
          regLink: "https://forms.gle/aEBvtEdm4vEkvv3NA",
        },
      ],
    },
    {
      name: "Art", image: "/ART.png", events: [
        {
          id: 1,
          title: "Tee Splash",
          day: "Day 1",
          type: "Solo",
          rules: 'https://res.cloudinary.com/dooekcvv0/image/upload/v1771684047/vuimuq81jyeijnrlllxh.png',
          teamSize: "",
          fees: "150",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1771685146/y0kmuv6swlqd03od26ip.png",
          desc:
            "Step into a world where fashion meets imagination at Tee Splash, the ultimate T-shirt painting experience at Ecstasia’26. Here, a simple tee becomes your canvas and creativity knows no limits. Whether you love bold graphics, aesthetic patterns, quirky quotes, or artistic splashes of color, this event gives you the freedom to design something that’s uniquely yours. No experience required — just bring your ideas and let the colors do the talking.Create it. Paint it. Wear it.Because at Ecstasia’26, style isn’t bought — it’s made.",
          regLink: "https://forms.gle/w6AqK5JgxRU2gtnw9",
        },
        {
          id: 2,
          title: "Colour De Carousel",
          day: "Day 2",
          type: "Team",
          rules: 'https://res.cloudinary.com/dooekcvv0/image/upload/v1771684111/g2r8vauiixc6tqquzkbg.png',
          teamSize: "1-2",
          fees: "200/team",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1771685500/pdncdqkmxuffiexw1sfh.png",
          desc:
            "Welcome to Colour De Carousel, where colors collide and creativity takes center stage at Ecstasia’26. This Rangoli-making event is all about transforming simple hues into breathtaking designs that capture the true spirit of festivity. Whether you’re inspired by traditional motifs or bold, contemporary patterns, this is your chance to craft a masterpiece that reflects your style and imagination. Watch ideas come alive as vibrant powders blend into stunning works of art right before your eyes.",
          regLink: "https://forms.gle/8Bey8yjYDHRTpDED7",
        },
        {
          id: 3,
          title: "Doodle Mania",
          day: "Day 2",
          type: "Solo",
          teamSize: "",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771684160/kvngnvw8pjc0krwf6pvs.png",
          fees: "150",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1771686517/jlkzigstet8dry3798mv.png",
          desc:
            "Welcome to Doodle Mania, where imagination runs free and creativity knows no boundaries at Ecstasia’26. This isn’t just a doodling event — it’s a celebration of spontaneous ideas, expressive lines, and artistic freedom.From intricate patterns to fun, chaotic sketches, every stroke on the page reflects your unique style. Whether you’re an experienced artist or someone who simply loves to scribble, Doodle Mania gives you the perfect space to experiment, express, and stand out.Let your pen wander.Let your ideas flow.Turn simple lines into striking art.At Ecstasia’26, even the smallest doodle can create the biggest impact.",
          regLink: "https://forms.gle/cR88dDPQKmosA63L9",
        },
        {
          id: 4,
          title: "Face of Art",
          day: "Day 2",
          type: "Team",
          teamSize: "2",
          fees: "100",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771684223/izfj87pdffajpqsccxs6.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1771686903/pjn2jiuvbualfpqbruzv.png",
          desc:
            "Step into the spotlight at Face of Art — the ultimate doodle face art experience at Ecstasia’26! Where faces become canvases and creativity comes alive, this event is all about transforming expressions into extraordinary works of art. From bold patterns to intricate designs, let your imagination flow and turn a simple face into a walking masterpiece.",
          regLink: "https://forms.gle/vRGzrsNC9mxE93cQ9",
        },
        {
          id: 5,
          title: "Animania",
          day: "Day ",
          type: "Solo",
          teamSize: "",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771684257/lhinpg9ytdsklu3oltnl.png",
          fees: "100",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1771687715/ptq3ylbbfvzpjtm8b3ss.png",
          desc:
            "Welcome to Animania, the ultimate celebration of motion, imagination, and storytelling at Ecstasia’26. This is where creativity comes alive — one frame at a time.From 2D and 3D animation to stop-motion and digital storytelling, Animania invites you to transform ideas into dynamic visual experiences. Craft compelling characters, build immersive worlds, and let your narrative unfold through movement and sound.Whether you’re an experienced animator or a budding creator with a bold concept, this is your chance to showcase your vision on screen and captivate the audience.Create the story.Bring it to life.Let it move the world.At Ecstasia’26, imagination doesn’t stand still — it animates.",
          regLink: "https://forms.gle/mmo6GZF8aY1Z8sbL9",
        },
        {
          id: 6,
          title: "Prompted Pixels",
          day: "Day ",
          type: "Solo",
          teamSize: "",
          fees: "Free",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771684298/o5iflbqsdmoofvkdqsvk.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1771687667/hg1conmez7phhxh8iajc.png",
          desc:
            "Welcome to Promoted Pixels, where creativity meets cutting-edge technology at Ecstasia’26. This AI Video Making event is your playground to transform ideas into visually stunning stories using the power of artificial intelligence.From cinematic concepts and futuristic edits to experimental visuals and trend-setting reels, Promoted Pixels challenges you to think beyond the lens. Craft compelling narratives, experiment with AI tools, and push the boundaries of digital storytelling like never before.",
          regLink: "https://forms.gle/Cq8iEzWy2kAdNRzJA",
        },
      ]
    },
    {
      name: "Sports", image: "/SPORTS.png", events: [
        {
          id: 1,
          title: "Blaze Bounce",
          day: "Day 1",
          type: "Team",
          teamSize: "8",
          fees: "1000/team",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771951901/td83ebgjqvb7sym7p2p0.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1771681007/ieavp71hyftljptnqmmn.png",
          desc:
            "Blaze Bounce is Ecstasia '26's flagship basketball tournament where speed meets skill and determination meets glory. This fast-paced competition demands precision shooting, tactical defense, and flawless teamwork. Whether you're driving to the basket or defending the paint, every possession matters. Experience the intensity of competitive basketball as teams battle through rounds of heart-stopping action. The spotlight is on, the crowd is roaring—will your team rise to the challenge?",
          regLink: "https://forms.gle/ZMEPW1KHgFT6HZFw7"
        },
        {
          id: 2,
          title: "Knight's Gambit ",
          day: "Day 2",
          type: "Solo",
          teamSize: "",
          fees: "150",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771951805/njffjy4dgkf2ry0hqsft.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1771681463/gw8ie0ya48ydwgpnhuka.png",
          desc:
            "Knight's Gambit at Ecstasia '26 is a premier chess championship that brings together strategic thinkers from across the region. This rapid-format tournament tests not just your knowledge of openings and endgames, but your ability to think under pressure. Each match is a psychological duel where patience meets aggression, and calculation meets intuition. From opening gambits to decisive checkmates, every game promises drama and brilliance. Register now to prove your mastery of the 64 squares!",
          regLink: "https://forms.gle/wMGBH2ow44bsirZD9",
        },
        {
          id: 3,
          title: "Smash & Dash",
          day: "Day 2",
          type: "Duet",
          teamSize: "",
          fees: "150/head",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771952093/bx44j6wldi7sw18gs5xb.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1771682273/xgtjlyarvj5sscbhaybn.png",
          desc:
            "Smash & Dash brings the intensity of competitive table tennis to Ecstasia '26. In this tournament, milliseconds matter and every point is earned through skill, strategy, and lightning-quick reactions. Players will navigate through intense matches where serves can win games and defensive blocks can become offensive weapons. From beginners to advanced players, everyone will find their match in this celebration of one of the world's fastest sports. Ready to paddle your way to victory?",
          regLink: "https://forms.gle/u8FekBUzw78fDi3f8",
        },
        {
          id: 4,
          title: "Strike Sprint",
          day: "Day 1",
          type: "Team",
          teamSize: "5 main players + 3 substitutes",
          fees: "1000",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771952740/lynvw8sbspo8gsxycmr5.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1771682635/bvmipgxgzjw9g35mkw9v.png",
          desc:
            "Strike Sprint transforms Ecstasia '26 into a futsal battleground where technical brilliance meets competitive fire. With limited space and unlimited possibilities, this tournament showcases the beautiful game in its purest form. Quick thinking, close control, and tactical awareness separate the good from the great. Teams will battle through intense matches where momentum shifts in seconds and every player must contribute defensively and offensively. Can your team master the indoor game and claim futsal supremacy?",
          regLink: "https://forms.gle/s4r7W5haBHrPzHzj7",
        },
        {
          id: 5,
          title: "Shuttle Clash ",
          day: "Day 2",
          type: "Duet",
          teamSize: "2",
          fees: "150/head",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771952888/fkdiurddijhrygeu4se8.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1771683068/yaywtukjx2fh9xlkdqed.png",
          desc:
            "Shuttle Clash is Ecstasia '26's premier badminton doubles tournament where partnerships are forged and champions are crowned. This competition showcases the strategic depth of doubles play, where positioning, communication, and trust between partners determine success. Players will engage in fast-paced rallies that demand athleticism, technique, and tactical intelligence. Whether you prefer aggressive net play or powerful baseline attacks, this tournament offers the perfect stage to showcase your badminton prowess. Rally up and register today!",
          regLink: "https://forms.gle/JExGu3sx9JhWUs2j8",
        },
        {
          id: 6,
          title: "Cue the Queen",
          day: "Day 1",
          type: "Solo",
          teamSize: "",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771953072/zpvln2pmgrk6r6df3rnx.png",
          fees: "150",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1771683609/ic6qedvhpbxwqgmfemre.png",
          desc:
            "Cue the Queen brings the strategic board game of carrom to center stage at Ecstasia '26. This tournament celebrates the precision, strategy, and mental calculation required to excel at India's beloved strike-and-pocket game. Players will need to master striker control, understand angles and rebounds, and develop winning strategies under competitive pressure. From beginners to advanced players, this competition welcomes all skill levels. Dust off your striker, calculate your angles, and get ready to cue your way to championship glory!",
          regLink: "https://forms.gle/8u7LFmrbjDB4yX5c8",
        },
        {
          id: 7,
          title: "Bicep Bash",
          day: "Day 2",
          type: "Solo",
          teamSize: "",
          fees: "129",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771953193/dpafyhoylwz5mleneq7f.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1771683808/ftkzxywvkrexh0huixim.png",
          desc:
            "Bicep Bash transforms Ecstasia '26 into an arena of strength where competitors prove their mettle through one of humanity's oldest tests of power. This arm wrestling tournament isn't just about muscle—it's about technique, leverage, and mental toughness. Competitors will face off across weight categories, ensuring fair and intense competition. Whether you rely on explosive speed, grinding endurance, or technical superiority, this tournament will push you to discover your true strength. Step up to the table and prove your power!",
          regLink: "https://docs.google.com/forms/d/e/1FAIpQLSdjXu-bvFLyC_DlVeT6eFopnkCkQ8m2nzl5I33MweDXyuJ9LA/viewform?usp=dialog",
        },
        {
          id: 8,
          title: "Tug Titans",
          day: "Day 1",
          type: "Team",
          teamSize: "5",
          fees: "500",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771953265/r36dpwhapdkgeuux21tq.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1771684676/pphabzyfpab7e5zrghr3.png",
          desc:
            "Tug Titans at Ecstasia '26 is where teamwork transcends individual strength and collective determination conquers all challenges. This tug of war tournament celebrates coordination, strategy, and the unbreakable bond between teammates. Teams will battle through intense rounds where every member's contribution matters equally. Success requires perfect synchronization, strategic weight distribution, and unwavering commitment to the team. Whether you're the anchor or the lead, your role is crucial. Form your team, develop your strategy, and prepare for war!",
          regLink: "https://forms.gle/evTNMxKHThD2KECJ9",
        }
      ]
    },
    {
      name: "Photography", image: "/PHOTOGRAPHY.png", events: [
        {
          id: 1,
          title: "Own the Frame",
          day: "Day 1",
          type: "Solo",
          teamSize: "",
          fees: "Free",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772082706/deydkolnzu5itf4wklp0.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772082214/dimgrdmvvshx31miyvuq.png",
          desc:
            "Own the Frame is Ecstasia '25's premier online self-portrait photography competition, celebrating the art of self-expression through the lens. Participants are invited to capture themselves in a single compelling photograph that tells a story beyond words. Whether it's raw emotion, bold creativity, or quiet introspection—your portrait is your voice. Submit your entry from anywhere in the world and let the world see you the way you see yourself.",
          regLink: "https://docs.google.com/forms/d/e/1FAIpQLSfjMXuw4q5aEOGG49l414gnbFtGULBxmva5zU12CqFWydaeKA/viewform?usp=dialog"
        },
        {
          id: 2,
          title: "Frame Quest",
          day: "Day 1",
          type: "Solo",
          teamSize: "",
          fees: "50",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772083278/q9tqx11u7qsyisosoual.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772083339/rbdvwd0hza5q8mlsockr.png",
          desc:
            "Frame Quest at Ecstasia '26 is a photography competition designed for those who see beauty where others walk past it. Participants are challenged to capture the extraordinary in the ordinary—composing shots that evoke emotion, spark curiosity, and showcase technical brilliance. Open to all photography enthusiasts, Frame Quest celebrates the art of perspective and the power of a perfectly timed click. Gear up, step out, and let your camera do the storytelling.",
          regLink: "https://forms.gle/DKvynZ3kmxpiRo3o6",
        },
        {
          id: 3,
          title: "Real to Reel",
          day: "Day 1",
          type: "Solo",
          teamSize: "",
          fees: "50",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772083510/c54eeani1scdj7pjgiaj.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772083544/lbkwc5ufrutwqi9xqlwb.png",
          desc:
            "Real to Reel is Ecstasia '26's online reel-making competition, built for the creators who live for the cut, the transition, and the perfect audio sync. Participants are invited to submit original reels that blend creativity, narrative, and visual flair into a short-form masterpiece. Whether you're a seasoned content creator or a first-time filmmaker, this is your stage to shine. Submit your reel online and let your creativity speak louder than words.",
          regLink: "https://docs.google.com/forms/d/e/1FAIpQLSe0clGCsfAR1VLVDeSeelEasIOVb_GQn8yCJ5Uo71ystRZ6cQ/viewform?usp=dialog",
        },
        {
          id: 4,
          title: "Dare to Dub",
          day: "Day 1",
          type: "Solo",
          teamSize: "",
          fees: "Free",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772083806/d5xjles5ot73vgdolk1v.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772083691/rdxgnhmcphfoxxdqf028.png",
          desc:
            "Dare to Dub at Ecstasia '26  is a thrilling dubbing competition that puts your vocal talent, timing, and dramatic flair to the ultimate test. Participants will be given a scene to dub, challenging them to sync emotion with expression and breathe new life into iconic dialogues. Whether you're a mimic maestro or a voice actor in the making, this is your moment to be heard. Step up to the mic and dare to make every word count.",
          regLink: "https://forms.gle/2qHKNmEbYkZ1Geho8",
        },
        {
          id: 5,
          title: "Woven Tales",
          day: "Day 1",
          type: "Team",
          teamSize: "2-4",
          fees: "200/team",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772083936/s7uvoxxp4mrscj86loto.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772083966/rcda08xz4bwefrzj3wva.png",
          desc:
            "Woven Tales is Ecstasia '26's short film competition, celebrating the magic of storytelling through cinema. Participants are invited to write, direct, and produce an original short film that captivates, challenges, and moves its audience. With no boundaries on genre and full creative freedom, Woven Tales is the platform where emerging filmmakers bring bold ideas to life. From the first frame to the final cut, this is your chance to prove that the most powerful stories are the ones you create yourself.",
          regLink: "https://forms.gle/QrKm6m2q6XrfUDpp9",
        },
        {
          id: 6,
          title: "Chase the Hue",
          day: "Day 1",
          type: "Solo",
          teamSize: "",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772085139/oharndx2jjqc5enklcjj.png",
          fees: "Free",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772085100/otgqfc5kl4bmwp7cugw1.png",
          desc:
            "Chase the Hue at Ecstasia '26 is a vibrant, fast-paced colour hunt competition that challenges participants to find, frame, and celebrate colour in the world around them. Armed with a camera and a sharp eye, competitors must track down specific hues and capture them in creative, visually stunning shots. It's part scavenger hunt, part art exhibition—and entirely exhilarating. Whether you're a seasoned photographer or a curious explorer, Chase the Hue turns the everyday world into a living, breathing canvas. Join the hunt and let colour tell your story.",
          regLink: "https://forms.gle/iyRnYXo5sjXHuBCw6",
        },
      ]
    },
    {
      name: "App Creation", image: "/APP.png", events: [
        {
          id: 1,
          title: "Gamify",
          day: "Day 1",
          type: "Solo",
          teamSize: "",
          fees: "100",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772086976/qebb2l8jwbjwzzovpglk.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772086558/yhlbsnw6xa19lsqkzrns.png",
          desc:
            "Build, play, and impress at Gamify, Ecstasia ’26’s rapid-fire game development challenge. Create a fully functional game on the spot based on a surprise theme and present your creation to the judges — where originality, fun, and smart mechanics steal the show.",
          regLink: "https://forms.gle/D73asvnw581E2EoE7",
        },
        {
          id: 2,
          title: "Appy Fizzz",
          day: "Day 1",
          type: "Solo",
          teamSize: "",
          fees: "100",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772086957/vocn5ldhmugkbufredwa.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772086786/nuey3qah1un13y21zsn4.png",
          desc:
            "Turn ideas into impact at Appy Fizzz, Ecstasia ’26’s live app-building competition. Design and develop a functional app that solves real-world problems — blending innovation, clean UI, and smart tech under pressure.",
          regLink: "https://forms.gle/WUECogVFF7ECcdZ18",
        },
        {
          id: 3,
          title: "Office Ops",
          day: "Day 1",
          type: "Solo",
          teamSize: "",
          fees: "150",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772086919/j8cjsmprvxugccfvkxkf.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772087020/xruyvyfjcrmnpakcndlb.png",
          desc:
            "Step into the world of smart business systems at Office Ops, Ecstasia 26’s live ERP/CRM dashboard challenge. Build a functional solution with authentication, data handling, and visualization to solve real business problems on the spot.",
          regLink: "https://forms.gle/SvpNmVXhwj888pbd7",
        },
        {
          id: 4,
          title: " Bot It Up",
          day: "Day 1",
          type: "Solo",
          teamSize: "",
          fees: "100",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772087317/kyegkpqfztg1ngwklrmg.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772087503/sdtlnvrfvsv8jnsoj8s2.png",
          desc:
            "Create intelligent conversations at Bot It Up, Ecstasia 26’s live chatbot development challenge. Design an AI-powered bot that handles real tasks with smart logic, smooth flow, and technical creativity",
          regLink: "https://forms.gle/9hPA5erp72cmxEsC9",
        },
        {
          id: 5,
          title: "Supply and Demand",
          day: "Day 1",
          type: "Solo",
          teamSize: "",
          fees: "100",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772087425/dp3c576azskoaifmvdmb.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772087535/pnuwf1tcjrvxhuluejqv.png",
          desc:
            "Put your analytical skills to the test at Supply and Demand, Ecstasia ’26’s logistics optimization challenge. Solve real-world case studies using math, modeling, and simulations to achieve maximum efficiency and smart outcomes.",
          regLink: "https://forms.gle/SiunWTtUr8MFqgot6",
        },
      ]
    },
    {
      name: "Business", image: "/BUSINESS.png", events: [
        {
          id: 1,
          title: "Pitch Please!",
          day: "Day 1",
          type: "Duet",
          teamSize: "",
          fees: "150",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772026626/rccuutl1aks2dxxq6aeb.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772026695/gevspvxlrso8sl8blrnj.png",
          desc:
            "Welcome to Pitch Please, the ultimate Elevator Pitch showdown at Ecstasia’26 — where bold ideas meet powerful delivery. In just a limited span of time, you’ll have the chance to present your concept with clarity, confidence, and impact. No lengthy presentations, no detailed slides — just you, your vision, and your ability to persuade. Whether it’s a startup idea, a social initiative, or a disruptive innovation, this is your moment to make every second count.",
          regLink: "https://docs.google.com/forms/d/e/1FAIpQLSeLAF3cEbM5Ml8VxuowhS-OtOZaf8_xN5Ath_hgAfjJMBQMsw/viewform?usp=dialog",
        },
        {
          id: 2,
          title: "ThinkBizz",
          day: "Day 2",
          type: "Team",
          teamSize: "2-4",
          fees: "200",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772199615/kntld4ofcddbbtlwhawr.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772027032/eeuykvma3unbphjmcvz9.png",
          desc:
            "Welcome to ThinkBizz — the ultimate Business Plan challenge at Ecstasia’26! This is where innovation meets strategy and ideas turn into impactful ventures. Present your business model, showcase your market insight, and prove why your plan deserves to lead the future. From disruptive startups to scalable solutions, ThinkBizz is your stage to think smart, plan sharp, and execute boldly.",
          regLink: "https://forms.gle/fn25XrP6gV2qbajb6",
        },
        {
          id: 3,
          title: "Trade Junction",
          day: "Day 2",
          type: "Team",
          teamSize: "2-4",
          fees: "150",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772028112/byji8pyxxf471og5l8wp.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772028053/dddrlywtsd8xazs407v7.png",
          desc:
            "Welcome to Trade Junction, the ultimate E-commerce battleground at Ecstasia’26, where strategy meets sales and ideas turn into thriving online ventures. This event challenges you to build, brand, and market your products in a competitive digital marketplace. From pricing strategies and promotional tactics to customer engagement and platform planning, every decision shapes your success.",
          regLink: "https://forms.gle/TN965LuLactvNkVh6",
        },
        {
          id: 4,
          title: " The Boardroom Trial",
          day: "Day 1",
          type: "Team",
          teamSize: "2-4",
          fees: "100",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772028450/cyxdmpwfqjdnahczyabw.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772028585/tpdhr4m7gg7ydfqaf88t.png",
          desc:
            "Welcome to The Boardroom Trial, the Business Moot Court event at Ecstasia’26, where corporate strategy meets legal intellect. Step into a simulated boardroom battle where business disputes, ethical dilemmas, and corporate conflicts take center stage. Participants will analyze case scenarios, build compelling arguments, and defend their positions with sharp reasoning and professional poise. This event tests more than just knowledge — it challenges your analytical thinking, persuasive skills, and ability to perform under pressure.",
          regLink: "https://forms.gle/MvsZTnrsKp94XuHA6",
        },
      ]
    },
    {
      name: "Dance", image: "/DANCE.png", events: [
        {
          id: 1,
          title: "Rhythmic Remix",
          day: "Day 1",
          type: "Team",
          teamSize: "5-10",
          fees: "750/Team",
          rules:"https://res.cloudinary.com/dooekcvv0/image/upload/v1772210015/j8vdxf7wt8xpbighppb1.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1771678295/yucvryxz9ustgzkzvb3v.png",
          desc:
            "Ug, and high-energy performances under dazzling lights. Step on stage, own the rhythm, and leave a legendary impact!Unleash power, passion, and precision at Rhythmic Remix, Ecstasia ’26’s electrifying group dance event. Teams of 6–12 dancers bring the theme “Power and Immortality” to life through synchronized moves, creative storytelling",
          regLink: "https://docs.google.com/forms/d/e/1FAIpQLSed-46M4vyKWKBjowT7sPdCQBAjv42tEKs2kReNFsPtMv0D0Q/viewform?usp=dialog",
        },
        {
          id: 2,
          title: "Echo Moves",
          day: "Day 1",
          type: "Duet",
          rules:"https://res.cloudinary.com/dooekcvv0/image/upload/v1772210285/zt3wc3244nkfglwznjqw.png",
          teamSize: "2",
          fees: "200",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1771678823/rn6zgx0prsgd9chftjie.png",
          desc:
            "Step into sync at Echo Moves, Ecstasia 26’s thrilling duet dance event where chemistry meets creativity. From soulful flows to high-energy beats, partners light up the stage with coordination, passion, and rhythm in this open-style showdown. Dance together. Shine together.",
          regLink: "https://docs.google.com/forms/d/e/1FAIpQLSeBHmg02pa4tZ1IHT4YYfIDCTqx4WlRMuWBHPunNxOk9z7-Hg/viewform?usp=dialog",
        },
        {
          id: 3,
          title: "Street  Combat",
          day: "Day 2",
          type: "Solo",
          teamSize: "",
          fees: "100",
          rules:"https://res.cloudinary.com/dooekcvv0/image/upload/v1772210309/ygwklah19yatojfw5jne.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1771680510/pvjpyfidsr9zjhjxmyqk.png",
          desc:
            "Feel the beat. Own the battle. Street Combat is Ecstasia ’26’s high-voltage freestyle dance showdown where dancers face off in an electrifying improv arena. With random tracks and raw talent, creativity and musicality decide who rules the floor.",
          regLink: "https://docs.google.com/forms/d/e/1FAIpQLScjOW8pthVXe72NBDcJOvqEu16vgJYTCXxuiKpDI5n0hsbiPw/viewform?usp=dialog",
        }, {
          id: 4,
          title: "नृत्यverse",
          day: "Day 2",
          type: "Solo",
          teamSize: "",
          fees: "150",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772013817/ac1u1phmjiz1abmt9trm.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772013120/zwwet0fm1phwia6ievtx.png",
          desc:
            "Step into the spotlight at नृत्यverse, Ecstasia 26’s ultimate solo dance event where individuality meets pure rhythm. Whether your soul moves to the grace of Eastern melodies or the high-energy beats of Western grooves, command the stage with your unique expression, choreography, and flair in this open-style showdown. Own the rhythm. Rule the stage.",
          regLink: "https://forms.gle/beZtmy86QzmJhrKX9",
        },]
    },
    {
      name: "Music", image: "/MUSIC.png", events: [
        {
          id: 1,
          title: "Fusion Gala",
          day: "Day 1",
          type: "Solo",
          teamSize: "",
          fees: "150",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772031031/rk1j3k08zsnaw3ylpu2u.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772031431/y6853sqctit28cnlyhui.png",
          desc:
            "At Ecstasia 2026, Fusion Gala stands as a luminous celebration of the singular voice — poised, powerful, and profoundly expressive. This solo singing spectacle invites vocalists to immerse the audience in the intricate grace of Eastern classical traditions or the soaring dynamism of Western contemporary melodies. It is a stage where sur intertwines with sentiment, where control meets creativity, and where individuality resonates in its purest form.",
          regLink: "https://docs.google.com/forms/d/e/1FAIpQLScdtpyVhKCsJil7z7kYypyBJVLGR9PiuCkgusk8GdenGH-fcQ/viewform?usp=dialog",
        },
        {
          id: 2,
          title: "Beat Battalion",
          day: "Day 1",
          type: "Team",
          teamSize: "4-6",
          fees: "800/Team",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772031787/fl5zzsh0s5k47ebcab5u.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772032004/bgsss0lmlsy8yd5aaata.png",
          desc:
            "Ecstasia 2026 ignites the stage with Beat Battalion, a thunderous convergence of rhythm, rebellion, and resonance. Here, bands do not simply perform — they proclaim their identity through electrifying harmonies and unrelenting energy. Each ensemble steps forward to carve its sonic signature into the atmosphere, competing not merely for victory but for distinction.",
          regLink: "https://docs.google.com/forms/d/e/1FAIpQLSehOaBhnLQ6Oif9vB8s1kh9ulG3ZBmVepXTlo9RPHQyM6UMng/viewform?usp=dialog",
        },
        {
          id: 3,
          title: "Sur Sangam",
          day: "Day 2",
          type: "Team",
          teamSize: "3-5",
          fees: "125/head",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772032235/ihrwbfvgq8zbssvdcse9.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772032327/rgmwslkvnqk5iza7cq5o.png",
          desc:
            "At the heart of Ecstasia 2026 lies Sur Sangam, a lyrical celebration where nostalgia intertwines with spirited rivalry. More than a game, it is a musical odyssey where memory becomes melody and every note rekindles emotion. Teams respond in harmonious succession, weaving verses into a living tapestry of rhythm and recollection.",
          regLink: "https://docs.google.com/forms/d/e/1FAIpQLSdGIxMKo-HWvQOTJoTQZbSuD788kBfJTKZnnWdJ9pw8t6eF1A/viewform?usp=dialog",
        },
        {
          id: 4,
          title: "Tar Sangam",
          day: "Day 1",
          type: "Solo/Duo/Trio",
          teamSize: "",
          fees: "200",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772032689/bwvj5joz5e0vpfjw4uxy.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772032457/thkxywxvdne5xclkecvg.png",
          desc:
            "Ecstasia 2026 unveils Tar Sangam, a sublime confluence where instruments converse in eloquent harmony. This is not merely a performance — it is dialogue without words, where strings, keys, and percussion merge into a symphony of expression. Whether through the meditative cadence of classical ragas or the vibrant pulse of contemporary compositions, artistry unfolds in its most refined form.",
          regLink: "https://forms.gle/mAoTJoNtQp6c44Jb6",
        },
        {
          id: 5,
          title: "DIGITAL DHUN",
          day: "ONLINE",
          type: "Solo",
          teamSize: "",
          fees: "Free",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772033028/ynstcql4igvyi8sdp1in.png",
          poster:
            " https://res.cloudinary.com/dooekcvv0/image/upload/v1772033273/j5mby8ammlrezlymbf7n.png",

          desc:
            "Embracing innovation while honoring artistry, Ecstasia 2026 introduces Digital Dhun, a visionary platform where technology and creativity compose in seamless harmony. In this avant-garde musical exploration, algorithms become collaborators and imagination finds new dimensions through artificial intelligence.",
          regLink: "https://forms.gle/4VjgBTt8AxgMrw5s9",
        },
      ]
    },
    {
      name: "Literary", image: "/LITERARY.png", events: [
        {
          id: 1,
          title: "Knownsense",
          day: "Day 2",
          type: "Solo/Duet",
          teamSize: "",
          fees: "50/Head",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772038312/a22trelrraw9wrkvde3x.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772038205/w40uv7qtzv6pgonjb5ri.png",
          desc:
            "At Ecstasia 2026, Knownsense emerges as an arena where intellect meets instinct and curiosity transforms into triumph. This is not merely a quiz — it is a celebration of awareness, perception, and the brilliance of an agile mind. Questions unfold like riddles of destiny, challenging participants to traverse the realms of history, science, culture, and contemporary thought with confidence and clarity.",
          regLink: "https://docs.google.com/forms/d/e/1FAIpQLScPZm9aWFkViMnyAseYggx81iViEVxSX_6-G1DRMA5CNdJTqw/viewform?usp=dialog",
        },
        {
          id: 2,
          title: "Versé à Voir",
          day: "Day 1",
          type: "Solo",
          teamSize: "",
          fees: "150",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772038512/kuncloga7fez2pieyxby.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772038548/lqkeed1z4d3d8z12ncku.png",
          desc:
            "At Ecstasia 2026, Verse a Voir becomes a sanctuary where poetry breathes and words acquire wings. This refined celebration of recitation invites participants to transform verses into vivid experiences, weaving emotion, rhythm, and resonance into every syllable uttered upon the stage.",
          regLink: "https://docs.google.com/forms/d/e/1FAIpQLSck3g-rNURbVWOXFM_g4Ro8R7dqOnhKy-4qAjS9gIVqXxyxRQ/viewform?usp=dialog",
        },
        {
          id: 3,
          title: "Tag-a-line",
          day: "Day 2",
          type: "Solo",
          teamSize: "",
          fees: "125",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772039012/xeuw9phiuyfg0qmmnnre.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772039038/kp0a85jihd3qukwdy5ss.png",
          desc:
            "Ecstasia 2026 unveils Tag-a-Line, an arena where brevity meets brilliance and a handful of words hold immeasurable power. In this celebration of creative precision, participants are challenged to distill expansive ideas into striking slogans that inspire, persuade, and resonate.",
          regLink: "https://docs.google.com/forms/d/e/1FAIpQLScaYqsUs5ij0O9lfSkCAZg80w_O_u_4PSSOO7YJ1Fjq-TkItQ/viewform?usp=dialog",
        },
        {
          id: 4,
          title: "Nexus of Notions",
          day: "Day 1",
          type: "Solo",
          teamSize: "",
          fees: "100",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772039565/hrco3esvwk61wf2iaiqm.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772039635/ts8yul9zdsuhi9j4kvyb.png",
          desc:
            "At Ecstasia 2026, Nexus of Notions stands as a grand convergence of intellect, articulation, and audacity. This debate arena invites thinkers to examine perspectives, challenge assumptions, and construct arguments with eloquence and precision.",
          regLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_YvFvkNuTIa6ZEzHsFhDtXXxHrA8k2ZewgsuGBY8LikKaXg/viewform?usp=dialog",
        },
        {
          id: 5,
          title: "BIZZQUIZ",
          day: "Day 1",
          type: "Solo/Duo",
          teamSize: "",
          fees: "50",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772039910/ftevq8rno7u1xt41mlon.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772039885/pyjdsdhds7yvw0p3o7z7.png",
          desc:
            "Ecstasia 2026 introduces BizzQuiz, a distinguished platform where commerce meets cognition and strategy meets spontaneity. This business-centric quiz challenges participants to navigate the dynamic world of markets, entrepreneurship, finance, and innovation with insight and acumen.",
          regLink: "https://docs.google.com/forms/d/e/1FAIpQLSdBbOhxfAF6-tFsu-W12iolZaOHuOpZJ40SxaSBKdHMorOjrA/viewform?usp=dialog",
        },
      ]
    },
    {
      name: "Informals", image: "/GENERAL.png", events: [
        {
          id: 1,
          title: "Fame in a Flash",
          day: "Day 2",
          type: "Solo",
          teamSize: "",
          fees: "150",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772088022/cjup1o5cvroyluqdi36k.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772088120/rm42mwm178md9udqaptd.png",
          desc:
            "Step into the spotlight and make every second count at Fame in a Flash, Ecstasia ’26’s thrilling 60-second talent showdown. Participants get just one minute to showcase their creativity, skills, and stage presence - whether through music, dance, comedy, mimicry, or any unique talent. It’s fast, fierce, and full of energy, where confidence and impact matter the most. Grab your moment, shine bright, and leave a lasting impression in just 60 seconds!",
          regLink: "https://docs.google.com/forms/d/e/1FAIpQLSeHRMo-Zo6s0B6kGC7T6heoUJA6G0z8U-ebQ54NgNjFGuT8Bw/viewform?usp=dialog",
        },
        {
          id: 2,
          title: "Comic Cadence",
          day: "Day 2",
          type: "Solo",
          teamSize: "",
          fees: "120",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772088194/zyso78vla0lpebevzbur.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772088318/ngvzl30b4bympdybcafk.png",
          desc:
            "Get ready to tickle funny bones at Comic Cadence, Ecstasia ’26’s lively Open Mic comedy event. This is the perfect stage for participants to unleash their wit, humor, and storytelling skills through stand-up, anecdotes, or comic performances. From clever punchlines to spontaneous laughter, every act promises entertainment and energy. Grab the mic, own the moment, and let your humor steal the spotlight!",
          regLink: "https://forms.gle/x7baSJ3gS3auWEuQA",
        },
        {
          id: 3,
          title: "El Dorado",
          day: "Day 1",
          type: "Team",
          teamSize: "4-7",
          fees: "120/head",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772088484/r5nvctqrw4aaea9dkltp.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772088516/udky6bgkcbtlryawl93h.png",
          desc:
            "Embark on an adventurous quest at El Dorado, Ecstasia ’26’s thrilling Treasure Hunt event. Get ready to decode clues, solve puzzles, and race against time as you navigate through exciting challenges in search of the ultimate prize. Teamwork, strategy, and quick thinking will be your greatest tools on this journey to victory. Form your crew wisely - each team must have 4–7 members to begin the hunt for glory!  Step into the adventure, follow the clues, and uncover the treasure that awaits the sharpest minds.",
          regLink: "https://docs.google.com/forms/d/e/1FAIpQLScwR_Rz2Q3KzHR1N0v-eVyAU16hapa0ZEM7P9iq2Fho1p5NKA/viewform?usp=dialog",
        },
        {
          id: 4,
          title: "Battle of Wits",
          day: "Day 2",
          type: "Solo",
          teamSize: "",
          fees: "100",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772356068/t4o5onhvzedksavzpqi2.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772373871/mcdxwomkpxxzzivmmj2p.png",
          desc:
            "Step into the spotlight at Battle of Wits, Ecstasia ’26’s fast-paced verbal duel where two participants face off in a battle of questions — and questions only. In this improvisational showdown, players must think quickly, respond instantly, and keep the flow alive without slipping into statements or hesitation. It’s a test of sharp thinking, humor, and presence of mind, where one wrong move can cost the round. Quick wit wins — do you have what it takes?",
          regLink: "https://forms.gle/TQ1VoMWNAw3vMSA19",
          
        },
        {
          id: 5,
          title: "Pieces to Purpose",
          day: "Day 1",
          type: "Solo",
          teamSize: "",
          fees: "100",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772088969/f1udglus1pkzppynggnt.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772089141/fizyiv8homp3xnjdm9gk.png",
          desc:
            "Turn waste into wonder at Pieces to Purpose, Ecstasia 26’s creative Scrap Challenge event. Participants will transform everyday scrap materials into innovative, meaningful creations using imagination, skill, and artistic vision. This event celebrates sustainability, creativity, and the power of giving new life to discarded items. Think creatively, craft passionately, and showcase how small pieces can create a big purpose.",
          regLink: "https://docs.google.com/forms/d/e/1FAIpQLSfK1gUfOyI4CZs9KHyykFRxru0Jf89t9tCr4LTP4tn1JjL7iw/viewform?usp=dialog",
        },
        {
          id: 6,
          title: "The Art of Impact",
          day: "Day 2",
          type: "Solo",
          teamSize: "",
          fees: "50",
          rules: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772088992/brvhvrucvzgjegoxogmx.png",
          poster:
            "https://res.cloudinary.com/dooekcvv0/image/upload/v1772089118/vlajs8hfnzsuq05fy3kx.png",
          desc:
            "Let your creativity speak louder than words at The Art of Impact, Ecstasia 26’s inspiring Poster Competition. This event invites participants to express powerful ideas, messages, and themes through visually striking designs and artistic innovation. With colors, concepts, and creativity as your tools, create posters that captivate minds and leave a lasting impression. Design boldly, think deeply, and make your art create an impact.",
          regLink: "https://docs.google.com/forms/d/e/1FAIpQLSfS4Ba3zfdv81uuQHsQS0qmirtpZWEuTslQiOy69OTBsQMlYQ/viewform?usp=dialog",
        },
      ]
    }
  ];

  const [selected, setSelected] = useState(categories[0]);

  return (
    <div
      className="
      min-h-screen
      bg-linear-to-br from-[#f4e9d8] via-[#ead7b5] to-[#d9c29e]
      shadow-[0_0_0_2px_rgba(74,55,40,0.45)]
      text-[#2b1d0e]
      px-4 md:px-6 py-6
    "
    >
      <div className="w-full">

        <div className="flex justify-between items-center border-b border-[#4a3728] pb-2">
          <span className="font-body text-xs uppercase tracking-[0.35em]">
            Official Fest Chronicle
          </span>

          <img
            src="/ecstasia.png"
            alt="Ecstasia"
            className="h-14 sepia contrast-150 brightness-90"
          />

          <span className="font-body text-xs uppercase tracking-[0.35em]">
            Est. Tradition
          </span>
        </div>

        <div className="text-center py-6 border-b-4 border-double border-[#4a3728]">
          <h1 className="font-heading text-5xl md:text-7xl uppercase tracking-[0.08em]">
            Exciting Events
          </h1>

          <p className="font-body mt-3 italic uppercase tracking-[0.35em] text-sm">
            Ecstasia • UEM Kolkata • 2026 Edition
          </p>

          <Link
            to="/central-registration"
            className="
    group
    inline-flex items-center gap-3
    mt-8
    px-6 py-3
    border-2 border-[#4a3728]
    bg-[#efe2c8]/70
    shadow-[4px_4px_0px_rgba(74,55,40,0.4)]
    hover:shadow-[6px_6px_0px_rgba(74,55,40,0.6)]
    transition-all duration-300
  "
          >
            {/* Pulsing Vintage Dot */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7a1c1c] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4a0f0f]"></span>
            </span>

            <span
              className="
      font-serif
      text-sm md:text-base
      uppercase
      tracking-[0.25em]
      text-[#1a140f]
      group-hover:tracking-[0.3em]
      transition-all duration-300
    "
            >
              Central Registration
            </span>
          </Link>
        </div>

        {/* CATEGORY STRIP */}
        <div className="mt-6 mb-10 border-y-4 border-double border-[#4a3728] py-4 overflow-x-auto">
          <div className="flex gap-0 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelected(cat)}
                className={`
                  relative h-28 w-48 shrink-0
                  border-r border-[#4a3728]
                  ${selected.name === cat.name
                    ? "brightness-75"
                    : "hover:brightness-90"
                  }
                  transition
                `}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover sepia"
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading text-lg uppercase tracking-widest text-[#f4e9d8]">
                    {cat.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ARTICLES */}

        <div className="max-w-5xl mx-auto space-y-20 px-4 py-12">
          {selected.events.map((event) => (
            <article
              key={event.id}
              className="
        relative
        bg-[#f2e6d0] 
        bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]
        border-t border-l border-[#4a3728]/30
        shadow-[8px_8px_0px_0px_rgba(74,55,40,1)]
        p-8
        flex flex-col md:flex-row
        gap-10
        transition-all duration-500
      "
            >
              {/* Victorian Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#4a3728]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#4a3728]" />

              {/* RIGHT COLUMN: The Portrait Plate (FIRST ON MOBILE) */}
              <div className="w-full md:w-80 shrink-0 self-start order-1 md:order-2">
                <div className="relative">
                  {/* Portrait Container - Forced 3:4 Aspect Ratio */}
                  <div
                    className="
              relative aspect-[3/4] w-full 
              border-[16px] border-white 
              shadow-[inset_0_0_40px_rgba(0,0,0,0.2),10px_10px_20px_rgba(0,0,0,0.15)]
              overflow-hidden bg-[#d9c5a3]
            "
                  >
                    {/* The Image */}
                    <img
                      src={event.poster}
                      alt={event.title}
                      className="
                w-full h-full object-cover 
                grayscale sepia contrast-[1.1] brightness-[0.9]
                mix-blend-multiply
                transition-all duration-700
                hover:grayscale-0 hover:sepia-0 
                hover:contrast-100 hover:brightness-100 
                hover:mix-blend-normal
              "
                    />

                    {/* Vintage Film Grain/Overlay */}
                    <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
                    <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.4)]" />
                  </div>
                </div>
              </div>

              {/* LEFT COLUMN: Editorial Content */}
              <div className="flex-1 flex flex-col order-2 md:order-1">
                <header className="border-b-4 border-double border-[#4a3728] pb-2 mb-6">
                  <div className="text-[10px] tracking-[0.3em] font-bold uppercase text-[#5a4330] mb-1">
                    Ecstasia • 2026 Edition
                  </div>
                  <h2 className="font-serif font-bold text-4xl sm:text-5xl tracking-tighter uppercase leading-tight text-[#1a140f] drop-shadow-sm">
                    {event.title}
                  </h2>
                  <div className="flex justify-between items-center font-body text-xs italic mt-2 text-[#4a3728] border-t border-[#4a3728]/20 pt-1">
                    <span>Issue No. {event.id || "01"}</span>
                    <span className="uppercase tracking-[.2em] font-black not-italic">
                      {event.day == "Day 1" ? "14th March" : "15th March"}
                    </span>
                  </div>
                </header>

                <div className="relative">
                  <p className="font-body text-base leading-[1.6] text-[#2b1e16] text-justify mb-8 hyphens-auto break-words">
                    <span
                      className="
                float-left text-5xl sm:text-7xl 
                font-heading mr-3 sm:mr-4 mt-2 leading-[0.7] 
                text-[#f4e9d8] bg-[#1a140f] p-3 
                shadow-[4px_4px_0px_0px_rgba(74,55,40,0.4)]
              "
                    >
                      {event.desc.charAt(0)}
                    </span>
                    {event.desc.slice(1)}
                  </p>
                </div>

                {/* The Classifieds - Data Grid */}
                <div className="mt-auto border-4 border-double border-[#4a3728] p-4 bg-[#efe2c8]/50">
                  <div className="grid grid-cols-2 gap-y-4 font-body text-[11px] uppercase tracking-wider">
                    <div className="border-r border-[#4a3728]/40 pr-2">
                      <span className="block font-black text-[#5a4330]">
                        Event Type:
                      </span>
                      <span className="text-sm font-bold">{event.type}</span>
                    </div>
                    <div className="pl-4">
                      <span className="block font-black text-[#5a4330]">Fees:</span>
                      <span className="text-sm font-bold">
                        {event.fees === 0 ? "FREE ENTRY" : `₹${event.fees}`}
                      </span>
                    </div>
                    {event.type === "Team" && (
                      <div className="col-span-2 border-t border-[#4a3728]/40 pt-2">
                        <span className="font-black text-[#5a4330]">
                          Team Size:{" "}
                        </span>
                        <span className="text-sm font-bold">
                          {event.teamSize} Persons
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 mt-10">
                  {event.rules && (
                    <a
                      href={event.rules}
                      target="_blank"
                      className="font-heading text-xs uppercase tracking-widest border-b-2 border-[#4a3728] hover:opacity-60 transition-opacity"
                    >
                      View Rules
                    </a>
                  )}

                  {event.coor && (
                    <a
                      href={event.coor}
                      target="_blank"
                      className="font-heading text-xs uppercase tracking-widest border-b-2 border-[#4a3728] hover:opacity-60 transition-opacity"
                    >
                      Coordinators
                    </a>
                  )}

                  <a
                    href={event.regLink}
                    target="_blank"
                    className="
              px-10 py-3 
              bg-[#1a140f] text-[#f4e9d8]
              font-heading text-sm uppercase tracking-[0.2em]
              hover:bg-[#4a3728]
              transition-colors duration-300
              shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]
            "
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </article>
          ))}

          {selected.events.length === 0 && (
            <div className="py-32 text-center border-4 border-double border-[#4a3728]/20">
              <p className="text-3xl font-heading text-[#4a3728]/30 uppercase tracking-[0.5em]">
                Nothing to Report
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventCategory;