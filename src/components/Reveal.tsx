import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "fade" | "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "none";
    className?: string;
    distance?: number;
}

export const Reveal = ({
    children,
    width = "fit-content",
    delay = 0.2,
    duration = 0.8,
    direction = "fade-up",
    className = "",
    distance = 50
}: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    // Define variants based on direction
    const getVariants = () => {
        const baseVariants: any = {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        };

        switch (direction) {
            case "up":
            case "fade-up":
                baseVariants.hidden = { ...baseVariants.hidden, y: distance, opacity: direction === "fade-up" ? 0 : 0.3 };
                baseVariants.visible = { ...baseVariants.visible, y: 0 };
                break;
            case "down":
            case "fade-down":
                baseVariants.hidden = { ...baseVariants.hidden, y: -distance, opacity: direction === "fade-down" ? 0 : 0.3 };
                baseVariants.visible = { ...baseVariants.visible, y: 0 };
                break;
            case "left":
                baseVariants.hidden = { ...baseVariants.hidden, x: distance, opacity: 0.3 };
                baseVariants.visible = { ...baseVariants.visible, x: 0 };
                break;
            case "right":
                baseVariants.hidden = { ...baseVariants.hidden, x: -distance, opacity: 0.3 };
                baseVariants.visible = { ...baseVariants.visible, x: 0 };
                break;
            case "fade-left":
                baseVariants.hidden = { ...baseVariants.hidden, x: distance, opacity: 0 };
                baseVariants.visible = { ...baseVariants.visible, x: 0 };
                break;
            case "fade-right":
                baseVariants.hidden = { ...baseVariants.hidden, x: -distance, opacity: 0 };
                baseVariants.visible = { ...baseVariants.visible, x: 0 };
                break;
            case "fade":
                baseVariants.hidden = { opacity: 0 };
                baseVariants.visible = { opacity: 1 };
                break;
            case "scale":
                baseVariants.hidden = { opacity: 0, scale: 0.8 };
                baseVariants.visible = { opacity: 1, scale: 1 };
                break;
            case "none":
                baseVariants.hidden = { opacity: 0 };
                baseVariants.visible = { opacity: 1 };
                break;
            default:
                baseVariants.hidden = { ...baseVariants.hidden, y: distance, opacity: 0 };
                baseVariants.visible = { ...baseVariants.visible, y: 0 };
        }

        return baseVariants;
    };

    const variants = getVariants();

    return (
        <div ref={ref} className={className} style={{ position: "relative", width, overflow: "hidden", height: width === "100%" ? "100%" : "auto" }}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={mainControls}
                transition={{ 
                    duration: duration, 
                    delay: delay, 
                    ease: [0.22, 1, 0.36, 1] // Custom "luxury" ease - smooth and elegant
                }}
                style={{ height: width === "100%" ? "100%" : "auto" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
