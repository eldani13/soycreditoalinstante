import Image from "next/image";

export default function CreditoCelular() {
  return (
    <section className="relative w-full bg-[#f8f8fb] overflow-hidden py-12 px-4 flex justify-center">
      <div className="max-w-[1600px] w-full flex flex-col lg:flex-row items-center justify-center gap-8 relative z-10">
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <Image
            src="/credito.jpg"
            alt="Hombre con sombrero pulgar arriba"
            width={800}
            height={600}
            className="object-contain relative z-10"
          />
          <div className="absolute left-0 top-0 bottom-0 w-[200px] bg-gradient-to-r from-[#f8f8fb] to-transparent z-20" />

          <div className="absolute right-0 top-0 bottom-0 w-[200px] bg-gradient-to-l from-[#f8f8fb] to-transparent z-20" />

          <div className="absolute top-0 left-0 right-0 h-[150px] bg-gradient-to-b from-[#f8f8fb] to-transparent z-20" />

          <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-[#f8f8fb] to-transparent z-20" />
        </div>

        <div className="w-full lg:w-1/2 max-w-xl text-center lg:text-left">
          <h2 className="text-credito text-2xl lg:text-3xl font-bold text-[#1E40AF] mb-4 leading-snug">
            ¿Buscas un préstamo <br />
            rápido y sin complicaciones <br />
            para comprar tu celular?
          </h2>
          <p className="text-[#2c2c54] mb-4">
            Sabemos que muchas personas no logran acceder a préstamos
            tradicionales por no tener historial crediticio, empleo formal o un
            fiador. Incluso si estás reportado,{" "}
            <strong className="text-[#1E40AF]">
              en{" "}
              <span className="text-[#FBBF24] font-semibold">Soy Crédito</span>{" "}
              creemos en ti.
            </strong>
          </p>
          <p className="text-[#2c2c54] mb-6">
            Te damos la oportunidad de renovar tu celular fácil y rápido, usando
            solo tu cédula. Sin trámites engorrosos, sin fiador y sin importar
            tu historial.
          </p>
          <p className="text-[#1E40AF] font-bold">
            <span className="text-[#FBBF24]">Préstamos 100% confiables</span> y
            pensados para ti.
          </p>
        </div>
      </div>
    </section>
  );
}
