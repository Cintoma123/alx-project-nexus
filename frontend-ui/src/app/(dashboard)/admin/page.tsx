'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Users, Vote, Calendar } from 'lucide-react';
import Link from 'next/link';

// Mock data
const stats = [
    {
        title: 'Total Elections',
        value: '12',
        icon: Vote,
        description: '+2 from last month',
    },
    {
        title: 'Active Voters',
        value: '2,350',
        icon: Users,
        description: '+180 new registrations',
    },
    {
        title: 'Active Elections',
        value: '3',
        icon: Calendar,
        description: 'Currently ongoing',
    },
];

const elections = [
    {
        id: '1',
        title: 'Student Union President 2025',
        status: 'ACTIVE',
        candidates: 4,
        votes: 1250,
        endDate: '2025-12-01',
    },
    {
        id: '2',
        title: 'Department Rep - Computer Science',
        status: 'UPCOMING',
        candidates: 3,
        votes: 0,
        endDate: '2025-12-15',
    },
    {
        id: '3',
        title: 'Faculty Treasurer',
        status: 'ENDED',
        candidates: 2,
        votes: 890,
        endDate: '2025-11-20',
    },
];

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
                <Button className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Create Election
                </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-3">
                {stats.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {stat.title}
                            </CardTitle>
                            <stat.icon className="h-4 w-4 text-gray-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-gray-500">{stat.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Recent Elections */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Elections</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {elections.map((election) => (
                            <div
                                key={election.id}
                                className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                            >
                                <div className="space-y-1">
                                    <p className="font-medium leading-none">{election.title}</p>
                                    <p className="text-sm text-gray-500">
                                        Ends: {new Date(election.endDate).toLocaleDateString()}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-right">
                                        <p className="text-sm font-medium">{election.votes} votes</p>
                                        <p className="text-xs text-gray-500">
                                            {election.candidates} candidates
                                        </p>
                                    </div>
                                    <div
                                        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${election.status === 'ACTIVE'
                                                ? 'bg-green-100 text-green-800'
                                                : election.status === 'UPCOMING'
                                                    ? 'bg-blue-100 text-blue-800'
                                                    : 'bg-gray-100 text-gray-800'
                                            }`}
                                    >
                                        {election.status}
                                    </div>
                                    <Button variant="outline" size="sm">
                                        Manage
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
