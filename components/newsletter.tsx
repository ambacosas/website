"use client"

import React, { FormEvent, useRef, useState } from 'react';
import { BiLoader, BiCheck, BiX  } from 'react-icons/bi'
import emailjs from '@emailjs/browser';
const initialState = {
	name: "",
	email: "",
	message: "",
};

export default function Newsletter() {
	const form = useRef<HTMLFormElement>(null);
	const [{ name, email, message }, setState] = useState(initialState);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	const handleChange = (e: { target: { name: any; value: any; }; }) => {
		const { name, value } = e.target;
		setState((prevState) => ({ ...prevState, [name]: value }));
	};
	const clearState = () => {
		setState(initialState);
	}

	const sendEmail = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if(form.current){
			setLoading(true);
			emailjs.sendForm('service_v1veqmr', 'template_ad98oee', form.current, 'dGG2m0wd02eYp6RZj')
			.then(
				(result) => {
						console.log(result.text);
						if (form.current){
							form.current.reset();
						}
						setLoading(false)
						setSuccess(true);
				},
				(error) => {
						setLoading(false);
						setSuccess(false);
						setError(true);
						console.log(error.text);
				}
		)
		.finally(() => {
				setTimeout(() => {
						setLoading(false);
						setSuccess(false);
						setError(false);
				}, 2000);
				clearState();
		});
		}
		
	};

	return (
		<section id="contacto">
			<div className="max-w-6xl min-h-[460px] mx-auto px-4 sm:px-6">
				<div className="pb-12 md:pb-20">

					{/* CTA box */}
					<div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

						{/* Background illustration */}
						<div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
							<svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
								<defs>
									<radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
										<stop stopColor="#DFDFDF" offset="0%" />
										<stop stopColor="#4C4C4C" offset="44.317%" />
										<stop stopColor="#333" offset="100%" />
									</radialGradient>
								</defs>
								<g fill="none" fillRule="evenodd">
									<g fill="#FFF">
										<ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
										<ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
										<ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
										<ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
										<ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
										<ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
										<ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
										<ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
									</g>
									<circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
								</g>
							</svg>
						</div>

						<div className="relative flex flex-col lg:flex-row justify-between items-center">

							{/* CTA content */}
							<div className="text-center lg:text-left lg:max-w-xxl">
								<h3 className="h3 text-white mb-2">Contacto</h3>
								<p className="text-gray-300 text-lg mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente.</p>

								{/* CTA form */}
								<form ref={form} onSubmit={sendEmail} className="w-full lg:w-auto flex flex-col items-center justify-center gap-3">
									<div className=" flex justify-around gap-2 flex-col lg:flex-row items-center w-full">
										<div className="lg:w-full w-1/2">
												<input
													type="text"
													id="name"
													name="name"
													className="w-full"
													placeholder="Nombre"
													required
													onChange={handleChange}
												/>
										</div>
										<div className="lg:w-full w-1/2">
												<input
													type="email"
													id="email"
													name="email"
													className="w-full"
													placeholder="Email"
													required
													onChange={handleChange}
												/>
										</div>
									</div>
									<div className="w-3/4">
										<textarea
											name="message"
											id="message"
											className="w-full"
											rows={4}
											placeholder="Mensaje"
											required
											onChange={handleChange}
										></textarea>
									</div>
									<button type="submit" disabled={loading || success || !name || !email || !message}
										className={`${success? "bg-green-500 rounded-full p-2" : error? "bg-red-500 rounded-full p-2" : "bg-blue-500 rounded-lg p-3"} ${loading || !name || !email || !message ? 'cursor-not-allowed opacity-70' : ''} text-center text-white transition-all duration-100 ease-in`}>
										{loading ? (
										<div className='flex items-center'>
										<BiLoader className='animate-spin mr-2' /> Enviando... 
										</div>
										): success? <BiCheck className='h-8 w-8' /> : error? <BiX className='h-8 w-8' /> : "Enviar Mensaje"}
									</button>
								</form>
							</div>

						</div>

					</div>

				</div>
			</div>
		</section>
	)
}