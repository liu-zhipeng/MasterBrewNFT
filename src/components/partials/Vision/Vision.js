import React from "react"
import "./Vision.scss"

export default function Vision() {
    return (
        <div className="Vision mt-16">
            <div className="uppercase text-center text-5xl font-semibold outlineText ">
                Our Vision
            </div>
            <div className="vision-warp">
                <div className="vision-text">
                    <img
                        src="/vision_main.png"
                        width="auto"
                        alt=""
                    />
                </div>
                <div className="vision-text">
                    <p>Here at MasterBrews, our team has several goals for this project and its long-term future. First and foremost, we want to celebrate the amazing talent this world has to offer and give them a bigger stage. We don't believe people should be valued less, or compensated less, for their work because of where they live, their status, their gender, their beliefs or any such factor.</p> 
                    <p>&nbsp;</p>
                    <p>Secondly, we love technology. We are futurists. We believe that blockchain, NFTs and Smart Contracts are the future. We want to be part of the Paradigm Shift. The current barriers of entry are too high. Our mission is to knock down those walls and build bridges in their stead. We cannot do this alone. We will do this together. Join our community and help us all grow and prosper.</p>
                    <p>&nbsp;</p>
                    <h3>— The Founders</h3>
                </div>
            </div>
        </div>
    )
}
