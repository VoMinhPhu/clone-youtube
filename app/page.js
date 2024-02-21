import Header from "@/components/Header"
import Nav from '@/components/Nav'
import Content from "@/components/Content"

export default function Home() {
	return (
		<main className="text-sm">
			<Header/>

			<div className="flex">
				<Nav/>
				<Content/>
			</div>

		</main>
	)
}
