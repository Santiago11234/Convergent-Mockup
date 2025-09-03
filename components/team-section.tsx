"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search, Mail, Linkedin, Github, Users } from "lucide-react";
import { useState } from "react";

const officers = [
	{
		name: "Saif Kader",
		primaryRole: "President",
		secondaryRole: "",
		image: "/santi1.png",
		bio: "I hope my face being every image isn't creepy...",
		skills: ["skills", "here", "#soCool"],
		email: "email@my.utexas.edu",
		linkedin: "https://www.linkedin.com/in/santiago-espinoza-blunda/",
		github: "https://github.com/Santiago11234",
		year: "Freshman",
		major: "Computer Science",
		experience: "member of Convergent",
		interests: ["being", "in", "Convergent"],
	},
  {
		name: "Hannah Chu ",
		primaryRole: "Vice President",
		secondaryRole: "",
		image: "/santi1.png",
		bio: "heres my cool bio",
		skills: ["being in convergent"],
		email: "email@my.utexas.edu",
		linkedin: "https://www.linkedin.com/in/santiago-espinoza-blunda/",
		github: "https://github.com/Santiago11234",
		year: "Freshman",
		major: "Computer Science",
		experience: "member of Convergent",
		interests: ["being", "in", "Convergent"],
	},
  {
		name: "Kathir Seralaathan",
		primaryRole: "Build Director",
		secondaryRole: "",
		image: "/santi1.png",
		bio: "heres my cool bio",
		skills: ["being in convergent"],
		email: "email@my.utexas.edu",
		linkedin: "https://www.linkedin.com/in/santiago-espinoza-blunda/",
		github: "https://github.com/Santiago11234",
		year: "Freshman",
		major: "Computer Science",
		experience: "member of Convergent",
		interests: ["being", "in", "Convergent"],
	},
  {
		name: "Gauri Pala",
		primaryRole: "Forge Director",
		secondaryRole: "",
		image: "/santi1.png",
		bio: "heres my cool bio",
		skills: ["being in convergent"],
		email: "email@my.utexas.edu",
		linkedin: "https://www.linkedin.com/in/santiago-espinoza-blunda/",
		github: "https://github.com/Santiago11234",
		year: "Freshman",
		major: "Computer Science",
		experience: "member of Convergent",
		interests: ["being", "in", "Convergent"],
	},
  {
		name: "Sana Kholi",
		primaryRole: "Forge Director",
		secondaryRole: "",
		image: "/santi1.png",
		bio: "heres my cool bio",
		skills: ["being in convergent"],
		email: "email@my.utexas.edu",
		linkedin: "https://www.linkedin.com/in/santiago-espinoza-blunda/",
		github: "https://github.com/Santiago11234",
		year: "Freshman",
		major: "Computer Science",
		experience: "member of Convergent",
		interests: ["being", "in", "Convergent"],
	},
  {
		name: "Shreya Suratran",
		primaryRole: "Partnerships Chair",
		secondaryRole: "",
		image: "/santi1.png",
		bio: "heres my cool bio",
		skills: ["being in convergent"],
		email: "email@my.utexas.edu",
		linkedin: "https://www.linkedin.com/in/santiago-espinoza-blunda/",
		github: "https://github.com/Santiago11234",
		year: "Freshman",
		major: "Computer Science",
		experience: "member of Convergent",
		interests: ["being", "in", "Convergent"],
	},
  {
		name: "Imelda Ishiekwene",
		primaryRole: "Design Chair",
		secondaryRole: "",
		image: "/santi1.png",
		bio: "Skipped a few because I got tired of copy paste and wanted examples of multi-position officers",
		skills: ["being in convergent"],
		email: "email@my.utexas.edu",
		linkedin: "https://www.linkedin.com/in/santiago-espinoza-blunda/",
		github: "https://github.com/Santiago11234",
		year: "Freshman",
		major: "Computer Science",
		experience: "member of Convergent",
		interests: ["being", "in", "Convergent"],
	},
  {
		name: "Anish Kalra",
		primaryRole: "Engineering Chair",
		secondaryRole: "Build Team Lead",
		image: "/santi1.png",
		bio: "Skipped a few because I got tired of copy paste and wanted examples of multi-position officers",
		skills: ["being in convergent"],
		email: "email@my.utexas.edu",
		linkedin: "https://www.linkedin.com/in/santiago-espinoza-blunda/",
		github: "https://github.com/Santiago11234",
		year: "Freshman",
		major: "Computer Science",
		experience: "member of Convergent",
		interests: ["being", "in", "Convergent"],
	},
];

