import { Project } from "@/lib/interfaces/Project.interface";

export default <Project>{
	id: "bullet-time",
	title: "Bullet Time",
	summary:
		"A university-funded project to recreate the bullet time effect from the Matrix.",
	contributors: ["ob", "jm", "ck", "po"],
	technologies: ["Websockets", "Python", "Frame Generation", "React", "S3"],
	github: "https://www.github.com/LJMU-SE/bullet-time",
	repoName: "LJMU-SE/bullet-time",
	image: "https://www.syfy.com/sites/syfy/files/styles/scale_1280/public/2021/03/the-matrix.jpeg",
	date: new Date("2023-09-01"),
};
