const slidImg = document.querySelectorAll(".slider img");
const bannerImg = document.querySelector(".banner-img img");

slidImg.forEach((s) => {
	s.addEventListener("click", () => {
		if (s.src !== bannerImg.src)
			bannerImg.classList.add("out");
			setTimeout(() => {
				bannerImg.src = s.src;
			}, 200);
			setTimeout(() => {
				bannerImg.classList.remove("out");
			}, 800);
			document.body.style.setProperty("--sp-color", s.dataset.clr);
	});
});