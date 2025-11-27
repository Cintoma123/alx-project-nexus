'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Loader2, CheckCircle2 } from 'lucide-react';

// Mock data - in a real app, fetch based on ID
const electionData = {
    id: '1',
    title: 'Student Union President 2025',
    description: 'Vote for your next Student Union President. Your voice matters!',
    candidates: [
        {
            id: 'c1',
            name: 'Sarah Johnson',
            manifesto: 'Building a more inclusive campus community through dialogue and action.',
        },
        {
            id: 'c2',
            name: 'Michael Chen',
            manifesto: 'Focusing on academic resources and student facility improvements.',
        },
        {
            id: 'c3',
            name: 'Jessica Williams',
            manifesto: 'Advocating for better mental health support and recreational activities.',
        },
        {
            id: 'c4',
            name: 'David Okon',
            manifesto: 'Transparency in student government and budget allocation.',
        },
    ],
};

export default function VotePage() {
    const params = useParams();
    const router = useRouter();
    const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasVoted, setHasVoted] = useState(false);

    const handleVote = async () => {
        if (!selectedCandidate) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setHasVoted(true);

        // Redirect to dashboard after a delay
        setTimeout(() => {
            router.push('/student');
        }, 2000);
    };

    if (hasVoted) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-green-100 p-3 mb-4">
                    <CheckCircle2 className="h-12 w-12 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Vote Cast Successfully!</h2>
                <p className="text-gray-500 mt-2">
                    Thank you for participating in the election. Redirecting to dashboard...
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">{electionData.title}</h1>
                <p className="text-gray-500 mt-2">{electionData.description}</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Select a Candidate</CardTitle>
                </CardHeader>
                <CardContent>
                    <RadioGroup
                        value={selectedCandidate || ''}
                        onValueChange={setSelectedCandidate}
                        className="space-y-4"
                    >
                        {electionData.candidates.map((candidate) => (
                            <div
                                key={candidate.id}
                                className={`flex items-start space-x-3 rounded-lg border p-4 transition-colors ${selectedCandidate === candidate.id
                                        ? 'border-blue-600 bg-blue-50'
                                        : 'border-gray-200 hover:bg-gray-50'
                                    }`}
                            >
                                <RadioGroupItem value={candidate.id} id={candidate.id} className="mt-1" />
                                <div className="space-y-1">
                                    <Label
                                        htmlFor={candidate.id}
                                        className="text-base font-medium cursor-pointer"
                                    >
                                        {candidate.name}
                                    </Label>
                                    <p className="text-sm text-gray-500">{candidate.manifesto}</p>
                                </div>
                            </div>
                        ))}
                    </RadioGroup>

                    <div className="mt-8 flex justify-end">
                        <Button
                            onClick={handleVote}
                            disabled={!selectedCandidate || isSubmitting}
                            size="lg"
                            className="w-full sm:w-auto"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Submitting Vote...
                                </>
                            ) : (
                                'Cast Vote'
                            )}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
