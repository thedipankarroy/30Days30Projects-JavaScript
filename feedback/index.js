const data = [
	{
		userimg:
			"https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg",
		name: "Elon Musk",
		jobTitle: "CEO of Tesla Motors",
		review:
			"Highly impressed by this talented web developer and open-source contributor. His innovation and dedication is outstanding. He has the potential to make a significant impact in the tech industry. Excited for his future!",
	},
	{
		userimg:
			"https://pbs.twimg.com/profile_images/1459294703/110711_r21057_p233_400x400.jpg",
		name: "Sheryl Sandberg",
		jobTitle: "COO of Facebook",
		review:
			"I am truly impressed by this exceptional web developer and open-source contributor. Their passion and commitment to their craft are remarkable. They have the potential to drive transformative change in the tech industry. I eagerly await their future achievements!",
	},
	{
		userimg:
			"https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg",
		name: "Sundar Pichai",
		jobTitle: "CEO of Google",
		review:
			"I am incredibly inspired by this brilliant web developer and open-source contributor. Their relentless pursuit of innovation and their unwavering dedication are truly extraordinary. They have the power to shape the future of the tech industry. I look forward to their remarkable accomplishments!",
	},
	{
		userimg:
			"https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg",
		name: "Satya Nadella",
		jobTitle: "CEO of Microsoft",
		review:
			"I am deeply impressed by this exceptional web developer and open-source contributor. Their creative approach and unwavering commitment set them apart. They hold immense potential to make a lasting impact in the tech industry. I eagerly anticipate their future successes!",
	},
	{
		userimg:
			"https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg",
		name: "Tim Cook",
		jobTitle: "CEO of Apple",
		review:
			"This outstanding web developer and open-source contributor truly amazes me. Their innovative mindset and relentless pursuit of excellence are truly exceptional. They have the potential to redefine the boundaries of the tech industry. I can't wait to see what they achieve next!",
	},
]

// DOM ELEMENTS
let rightKey = document.getElementById("rightKey")
let leftKey = document.getElementById("leftKey")
let surpriseKey = document.getElementById("surpriseKey")

let userName = document.getElementById("userName")
let userImage = document.getElementById("userImage")
let userReview = document.getElementById("userReview")
let userTitle = document.getElementById("userTitle")
let userNum = 0;


// EVENT LISTENERS
window.addEventListener("load", () => {
    surpriseKeyPressed();
})

document.addEventListener("click", (event) => {
	setTimeout(() => {
		event.target.matches("#rightKey")
			? rightkeyPressed()
			: event.target.matches("#leftKey")
			? leftkeyPressed()
			: event.target.matches("#surpriseKey")
			? surpriseKeyPressed()
			: null
	}, 500)
})


// // FUNCTIONS
function loadFeed() {
    userName.textContent = data[userNum].name
	userTitle.textContent = data[userNum].jobTitle
	userReview.textContent = data[userNum].review
	userImage.src = data[userNum].userimg
}

function rightkeyPressed () {
    userNum++;
    if (userNum < 4 && userNum >= 0) {
		userName.textContent = data[userNum].name
		userTitle.textContent = data[userNum].jobTitle
		userReview.textContent = data[userNum].review
		userImage.src = data[userNum].userimg
	} else {
		surpriseKeyPressed()
	}
}

function leftkeyPressed() {
	userNum--;
    if (userNum < 4 && userNum >= 0) {
		userName.textContent = data[userNum].name
		userTitle.textContent = data[userNum].jobTitle
		userReview.textContent = data[userNum].review
		userImage.src = data[userNum].userimg
	} else {
		surpriseKeyPressed()
	}
}

function surpriseKeyPressed() {
    randomNum = Math.floor(Math.random() * 5);
    while (userNum === randomNum) {
        randomNum = Math.floor(Math.random() * 5);
    }
    userNum = randomNum;
    loadFeed();
}