'use client';

import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto max-w-6xl px-6 pt-20 pb-28 md:pt-28 md:pb-36"
    >
      <div className="grid items-center gap-12 md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="text-left">

          {/* ROLE */}
          <p className="text-sm uppercase tracking-[0.3em] text-green-600">
            Technical Support Engineer
          </p>

          {/* TYPEWRITER */}
          <div className="mt-4 text-lg font-medium text-green-600 md:text-xl">
            <Typewriter
              options={{
                strings: [
                  "Hi, I'm Jazz.",
                  "I turn problems into solutions.",
                ],
                autoStart: true,
                loop: false,
                delay: 60,
              }}
            />
          </div>

          {/* HEADLINE */}
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Every problem
            <span className="block text-green-600">
              has a solution.
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 md:text-xl">
            I help people solve technical problems, bring clarity to complex systems,
            and turn overwhelming moments into something manageable.
          </p>

          {/* PERSONAL TOUCH */}
          <p className="mt-4 max-w-xl text-base leading-8 text-zinc-500 md:text-lg">
            My name is Jazz Alhussein. I don&apos;t just fix problems — I make things easier,
            smoother, and sometimes even feel effortless.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-black px-6 py-3 font-medium text-white transition hover:scale-105 hover:bg-zinc-800 active:scale-95"
            >
              Say Hello
            </a>
            <a
              href="#story"
              className="rounded-full border border-zinc-300 bg-white px-6 py-3 font-medium text-zinc-800 transition hover:border-green-600 hover:text-green-600"
            >
              My Story
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="relative flex justify-center md:justify-end">

          {/* GLOW */}
          <div className="absolute inset-0 scale-110 rounded-3xl bg-green-500/10 blur-3xl" />

          {/* IMAGE CARD */}
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 shadow-xl">
            <Image
              src="/jazz_profile.jpg"
              alt="Jazz Alhussein"
              width={1170}
              height={2142}
              quality={100}
              className="h-[420px] w-[300px] object-cover object-top md:h-[500px] md:w-[360px]"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