const members = [
	{ name: "Santiago Espinoza", role: "Engineer", team: "Build and Forge Member", year: "Freshman", major: "Computer Science" },
  { name: "Santiago Espinoza", role: "Engineer", team: "Build and Forge Member", year: "Freshman", major: "Computer Science" },
  { name: "Santiago Espinoza", role: "Engineer", team: "Build and Forge Member", year: "Freshman", major: "Computer Science" },
  { name: "Santiago Espinoza", role: "Engineer", team: "Build and Forge Member", year: "Freshman", major: "Computer Science" },
  { name: "Santiago Espinoza", role: "Engineer", team: "Build and Forge Member", year: "Freshman", major: "Computer Science" },
  { name: "Santiago Espinoza", role: "Engineer", team: "Build and Forge Member", year: "Freshman", major: "Computer Science" },
  { name: "Santiago Espinoza", role: "Engineer", team: "Build and Forge Member", year: "Freshman", major: "Computer Science" },
  { name: "Santiago Espinoza", role: "Engineer", team: "Build and Forge Member", year: "Freshman", major: "Computer Science" },

];

export function TeamSection({ isFullPage = false }: { isFullPage?: boolean }) {
	const [searchTerm, setSearchTerm] = useState("");
	const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

	const filteredOfficers = officers.filter((officer) => officer.name.toLowerCase().includes(searchTerm.toLowerCase()) || officer.primaryRole.toLowerCase().includes(searchTerm.toLowerCase()) || officer.secondaryRole.toLowerCase().includes(searchTerm.toLowerCase()) || officer.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase())));

	const filteredMembers = members.filter((member) => member.name.toLowerCase().includes(searchTerm.toLowerCase()) || member.role.toLowerCase().includes(searchTerm.toLowerCase()) || member.team.toLowerCase().includes(searchTerm.toLowerCase()) || member.major.toLowerCase().includes(searchTerm.toLowerCase()));

	const toggleCard = (name: string) => {
		setFlippedCards((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(name)) {
				newSet.delete(name);
			} else {
				newSet.add(name);
			}
			return newSet;
		});
	};

	return (
		<section className={isFullPage ? "py-20" : "py-24"}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
					<h2 className={`font-serif font-bold mb-4 ${isFullPage ? "text-4xl md:text-6xl gradient-text" : "text-3xl sm:text-4xl"}`}>
						{isFullPage ? (
							"Meet Our Officers"
						) : (
							<>
								Meet Our <span className="gradient-text">Leadership</span>
							</>
						)}
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">{isFullPage ? "The passionate individuals driving innovation at the intersection of business and technology" : "The passionate individuals driving innovation at Texas Convergent"}</p>

					{isFullPage && (
						<div className="relative max-w-md mx-auto">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
							<Input placeholder="Search by name or position..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
						</div>
					)}
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
					{filteredOfficers.map((officer, index) => (
						<motion.div key={officer.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="perspective-1000">
							<div className={`relative w-full h-80 cursor-pointer transition-transform duration-700 transform-style-preserve-3d ${flippedCards.has(officer.name) ? "rotate-y-180" : ""}`} onClick={() => toggleCard(officer.name)}>
								<Card className="absolute inset-0 w-full h-full backface-hidden border-2 border-border/20 overflow-hidden">
									<CardContent className="p-6 text-center h-full flex flex-col justify-between">
										<div className="flex flex-col items-center mt-2">
											<Avatar className="w-20 h-20 mx-auto ring-2 ring-border/20 mb-3">
												<AvatarImage src={officer.image } alt={officer.name} />
												<AvatarFallback className="text-lg font-semibold bg-gradient-to-r from-primary to-secondary text-white">
													{officer.name
														.split(" ")
														.map((n) => n[0])
														.join("")}
												</AvatarFallback>
											</Avatar>

											<h3 className="text-lg font-serif font-bold mb-2">{officer.name}</h3>

											<div className="mb-3 space-y-1">
												<p className="text-primary font-medium text-sm">{officer.primaryRole}</p>
												<p className="text-xs text-muted-foreground">{officer.secondaryRole}</p>
											</div>

											<p className="text-xs text-muted-foreground mb-3 line-clamp-2">{officer.bio}</p>
										</div>

										<div className="flex flex-col items-center">
											<div className="flex flex-wrap gap-1 justify-center mb-3">
												{officer.skills.map((skill) => (
													<Badge key={skill} variant="secondary" className="text-xs">
														{skill}
													</Badge>
												))}
											</div>

											<p className="text-xs text-muted-foreground">Click to flip</p>
										</div>
									</CardContent>
								</Card>

								<Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
									<CardContent className="p-6 h-full flex flex-col justify-between text-sm">
										<div className="space-y-4">
											<div className="flex items-center justify-between">
												<h3 className="text-lg font-bold">{officer.name}</h3>
												<Badge variant="outline" className="text-xs">
													{officer.year}
												</Badge>
											</div>

											<div className="space-y-3">
												<div>
													<p className="font-medium text-primary mb-1">Major</p>
													<p className="text-xs">{officer.major}</p>
												</div>

												<div>
													<p className="font-medium text-primary mb-1">Experience</p>
													<p className="text-xs leading-relaxed">{officer.experience}</p>
												</div>

												<div>
													<p className="font-medium text-primary mb-1">Interests</p>
													<div className="flex flex-wrap gap-1">
														{officer.interests.map((interest) => (
															<Badge key={interest} variant="outline" className="text-xs">
																{interest}
															</Badge>
														))}
													</div>
												</div>
											</div>
										</div>

										<div className="flex justify-center gap-3 pt-4 ">
											<a href={`mailto:${officer.email}`} className="p-2 rounded-full hover:bg-primary/10 transition-colors">
												<Mail className="h-4 w-4" />
											</a>
											<a href={officer.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-primary/10 transition-colors">
												<Linkedin className="h-4 w-4" />
											</a>
											<a href={officer.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-primary/10 transition-colors">
												<Github className="h-4 w-4" />
											</a>
										</div>
									</CardContent>
								</Card>
							</div>
						</motion.div>
					))}
				</div>

				{isFullPage && (
					<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mt-20">
						<div className="text-center mb-12">
							<h3 className="text-3xl font-serif font-bold mb-4 gradient-text">Our Members</h3>
							<p className="text-lg text-muted-foreground max-w-2xl mx-auto">The talented students building the future through Build Teams and Forge projects</p>
						</div>

						<Card className="neon-glow">
							<CardContent className="p-8">
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
									{filteredMembers.map((member, index) => (
										<motion.div key={member.name + Math.random()} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }} viewport={{ once: true }} className="p-4 rounded-lg border border-border/20 hover:border-primary/30 transition-colors">
											<div className="flex items-center gap-3 mb-2">
												<Avatar className="w-10 h-10">
													<AvatarFallback className="text-sm bg-gradient-to-r from-primary to-secondary text-white">
														{member.name
															.split(" ")
															.map((n) => n[0])
															.join("")}
													</AvatarFallback>
												</Avatar>
												<div className="flex-1 min-w-0">
													<h4 className="font-medium text-sm truncate">{member.name}</h4>
													<p className="text-xs text-muted-foreground">
														{member.year} • {member.major}
													</p>
												</div>
											</div>
											<div className="space-y-1">
												<Badge variant="secondary" className="text-xs">
													{member.role}
												</Badge>
												<p className="text-xs text-muted-foreground">{member.team}</p>
											</div>
										</motion.div>
									))}
								</div>

								{filteredMembers.length === 0 && (
									<div className="text-center py-8">
										<Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
										<p className="text-muted-foreground">No members found matching your search.</p>
									</div>
								)}
							</CardContent>
						</Card>
					</motion.div>
				)}
			</div>
		</section>
	);
}
