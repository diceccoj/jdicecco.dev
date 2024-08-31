import Footer from "../assets/components/Footer";
import Nav from "../assets/components/Nav";
import ThemeSwitcher from "../assets/components/ThemeSwitcher";
import ColorBox from "../assets/components/subcomponents/ColorBox";
import RevealOnScroll from "../assets/components/subcomponents/RevealOnScroll";
import RoundImage from "../assets/components/subcomponents/RoundImage";
import RectangularImage from "../assets/components/subcomponents/RectangularImage";
import Header from "../assets/components/subcomponents/Header";
import SkillsPanel from "../assets/components/SkillsPanel";
import SocialMediaButton from "../assets/components/subcomponents/SocialMediaButton";
import ImageWithDescription from "../assets/components/subcomponents/ImageWithDescription";
import Video from "../assets/components/subcomponents/Video";
import { useEffect } from "react";

function ArtPortfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav items={["About", "Skills", "Gallery", "Demo", "Links"]} />
      <RevealOnScroll>
        <div className="flex justify-center items-center mt-32">
          <div className="responsive-grid lg:w-2/3  place-items-center">
            <div className=" md:justify-start justify-center">
              <RoundImage
                src="/pages/art_portfolio/logo.png"
                size="small"
                bonus_classes="scale-[200%] hover:scale-[210%]"
              />
            </div>
            <p className="m-5 lg:mt-5 mt-20 small-text-bg w-fit p-5 ">
              This was the first full-stack website I made. I used React,
              Tailwind and Typescript for the frontend, since that's what I'm
              used to, and Django for the backend, as I wanted something that
              was easy enough to start with while also giving me a sense of
              control. I made this because my sister needed an art portfolio and
              I wanted to make a fullstack website. Our interests aligned, and
              this was the product!
            </p>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="About">About</Header>
        <div className="flex justify-center items-center mt-10">
          <div className="responsive-grid lg:space-x-10 space-y-10 lg:w-2/3 place-items-center">
            <RectangularImage
              src="/webs/art_portfolio.png"
              size="large"
              bonus_classes="rotate-[-3deg]"
            />
            <ColorBox
              color="pink"
              title="What does it do?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
              languages={[
                "react.svg",
                "typescript.png",
                "SQL.png",
                "django.png",
                "aws.png",
              ]}
            >
              This art portfolio is mainly a way to display art, including
              setting a theme for every page and the ability to show multiple
              images per post, but most of the effort went behind the scenes.
              You can add posts, categories, delete/edit them too. And manage
              your personal information too. The information is stored on a
              PostgreSQL database and the images are stored on an AWS S3 bucket.
              I also made the database self-managing for storage efficiency. It
              will clear any unused images and compress them before uploading.
            </ColorBox>
            <ColorBox
              color="purple"
              title="My Accomplishments"
              subtitle="What am I proud of?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
            >
              This is my first stab at a fullstack app, and I think I did well.
              My sister enjoys the website (which is the most important part),
              but I was also able to overcome a lot of the challenges that
              Django put in my way, on top of finding ways to avoid overloading
              on storage, such as storing the images in a large-space container
              and compressing them on upload. I was also able to seemlessly use
              the REST API, which I made using Django, to outsource to my React
              app. For a first project, I think I did a very solid job.
            </ColorBox>
            <ColorBox
              color="grey"
              title="Steps Forward?"
              subtitle="Where do I improve off of this?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
            >
              This is an ongoing project, which I want to add more features
              (advanced editing, more features, etc.). But I also want to find
              ways to speed up the website, as initial loading times could be
              better, and maybe even reduce server costs.
            </ColorBox>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <Header id="Gallery">Gallery</Header>
        <div className="flex justify-center items-center mt-20">
          <div className="responsive-grid lg:w-2/3  place-items-center">
            <ImageWithDescription
              src="/pages/art_portfolio/1.png"
              image_size="large"
              bonus_classes="rotate-[-3deg]"
            >
              The top of a post-specific page. Other than the basics you can
              customize the background of it and if part of a category, will
              display posts belonging to that category on the bottom (not in
              frame). If there are multiple photos associated with the post,
              they will be displayed in a gallery below.
            </ImageWithDescription>
            <ImageWithDescription
              src="/pages/art_portfolio/2.png"
              image_size="large"
              bonus_classes="rotate-[3deg]"
            >
              A categpry view. Displays all posts in category.
            </ImageWithDescription>
            <ImageWithDescription
              src="/pages/art_portfolio/3.png"
              image_size="large"
              bonus_classes="rotate-[-3deg]"
            >
              Ganeral artist information and home-screen theme in admin portal.
            </ImageWithDescription>
            <ImageWithDescription
              src="/pages/art_portfolio/4.png"
              image_size="large"
              bonus_classes="rotate-[3deg]"
            >
              The create-post page in the admin portal.
            </ImageWithDescription>

            <ImageWithDescription
              src="/pages/art_portfolio/5.png"
              image_size="large"
              bonus_classes="rotate-[-3deg]"
            >
              The create-category page in the admin portal.
            </ImageWithDescription>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <Header id="Demo">Demo</Header>
        <div className="flex justify-center items-center mt-12">
          <Video src="/pages/art_portfolio/video.mp4" />
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <SkillsPanel
          skills={[
            "React",
            "Tailwind",
            "Typescript",
            "Creativity",
            "Visual Effects",
            "Django",
            "Python",
            "Amazon AWS",
            "S3 Bucket",
            "Database Hosting",
            "Fly.io",
          ]}
        />
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="Links">Links</Header>
        <div className="flex justify-center items-center ">
          <div className="responsive-grid lg:w-2/3  place-items-center">
            <SocialMediaButton
              title="Source Code"
              url="https://github.com/diceccoj/art-portfolio"
              image="github.png"
            />
            <SocialMediaButton
              title="View Page"
              url="https://sam-art.app"
              image="website.png"
            />
          </div>
        </div>
      </RevealOnScroll>

      <ThemeSwitcher />
      <Footer />
    </>
  );
}

export default ArtPortfolio;
