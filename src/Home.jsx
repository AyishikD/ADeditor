import React from "react";
import "tailwindcss/tailwind.css";
import './Home.css'
import Card from "./Card";

function Home() {
    return (
        <div className="home min-h-screen flex flex-col justify-center items-center bg-emerald-900">

            <div className="herobanner">
                <img src="/logo.png" alt="ADeditor Logo" className="w-1/2 mb-4" style={{ width: '200px' }} />
                <div className="flex flex-wrap justify-center gap-8 ">
                    <Card
                        title="Code Editor"
                        description="Edit, view, save and share your code here seamlessly."
                        image="/logo2.png"
                        link="./codeeditor"
                    />
                </div>
            </div>

            <div className="mt-8 flex justify-center flex-col items-center bannerdisplay bg-emerald-900">
                <div className="editor1display bg-cyan-50">
                    <article className="description">
                        <h1 className="text-4xl font-bold mb-8">ADeditor: The Ultimate Web App for Efficient Programming</h1>
                        <p className="font-normal text-gray-700 dark:text-gray-400 text-lg">
                            <strong>ADeditor</strong> is a versatile online code editor built using React, Tailwind CSS, and Judge0 API. It empowers developers to compile and run code in over 8 languages, with options for customization through 10+ themes. It also allows to <strong>save</strong>, <strong>share</strong> and <strong>compete with time</strong> in your code. Whether you're a beginner exploring programming or a seasoned developer looking for a quick, efficient tool, ADeditor provides a seamless experience for writing, testing, and debugging code.
                        </p>
                    </article>
                    <div className="screenshot">
                        <img src="/logo2.png" alt="CodePad 1" className="w-1/2 mb-4" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
