'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
    const router = useRouter();
    const { login } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormValues) => {
        setIsLoading(true);
        setError(null);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Mock login logic - replace with actual API call
            if (data.email === 'admin@campusvote.com' && data.password === 'admin123') {
                login({
                    id: '1',
                    name: 'Admin User',
                    email: data.email,
                    role: 'ADMIN',
                });
                router.push('/admin');
            } else if (data.email === 'student@campusvote.com' && data.password === 'student123') {
                login({
                    id: '2',
                    name: 'Student User',
                    email: data.email,
                    role: 'STUDENT',
                    matricNumber: 'ST12345',
                });
                router.push('/student');
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
                <p className="text-center text-sm text-gray-500">
                    Enter your email and password to access your account
                </p>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {error && (
                        <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
                            {error}
                        </div>
                    )}
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            {...register('email')}
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500">{errors.email.message}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            {...register('password')}
                        />
                        {errors.password && (
                            <p className="text-sm text-red-500">{errors.password.message}</p>
                        )}
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Logging in...
                            </>
                        ) : (
                            'Login'
                        )}
                    </Button>
                    <div className="text-center text-sm">
                        Don&apos;t have an account?{' '}
                        <Link href="/register" className="text-blue-600 hover:underline">
                            Register
                        </Link>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
