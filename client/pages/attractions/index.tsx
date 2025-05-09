import React from 'react'
import { Layout } from '../../components/layout'

const AttractionsPage = () => {
    const countries = [
        {
            name: 'Vietnam',
            attractions: [
                'Ha Long Bay',
                'Hoi An Ancient Town',
                'Phong Nha Caves',
                'Sapa Rice Terraces'
            ]
        },
        {
            name: 'Thailand',
            attractions: [
                'Grand Palace',
                'Phi Phi Islands',
                'Wat Arun',
                'Ayutthaya'
            ]
        },
        {
            name: 'Japan',
            attractions: [
                'Mount Fuji',
                'Fushimi Inari Shrine',
                'Tokyo Skytree',
                'Arashiyama Bamboo Grove'
            ]
        }
    ]

    return (
        <Layout
            metadata={{
                title: 'Attractions - Booking',
                description: 'Discover amazing attractions'
            }}
        >
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Popular Attractions</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {countries.map((country) => (
                        <div key={country.name} className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-semibold mb-4">{country.name}</h2>
                            <ul className="space-y-2">
                                {country.attractions.map((attraction) => (
                                    <li key={attraction} className="flex items-center">
                                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                                        {attraction}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default AttractionsPage