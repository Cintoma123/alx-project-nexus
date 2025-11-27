'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Trophy } from 'lucide-react';
import Link from 'next/link';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from 'recharts';

// Mock data
const electionData = {
    id: '1',
    title: 'Student Union President 2025',
    totalVotes: 1250,
    winner: 'Sarah Johnson',
    results: [
        { name: 'Sarah Johnson', votes: 450, color: '#2563eb' },
        { name: 'Michael Chen', votes: 380, color: '#16a34a' },
        { name: 'Jessica Williams', votes: 290, color: '#db2777' },
        { name: 'David Okon', votes: 130, color: '#ea580c' },
    ],
};

export default function ResultsPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                <Link href="/student">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Election Results</h1>
                    <p className="text-gray-500">{electionData.title}</p>
                </div>
            </div>

            {/* Winner Card */}
            <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="flex items-center gap-4 p-6">
                    <div className="rounded-full bg-yellow-100 p-3">
                        <Trophy className="h-8 w-8 text-yellow-600" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-yellow-800">Winner</p>
                        <h2 className="text-2xl font-bold text-yellow-900">
                            {electionData.winner}
                        </h2>
                        <p className="text-sm text-yellow-700">
                            {electionData.totalVotes} total votes cast
                        </p>
                    </div>
                </CardContent>
            </Card>

            <div className="grid gap-8 md:grid-cols-2">
                {/* Bar Chart */}
                <Card>
                    <CardHeader>
                        <CardTitle>Vote Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={electionData.results}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="votes" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Pie Chart */}
                <Card>
                    <CardHeader>
                        <CardTitle>Vote Share</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={electionData.results}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, percent }) =>
                                            `${name} ${(percent * 100).toFixed(0)}%`
                                        }
                                        outerRadius={100}
                                        fill="#8884d8"
                                        dataKey="votes"
                                    >
                                        {electionData.results.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
