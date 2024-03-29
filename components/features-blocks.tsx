"use client"

import { BsJournalCode, BsFillDiagram3Fill } from 'react-icons/bs';
import {dataEn, dataEs} from './data';
import { useLanguage } from './context/LanguageContext';

export default function FeaturesBlocks() {
	const {currentLanguage} = useLanguage();
	const soluciones = currentLanguage === 'es' ? dataEs.solutionCards : dataEn.solutionCards
	const soluciones2 = currentLanguage === 'es' ? dataEs.solutions : dataEn.solutions
	return (
		<section className="relative">

			{/* Section background (needs .relative class on parent and next sibling elements) */}
			<div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
			<div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="py-12 md:py-20">

					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
						<h2 className="h2 mb-4">{soluciones2.titulo}</h2>
						<p className="text-xl text-gray-600">{soluciones2.subtitulo}</p>
					</div>

					{/* Items */}
					<div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">

						{/* 1st item */}
						{soluciones.map((item, index) => (
							<div key={index} className="relative flex flex-col min-h-[300px] items-center p-6 bg-white rounded shadow-xl">
								<div className='p-4 rounded-full bg-blue-600 mb-2'>
									<item.icono className='text-white font-bold h-6 w-6' />
								</div>
								<h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1">{item.titulo}</h4>
								<p className="text-gray-600 text-center">{item.texto}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}