import React from 'react'
import { Layout } from '../../components/layout'

const TaxisPage = () => {
    const services = [
        {
            type: 'Standard Sedan',
            capacity: '1-4 passengers',
            price: '$25/hour',
            features: ['Air conditioning', 'Professional driver', 'Flight tracking', 'Meet & greet']
        },
        {
            type: 'Premium SUV',
            capacity: '1-6 passengers',
            price: '$35/hour',
            features: ['Luxury vehicle', 'Extra luggage space', 'Flight tracking', 'Meet & greet']
        },
        {
            type: 'Business Van',
            capacity: '1-8 passengers',
            price: '$45/hour',
            features: ['Spacious interior', 'Extra luggage space', 'Flight tracking', 'Meet & greet']
        }
    ]

    return (
        <Layout
            metadata={{
                title: 'Airport Taxis - Booking',
                description: 'Book your airport transfer'
            }}
        >
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Airport Transfer Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div key={service.type} className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-semibold mb-2">{service.type}</h2>
                            <p className="text-gray-600 mb-2">{service.capacity}</p>
                            <p className="text-primary font-bold mb-4">{service.price}</p>
                            <ul className="space-y-2">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center">
                                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-6 w-full bg-primary text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors">
                                Book Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default TaxisPage