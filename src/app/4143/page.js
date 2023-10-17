import Head from "next/head";
import Data from './Data'

export const metadata = {
  title: 'Lexmark Copiers for Sale and Rent | Office Copy Machines | Copiers Utah',
  description: 'Copiers Utah: Quality copiers for sale/rent. Pick from various office machines with advanced features & affordable prices. Contact us now! ',
}
export default function Home() {
  return (
    <Data/>
  );
}
