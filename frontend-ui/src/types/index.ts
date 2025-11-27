export type Role = 'ADMIN' | 'STUDENT';

export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
    matricNumber?: string; // Only for students
}

export interface Candidate {
    id: string;
    name: string;
    position: string;
    manifesto: string;
    imageUrl?: string;
    voteCount: number;
}

export interface Election {
    id: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    status: 'UPCOMING' | 'ACTIVE' | 'ENDED';
    candidates: Candidate[];
}

export interface Vote {
    id: string;
    electionId: string;
    candidateId: string;
    studentId: string;
    timestamp: string;
}
