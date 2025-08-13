import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/modern-workspace-collaboration.png"
            alt="Pessoas colaborando e aprendendo juntas"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay para melhor legibilidade */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Logo */}
        <div className="absolute top-8 left-8 z-20">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
            <span className="text-purple-800 font-bold text-xl">L</span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transforme Seu
            <br />
            <span className="text-purple-300">Futuro Hoje</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Descubra oportunidades que mudam vidas e dê o primeiro passo para uma jornada de crescimento extraordinário.
          </p>

          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Comece Agora
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Seção adicional para demonstrar scroll suave */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-bold text-gray-800 mb-6">Sua Jornada Começa Aqui</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Junte-se a milhares de pessoas que já transformaram suas vidas através das nossas oportunidades únicas de
            crescimento.
          </p>
        </div>
      </section>
    </main>
  )
}
