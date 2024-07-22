// "use client"
import React from "react";
import Buttons from "../components/buttons";
const PageAdmin = () => {
  return (
    <div>
      <h2 className=" font-serif font-bold ms-3">Admin content</h2>
      <p>
        The field of artificial intelligence (AI) has seen tremendous
        advancements over the past decade, with one of the most fascinating
        developments being the ability to convert 2D images into 3D models. This
        technology has far-reaching implications across various industries,
        including gaming, virtual reality (VR), augmented reality (AR), and even
        healthcare. At its core, the process involves sophisticated algorithms
        and deep learning techniques that can interpret the depth, texture, and
        spatial information from a flat image to construct a three-dimensional
        representation. This leap from 2D to 3D is not just about adding another
        dimension but about creating a more immersive and interactive experience
        for users. One of the primary applications of this technology is in the
        gaming industry. Developers can now create more realistic and dynamic
        characters and environments without needing to design them from scratch
        in 3D. By using AI to convert 2D concept art into 3D models, the game
        development process becomes more efficient and cost-effective. Moreover,
        this technology allows for rapid prototyping, enabling developers to
        experiment with different designs and ideas quickly. The end result is a
        more engaging and lifelike gaming experience that captivates players and
        keeps them coming back for more.
      </p>

      <Buttons text={"add to card"}></Buttons>
    </div>
  );
};

export default PageAdmin;
