import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function AboutPage() {
    return (
        <>
            <Header />
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                         独立于服务器的小组，有服内成员，也有服外成员。参与团坑材质的制作设计等（如冻梨子材质）。
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}