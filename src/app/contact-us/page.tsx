"use client";

import { Container } from "@/components/Containers";

export default function ContactPage() {
	function submitForm(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		// Get Form Data
		const form = e.currentTarget;
		const formData = new FormData(form);

		const name = formData.get("name") as string;
		const subject = formData.get("subject") as string;
		const message = formData.get("message") as string;

		// Open Email Client
		window.open(
			`mailto:hello@ljmu.dev?subject=Form Submission from ${name} - ${subject}&body=${message.replace(
				/\n/g,
				"%0D%0A"
			)}`
		);

		// Reset Form
		form.reset();
	}

	return (
		<section id="contact-us">
			<h1 className="text-4xl text-center font-semibold">Contact Us</h1>
			<p className="text-center mt-5">
				Any questions? Feel free to contact us!
			</p>
			<p className="text-center mt-2">
				Alternatively, you can email us at{" "}
				<a
					href="mailto:hello@ljmu.dev"
					className="underline">
					hello@ljmu.dev
				</a>
			</p>

			<Container>
				<form
					onSubmit={submitForm}
					className="flex items-center justify-center mt-5 mb-10">
					<div className="w-[750px] max-w-full flex flex-col gap-5">
						<div className="flex flex-col gap-2">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								placeholder="John Doe"
								className="border border-black rounded-md px-3 py-2"
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label htmlFor="email">Subject</label>
							<input
								type="text"
								id="subject"
								name="subject"
								placeholder="Your subject here..."
								className="border border-black rounded-md px-3 py-2"
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label htmlFor="message">Message</label>
							<textarea
								id="message"
								name="message"
								placeholder="Your message here..."
								className="border border-black rounded-md px-3 py-2 min-h-36"
							/>
						</div>
						<button
							type="submit"
							className="bg-black text-white rounded-md px-6 py-2">
							Send
						</button>
					</div>
				</form>
			</Container>
		</section>
	);
}
