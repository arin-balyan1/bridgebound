import Image from 'next/image'
// ...existing code...
export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-b from-orange-50 to-white">
      <div className="text-center space-y-6">
        {/* logo moved here */}
        <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center overflow-hidden shadow-lg bg-white">
          <Image src="/logo.png" alt="Bridge Bound Academy" width={80} height={80} className="object-cover" />
        </div>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Empowering your global education journey
        </p>
        <a 
          href="/colleges"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg"
        >
          Explore Colleges →
        </a>
      </div>
    </main>
  )
}