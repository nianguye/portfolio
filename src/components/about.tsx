import { FaReact } from "react-icons/fa";
import { RiSvelteFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa6";

import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto py-24 md:py-32 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">About</h2>
      </div>
      <div className="w-full mx-auto space-y-6 ">
        <div className="text-xl text-center text-muted-foreground max-w-[700px] mx-auto space-y-6">
          <p className="text-muted-foreground">
            I&apos;m a full stack engineer with a strong interest in back-end
            development. Through personal projects, I&apos;ve had the opportunity to
            collaborate with teammates, building scalable applications and
            strengthening my skills across both front-end and back-end
            technologies.
          </p>
          <p className="text-muted-foreground">
            My approach to web development focuses on creating responsive,
            accessible, and user-friendly interfaces that provide an exceptional
            user experience. I&apos;m constantly learning and exploring new
            technologies to stay at the forefront of web development, always
            aiming to build reliable, efficient, and impactful systems.
          </p>

          <p className="text-muted-foreground">
            In my free time, I enjoy hitting the gym for a good workout,
            embarking on spontaneous hiking trips to explore nature, and
            collecting Pokémon cards. Im also passionate about continuously
            learning new technologies and expanding my skill set.
          </p>
        </div>
        <div className="space-y-2 pt-2">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Technologies
            </h2>
            
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-6 pt-2">
            <Card className="flex flex-col h-32 w-32 border">
              <CardContent className="flex-1 flex flex-col items-center justify-center">
                <FaReact
                  style={{ color: "#61DAFB" }}
                  className="h-16 w-16 text-primary"
                />
                <p className="text-sm mt-1">React</p>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-32 w-32 border">
              <CardContent className="flex-1 flex flex-col items-center justify-center">
                <RiSvelteFill
                  style={{ color: "#FF3E00" }}
                  className="h-16 w-16"
                />
                <p className="text-sm mt-1">Svelte</p>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-32 w-32 border">
              <CardContent className="flex-1 flex flex-col items-center justify-center">
                <SiTypescript
                  className="h-16 w-16"
                  style={{ color: "#3178c6" }}
                />
                <p className="text-sm mt-1">TypeScript</p>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-32 w-32 border">
              <CardContent className="flex-1 flex flex-col items-center justify-center">
                <SiTailwindcss
                  className="h-16 w-16"
                  style={{ color: "#38B2AC" }}
                />
                <p className="text-sm mt-1 whitespace-nowrap">Tailwind CSS</p>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-32 w-32 border">
              <CardContent className="flex-1 flex flex-col items-center justify-center">
                <SiNextdotjs
                  className="h-16 w-16"
                  style={{ color: "#000000" }}
                />
                <p className="text-sm mt-1">Next.js</p>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-32 w-32 border">
              <CardContent className="flex-1 flex flex-col items-center justify-center">
                <SiPostgresql
                  className="h-16 w-16"
                  style={{ color: "#336791" }}
                />
                <p className="text-sm mt-1">PostgreSQL</p>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-32 w-32 border">
              <CardContent className="flex-1 flex flex-col items-center justify-center">
                <DiMongodb className="h-16 w-16" style={{ color: "#47A248" }} />
                <p className="text-sm mt-1">MongoDB</p>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-32 w-32 border">
              <CardContent className="flex-1 flex flex-col items-center justify-center">
                <SiExpress className="h-16 w-16" style={{ color: "#404D59" }} />
                <p className="text-sm mt-1">Express</p>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-32 w-32 border">
              <CardContent className="flex-1 flex flex-col items-center justify-center">
                <FaPython className="h-16 w-16" style={{ color: "#3776AB" }} />
                <p className="text-sm mt-1">Python</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
