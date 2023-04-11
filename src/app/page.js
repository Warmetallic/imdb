import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <h1 class="text-4xl text-red-600 font-gothic text-center border-b-2 border-red-600">
      Your heading text here
    </h1>
  );
}
