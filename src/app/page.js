import Image from "next/image";
import { Brain, CircleGauge, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Top Section: Hero Banner */}
      <section
        className="flex w-screen min-h-[70vh] items-center
                   bg-linear-to-br from-gray-900 via-gray-950 to-black
                   lg:px-16 md:px-10 sm:px-6 px-4 py-12" // Added padding and responsive width
      >
        {/* Left Section: Welcome Message and Call to Action */}
        <div className="lg:w-1/2 md:w-2/3 w-full flex flex-col justify-center text-white pr-8">
          <p className="text-gray-400 text-lg md:text-xl lg:text-3xl mb-2">
            Welcome to
          </p>
          <h1 className="font-extrabold text-5xl leading-tight mb-8">
            Mental Master - Unlock <br />Your inner Calculator!
          </h1>
          <Link href="/home" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg w-fit transition duration-300 ease-in-out text-lg">
            Start Your Journey
          </Link>
        </div>

        {/* Right Section: The Brain/Calculator Image */}
        <div className="lg:w-1/2 md:w-1/3 hidden md:flex items-center justify-center relative">
          {/* Using next/image for optimized images */}
          {/* Make sure 'brain-illustration.png' is in your 'public' directory */}
          <Image
            src="/brain-illustration.png" // Path to your image in the public directory
            alt="Abstract illustration of a brain with mathematical symbols, representing mental calculation and speed."
            width={400} // Adjust width as needed
            height={400} // Adjust height as needed
            objectFit="contain"
            className="rounded-full border-gray-800 border-4" // Applying the rounded-full class for circular shape
            priority // Prioritize loading for LCP
          />
        </div>
      </section>

      {/* Bottom Section: What You'll Experience */}
      <section className="bg-gray-900 w-screen min-h-[30vh] py-12 lg:py-20 flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          What You'll Experience
        </h2>
        <div className="flex flex-row justify-center gap-8 lg:gap-16 max-w-6xl mx-auto">
          {/* Dynamic Challenges */}
          <div className="flex flex-col items-center text-center p-3 bg-gray-800 rounded">
            <CircleGauge size={60} strokeWidth={1.5} className="text-teal-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Dynamic Challenges</h3>
            <p className="text-gray-400 max-w-xs">
              Dive into endless, challenging math problems tailored to boost your speed.
            </p>
          </div>

          {/* Speed & Accuracy Training */}
          <div className="flex flex-col items-center text-center p-3 bg-gray-800 rounded">
            <Brain size={60} strokeWidth={1.5} className="text-teal-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Speed & Accuracy Training</h3>
            <p className="text-gray-400 max-w-xs">
              Refine your ability to solve complex calculations quickly and correctly.
            </p>
          </div>

          {/* Cognitive Enhancement */}
          <div className="flex flex-col items-center text-center p-3 bg-gray-800 rounded">
            <Lightbulb size={60} strokeWidth={1.5} className="text-teal-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cognitive Enhancement</h3>
            <p className="text-gray-400 max-w-xs">
              Improve focus, memory, and overall problem-solving skills beyond math.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}