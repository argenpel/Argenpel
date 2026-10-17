"use client";

import { useEffect, useRef, useState } from "react";

import { companyName } from "@/data/company";
import { cn } from "@/lib/utils";

type CompanyVideoProps = {
  className?: string;
};

function playVideo(video: HTMLVideoElement) {
  // Keep the poster visible if browser policy blocks autoplay; a click can retry.
  void video.play().catch(() => undefined);
}

export function CompanyVideo({ className }: CompanyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPlayback = useRef<"playing" | "paused" | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;

    const syncPlayback = () => {
      if (
        !visible ||
        document.hidden ||
        (reducedMotion.matches && userPlayback.current !== "playing") ||
        userPlayback.current === "paused"
      ) {
        video.pause();
        return;
      }

      playVideo(video);
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    });

    observer.observe(video);
    document.addEventListener("visibilitychange", syncPlayback);
    reducedMotion.addEventListener("change", syncPlayback);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncPlayback);
      reducedMotion.removeEventListener("change", syncPlayback);
      video.pause();
    };
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    userPlayback.current = video.paused ? "playing" : "paused";

    if (video.paused) {
      playVideo(video);
    } else {
      video.pause();
    }
  };

  return (
    <button
      aria-label={
        playing
          ? `Pausar video institucional de ${companyName}`
          : `Reproducir video institucional de ${companyName}`
      }
      className={cn(
        "block cursor-pointer overflow-hidden bg-ink p-0 select-none [-webkit-tap-highlight-color:transparent] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand focus-visible:outline-solid",
        className,
      )}
      onClick={togglePlayback}
      type="button"
    >
      <video
        aria-hidden="true"
        className="block size-full object-cover"
        disablePictureInPicture
        disableRemotePlayback
        height={960}
        loop
        muted
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
        playsInline
        poster="/images/company/empresa-argenpel-poster.jpg"
        preload="none"
        ref={videoRef}
        src="/videos/empresa-argenpel.mp4"
        width={720}
      />
    </button>
  );
}
