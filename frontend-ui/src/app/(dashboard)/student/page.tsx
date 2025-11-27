'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, CheckCircle2, Clock } from 'lucide-react';
import Link from 'next/link';

// Mock data
const activeElections = [
    {
        id: '1',
        title: 'Student Union President 2025',
        description: 'Vote for your next Student Union President. Your voice matters!',
        endDate: '2025-12-01',
        candidates: 4,
    },
];

const upcomingElections = [
    {
        id: '2',
        title: 'Department Rep - Computer Science',
        description: 'Choose your representative for the CS department.',
        startDate: '2025-12-10',
        candidates: 3,
    },
];

const pastElections = [
    {
        id: '3',
        title: 'Faculty Treasurer',
        description: 'Election for the Faculty Treasurer position.',
        endDate: '2025-11-20',
        winner: 'Sarah Johnson',
    },
];

export default function StudentDashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
                <p className="text-gray-500">Welcome back! Here are your available elections.</p>
            </div>

            {/* Active Elections */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Active Elections
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {activeElections.map((election) => (
                        <Card key={election.id} className="border-green-200 bg-green-50/30">
                            <CardHeader>
                                <CardTitle>{election.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-sm text-gray-600">{election.description}</p>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Clock className="h-4 w-4" />
                                    Ends: {new Date(election.endDate).toLocaleDateString()}
                                </div>
                                <Link href={`/student/vote/${election.id}`}>
                                    <Button className="w-full bg-green-600 hover:bg-green-700">
                                        Vote Now
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Upcoming Elections */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    Upcoming Elections
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {upcomingElections.map((election) => (
                        <Card key={election.id}>
                            <CardHeader>
                                <CardTitle>{election.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-sm text-gray-600">{election.description}</p>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Calendar className="h-4 w-4" />
                                    Starts: {new Date(election.startDate).toLocaleDateString()}
                                </div>
                                <Button variant="outline" className="w-full" disabled>
                                    Coming Soon
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Past Elections */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-500">Past Elections</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {pastElections.map((election) => (
                        <Card key={election.id} className="bg-gray-50">
                            <CardHeader>
                                <CardTitle className="text-gray-600">{election.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-sm text-gray-500">{election.description}</p>
                                <div className="text-sm font-medium text-gray-900">
                                    Winner: {election.winner}
                                </div>
                                <Link href={`/results/${election.id}`}>
                                    <Button variant="outline" className="w-full">
                                        View Results
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}
