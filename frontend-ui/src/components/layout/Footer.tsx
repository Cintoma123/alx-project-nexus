export function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} CampusVote. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
