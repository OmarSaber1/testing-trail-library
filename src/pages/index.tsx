import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Counter from "@/components/Counter";
import GRID from "@/components/Example1/grid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <GRID />;
}
