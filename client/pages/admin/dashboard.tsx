import React from 'react'
import { Layout } from '../../components/layout'
import { useAppSelector } from '../../store/hooks'
import { useRouter } from 'next/router'
import { useGetAllBookingQuery } from '../../services/bookingApi'
import { useGetAllUsersQuery } from '../../services/userApi'
import moment from 'moment'

const Dashboard = () => {
    const router = useRouter()
    const { user } = useAppSelector((state) => state.persistedReducer.auth)
    const { data: bookings } = useGetAllBookingQuery({})
    const { data: users } = useGetAllUsersQuery({})

    // Redirect if not admin
    React.useEffect(() => {
        if (user?.email !== 'admin@gmail.com') {
            router.push('/')
        }
    }, [user, router])

    const totalRevenue = bookings?.reduce((acc, booking) => acc + booking.price, 0) || 0

    return (
        <Layout
            metadata={{
                title: 'Admin Dashboard - Booking',
                description: 'Admin Dashboard'
            }}
        >
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Total Users</h2>
                        <p className="text-3xl font-bold text-blue-600">{users?.length || 0}</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Total Bookings</h2>
                        <p className="text-3xl font-bold text-green-600">{bookings?.length || 0}</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Total Revenue</h2>
                        <p className="text-3xl font-bold text-purple-600">${totalRevenue}</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Recent Bookings</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-3 text-left">User</th>
                                    <th className="p-3 text-left">Check In</th>
                                    <th className="p-3 text-left">Check Out</th>
                                    <th className="p-3 text-left">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings?.slice(0, 5).map((booking) => (
                                    <tr key={booking._id} className="border-b">
                                        <td className="p-3">{booking.user.email}</td>
                                        <td className="p-3">{moment(booking.checkIn).format('LLL')}</td>
                                        <td className="p-3">{moment(booking.checkOut).format('LLL')}</td>
                                        <td className="p-3">${booking.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-4">Users List</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-3 text-left">Name</th>
                                    <th className="p-3 text-left">Email</th>
                                    <th className="p-3 text-left">Joined</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users?.map((user) => (
                                    <tr key={user._id} className="border-b">
                                        <td className="p-3">{user.name}</td>
                                        <td className="p-3">{user.email}</td>
                                        <td className="p-3">{moment(user.createdAt).format('LL')}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard