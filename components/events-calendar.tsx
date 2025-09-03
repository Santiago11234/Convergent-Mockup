"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { useState } from "react";

const upcomingEvents = [
	{
		id: 1,
		title: "Info Session #2",
		description: "Come learn about Convergent, our mission, and how to get involved.",
		date: "2025-09-02",
		time: "6:00 PM",
		location: "GDC 2.216",
		type: "Info Session",
		attendees: 120,
		maxAttendees: 150,
	},
	{
		id: 2,
		title: "Coffee Chat #2",
		description: "Grab a coffee and meet members of our leadership team in a casual setting.",
		date: "2025-09-03",
		time: "5:00 PM",
		location: "Dobie",
		type: "Social",
		attendees: 40,
		maxAttendees: 60,
	},
	{
		id: 3,
		title: "Game Night Social",
		description: "Join us for board games, networking, and a fun night with Convergent members.",
		date: "2025-09-04",
		time: "7:00 PM",
		location: "McCombs Atrium: CBA 3.300",
		type: "Social",
		attendees: 80,
		maxAttendees: 120,
	},
	{
		id: 4,
		title: "Info Session #3",
		description: "Another chance to hear about Convergent’s opportunities and programs.",
		date: "2025-09-04",
		time: "6:00 PM",
		location: "GDC room #",
		type: "Info Session",
		attendees: 100,
		maxAttendees: 150,
	},
	{
		id: 5,
		title: "Application Due",
		description: "Submit your Convergent application before the deadline.",
		date: "2025-09-05",
		time: "11:59 PM",
		location: "Online",
		type: "Deadline",
		attendees: 0,
		maxAttendees: 100,
	},
	{
		id: 6,
		title: "Application Office Hours",
		description: "Drop by to get help and feedback on your application before submitting.",
		date: "2025-09-05",
		time: "3:00 PM - 5:00 PM",
		location: "Zoom and McCombs Atrium",
		type: "Support",
		attendees: 25,
		maxAttendees: 50,
	},
];

const getTypeColor = (type: string) => {
	switch (type) {
		case "Workshop":
			return "bg-cyan-500/10 text-cyan-600 border-cyan-500/20";
		case "Competition":
			return "bg-purple-500/10 text-purple-600 border-purple-500/20";
		case "Panel":
			return "bg-blue-500/10 text-blue-600 border-blue-500/20";
		case "Social":
			return "bg-green-500/10 text-green-600 border-green-500/20";
		case "Masterclass":
			return "bg-orange-500/10 text-orange-600 border-orange-500/20";
		default:
			return "bg-muted text-muted-foreground";
	}
};

const exportToICal = (event: (typeof upcomingEvents)[0]) => {
	const parseTime = (timeStr: string) => {
		if (!timeStr) return "00:00:00";

		const [time, modifier] = timeStr.trim().split(" ");
		// eslint-disable-next-line prefer-const
		let [hours, minutes] = time.split(":").map(Number);

		if (modifier?.toUpperCase() === "PM" && hours < 12) hours += 12;
		if (modifier?.toUpperCase() === "AM" && hours === 12) hours = 0;

		return `${String(hours).padStart(2, "0")}:${String(minutes || 0).padStart(2, "0")}:00`;
	};

	const [startTimeStr, endTimeStr] = event.time.includes("-") ? event.time.split("-").map((s) => s.trim()) : [event.time, null];

	const startDate = new Date(`${event.date}T${parseTime(startTimeStr)}`);
	const endDate = endTimeStr ? new Date(`${event.date}T${parseTime(endTimeStr)}`) : new Date(startDate.getTime() + 60 * 60 * 1000);

	const formatDate = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

	const icsContent = `
		BEGIN:VCALENDAR
		VERSION:2.0
		BEGIN:VEVENT
		SUMMARY:${event.title}
		DTSTART:${formatDate(startDate)}
		DTEND:${formatDate(endDate)}
		DESCRIPTION:${event.description}
		LOCATION:${event.location}
		END:VEVENT
		END:VCALENDAR
  `.trim();

	const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = `${event.title.replace(/\s+/g, "_")}.ics`;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
};

export function EventsCalendar() {
	const [currentDate, setCurrentDate] = useState(new Date());
	const [selectedEvent, setSelectedEvent] = useState<(typeof upcomingEvents)[0] | null>(null);

	const getDaysInMonth = (date: Date) => {
		const year = date.getFullYear();
		const month = date.getMonth();
		const firstDay = new Date(year, month, 1);
		const lastDay = new Date(year, month + 1, 0);
		const daysInMonth = lastDay.getDate();
		const startingDayOfWeek = firstDay.getDay();

		const days = [];

		for (let i = 0; i < startingDayOfWeek; i++) {
			days.push(null);
		}

		for (let day = 1; day <= daysInMonth; day++) {
			days.push(day);
		}

		return days;
	};

	const getEventsForDay = (day: number) => {
		if (!day) return [];
		const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
		return upcomingEvents.filter((event) => event.date === dateStr);
	};

	const navigateMonth = (direction: "prev" | "next") => {
		setCurrentDate((prev) => {
			const newDate = new Date(prev);
			if (direction === "prev") {
				newDate.setMonth(prev.getMonth() - 1);
			} else {
				newDate.setMonth(prev.getMonth() + 1);
			}
			return newDate;
		});
	};

	const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
					<h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 gradient-text">Events Calendar</h1>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">Join us for workshops, competitions, and networking events that will accelerate your journey at the intersection of business, design, and technology.</p>
				</motion.div>

				<div className="grid lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2">
						<Card className="p-6">
							<div className="flex items-center justify-between mb-6">
								<h2 className="text-2xl font-bold">
									{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
								</h2>
								<div className="flex gap-2">
									<Button variant="outline" size="sm" onClick={() => navigateMonth("prev")}>
										<ChevronLeft className="h-4 w-4" />
									</Button>
									<Button variant="outline" size="sm" onClick={() => navigateMonth("next")}>
										<ChevronRight className="h-4 w-4" />
									</Button>
								</div>
							</div>

							<div className="grid grid-cols-7 gap-1 mb-2">
								{dayNames.map((day) => (
									<div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
										{day}
									</div>
								))}
							</div>

							<div className="grid grid-cols-7 gap-1">
								{getDaysInMonth(currentDate).map((day, index) => {
									const events = day ? getEventsForDay(day) : [];
									return (
										<div key={index} className={`min-h-[80px] p-1 border border-border/50 rounded-lg ${day ? "hover:bg-muted/50 cursor-pointer" : ""} ${day === new Date().getDate() && currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear() ? "bg-primary/10 border-primary/30" : ""}`}>
											{day && (
												<>
													<div className="text-sm font-medium mb-1">{day}</div>
													{events.map((event) => (
														<div key={event.id} className="text-xs p-1 mb-1 rounded bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 cursor-pointer hover:bg-cyan-500/30 transition-colors" onClick={() => setSelectedEvent(event)}>
															{event.title.length > 15 ? event.title.substring(0, 15) + "..." : event.title}
														</div>
													))}
												</>
											)}
										</div>
									);
								})}
							</div>
						</Card>
					</div>

					<div className="space-y-6">
						{selectedEvent ? (
							<Card className="p-6">
								<div className="flex items-start justify-between mb-4">
									<Badge variant="outline" className={getTypeColor(selectedEvent.type)}>
										{selectedEvent.type}
									</Badge>
									<Button variant="outline" size="sm" onClick={() => exportToICal(selectedEvent)} className="flex items-center gap-2">
										<Download className="h-4 w-4" />
										Export to Cal
									</Button>
								</div>

								<h3 className="text-xl font-bold mb-2">{selectedEvent.title}</h3>
								<p className="text-muted-foreground mb-4">{selectedEvent.description}</p>

								<div className="space-y-3 text-sm">
									<div className="flex items-center gap-2">
										<Calendar className="h-4 w-4 text-primary" />
										<span>
											{new Date(selectedEvent.date).toLocaleDateString("en-US", {
												weekday: "long",
												year: "numeric",
												month: "long",
												day: "numeric",
											})}
										</span>
									</div>
									<div className="flex items-center gap-2">
										<Clock className="h-4 w-4 text-primary" />
										<span>{selectedEvent.time}</span>
									</div>
									<div className="flex items-center gap-2">
										<MapPin className="h-4 w-4 text-primary" />
										<span>{selectedEvent.location}</span>
									</div>
									<div className="flex items-center gap-2">
										<Users className="h-4 w-4 text-primary" />
										<span>
											{selectedEvent.attendees}/{selectedEvent.maxAttendees} attending
										</span>
									</div>
								</div>

								<div className="mt-4 w-full bg-muted rounded-full h-2">
									<div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: `${(selectedEvent.attendees / selectedEvent.maxAttendees) * 100}%` }} />
								</div>
							</Card>
						) : (
							<Card className="p-6 text-center">
								<Calendar className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
								<h3 className="text-lg font-semibold mb-2">Select an Event</h3>
								<p className="text-muted-foreground">Click on an event in the calendar to view details and export to Google Calendar.</p>
							</Card>
						)}

						<Card className="p-6">
							<h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
							<div className="space-y-3">
								{upcomingEvents.slice(0, 4).map((event) => (
									<div key={event.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors" onClick={() => setSelectedEvent(event)}>
										<div className={`w-3 h-3 rounded-full ${getTypeColor(event.type).split(" ")[0]}`} />
										<div className="flex-1 min-w-0">
											<p className="text-sm font-medium truncate">{event.title}</p>
											<p className="text-xs text-muted-foreground">{new Date(event.date).toLocaleDateString()}</p>
										</div>
									</div>
								))}
							</div>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
